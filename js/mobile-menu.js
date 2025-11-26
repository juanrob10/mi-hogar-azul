// Mobile Navigation Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuSheet = document.getElementById('mobile-menu-sheet');
const closeSheetBtn = document.querySelector('.close-sheet-btn');
const sheetOverlay = document.querySelector('.sheet-overlay');
const sheetLinks = document.querySelectorAll('.sheet-link');
const tabItems = document.querySelectorAll('.tab-item');

function toggleBottomSheet() {
    if (mobileMenuSheet) mobileMenuSheet.classList.toggle('active');
}

function closeBottomSheet() {
    if (mobileMenuSheet) mobileMenuSheet.classList.remove('active');
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleBottomSheet();
    });
}

if (closeSheetBtn) {
    closeSheetBtn.addEventListener('click', closeBottomSheet);
}

if (sheetOverlay) {
    sheetOverlay.addEventListener('click', closeBottomSheet);
}

// App Mode Logic
function switchToSection(targetId) {
    // Only apply in App Mode (mobile)
    if (window.innerWidth > 1150) return;

    // Hide all sections
    const allSections = document.querySelectorAll('section, header#banner');
    allSections.forEach(el => {
        el.classList.remove('section-active');
    });

    // Show target section
    const target = document.querySelector(targetId);
    if (target) {
        target.classList.add('section-active');
        window.scrollTo(0, 0);
    }

    // Update Tab Bar Active State
    tabItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === targetId) {
            item.classList.add('active');
        }
    });

    // Update Sheet Links Active State
    sheetLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

// Intercept Tab Bar Clicks
tabItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if (window.innerWidth <= 1150) {
            const targetId = item.getAttribute('href');
            // Ignore if no href (like the Menu button)
            if (!targetId) return;

            e.preventDefault();
            switchToSection(targetId);
        }
    });
});

// Intercept Sheet Link Clicks
sheetLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 1150) {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            switchToSection(targetId);
            closeBottomSheet();
        }
    });
});

// Initialize App Mode
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 1150) {
        const hash = window.location.hash || '#banner';
        switchToSection(hash);
    }
});

// Update Active Tab based on Scroll (Desktop Only)
window.addEventListener('scroll', () => {
    if (window.innerWidth <= 1150) return; // Disable scroll spy on mobile

    let current = '';
    const sections = document.querySelectorAll('section, header');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    tabItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });

    sheetLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
