// =====================================================
// FINTRIXX â€“ JavaScript Interactions
// =====================================================

// ---- Navbar scroll effect ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ---- Mobile hamburger ----
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  const isOpen = navLinks.classList.contains('open');
  spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
  spans[1].style.opacity   = isOpen ? '0' : '1';
  spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
});

// Close nav when clicking a link on mobile
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => {
      s.style.transform = ''; s.style.opacity = '';
    });
  });
});

// ---- Approach Tabs ----
function switchTab(tab) {
  // Reset both tabs
  document.getElementById('apMission').classList.remove('ap-tab-active');
  document.getElementById('apVision').classList.remove('ap-tab-active');
  document.getElementById('missionDesc').style.display = 'none';
  document.getElementById('visionDesc').style.display   = 'none';
  // Activate chosen tab
  if (tab === 'mission') {
    document.getElementById('apMission').classList.add('ap-tab-active');
    document.getElementById('missionDesc').style.display = 'block';
  } else {
    document.getElementById('apVision').classList.add('ap-tab-active');
    document.getElementById('visionDesc').style.display  = 'block';
  }
}

// ---- Calendar ----
const monthNames = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];

const today = new Date();
let current = { year: today.getFullYear(), month: today.getMonth() };
let selectedDate = null;

function renderCalendar() {
  const { year, month } = current;
  document.getElementById('calMonth').textContent = `${monthNames[month]} ${year}`;

  const datesEl = document.getElementById('calDates');
  datesEl.innerHTML = '';

  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
  // Monday-first grid: Sun â†’ offset 6, Mon â†’ 0
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;

  const totalDays = new Date(year, month + 1, 0).getDate();
  const todayStr  = today.toDateString();

  // Empty slots before first day
  for (let i = 0; i < startOffset; i++) {
    const empty = document.createElement('div');
    empty.className = 'cal-date empty';
    datesEl.appendChild(empty);
  }

  // Days
  for (let d = 1; d <= totalDays; d++) {
    const cell     = document.createElement('div');
    const cellDate = new Date(year, month, d);
    const dayOfWeek = cellDate.getDay(); // 0=Sun, 6=Sat
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isPast    = cellDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const isToday   = cellDate.toDateString() === todayStr;
    const isSelected = selectedDate && selectedDate.toDateString() === cellDate.toDateString();

    cell.className = 'cal-date';
    cell.textContent = d;

    if (isPast) {
      cell.classList.add('past');
    } else if (isWeekend) {
      cell.classList.add('weekend');
    } else {
      cell.classList.add('available');
      if (isToday)    cell.classList.add('today');
      if (isSelected) cell.classList.add('selected');
      cell.addEventListener('click', () => {
        selectedDate = cellDate;
        renderCalendar();
      });
    }

    datesEl.appendChild(cell);
  }
}

document.getElementById('calPrev').addEventListener('click', () => {
  current.month--;
  if (current.month < 0) { current.month = 11; current.year--; }
  renderCalendar();
});

document.getElementById('calNext').addEventListener('click', () => {
  current.month++;
  if (current.month > 11) { current.month = 0; current.year++; }
  renderCalendar();
});

renderCalendar();

// ---- Scroll reveal animation ----
const revealEls = document.querySelectorAll(
  '.reality-card, .help-card, .feature-card, .scale-list li, .stat-item'
);
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});
