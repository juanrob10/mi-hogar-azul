/**
 * Testimonials Carousel Logic
 * Handles auto-scrolling and drag-to-scroll functionality for the testimonials section.
 */

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.testimonials-container');
    if (!container) return;

    let isDown = false;
    let startX;
    let scrollLeft;
    let autoScrollInterval;
    const autoScrollDelay = 3000; // 3 seconds
    let isInteracting = false;

    // --- Drag to Scroll Logic ---

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active'); // Optional: for cursor styling
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        stopAutoScroll(); // Stop auto-scroll while dragging
        isInteracting = true;
    });

    container.addEventListener('mouseenter', () => {
        stopAutoScroll();
        isInteracting = true;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
        isInteracting = false;
        startAutoScroll(); // Resume auto-scroll
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
        isInteracting = false;
        startAutoScroll(); // Resume auto-scroll
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        container.scrollLeft = scrollLeft - walk;
    });

    // --- Touch Support for pausing ---
    container.addEventListener('touchstart', () => {
        isInteracting = true;
        stopAutoScroll();
    }, { passive: true });

    container.addEventListener('touchend', () => {
        isInteracting = false;
        startAutoScroll();
    }, { passive: true });


    // --- Auto Scroll Logic ---

    function startAutoScroll() {
        stopAutoScroll(); // Clear existing to prevent duplicates
        autoScrollInterval = setInterval(() => {
            if (isInteracting) return;

            const cardWidth = container.querySelector('.testimonial-card').offsetWidth;
            const gap = 32; // 2rem gap approx
            const scrollAmount = cardWidth + gap;

            // Check if we are near the end
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                // Smoothly scroll back to start
                container.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                // Scroll to next
                container.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }

        }, autoScrollDelay);
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Initialize
    startAutoScroll();
});
