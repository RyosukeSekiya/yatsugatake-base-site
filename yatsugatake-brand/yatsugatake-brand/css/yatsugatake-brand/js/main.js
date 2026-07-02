/**
 * YATSUGATAKE BASE — main.js
 * 最小限のJavaScriptのみ使用
 */

(function () {
  'use strict';

  /* ============================================================
     1. ヘッダー: スクロールで背景を表示
  ============================================================ */
  var header = document.querySelector('.site-header');

  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ============================================================
     2. モバイルメニュー開閉
  ============================================================ */
  var menuToggle = document.querySelector('.menu-toggle');
  var mobileMenu = document.querySelector('.mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      var isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'メニューを開く');
        mobileMenu.setAttribute('aria-hidden', 'true');
      } else {
        menuToggle.setAttribute('aria-expanded', 'true');
        menuToggle.setAttribute('aria-label', 'メニューを閉じる');
        mobileMenu.setAttribute('aria-hidden', 'false');
      }
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'メニューを開く');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });
  }

  /* ============================================================
     3. FAQアコーディオン
  ============================================================ */
  var faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var isExpanded = button.getAttribute('aria-expanded') === 'true';
      var answerId  = button.getAttribute('aria-controls');
      var answer    = document.getElementById(answerId);

      if (!answer) return;

      if (isExpanded) {
        button.setAttribute('aria-expanded', 'false');
        answer.hidden = true;
      } else {
        faqButtons.forEach(function (btn) {
          if (btn !== button) {
            btn.setAttribute('aria-expanded', 'false');
            var otherId = btn.getAttribute('aria-controls');
            var other   = document.getElementById(otherId);
            if (other) other.hidden = true;
          }
        });
        button.setAttribute('aria-expanded', 'true');
        answer.hidden = false;
      }
    });
  });

  /* ============================================================
     4. スクロールリビール (Intersection Observer)
  ============================================================ */
  var revealElements = document.querySelectorAll('.reveal');
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    revealElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ============================================================
     5. スムーズスクロール
  ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      var headerHeight = 64;
      var targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });

}());