/* ============================================================
   TONY C'S HAIR STYLING — site.js
   Minimal client-side logic. No frameworks, no jQuery.
   - Form submit opens user's email client with pre-filled booking request
   - Sets the current year in the footer
   ============================================================ */

(function () {
  'use strict';

  // ---- 1) Current year in footer  ----
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---- 2) Booking form: open user's email client with pre-filled request  ----
  // No live booking system yet — this gives a real reply path without
  // pretending to be something it isn't.
  const form = document.getElementById('bookForm');
  if (form) {
    // Set min date on the date input to today so people can't book in the past
    const dateInput = form.querySelector('#bf-date');
    if (dateInput) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      dateInput.min = yyyy + '-' + mm + '-' + dd;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const mobile = (data.get('mobile') || '').toString().trim();
      const time = (data.get('time') || '').toString().trim();
      const date = (data.get('date') || '').toString().trim();
      const barber = (data.get('barber') || 'Either').toString().trim();
      const people = (data.get('people') || '1').toString().trim();
      const comment = (data.get('comment') || '').toString().trim();

      if (!name || !mobile || !time || !date) {
        // Native browser validation handles most of this; this is a safety net.
        form.reportValidity();
        return;
      }

      // Format the date and time for readability
      let prettyDate = date;
      try {
        const d = new Date(date + 'T00:00:00');
        if (!isNaN(d.getTime())) {
          prettyDate = d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        }
      } catch (err) { /* keep raw date */ }

      // Format the time as 12-hour
      let prettyTime = time;
      try {
        const [hh, mm] = time.split(':');
        const h = parseInt(hh, 10);
        const ampm = h >= 12 ? 'PM' : 'AM';
        const h12 = h === 0 ? 12 : (h > 12 ? h - 12 : h);
        prettyTime = h12 + ':' + mm + ' ' + ampm;
      } catch (err) { /* keep raw time */ }

      const subject = 'Booking request: ' + name;
      const body = [
        'Hi Tony C\'s Hair Styling,',
        '',
        'I would like to book a seat.',
        '',
        'Name: ' + name,
        'Mobile: ' + mobile,
        'Date: ' + prettyDate,
        'Time: ' + prettyTime,
        'Barber: ' + barber,
        'Number of people: ' + people,
        'Comment: ' + (comment || '(none)'),
        '',
        'Thanks!',
        name
      ].join('\n');

      // Open the user's email client
      const mailto = 'mailto:amouri.chahin@gmail.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body);

      // Show a brief confirmation in the form
      const note = form.querySelector('.book-note');
      const original = note ? note.textContent : '';
      if (note) {
        note.innerHTML = '<strong>Opening your email app&hellip;</strong> If nothing happens, please call <a href="tel:+13135653633" style="color:var(--c-rust); font-weight:600;">(313) 565-3633</a> to book.';
        note.style.color = 'var(--c-ink)';
      }

      // Use window.location.href to open the mailto
      window.location.href = mailto;

      // Reset the note after a few seconds
      setTimeout(function () {
        if (note) {
          note.textContent = original;
          note.style.color = '';
        }
      }, 6000);
    });
  }

  // ---- 3) Top nav: highlight current section on click (single page nav)  ----
  // The topnav is a row of anchor links. Mark the active one based on
  // hash as the user clicks — no scrollspy needed for a single page.
  const navLinks = document.querySelectorAll('.topnav a[href^="#"]');
  if (navLinks.length) {
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.forEach(function (l) { l.removeAttribute('aria-current'); });
        link.setAttribute('aria-current', 'page');
      });
    });
    // If page loaded with a hash, mark that one active
    if (location.hash) {
      const initial = document.querySelector('.topnav a[href="' + location.hash + '"]');
      if (initial) initial.setAttribute('aria-current', 'page');
    }
  }
})();
