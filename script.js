/* ============================================
   HUON VALLEY TREE CARE — Scripts
   ============================================ */

/* ---------- WebP detection for CSS backgrounds ---------- */
(function() {
  var img = new Image();
  img.onload = function() { document.documentElement.classList.add('webp'); };
  img.onerror = function() { document.documentElement.classList.add('no-webp'); };
  img.src = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiTjpp7A=';
})();

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Dynamic year in footer ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header scroll shadow ---------- */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu toggle ---------- */
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileNav.classList.toggle('open');
  });

  // Close mobile nav when a link is tapped
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      mobileNav.classList.remove('open');
    });
  });

  /* ---------- Smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ---------- Gallery lightbox ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const items = document.querySelectorAll('.gallery-item[data-lightbox]');
  let currentIndex = 0;

  const getLightboxSrc = (item) => {
    // Use WebP href, fall back to data-fallback JPEG if WebP fails to load
    return item.href;
  };

  const getFallbackSrc = (item) => {
    return item.dataset.fallback || item.href;
  };

  const setLightboxImg = (item) => {
    const alt = item.querySelector('img').alt;
    lightboxImg.alt = alt;
    lightboxImg.onerror = function() {
      // If WebP fails, try the JPEG fallback
      var fallback = getFallbackSrc(item);
      if (lightboxImg.src !== fallback) {
        lightboxImg.src = fallback;
      }
      lightboxImg.onerror = null;
    };
    lightboxImg.src = getLightboxSrc(item);
  };

  const openLightbox = (i) => {
    currentIndex = i;
    setLightboxImg(items[i]);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  };

  const showPrev = () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    setLightboxImg(items[currentIndex]);
  };

  const showNext = () => {
    currentIndex = (currentIndex + 1) % items.length;
    setLightboxImg(items[currentIndex]);
  };

  items.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(i);
    });
  });

  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.querySelector('.lightbox-prev').addEventListener('click', showPrev);
  lightbox.querySelector('.lightbox-next').addEventListener('click', showNext);

  // Close on background click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  /* ---------- Contact form (fetch submission) ---------- */
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const btnText = btn.textContent;

      btn.disabled = true;
      btn.textContent = 'Sending...';
      status.textContent = '';
      status.className = 'form-status';

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(Object.fromEntries(new FormData(form)))
        });
        const data = await res.json();

        if (data.success) {
          status.textContent = 'Thanks! Your enquiry has been sent. We\'ll be in touch soon.';
          status.classList.add('success');
          form.reset();
        } else {
          throw new Error(data.message || 'Something went wrong.');
        }
      } catch (err) {
        status.textContent = 'Sorry, something went wrong. Please call us on 0417 745 525.';
        status.classList.add('error');
      } finally {
        btn.disabled = false;
        btn.textContent = btnText;
      }
    });
  }

  /* ---------- Lazy reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.section');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
  });

  // CSS class for revealed state
  const style = document.createElement('style');
  style.textContent = '.revealed { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);

});
