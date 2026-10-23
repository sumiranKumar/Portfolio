/**
 * Interactive Developer Terminal Simulator
 * Custom CLI for Sumiran Kumar - Full Stack Developer
 */

(function initTerminalModule() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  const terminalBody = document.getElementById('terminal-body');
  const quickCmdBtns = document.querySelectorAll('.quick-cmd-btn');

  if (!terminalInput || !terminalOutput) return;

  // Command History tracking
  const commandHistory = [];
  let historyIndex = -1;

  // Welcome Greeting
  const welcomeMessage = `
    <div class="term-line term-dim">┌────────────────────────────────────────────────────────────┐</div>
    <div class="term-line term-dim">│  <span class="term-accent">Sumiran Kumar</span> — Full Stack Developer Shell v2.4 (x86_64)   │</div>
    <div class="term-line term-dim">│  Specializing in React, Tailwind CSS, JavaScript &amp; Node.js  │</div>
    <div class="term-line term-dim">└────────────────────────────────────────────────────────────┘</div>
    <div class="term-line" style="margin-top: 6px;">
      Type <span class="term-cmd-echo">help</span> to view available commands, or click the shortcuts above.
    </div>
  `;

  terminalOutput.innerHTML = welcomeMessage;

  // Focus input when clicking anywhere inside the terminal body
  if (terminalBody) {
    terminalBody.addEventListener('click', () => {
      terminalInput.focus();
    });
  }

  // Available Commands Dictionary
  const commands = {
    help: () => `
      <div class="term-line"><span class="term-accent">AVAILABLE SYSTEM COMMANDS:</span></div>
      <div class="term-line">  <span class="term-cmd-echo">bio</span>          - About Sumiran Kumar, background &amp; philosophy</div>
      <div class="term-line">  <span class="term-cmd-echo">skills</span>       - List full stack languages, frameworks &amp; tools</div>
      <div class="term-line">  <span class="term-cmd-echo">projects</span>     - Overview of key full stack applications</div>
      <div class="term-line">  <span class="term-cmd-echo">cat resume.txt</span> - Display technical summary &amp; experience</div>
      <div class="term-line">  <span class="term-cmd-echo">contact</span>      - Email and developer social links</div>
      <div class="term-line">  <span class="term-cmd-echo">theme</span>        - Inspect the custom mocha &amp; lavender palette</div>
      <div class="term-line">  <span class="term-cmd-echo">date</span>         - Display current system date &amp; time</div>
      <div class="term-line">  <span class="term-cmd-echo">clear</span>        - Clear terminal console screen</div>
    `,

    bio: () => `
      <div class="term-line"><span class="term-accent">NAME:</span> Sumiran Kumar</div>
      <div class="term-line"><span class="term-accent">TITLE:</span> Full Stack Developer &amp; Software Engineer</div>
      <div class="term-line"><span class="term-accent">FOCUS:</span> Bridging elegant frontend interfaces (React, Tailwind CSS) with robust backend services (Node.js, Express, REST APIs).</div>
      <div class="term-line"><span class="term-accent">PHILOSOPHY:</span> "Write clean, readable, modular code that solves real problems with uncompromising aesthetic standards."</div>
    `,

    skills: () => `
      <div class="term-line"><span class="term-accent">TECHNICAL CAPABILITIES:</span></div>
      <div class="term-line">  <span class="term-highlight">Frontend:</span> HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Responsive Design, CSS Animations</div>
      <div class="term-line">  <span class="term-highlight">Backend &amp; APIs:</span> Node.js, Express.js, RESTful Architecture, JSON Data Modeling</div>
      <div class="term-line">  <span class="term-highlight">Tooling &amp; Workflow:</span> Git, GitHub, VS Code, npm, Chrome DevTools, Vite, Vercel</div>
    `,

    // projects: () => `
    //   <div class="term-line"><span class="term-accent">FEATURED PROJECTS:</span></div>
    //   <div class="term-line">  1. <span class="term-cmd-echo">ApexMart</span>      - Full Stack E-Commerce (React, Tailwind CSS, Node.js, REST API)</div>
    //   <div class="term-line">  2. <span class="term-cmd-echo">DevPulse</span>      - Agile Task &amp; Sprint Kanban Hub (React, Context API, Tailwind)</div>
    //   <div class="term-line">  3. <span class="term-cmd-echo">AuraSync</span>      - Real-Time Weather &amp; Climate Dashboard (React, OpenWeather API)</div>
    //   <div class="term-line">  4. <span class="term-cmd-echo">API Sentinel</span>  - Microservices Health &amp; Telemetry Monitor (Node.js, Express)</div>
    //   <div class="term-line">  5. <span class="term-cmd-echo">CodeStream</span>    - Real-Time Collaborative Code Sandbox (React, WebSockets)</div>
    //   <div class="term-line" style="margin-top: 4px;">* Tip: Scroll to the <a href="#projects" style="color:var(--accent-lavender);text-decoration:underline;">Projects Section</a> for interactive 3D tilt cards &amp; live demos.</div>
    // `,

    contact: () => `
      <div class="term-line"><span class="term-accent">CONNECT WITH SUMIRAN:</span></div>
      <div class="term-line">  <span class="term-highlight">Email:</span>    <a href="mailto:krsumiran287@gmail.com" style="color:var(--accent-lavender)">krsumiran287@gmail.com</a></div>
      <div class="term-line">  <span class="term-highlight">GitHub:</span>   <a href="https://github.com" target="_blank" style="color:var(--accent-lavender)">https://github.com</a></div>
      <div class="term-line">  <span class="term-highlight">LinkedIn:</span> <a href="https://linkedin.com" target="_blank" style="color:var(--accent-lavender)">https://linkedin.com</a></div>
      <div class="term-line">  <span class="term-highlight">Status:</span>   Open for Full Stack Developer roles &amp; collaborations.</div>
    `,

    'cat resume.txt': () => `
      <div class="term-line"><span class="term-accent">================ RESUME OVERVIEW ================</span></div>
      <div class="term-line"><strong>CANDIDATE:</strong> Sumiran Kumar</div>
      <div class="term-line"><strong>ROLE:</strong> Full Stack Developer / Software Engineer</div>
      <div class="term-line">--------------------------------------------------</div>
      <div class="term-line"><strong>CORE COMPETENCIES:</strong></div>
      <div class="term-line">• Single Page Applications with React &amp; State Management</div>
      <div class="term-line">• Utility-first responsive web design with Tailwind CSS</div>
      <div class="term-line">• Node.js RESTful API architecture and data serialization</div>
      <div class="term-line">• Cross-browser consistency, performance tuning, and DOM optimization</div>
      <div class="term-line">--------------------------------------------------</div>
      <div class="term-line"><strong>STATUS:</strong> Actively seeking new engineering opportunities</div>
      <div class="term-line"><span class="term-accent">==================================================</span></div>
    `,

    theme: () => `
      <div class="term-line"><span class="term-accent">PALETTE CONFIGURATION:</span></div>
      <div class="term-line">  • Background: <span style="color:#6f4e37; background:#e5e4e2; padding:0 4px; font-weight:bold;">#6f4e37</span> (Rich Mocha Brown)</div>
      <div class="term-line">  • Text:       <span style="color:#e5e4e2; background:#333; padding:0 4px; font-weight:bold;">#e5e4e2</span> (Platinum Pearl White)</div>
      <div class="term-line">  • Accents:    <span style="color:#e6e0f0; background:#333; padding:0 4px; font-weight:bold;">#e6e0f0</span> (Soft Wisteria Lavender)</div>
      <div class="term-line">  • Styling:    Custom CSS3 Glassmorphism with hardware-accelerated transforms.</div>
    `,

    date: () => `
      <div class="term-line"><span class="term-highlight">${new Date().toString()}</span></div>
    `,

    sudo: () => `
      <div class="term-line term-error">Permission denied: You do not have superuser privileges on Sumiran's workstation! 🙂</div>
    `,

    clear: () => {
      terminalOutput.innerHTML = '';
      return null;
    }
  };

  // Alias commands
  commands['about'] = commands['bio'];
  commands['cls'] = commands['clear'];
  commands['resume'] = commands['cat resume.txt'];

  // Execute Command Logic
  function executeCommand(inputStr) {
    const raw = inputStr.trim();
    if (!raw) return;

    // Record history
    commandHistory.push(raw);
    historyIndex = commandHistory.length;

    // Output echo line
    const echoLine = document.createElement('div');
    echoLine.className = 'term-line';
    echoLine.innerHTML = `
      <span class="terminal-prompt-user">sumiran@fullstack</span><span class="terminal-prompt-sep">:</span><span class="terminal-prompt-path">~</span><span class="terminal-prompt-symbol">$</span> <span class="term-cmd-echo">${escapeHtml(raw)}</span>
    `;
    terminalOutput.appendChild(echoLine);

    // Look up command
    const cmdKey = raw.toLowerCase();
    let responseHtml;

    if (commands[cmdKey]) {
      responseHtml = commands[cmdKey]();
    } else {
      responseHtml = `
        <div class="term-line term-error">
          bash: command not found: <span class="term-highlight">${escapeHtml(raw)}</span>. Type <span class="term-cmd-echo">help</span> to list commands.
        </div>
      `;
    }

    if (responseHtml !== null && responseHtml !== undefined) {
      const responseContainer = document.createElement('div');
      responseContainer.innerHTML = responseHtml;
      terminalOutput.appendChild(responseContainer);
    }

    // Auto-scroll to bottom of terminal
    if (terminalBody) {
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  }

  function escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }

  // Handle Input Keydown
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const value = terminalInput.value;
      terminalInput.value = '';
      executeCommand(value);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = '';
      }
    }
  });

  // Quick Action Buttons
  quickCmdBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cmd = e.currentTarget.getAttribute('data-cmd');
      if (cmd) {
        executeCommand(cmd);
        terminalInput.focus();
      }
    });
  });
})();
