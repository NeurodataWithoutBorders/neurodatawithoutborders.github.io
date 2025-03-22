# Design Recommendations for Neurodata Without Borders Website

## Executive Summary

This document outlines a comprehensive set of design recommendations to modernize the Neurodata Without Borders website while maintaining its scientific integrity and functionality. The proposals focus on creating a more trustworthy, professional, and accessible experience that serves the scientific community's needs.

## Design Philosophy

The redesign approach is guided by these principles:
- **Function first**: Prioritize information access and usability for scientific users
- **Subtle modernization**: Enhance the visual design without sacrificing familiarity
- **Trust signals**: Incorporate elements that reinforce credibility and scientific authority
- **Accessibility**: Ensure content is readable and accessible across devices and user needs

## Detailed Recommendations

### 1. Typography System

**Current state**: The site uses Inter font family but lacks a cohesive typographic hierarchy.

**Recommendations**:
- Maintain Inter as the primary font but implement a more structured type scale:
  ```css
  /* Replace current text size classes with a more systematic scale */
  .text-xs { font-size: 0.75rem; line-height: 1.6; }  /* 12px */
  .text-sm { font-size: 0.875rem; line-height: 1.6; } /* 14px */
  .text-base { font-size: 1rem; line-height: 1.6; }   /* 16px */
  .text-lg { font-size: 1.125rem; line-height: 1.6; } /* 18px */
  .text-xl { font-size: 1.25rem; line-height: 1.4; }  /* 20px */
  .text-2xl { font-size: 1.5rem; line-height: 1.3; }  /* 24px */
  .text-3xl { font-size: 1.875rem; line-height: 1.2; } /* 30px */
  .text-4xl { font-size: 2.25rem; line-height: 1.2; }  /* 36px */
  .text-5xl { font-size: 3rem; line-height: 1.1; }     /* 48px */
  ```

- Increase line heights for better readability, especially for scientific content
- Create clearer distinction between heading and body text with weight adjustments:
  ```css
  h1, .h1 { font-weight: 700; letter-spacing: -0.025em; }
  h2, .h2 { font-weight: 700; letter-spacing: -0.025em; }
  h3, .h3 { font-weight: 600; }
  h4, .h4 { font-weight: 600; }
  h5, .h5 { font-weight: 500; }
  h6, .h6 { font-weight: 500; }
  ```

### 2. Color System Refinement

**Current state**: The site uses blue (#152f45, #114B7C) and orange (#d17128, #ff9900) as primary colors, with various gray tones.

**Recommendations**:
- Refine the color palette for better harmony while maintaining brand recognition:

  **Primary Colors**:
  ```css
  /* Main blue (deeper, more authoritative) */
  --color-primary-950: #0a192f;
  --color-primary-900: #102a43; 
  --color-primary-800: #153e56;
  --color-primary-700: #1c506d;
  --color-primary-600: #246386;
  
  /* Secondary accent (warmer orange) */
  --color-secondary-600: #c96d26;
  --color-secondary-500: #d37e3e;
  --color-secondary-400: #db9153;
  ```
  
  **Neutral Colors**:
  ```css
  /* Warm grays for body text and less prominent UI */
  --color-neutral-900: #171b26;
  --color-neutral-800: #292f3d;
  --color-neutral-700: #3e4559;
  --color-neutral-600: #585c67;
  --color-neutral-500: #747990;
  --color-neutral-400: #9ca3b7;
  --color-neutral-300: #c3c9d9;
  --color-neutral-200: #e1e5ee;
  --color-neutral-100: #f0f3fa;
  --color-neutral-50: #f7f9fc;
  ```
  
  **Supporting Colors**:
  ```css
  /* For success, warning, error states */
  --color-success: #0e906e;
  --color-warning: #f7c948;
  --color-error: #dc3545;
  ```

- Implement this color system consistently throughout the site
- Use color purposefully to differentiate sections and create better visual hierarchy

### 3. Layout and Spacing

**Current state**: Pages use a standard Bootstrap grid but lack consistent spacing and visual breathing room.

**Recommendations**:
- Implement a consistent spacing system:
  ```css
  /* Add spacing variables */
  :root {
    --space-xs: 0.25rem;  /* 4px */
    --space-sm: 0.5rem;   /* 8px */
    --space-md: 1rem;     /* 16px */
    --space-lg: 1.5rem;   /* 24px */
    --space-xl: 2rem;     /* 32px */
    --space-2xl: 3rem;    /* 48px */
    --space-3xl: 4rem;    /* 64px */
  }
  ```

- Increase white space between sections (min 64px) for better content separation
- Create more asymmetrical layouts on larger screens to add visual interest
- Reduce content density, especially on the homepage
- Use grid layouts for related content (like the tools section) with consistent card heights

### 4. Component Modernization

#### Navigation

**Current state**: Standard Bootstrap navbar with dropdown menus.

**Recommendations**:
- Simplify the navigation structure
- Make the active state more prominent
- Implement a subtle sticky navigation on scroll
- Update mobile navigation with smoother animations
- Add a prominent search button in the header
- Example updated header CSS:
  ```css
  .header-nav {
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    transition: all 0.3s ease;
  }
  
  .header-nav.scrolled {
    padding: 0.5rem 0 !important;
    background-color: rgba(255,255,255,0.98) !important;
    backdrop-filter: blur(10px);
  }
  
  .navbar-nav .nav-link {
    padding: 0.5rem 1rem;
    font-weight: 500;
    border-radius: 4px;
    transition: all 0.2s ease;
  }
  
  .navbar-nav .nav-link:hover {
    background-color: rgba(0,0,0,0.04);
  }
  
  .navbar-nav .nav-link.active {
    background-color: rgba(209,113,40,0.1);
    color: var(--color-secondary-600) !important;
    font-weight: 600;
  }
  ```

#### Cards and Content Containers

**Current state**: Basic cards with minimal styling.

**Recommendations**:
- Update card styling with more subtle shadows
- Add consistent padding and margins
- Improve hover states for interactive cards
- Example card styling:
  ```css
  .card {
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }
  
  .card-body {
    padding: var(--space-lg);
  }
  ```

#### Buttons

**Current state**: Basic Bootstrap buttons with minimal customization.

**Recommendations**:
- Create a clearer button hierarchy with three levels:
  - Primary (filled, high contrast)
  - Secondary (outline or lighter background)
  - Tertiary (minimal styling, text with icon)
- Add subtle hover animations
- Ensure buttons have adequate padding for touch targets
- Example button styles:
  ```css
  .btn {
    padding: 0.5rem 1.25rem;
    font-weight: 500;
    border-radius: 6px;
    transition: all 0.2s ease;
  }
  
  .btn-primary {
    background-color: var(--color-primary-700);
    border-color: var(--color-primary-700);
    color: white;
  }
  
  .btn-primary:hover {
    background-color: var(--color-primary-800);
    border-color: var(--color-primary-800);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(10,25,47,0.1);
  }
  
  .btn-secondary {
    background-color: var(--color-secondary-500);
    border-color: var(--color-secondary-500);
    color: white;
  }
  
  .btn-outline {
    background-color: transparent;
    border: 1px solid var(--color-neutral-300);
    color: var(--color-neutral-700);
  }
  
  .btn-outline:hover {
    border-color: var(--color-primary-700);
    color: var(--color-primary-700);
  }
  
  .btn-text {
    background-color: transparent;
    border: none;
    color: var(--color-primary-700);
    padding-left: 0;
    padding-right: 0;
  }
  
  .btn-text:hover {
    color: var(--color-primary-800);
    text-decoration: underline;
    text-underline-offset: 4px;
  }
  ```

### 5. Homepage Redesign

**Current state**: The homepage has multiple sections but lacks clear hierarchy and focus.

**Recommendations**:
- Streamline hero section:
  - Simplify messaging with a clearer value proposition
  - Use a more impactful scientific visualization
  - Reduce text and focus on primary actions
  
- Emphasize key information:
  - Make "About NWB" and key resources more prominent
  - Create a cleaner "What is NWB" section with graphical elements
  - Highlight ecosystem and adoption with logos/numbers
  
- Update the news section:
  - Modernize card design for news items
  - Add filtering capability
  - Show publication dates more prominently

### 6. Visual Elements

**Current state**: Limited use of visual elements beyond basic structure.

**Recommendations**:
- Add subtle visual cues:
  - Background patterns or gradient overlays in section headers
  - Decorative elements that reflect data or neural patterns
  - More consistent and professional iconography
  
- Incorporate scientific imagery:
  - Use visualizations from actual NWB datasets where possible
  - Create abstract data visualizations for background elements
  
- Add micro-interactions:
  - Subtle hover states for interactive elements
  - Smooth transitions between sections
  - Progressive loading of content sections

### 7. Trust and Credibility Elements

**Current state**: Limited visibility of trust signals.

**Recommendations**:
- Create a more prominent "Adoption" section showing institutions using NWB
- Add citation metrics and academic credentials where relevant
- Feature testimonials from respected researchers
- Make funding and institutional support more visible
- Highlight scientific publications more effectively

### 8. Mobile Experience

**Current state**: Responsive but basic mobile experience.

**Recommendations**:
- Optimize touch targets for scientific content
- Create more streamlined mobile navigation
- Ensure data visualizations are mobile-friendly
- Improve content prioritization on smaller screens

## Implementation Priority

1. **High impact, low effort**:
   - Typography system
   - Color refinement
   - Spacing improvements
   - Button styling

2. **Medium priority**:
   - Card and component redesign
   - Navigation updates
   - Homepage hero section

3. **Long-term improvements**:
   - Complete homepage redesign
   - Additional micro-interactions
   - Custom scientific visualizations

## Next Steps

1. Create a basic design system document with typography, colors, and spacing
2. Implement high-priority changes first to establish the new design direction
3. Iteratively update components and sections
4. Gather feedback from scientific users to ensure changes meet their needs
