/**
 * Muhammad Bilal Farid - Master Portfolio UI Engine
 * 1:1 Authentic Implementation of Ashutosh Hathidara's masterPortfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initProjects();
  initContactForm();
});

/* ==========================================================================
   1. THEME TOGGLE (LIGHT / DARK) - MasterPortfolio Theme Switcher
   ========================================================================== */
function initTheme() {
  const themeSwitchBtn = document.getElementById('theme-switch-btn');
  const savedTheme = localStorage.getItem('masterportfolio-theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeSwitchBtn) {
    themeSwitchBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('masterportfolio-theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme} mode`, 'info');
    });
  }
}

function updateThemeIcon(theme) {
  const themeIcon = document.querySelector('#theme-switch-btn i');
  if (themeIcon) {
    if (theme === 'light') {
      themeIcon.className = 'fas fa-moon';
      themeIcon.setAttribute('title', 'Switch to Dark Mode');
    } else {
      themeIcon.className = 'fas fa-sun';
      themeIcon.setAttribute('title', 'Switch to Light Mode');
    }
  }
}

/* ==========================================================================
   2. NAVIGATION & MOBILE DRAWER
   ========================================================================== */
function initNavigation() {
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const navItems = document.querySelectorAll('.nav-item, .mobile-nav-item');
  const sections = document.querySelectorAll('section[id]');

  // Scroll spy
  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          item.classList.add('active');
        }
      });
    }
  });

  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   3. OPEN SOURCE PROJECTS (MasterPortfolio GitHub Repo Cards)
   ========================================================================== */
function initProjects() {
  const container = document.getElementById('projects-container');
  const filterBtns = document.querySelectorAll('.project-filter-btn');

  if (!container || typeof PORTFOLIO_PROJECTS === 'undefined') return;

  const LANG_COLORS = {
    'Python': '#3572A5',
    'JavaScript': '#F1E05A',
    'TypeScript': '#3178C6',
    'HTML': '#E34C26',
    'CSS': '#563D7C',
    'Dart': '#00B4AB',
    'Java': '#B07219'
  };

  function renderProjects(filter = 'all') {
    container.innerHTML = '';

    const filtered = filter === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter(p => p.category === filter);

    filtered.forEach(project => {
      const card = document.createElement('div');
      card.className = 'repo-card';
      card.setAttribute('data-category', project.category);

      const mainLang = project.tags.includes('Python') ? 'Python'
                     : project.tags.includes('JavaScript') ? 'JavaScript'
                     : project.tags.includes('Flutter') ? 'Dart'
                     : project.tags.includes('Java') ? 'Java' : 'Python';

      const langColor = LANG_COLORS[mainLang] || '#3572A5';

      card.innerHTML = `
        <div class="repo-header">
          <i class="far fa-folder"></i>
          <h3 class="repo-name">${project.title}</h3>
        </div>
        <p class="repo-description">${project.description}</p>
        <div class="repo-details">
          <div class="repo-lang">
            <span class="lang-circle" style="background-color: ${langColor};"></span>
            <span>${mainLang}</span>
          </div>
          <div class="repo-actions">
            <button class="repo-link inspect-btn" data-id="${project.id}" style="cursor: pointer; background: none; border: none;">
              <i class="fas fa-layer-group"></i> Architecture
            </button>
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="repo-link" title="GitHub Code">
              <i class="fab fa-github"></i> Code
            </a>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    // Attach inspect modal events
    document.querySelectorAll('.inspect-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openProjectModal(id);
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      renderProjects(filterValue);
    });
  });

  renderProjects('all');
  initModalListeners();
}

function initModalListeners() {
  const modalBackdrop = document.getElementById('architecture-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalBackdrop) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

function openProjectModal(projectId) {
  const modalBackdrop = document.getElementById('architecture-modal');
  const modalTarget = document.getElementById('modal-content-target');

  if (!modalBackdrop || !modalTarget || typeof PORTFOLIO_PROJECTS === 'undefined') return;

  const project = PORTFOLIO_PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  const statsList = Object.entries(project.stats).map(([k, v]) => `
    <div style="padding: 10px 14px; background: var(--badge-bg); border-radius: 6px;">
      <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--body-subtext); display: block;">${k}</span>
      <strong style="font-size: 0.95rem; color: var(--body-text); font-family: var(--font-mono);">${v}</strong>
    </div>
  `).join('');

  const allTags = project.tags.map(t => `<span style="font-family: var(--font-mono); font-size: 0.8rem; padding: 4px 10px; border-radius: 9999px; background: var(--badge-bg); color: var(--body-text);">${t}</span>`).join('');

  modalTarget.innerHTML = `
    <div style="margin-bottom: 20px;">
      <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-blue); font-weight: 700;">${project.categoryLabel}</span>
      <h2 style="font-size: 1.6rem; font-weight: 800; color: var(--body-text); margin: 6px 0 12px;">${project.title}</h2>
      <p style="font-family: var(--font-body); font-size: 1rem; color: var(--body-subtext); line-height: 1.7; margin-bottom: 20px;">
        ${project.longDescription}
      </p>
    </div>

    <div style="margin-bottom: 20px;">
      <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--body-subtext); margin-bottom: 10px;">
        Specifications & Performance
      </h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 10px;">
        ${statsList}
      </div>
    </div>

    <div style="margin-bottom: 24px;">
      <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--body-subtext); margin-bottom: 10px;">
        Tech Stack
      </h4>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${allTags}
      </div>
    </div>

    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="main-button" style="flex: 1; text-align: center; justify-content: center;">
        <i class="fab fa-github"></i> GitHub Repository
      </a>
      <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-button" style="flex: 1; text-align: center; justify-content: center;">
        <i class="fas fa-book-open"></i> Documentation
      </a>
    </div>
  `;

  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   4. CONTACT FORM VALIDATION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    let isValid = true;

    if (!nameInput.value.trim()) {
      showError('name-error', 'Please enter your name');
      isValid = false;
    } else {
      clearError('name-error');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showError('email-error', 'Please enter a valid email address');
      isValid = false;
    } else {
      clearError('email-error');
    }

    if (!subjectInput.value.trim()) {
      showError('subject-error', 'Please enter a subject');
      isValid = false;
    } else {
      clearError('subject-error');
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showError('message-error', 'Please enter at least 10 characters');
      isValid = false;
    } else {
      clearError('message-error');
    }

    if (isValid) {
      const submitBtn = document.getElementById('btn-submit-contact');
      const originalText = submitBtn.innerText;
      submitBtn.disabled = true;
      submitBtn.innerText = 'Sending...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerText = originalText;
        form.reset();
        showToast('Message sent successfully! I will reach back to you shortly.', 'success');
      }, 700);
    }
  });

  function showError(id, msg) {
    const el = document.getElementById(id);
    if (el) { el.textContent = msg; el.style.display = 'block'; }
  }

  function clearError(id) {
    const el = document.getElementById(id);
    if (el) { el.textContent = ''; el.style.display = 'none'; }
  }
}

/* ==========================================================================
   5. TOAST NOTIFICATIONS
   ========================================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';

  const icon = type === 'success' ? 'fa-check-circle text-emerald' : 'fa-info-circle text-cyan';

  toast.innerHTML = `
    <i class="fas ${icon}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentElement) {
      toast.remove();
    }
  }, 3500);
}
