/**
 * Muhammad Bilal Farid - Portfolio Website
 * Main Interactive Logic & UI Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypingEffect();
  initNavbar();
  initProjects();
  initSkillsObserver();
  initTimeline();
  initContactForm();
  initStatsCounter();
  initBackToTop();
});

/* ==========================================================================
   1. THEME TOGGLE (DARK / LIGHT)
   ========================================================================== */
function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
      updateThemeIcons(newTheme);
      showToast(`Switched to ${newTheme} mode`, 'info', 2000);
    });
  });
}

function updateThemeIcons(theme) {
  const themeIcons = document.querySelectorAll('.theme-toggle-btn i');
  themeIcons.forEach(icon => {
    if (theme === 'light') {
      icon.className = 'fas fa-moon';
      icon.setAttribute('title', 'Switch to Dark Mode');
    } else {
      icon.className = 'fas fa-sun';
      icon.setAttribute('title', 'Switch to Light Mode');
    }
  });
}

/* ==========================================================================
   2. DYNAMIC TYPING EFFECT
   ========================================================================== */
function initTypingEffect() {
  const typedTarget = document.getElementById('typed-text');
  if (!typedTarget) return;

  const titles = [
    'Full-Stack & ML Engineer',
    'FastAPI & Python Architect',
    'React & Modern Frontend Developer',
    'Web Scraping & Automation Engineer',
    'AI Systems & Geospatial ML Specialist'
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 75;
  const deletingSpeed = 40;
  const pauseEnd = 1800;
  const pauseStart = 400;

  function type() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      typedTarget.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTarget.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentTitle.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      delay = pauseStart;
    }

    setTimeout(type, delay);
  }

  type();
}

/* ==========================================================================
   3. NAVBAR & SCROLL SPY
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll blur & height adjustment
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll spy
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
      navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}` || href === `./#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // Mobile menu toggle
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
}

/* ==========================================================================
   4. INTERACTIVE PROJECTS GALLERY & MODAL
   ========================================================================== */
function initProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!projectsGrid || typeof PORTFOLIO_PROJECTS === 'undefined') return;

  function renderProjects(filter = 'all') {
    projectsGrid.innerHTML = '';

    const filtered = filter === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter(p => p.category === filter);

    filtered.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('data-category', project.category);

      const tagsHtml = project.tags.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('');
      const statKey = Object.keys(project.stats)[0];
      const statVal = project.stats[statKey];

      card.innerHTML = `
        <div class="project-header-banner" style="background: ${project.gradient}">
          <div class="project-icon-badge">
            <i class="fas ${project.icon}"></i>
          </div>
          <span class="project-category-chip">${project.badge}</span>
        </div>
        <div class="project-body">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-stats-strip">
            <span><strong>${statKey.toUpperCase()}:</strong> ${statVal}</span>
            <span><i class="fas fa-check-circle" style="color: var(--accent-emerald);"></i> Verified</span>
          </div>
          <div class="project-tags">
            ${tagsHtml}
            ${project.tags.length > 4 ? `<span class="tech-tag">+${project.tags.length - 4} more</span>` : ''}
          </div>
          <div class="project-footer-actions">
            <button class="project-btn-primary inspect-btn" data-id="${project.id}">
              <i class="fas fa-layer-group"></i> Architecture
            </button>
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-btn-secondary" title="View Source on GitHub">
              <i class="fab fa-github"></i> Code
            </a>
          </div>
        </div>
      `;

      projectsGrid.appendChild(card);
    });

    // Attach inspect modal events
    document.querySelectorAll('.inspect-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openProjectModal(id);
      });
    });
  }

  // Filter button handlers
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      renderProjects(filterValue);
    });
  });

  // Initial render
  renderProjects('all');
  initProjectModal();
}

function initProjectModal() {
  const modalOverlay = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalOverlay) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

function openProjectModal(projectId) {
  const modalOverlay = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  if (!modalOverlay || typeof PORTFOLIO_PROJECTS === 'undefined') return;

  const project = PORTFOLIO_PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  modalTitle.textContent = project.title;

  const statsList = Object.entries(project.stats).map(([k, v]) => `
    <div style="padding: 10px 14px; background: var(--bg-tertiary); border-radius: var(--radius-sm); border: var(--glass-border);">
      <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); display: block;">${k}</span>
      <strong style="font-size: 0.95rem; color: var(--text-primary); font-family: var(--font-mono);">${v}</strong>
    </div>
  `).join('');

  const allTags = project.tags.map(t => `<span class="tech-tag" style="font-size: 0.82rem; padding: 5px 12px;">${t}</span>`).join('');

  modalBody.innerHTML = `
    <div style="margin-bottom: 20px;">
      <span class="section-tag" style="margin-bottom: 12px;">${project.categoryLabel}</span>
      <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.7; margin-top: 10px;">
        ${project.longDescription}
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-bottom: 24px;">
      ${statsList}
    </div>

    <div style="margin-bottom: 26px;">
      <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 12px;">Technologies & Tools:</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${allTags}
      </div>
    </div>

    <div style="display: flex; gap: 14px; flex-wrap: wrap;">
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 10px 20px; font-size: 0.9rem;">
        <i class="fab fa-github"></i> View GitHub Repository
      </a>
      <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding: 10px 20px; font-size: 0.9rem;">
        <i class="fas fa-external-link-alt"></i> Architecture Docs
      </a>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   5. SKILLS MATRIX PROGRESS BAR ANIMATION
   ========================================================================== */
function initSkillsObserver() {
  const skillsSection = document.getElementById('skills');
  const progressBars = document.querySelectorAll('.progress-bar-fill');

  if (!skillsSection || progressBars.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressBars.forEach(bar => {
          const targetWidth = bar.getAttribute('data-width') || '0%';
          bar.style.width = targetWidth;
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(skillsSection);
}

/* ==========================================================================
   6. TIMELINE TABS SWITCHER
   ========================================================================== */
function initTimeline() {
  const tabBtns = document.querySelectorAll('.timeline-tab-btn');
  const timelineWrappers = document.querySelectorAll('.timeline-content-group');

  if (tabBtns.length === 0 || timelineWrappers.length === 0) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetGroup = btn.getAttribute('data-target');
      timelineWrappers.forEach(group => {
        if (group.getAttribute('id') === targetGroup) {
          group.style.display = 'block';
        } else {
          group.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   7. CONTACT FORM VALIDATION & STORAGE
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const submitBtn = document.getElementById('contact-submit-btn');

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function showError(input, errorElementId, message) {
    input.classList.add('error');
    const errEl = document.getElementById(errorElementId);
    if (errEl) {
      errEl.textContent = message;
      errEl.classList.add('visible');
    }
  }

  function clearError(input, errorElementId) {
    input.classList.remove('error');
    const errEl = document.getElementById(errorElementId);
    if (errEl) {
      errEl.textContent = '';
      errEl.classList.remove('visible');
    }
  }

  // Real-time input cleaning
  [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        input.classList.remove('error');
        const errEl = input.parentElement.querySelector('.error-message');
        if (errEl) errEl.classList.remove('visible');
      });
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      showError(nameInput, 'name-error', 'Please enter your name');
      isValid = false;
    } else {
      clearError(nameInput, 'name-error');
    }

    // Validate Email
    if (!emailInput.value.trim()) {
      showError(emailInput, 'email-error', 'Please enter your email address');
      isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      showError(emailInput, 'email-error', 'Please enter a valid email address');
      isValid = false;
    } else {
      clearError(emailInput, 'email-error');
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      showError(subjectInput, 'subject-error', 'Please enter a subject or project type');
      isValid = false;
    } else {
      clearError(subjectInput, 'subject-error');
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showError(messageInput, 'message-error', 'Please write a message of at least 10 characters');
      isValid = false;
    } else {
      clearError(messageInput, 'message-error');
    }

    if (!isValid) {
      showToast('Please correct the highlighted errors in the form', 'error', 3500);
      return;
    }

    // Form Submission Simulation
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending message...';

    const messageData = {
      id: Date.now(),
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      subject: subjectInput.value.trim(),
      message: messageInput.value.trim(),
      timestamp: new Date().toISOString()
    };

    setTimeout(() => {
      // Store in localStorage for audit / preview
      try {
        const stored = JSON.parse(localStorage.getItem('portfolio-messages') || '[]');
        stored.push(messageData);
        localStorage.setItem('portfolio-messages', JSON.stringify(stored));
      } catch (err) {
        console.warn('Storage error', err);
      }

      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';

      showToast(`Thank you, ${messageData.name}! Your message has been sent successfully.`, 'success', 4500);
    }, 900);
  });
}

/* ==========================================================================
   8. STATS COUNTER ANIMATION
   ========================================================================== */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length === 0) return;

  let started = false;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      statNumbers.forEach(num => {
        const target = parseInt(num.getAttribute('data-target'), 10) || 0;
        const suffix = num.getAttribute('data-suffix') || '';
        let count = 0;
        const speed = target > 50 ? 25 : 60;

        const updateCount = () => {
          const step = Math.ceil(target / 30);
          count += step;
          if (count >= target) {
            num.textContent = `${target}${suffix}`;
          } else {
            num.textContent = `${count}${suffix}`;
            setTimeout(updateCount, speed);
          }
        };
        updateCount();
      });
    }
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.stats-bar-section');
  if (statsSection) observer.observe(statsSection);
}

/* ==========================================================================
   9. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   10. TOAST NOTIFICATION UTILITY
   ========================================================================== */
function showToast(message, type = 'info', duration = 3500) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let iconClass = 'fa-info-circle';
  if (type === 'success') iconClass = 'fa-check-circle';
  if (type === 'error') iconClass = 'fa-exclamation-circle';

  toast.innerHTML = `
    <i class="fas ${iconClass}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
