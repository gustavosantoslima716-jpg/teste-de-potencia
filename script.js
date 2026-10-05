document.addEventListener('DOMContentLoaded', () => {
  // Menu Mobile Toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('open');
    });
  });

  // Header Scroll Effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    } else {
      header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
    }
  });

  // Volunteer Form Submission Handler
  const form = document.getElementById('voluntarioForm');
  const successMsg = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulação de envio com sucesso
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.textContent = 'Cadastrando...';
      submitBtn.disabled = true;

      setTimeout(() => {
        form.reset();
        submitBtn.style.display = 'none';
        successMsg.style.display = 'block';
      }, 1000);
    });
  }

  // Active Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const currentLink = document.querySelector(`.nav-menu a[href*="#${sectionId}"]`);
      
      if (currentLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(l => l.classList.remove('active'));
        currentLink.classList.add('active');
      }
    });
  });
});