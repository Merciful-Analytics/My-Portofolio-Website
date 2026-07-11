document.addEventListener('DOMContentLoaded', () => {

  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav a');

  function toggleMenu() {
    mobileNav.classList.toggle('open');
  }

  if (navToggle) {
    navToggle.addEventListener('click', toggleMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  // Contact Form Submission (Mailto fallback)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('senderName').value;
      const email = document.getElementById('senderEmail').value;
      const message = document.getElementById('senderMessage').value;
      
      const subject = encodeURIComponent(`Inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      
      window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
      
      const btn = contactForm.querySelector('.btn-primary');
      const originalText = btn.textContent;
      btn.textContent = 'Message Sent!';
      
      setTimeout(() => {
        btn.textContent = originalText;
        contactForm.reset();
      }, 3000);
    });
  }

});
