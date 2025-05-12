/**
 * Table of Contents generator with smooth scrolling
 */
function initTableOfContents() {
    // Get all headings in the content
    const content = document.getElementById('content-container');
    const headings = content.querySelectorAll('h2, h3');
    const toc = document.getElementById('toc');
    
    if (headings.length === 0) {
        const tocContainer = document.querySelector('.toc-container');
        if (tocContainer) tocContainer.style.display = 'none';
        return;
    }
    
    // Create the TOC structure
    const tocList = document.createElement('ul');
    let currentH2List = null;
    let currentH2Item = null;
    
    headings.forEach(heading => {
        // Create list item with link
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        const headingId = heading.id || heading.textContent.toLowerCase().replace(/[^\w]+/g, '-');
        
        // Ensure the heading has an ID
        if (!heading.id) heading.id = headingId;
        
        link.href = '#' + headingId;
        link.textContent = heading.textContent;
        
        // Add click event to handle scroll offset
        link.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToHeading(this.getAttribute('href').substring(1));
        });
        
        listItem.appendChild(link);
        
        // Add to TOC based on heading level
        if (heading.tagName === 'H2') {
            tocList.appendChild(listItem);
            currentH2Item = listItem;
            currentH2List = document.createElement('ul');
            currentH2Item.appendChild(currentH2List);
        } else if (heading.tagName === 'H3' && currentH2List) {
            currentH2List.appendChild(listItem);
        } else {
            tocList.appendChild(listItem);
        }
    });
    
    toc.appendChild(tocList);
    
    // Handle direct anchor links (when page loads with a hash)
    if (window.location.hash) {
        setTimeout(function() {
            scrollToHeading(window.location.hash.substring(1));
        }, 300);
    }
}

// Helper function to scroll to a heading with offset
function scrollToHeading(headingId) {
    const targetElement = document.getElementById(headingId);
    if (targetElement) {
        const headerOffset = 100; // Adjust this value based on your header height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
        // Update URL hash without scrolling
        history.pushState(null, null, '#' + headingId);
    }
}

// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', initTableOfContents);
