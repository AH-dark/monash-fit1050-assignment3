// assets/js/mfss.js
// MFSS-specific interactions: event filter, newsletter form, back-to-top.
// Vanilla JS only. No external dependencies.

(function () {
  'use strict';

  // T12: Event filter — show/hide event cards by category
  function initEventFilter() {
    var buttons = document.querySelectorAll('.mfss-filter-btn');
    var cards = document.querySelectorAll('.mfss-event');
    if (!buttons.length || !cards.length) return;

    buttons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.classList.contains('is-active') ? 'true' : 'false');

      btn.addEventListener('click', function () {
        var filter = btn.getAttribute('data-filter');

        buttons.forEach(function (b) {
          b.classList.remove('is-active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');

        cards.forEach(function (card) {
          var category = card.getAttribute('data-category');
          card.hidden = !(filter === 'all' || category === filter);
        });
      });
    });
  }

  // T13: Newsletter form — prevent default, validate, show confirmation
  function initNewsletterForm() {
    var form = document.getElementById('mfss-newsletter-form');
    var confirmation = document.getElementById('mfss-newsletter-confirmation');
    if (!form || !confirmation) return;

    form.addEventListener('submit', function (event) {
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
    var btn = document.getElementById('mfss-back-to-top');
    if (!btn) return;

    var threshold = 400;
    var ticking = false;

    function onScroll() {
      btn.hidden = window.pageYOffset <= threshold;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    onScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initEventFilter();
      initNewsletterForm();
      initBackToTop();
    });
  } else {
    initEventFilter();
    initNewsletterForm();
    initBackToTop();
  }

}());
