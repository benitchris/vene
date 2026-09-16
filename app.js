/* VENE Sauna & Massage - Interactive JavaScript */

// Global State
let currentPricingMode = 'workplace'; // 'workplace' or 'home'
let currentCategoryFilter = 'all';
let searchQuery = '';

// Full Massage Services Dataset (Original Data from menu flyers)
const massageServices = [
  {
    id: 1,
    name: "Back Massage",
    category: "quick",
    workplacePrice: 10000,
    homePrice: 20000,
    workplaceTime: "30 min",
    homeTime: "30 min",
    desc: "Targeted relief for shoulder stiffness, upper & lower back tension."
  },
  {
    id: 2,
    name: "Head and Scalp",
    category: "quick",
    workplacePrice: 10000,
    homePrice: 20000,
    workplaceTime: "30 min",
    homeTime: "30 min",
    desc: "Calming scalp stimulation to relieve headaches and mental fatigue."
  },
  {
    id: 3,
    name: "Foot Massage",
    category: "quick",
    workplacePrice: 10000,
    homePrice: 20000,
    workplaceTime: "30 min",
    homeTime: "30 min",
    desc: "Soothing foot rub to revive tired feet and boost circulation."
  },
  {
    id: 4,
    name: "Relaxer Massage",
    category: "relax",
    workplacePrice: 15000,
    homePrice: 25000,
    workplaceTime: "1 hr",
    homeTime: "1 hr",
    desc: "Gentle rhythmic strokes designed to induce deep mental & physical peace."
  },
  {
    id: 5,
    name: "Swedish Massage",
    category: "relax",
    workplacePrice: 15000,
    homePrice: 25000,
    workplaceTime: "1 hr",
    homeTime: "1 hr",
    desc: "Classic therapy using long gliding strokes to enhance relaxation."
  },
  {
    id: 6,
    name: "Body Scrub Massage",
    category: "combo",
    workplacePrice: 15000,
    homePrice: 25000,
    workplaceTime: "1 hr",
    homeTime: "1 hr",
    desc: "Exfoliating botanical scrub followed by a hydrating massage."
  },
  {
    id: 7,
    name: "Reflexology Massage",
    category: "therapeutic",
    workplacePrice: 25000,
    homePrice: 45000,
    workplaceTime: "1 hr",
    homeTime: "1 hr",
    desc: "Pressure point therapy targeting reflex zones connected to body organs."
  },
  {
    id: 8,
    name: "Deep Tissue Massage",
    category: "therapeutic",
    workplacePrice: 20000,
    homePrice: 40000,
    workplaceTime: "1 hr",
    homeTime: "1 hr",
    desc: "Intense deep muscle pressure targeting chronic knots and tightness."
  },
  {
    id: 9,
    name: "Lomi Lomi Massage",
    category: "relax",
    workplacePrice: 20000,
    homePrice: 40000,
    workplaceTime: "1 hr",
    homeTime: "1 hr",
    desc: "Traditional Hawaiian continuous fore-arm massage for deep healing."
  },
  {
    id: 10,
    name: "Swedish & Scrub Massage",
    category: "combo",
    workplacePrice: 25000,
    homePrice: 45000,
    workplaceTime: "1 hr",
    homeTime: "1 hr",
    desc: "Ultimate pampering combo of full body Swedish massage & radiant scrub."
  },
  {
    id: 11,
    name: "Medical Massage",
    category: "therapeutic",
    workplacePrice: 25000,
    homePrice: 45000,
    workplaceTime: "1 hr",
    homeTime: "1 hr",
    desc: "Specialized clinical massage techniques targeting specific pain zones."
  },
  {
    id: 12,
    name: "Sport Massage",
    category: "therapeutic",
    workplacePrice: 30000,
    homePrice: 50000,
    workplaceTime: "1 hr",
    homeTime: "1 hr",
    desc: "Rehabilitation and muscle recovery massage tailored for active lifestyle."
  },
  {
    id: 13,
    name: "Four Hands Massage",
    category: "combo",
    workplacePrice: 30000,
    homePrice: 50000,
    workplaceTime: "1 hr",
    homeTime: "1 hr",
    desc: "Luxurious synchronized therapy performed simultaneously by two therapists."
  }
];

// Mobile Menu Logic
function toggleMobileMenu() {
  const navLinks = document.getElementById('nav-links');
  const menuIcon = document.getElementById('mobile-menu-icon');
  if (!navLinks) return;

  const isOpen = navLinks.classList.toggle('mobile-open');
  if (menuIcon) {
    menuIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  }
}

function closeMobileMenu() {
  const navLinks = document.getElementById('nav-links');
  const menuIcon = document.getElementById('mobile-menu-icon');
  if (navLinks && navLinks.classList.contains('mobile-open')) {
    navLinks.classList.remove('mobile-open');
    if (menuIcon) menuIcon.className = 'fa-solid fa-bars';
  }
}

// Mobile Bottom Nav active state
function setBottomNav(activeId) {
  closeMobileMenu();
  document.querySelectorAll('.bottom-nav-item').forEach(el => el.classList.remove('active'));
  const el = document.getElementById(activeId);
  if (el) el.classList.add('active');
}

// Close mobile menu when tapping outside
document.addEventListener('click', (e) => {
  const navLinks = document.getElementById('nav-links');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  if (navLinks && navLinks.classList.contains('mobile-open')) {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMobileMenu();
    }
  }
});

// Initialize application on load
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  updateModalServices();
});

// Location Switcher Logic
function setPricingMode(mode) {
  currentPricingMode = mode;
  
  const btnWorkplace = document.getElementById('btn-workplace');
  const btnHome = document.getElementById('btn-home');
  const locationText = document.getElementById('current-location-text');

  if (mode === 'workplace') {
    btnWorkplace.classList.add('active');
    btnHome.classList.remove('active');
    locationText.innerText = "At Spa Workplace (Silverback Mall)";
  } else {
    btnHome.classList.add('active');
    btnWorkplace.classList.remove('active');
    locationText.innerText = "Home / Outcall Visit (We Come To You)";
  }

  renderServices();
  
  // Sync modal option
  const modalType = document.getElementById('booking-type');
  if (modalType) modalType.value = mode;
}

// Render Services Grid
function renderServices() {
  const container = document.getElementById('services-container');
  if (!container) return;

  container.innerHTML = '';

  const filtered = massageServices.filter(service => {
    const matchesCategory = currentCategoryFilter === 'all' || service.category === currentCategoryFilter;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--color-text-muted);">
        <i class="fa-solid fa-circle-exclamation" style="font-size:2rem; margin-bottom:1rem; color:var(--color-gold-base);"></i>
        <p>No massage services found matching your search.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(service => {
    const activePrice = currentPricingMode === 'workplace' ? service.workplacePrice : service.homePrice;
    const activeTime = currentPricingMode === 'workplace' ? service.workplaceTime : service.homeTime;
    
    const altPrice = currentPricingMode === 'workplace' ? service.homePrice : service.workplacePrice;
    const altLabel = currentPricingMode === 'workplace' ? "Home Visit Price" : "At Workplace Price";

    const card = document.createElement('div');
    card.className = 'service-card glass-panel';
    card.innerHTML = `
      <div>
        <div class="service-header">
          <span class="service-number">${service.id}</span>
          <span class="service-time"><i class="fa-regular fa-clock"></i> ${activeTime}</span>
        </div>
        <h3 class="service-name font-serif">${service.name}</h3>
        <p style="font-size:0.88rem; color:var(--color-text-muted);">${service.desc}</p>
        
        <div class="price-comparison-box">
          <div class="price-item-column">
            <span class="price-label-text">${currentPricingMode === 'workplace' ? 'Spa Center Price' : 'Home Visit Price'}</span>
            <span class="price-value-text">${activePrice.toLocaleString()} Frw</span>
          </div>
          <div class="price-item-column" style="text-align:right;">
            <span class="price-label-text">${altLabel}</span>
            <span style="font-size:0.95rem; color:var(--color-text-muted); font-weight:600;">${altPrice.toLocaleString()} Frw</span>
          </div>
        </div>
      </div>
      
      <button onclick="openBookingModal('${service.name}')" class="btn-gold" style="width:100%; justify-content:center; margin-top:0.8rem;">
        <i class="fa-brands fa-whatsapp"></i> Book Service
      </button>
    `;
    container.appendChild(card);
  });
}

// Category Filter
function filterCategory(category, element) {
  currentCategoryFilter = category;
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (element) element.classList.add('active');
  renderServices();
}

// Search Filter
function searchServices() {
  const input = document.getElementById('service-search');
  if (input) {
    searchQuery = input.value;
    renderServices();
  }
}

// Modal Handlers
function openBookingModal(preselectedService = '') {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;
  
  modal.classList.add('active');
  updateModalServices();

  if (preselectedService) {
    const serviceSelect = document.getElementById('booking-service');
    if (serviceSelect) {
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].text.includes(preselectedService)) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }
  }

  // Set default time to today + 2 hours
  const timeInput = document.getElementById('booking-time');
  if (timeInput && !timeInput.value) {
    const now = new Date();
    now.setHours(now.getHours() + 2);
    timeInput.value = now.toISOString().slice(0, 16);
  }
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) modal.classList.remove('active');
}

function updateModalServices() {
  const select = document.getElementById('booking-service');
  const typeSelect = document.getElementById('booking-type');
  if (!select || !typeSelect) return;

  const mode = typeSelect.value;
  select.innerHTML = '';

  // Add Sauna & Aerobic packages
  const pkgGroup = document.createElement('optgroup');
  pkgGroup.label = "Sauna & Aerobic Packages";
  pkgGroup.innerHTML = `
    <option value="Sauna Only (5,000 Frw)">Sauna Only - 5,000 Frw</option>
    <option value="Aerobic Only (3,000 Frw)">Aerobic Only - 3,000 Frw</option>
    <option value="Sauna and Aerobic (6,000 Frw)">Sauna + Aerobic Combo - 6,000 Frw</option>
    <option value="1 Month Abonnement (40,000 Frw)">1 Month Abonnement Pass - 40,000 Frw</option>
  `;
  select.appendChild(pkgGroup);

  // Add Massage Services
  const msgGroup = document.createElement('optgroup');
  msgGroup.label = `Massage Services (${mode === 'workplace' ? 'Workplace' : 'Home Visit'})`;
  
  massageServices.forEach(s => {
    const price = mode === 'workplace' ? s.workplacePrice : s.homePrice;
    const time = mode === 'workplace' ? s.workplaceTime : s.homeTime;
    const opt = document.createElement('option');
    opt.value = `${s.name} (${price.toLocaleString()} Frw, ${time})`;
    opt.textContent = `${s.name} - ${price.toLocaleString()} Frw (${time})`;
    msgGroup.appendChild(opt);
  });
  select.appendChild(msgGroup);
}

// Submit Booking via WhatsApp Link
function handleBookingSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('booking-name').value;
  const type = document.getElementById('booking-type').value === 'workplace' ? 'At Spa Workplace (Silverback Mall)' : 'Home / Hotel Mobile Visit';
  const service = document.getElementById('booking-service').value;
  const rawTime = document.getElementById('booking-time').value;

  const dateObj = new Date(rawTime);
  const formattedTime = dateObj.toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });

  const message = `Hello VENE Sauna & Massage! 🌿\n\nI would like to book an appointment:\n👤 *Name:* ${name}\n📍 *Location:* ${type}\n💆‍♂️ *Service:* ${service}\n📅 *Requested Date & Time:* ${formattedTime}\n\nPlease confirm availability. Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/250788625531?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
  closeBookingModal();
}
