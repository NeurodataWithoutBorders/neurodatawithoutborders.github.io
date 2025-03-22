/**
 * NWB Design System JavaScript
 * Provides interactive functionality for modern components
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Sticky header functionality
  initStickyHeader();
  
  // Mobile navigation toggle
  initMobileNavToggle();

  // Initialize any tooltips
  initTooltips();
});

/**
 * Initializes the sticky header behavior
 * Adds .scrolled class to header when page is scrolled
 */
function initStickyHeader() {
  const header = document.querySelector('.header-nav');
  if (!header) return;
  
  const scrollThreshold = 50; // Pixels to scroll before adding scrolled class
  
  // Check scroll position on page load
  checkScrollPosition();
  
  // Add scroll event listener
  window.addEventListener('scroll', checkScrollPosition);
  
  function checkScrollPosition() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}

/**
 * Initializes mobile navigation toggle behavior
 */
function initMobileNavToggle() {
  const toggleButton = document.querySelector('.mobile-nav-toggle');
  const mobileMenu = document.querySelector('#navHeader'); // The existing navbar collapse ID
  
  if (!toggleButton || !mobileMenu) return;
  
  toggleButton.addEventListener('click', function() {
    toggleButton.classList.toggle('active');
    
    // Bootstrap handles the actual toggling of the menu visibility
    // This is just for the button animation
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInside = toggleButton.contains(event.target) || mobileMenu.contains(event.target);
    
    if (!isClickInside && mobileMenu.classList.contains('show') && window.innerWidth < 992) {
      // Use Bootstrap's collapse API to close the menu
      const bsCollapse = new bootstrap.Collapse(mobileMenu, {
        toggle: false
      });
      bsCollapse.hide();
      toggleButton.classList.remove('active');
    }
  });
}

/**
 * Initializes tooltips for elements with data-tooltip attribute
 */
function initTooltips() {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  if (tooltipTriggerList.length === 0) return;
  
  // Initialize Bootstrap tooltips
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

/**
 * Helper function for smooth scrolling to anchors
 */
function scrollToAnchor(anchorId) {
  const element = document.getElementById(anchorId);
  if (!element) return;
  
  const headerOffset = 80; // Offset for fixed header
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// Make scrollToAnchor available globally
window.scrollToAnchor = scrollToAnchor;
