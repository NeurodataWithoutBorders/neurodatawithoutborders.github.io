# NWB Design System Documentation

This documentation provides an overview of the Neurodata Without Borders design system, how to use it, and how to extend it.

## Overview

The NWB design system is a collection of styles, components, and patterns that provide a consistent visual language for the NWB website. It focuses on scientific credibility while incorporating modern design principles.

The design system includes:

1. **Design Variables** - Colors, typography, spacing, etc.
2. **Component Styles** - Buttons, cards, navigation, etc.
3. **Utility Classes** - Spacing, typography, colors, etc.
4. **JavaScript Interactions** - Navigation, tooltips, etc.

## Files

The design system consists of three main files:

- `assets/css/design-system.css` - Design variables and utility classes
- `assets/css/components.css` - Component styles
- `assets/js/design-system.js` - JavaScript interactions

These files are included in the site's templates via:

- `layouts/partials/essentials/head.html` for CSS files
- `layouts/partials/essentials/script-footer.html` for JS files

## Component Examples

For examples of how to use the components, see the template files in the `templates/` directory:

- `templates/modern-card-examples.html` - Card component examples
- `templates/modern-button-examples.html` - Button component examples

## Using the Design System

### Colors

The design system provides a comprehensive color palette with semantic naming:

```css
/* Primary Colors - Blues */
--color-primary-950: #0a192f;
--color-primary-900: #102a43; 
--color-primary-800: #153e56;
--color-primary-700: #1c506d; /* Main blue */
--color-primary-600: #246386;
/* ... and more */

/* Secondary Colors - Oranges */
--color-secondary-600: #c96d26; /* Main orange */
--color-secondary-500: #d37e3e;
/* ... and more */

/* Neutral Colors */
--color-neutral-900: #171b26;
--color-neutral-700: #3e4559;
/* ... and more */
```

To use these colors:

```html
<div class="bg-primary-700 text-white">Primary background with white text</div>
<div class="bg-secondary-600 text-white">Secondary background with white text</div>
<div class="text-neutral-700">Neutral text color</div>
```

### Typography

The design system uses the Inter font family with a range of font sizes and weights:

```css
/* Font Sizes */
--font-size-xs: 0.75rem;   /* 12px */
--font-size-sm: 0.875rem;  /* 14px */
--font-size-base: 1rem;    /* 16px */
/* ... and more */

/* Font Weights */
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

To use these typography styles:

```html
<h1 class="text-5xl font-bold">Large Heading</h1>
<p class="text-base">Normal text</p>
<p class="text-sm text-neutral-600">Small, muted text</p>
```

### Spacing

The design system provides a consistent spacing scale:

```css
--space-xs: 0.25rem;  /* 4px */
--space-sm: 0.5rem;   /* 8px */
--space-md: 1rem;     /* 16px */
--space-lg: 1.5rem;   /* 24px */
--space-xl: 2rem;     /* 32px */
--space-2xl: 3rem;    /* 48px */
--space-3xl: 4rem;    /* 64px */
```

To use these spacing values:

```html
<div class="mb-lg">Margin bottom of 1.5rem (24px)</div>
<div class="p-md">Padding of 1rem (16px)</div>
<div class="mt-2xl">Margin top of 3rem (48px)</div>
```

### Components

#### Cards

The card component is used to display content in a contained box:

```html
<!-- Basic Card -->
<div class="card">
  <div class="card-body">
    <h3 class="card-title">Card Title</h3>
    <p class="card-text">Card content</p>
  </div>
</div>

<!-- Card with Header and Footer -->
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
  </div>
  <div class="card-body">
    <p class="card-text">Card content</p>
  </div>
  <div class="card-footer">
    <a href="#" class="btn btn-primary">Action</a>
  </div>
</div>

<!-- Highlighted Card -->
<div class="card card-highlight">
  <div class="card-body">
    <h3 class="card-title">Highlighted Card</h3>
    <p class="card-text">Content with emphasis</p>
  </div>
</div>
```

#### Buttons

The button component is used to trigger actions:

```html
<!-- Primary Button -->
<button class="btn btn-primary">Primary Action</button>

<!-- Secondary Button -->
<button class="btn btn-secondary">Secondary Action</button>

<!-- Outline Button -->
<button class="btn btn-outline-primary">Outline Primary</button>

<!-- Text Button -->
<a href="#" class="btn-text">Text Button</a>

<!-- Button with Icon -->
<button class="btn btn-primary btn-icon">
  <i class="fas fa-plus"></i>
  Add Item
</button>
```

#### Alerts

The alert component is used to display important messages:

```html
<!-- Info Alert -->
<div class="alert alert-info">
  <div class="alert-icon">
    <i class="fas fa-info-circle"></i>
  </div>
  <div class="alert-content">
    <h4 class="alert-title">Information</h4>
    <p>This is an informational message.</p>
  </div>
</div>

<!-- Other alert types: alert-success, alert-warning, alert-error -->
```

## Extending the Design System

When extending the design system, keep these principles in mind:

1. **Consistency** - New components should be consistent with existing ones
2. **Accessibility** - Ensure components meet WCAG AA standards
3. **Performance** - Optimize for performance and minimize CSS size
4. **Modularity** - Components should be reusable and composable

### Adding New Components

To add a new component:

1. Add the component CSS to `assets/css/components.css`
2. Document the component with examples
3. If needed, add JavaScript functionality to `assets/js/design-system.js`

### Modifying Existing Components

When modifying existing components:

1. Ensure backward compatibility or provide migration guidance
2. Update documentation and examples
3. Test across all pages where the component is used

## Implementation Status

See [design-system-implementation-status.md](../design-system-implementation-status.md) for the current implementation status and next steps.

## Further Resources

- [NWB Design Recommendations](../design_recommendations.md) - Detailed design recommendations
- [NWB Design Implementation Plan](../nwb_design_implementation_plan.md) - Implementation plan for the design system
- [Layout Mockup](../layout_mockup.html) - Visual mockup of the design system

## Best Practices

1. **Use utility classes** for one-off styling instead of creating custom CSS
2. **Follow the component patterns** consistently across templates
3. **Maintain spacing consistency** using the provided spacing variables
4. **Keep accessibility in mind** when creating or modifying components
5. **Test responsive behavior** across different screen sizes
