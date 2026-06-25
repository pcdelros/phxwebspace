const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

const form = document.querySelector('[data-contact-form]');
const status = document.querySelector('[data-form-status]');
const destinationEmail = 'replace-with-your-email@example.com';

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

if (form && status) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const projectType = String(data.get('projectType') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !email || !projectType || !message) {
      status.textContent = 'Please complete every field before preparing the email.';
      return;
    }

    if (!isEmail(email)) {
      status.textContent = 'Please enter a valid email address.';
      return;
    }

    if (destinationEmail.includes('replace-with-your-email')) {
      status.textContent = 'Before launch, replace the placeholder email address in script.js.';
      return;
    }

    const subject = encodeURIComponent(`Website project request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\nProject details:\n${message}`
    );

    window.location.href = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;
    status.textContent = 'Opening your email app with the project details filled in.';
  });
}
