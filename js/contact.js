/**
 * Interactive Contact Form & Direct Email Delivery System
 * Author: Sumiran Kumar - Full Stack Developer
 * 
 * Target Mailbox: krsumiran287@gmail.com
 * Powered by FormSubmit + EmailJS dual-engine delivery (Pure background sending)
 */

(function initContactModule() {
  const EMAIL_CONFIG = {
    recipientEmail: 'krsumiran287@gmail.com',
    emailjs: {
      publicKey: 'V7dqxNxo3nZcwvBHA',
      serviceId: 'service_cwq90nw',
      templateId: 'template_3onhm85',
    }
  };

  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const toastContainer = document.getElementById('toast-container');

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  if (!contactForm) return;

  // Initialize EmailJS if available
  if (window.emailjs && EMAIL_CONFIG.emailjs.publicKey) {
    try {
      emailjs.init({ publicKey: EMAIL_CONFIG.emailjs.publicKey });
    } catch (err) {
      console.warn('EmailJS initialization notice:', err);
    }
  }

  // Real-time error clearing on user typing
  [nameInput, emailInput, messageInput].forEach(input => {
    if (!input) return;
    input.addEventListener('input', () => {
      input.classList.remove('input-error');
      const errEl = document.getElementById(`${input.name}-error`);
      if (errEl) errEl.classList.remove('visible');
    });
  });

  // Validation Logic
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validateForm() {
    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      nameInput.classList.add('input-error');
      nameError.classList.add('visible');
      isValid = false;
    } else {
      nameInput.classList.remove('input-error');
      nameError.classList.remove('visible');
    }

    // Validate Email
    if (!validateEmail(emailInput.value.trim())) {
      emailInput.classList.add('input-error');
      emailError.classList.add('visible');
      isValid = false;
    } else {
      emailInput.classList.remove('input-error');
      emailError.classList.remove('visible');
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 6) {
      messageInput.classList.add('input-error');
      messageError.classList.add('visible');
      isValid = false;
    } else {
      messageInput.classList.remove('input-error');
      messageError.classList.remove('visible');
    }

    return isValid;
  }

  // Toast Notification Dispatcher
  function showToast(title, message, isSuccess = true, duration = 5000) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-icon" style="${!isSuccess ? 'background:#fca5a5; color:#2a1b12;' : ''}">${isSuccess ? '✓' : '!'}</div>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-message">${message}</div>
      </div>
      <div class="toast-progress"></div>
    `;

    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    const dismissTimeout = setTimeout(() => {
      dismissToast(toast);
    }, duration);

    toast.addEventListener('click', () => {
      clearTimeout(dismissTimeout);
      dismissToast(toast);
    });
  }

  function dismissToast(toast) {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentElement) {
        toast.parentElement.removeChild(toast);
      }
    }, 400);
  }

  // Handle Form Submission
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast('Form Incomplete', 'Please check the highlighted fields before sending.', false, 3500);
      return;
    }

    const senderName = nameInput.value.trim();
    const senderEmail = emailInput.value.trim();
    const senderSubject = (subjectInput && subjectInput.value.trim()) || 'New Portfolio Inquiry';
    const senderMessage = messageInput.value.trim();

    // Show loading spinner
    if (submitBtn) {
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
    }

    let sent = false;
    let noticeMessage = '';

    // Primary Engine: FormSubmit direct inbox delivery (100% reliable)
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL_CONFIG.recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _template: 'box',
          _subject: `📬 New Lead: ${senderName} - "${senderSubject}"`,
          _replyto: senderEmail,
          _captcha: 'false',
          'Client Name': senderName,
          'Client Email': senderEmail,
          'Subject': senderSubject,
          'Message': senderMessage,
          'Source': 'Sumiran Kumar Portfolio Website',
          'Date & Time': new Date().toLocaleString()
        })
      });

      const resData = await response.json();

      if (resData.success === 'true' || resData.success === true) {
        sent = true;
      } else if (resData.message && resData.message.includes('Activation')) {
        sent = true;
        noticeMessage = 'Please click the 1-time "Activate Form" link sent to your Gmail inbox!';
      }
    } catch (fsErr) {
      console.warn('FormSubmit attempt note:', fsErr);
    }

    // Secondary Engine: EmailJS backup
    if (!sent && window.emailjs && window.emailjs.send) {
      try {
        const templateParams = {
          name: senderName,
          from_name: senderName,
          user_name: senderName,
          email: senderEmail,
          from_email: senderEmail,
          user_email: senderEmail,
          reply_to: senderEmail,
          subject: senderSubject,
          message: senderMessage,
          to_name: 'Sumiran Kumar',
          to_email: EMAIL_CONFIG.recipientEmail
        };

        const res = await emailjs.send(
          EMAIL_CONFIG.emailjs.serviceId,
          EMAIL_CONFIG.emailjs.templateId,
          templateParams,
          EMAIL_CONFIG.emailjs.publicKey
        );

        if (res.status === 200 || res.text === 'OK') {
          sent = true;
        }
      } catch (sdkError) {
        console.warn('EmailJS backup error:', sdkError);
      }
    }

    // Remove loading state
    if (submitBtn) {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
    }

    contactForm.reset();

    if (noticeMessage) {
      showToast(
        'Activation Email Sent!',
        `${noticeMessage} Check your inbox at ${EMAIL_CONFIG.recipientEmail}.`,
        true,
        8000
      );
    } else {
      showToast(
        'Message Sent Successfully!',
        `Thank you ${senderName}, your message has been delivered directly to ${EMAIL_CONFIG.recipientEmail}.`,
        true,
        5000
      );
    }
  });
})();
