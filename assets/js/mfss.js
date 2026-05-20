// assets/js/mfss.js
// MFSS-specific interactions: event filter, newsletter form, back-to-top.
// Vanilla JS only. No external dependencies.

(() => {
  // T12: Event filter — show/hide event cards by category
  function initEventFilter() {
    const buttons = document.querySelectorAll('.mfss-filter-btn');
    const cards = document.querySelectorAll('.mfss-event');
    if (!buttons.length || !cards.length) return;

    buttons.forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.classList.contains('is-active') ? 'true' : 'false');

      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        buttons.forEach((b) => {
          b.classList.remove('is-active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');

        cards.forEach((card) => {
          const category = card.getAttribute('data-category');
          card.hidden = !(filter === 'all' || category === filter);
        });
      });
    });
  }

  // T13: Newsletter form — prevent default, validate, show confirmation
  function initNewsletterForm() {
    const form = document.getElementById('mfss-newsletter-form');
    const confirmation = document.getElementById('mfss-newsletter-confirmation');
    if (!form || !confirmation) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      confirmation.hidden = false;
      form.reset();

      confirmation.setAttribute('tabindex', '-1');
      confirmation.focus();
    });
  }

  // T14: Back-to-top — appear after 400px scroll, smooth scroll to top
  function initBackToTop() {
    const btn = document.getElementById('mfss-back-to-top');
    if (!btn) return;

    const threshold = 400;
    let ticking = false;

    function onScroll() {
      btn.hidden = window.pageYOffset <= threshold;
    }

    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            onScroll();
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    onScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initEventFilter();
      initNewsletterForm();
      initBackToTop();
    });
  } else {
    initEventFilter();
    initNewsletterForm();
    initBackToTop();
  }
})();
