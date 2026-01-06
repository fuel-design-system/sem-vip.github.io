# AI Assistant Guide for Fretebras PWA

This document provides guidance for AI assistants working on the Fretebras PWA project.

## Project Overview

This is a **Progressive Web App (PWA)** for freight and logistics management (Fretebras). The application is built with:
- React 18 + TypeScript
- Vite for build and development
- Tailwind CSS for styling
- Express backend
- Full PWA capabilities (manifest, service worker, offline support)

## Key Design Principles

### 1. Pixel-Perfect Implementation
- The design is based on a Figma mockup that must be followed exactly
- Use the Satoshi font family for all text
- Maintain the exact color palette defined in CSS variables
- Preserve spacing and sizing from the design system

### 2. Responsive Design
- Mobile-first approach (design is optimized for 360px width)
- Must work flawlessly on all screen sizes
- Use Tailwind's responsive utilities
- Centered container with max-width for larger screens

### 3. PWA Best Practices
- Service worker registered in `App.tsx`
- Manifest file properly configured
- SVG icons for all resolutions
- Offline-first approach where applicable

## Design System

### Colors (CSS Variables)
```css
--text-strong: #111           /* Primary text */
--text-medium: #636B7E        /* Secondary text */
--text-primary: #0769DA       /* Primary brand color */
--surface-primary-weakest: #DBECFF  /* Light blue backgrounds */
--icon-medium: #636B7E        /* Icon color */
--icon-weak: #BABEC9          /* Disabled/subtle icons */
```

### Typography
- **Primary Font**: Satoshi (via Fontshare)
- **System Font**: Roboto (for status bar and system elements)
- **Font Sizes**: 12px, 14px, 16px, 20px
- **Line Heights**: 100%, 130%, 150%, 160%

### Spacing
- **Small**: 16px
- **Large**: 24px
- **Padding**: 8px (km2), 16px (km4)

### Border Radius
- **Large**: 16px
- **Pill**: 500px (for buttons)

## Component Patterns

### Buttons
```tsx
// Primary button (blue)
<button className="min-h-[48px] px-4 rounded-pill bg-primary hover:bg-primary/90 transition-colors">

// Secondary button (light gray)
<button className="h-12 px-4 rounded-pill bg-[rgba(0,43,92,0.06)] hover:bg-[rgba(0,43,92,0.1)] transition-colors">
```

### Typography
```tsx
// Headings
<h1 className="text-sm font-medium text-text-strong font-satoshi leading-[150%]">
<h2 className="text-base font-medium text-text-strong font-satoshi leading-[150%]">
<h3 className="text-base font-bold text-text-strong font-satoshi leading-[150%]">

// Body text
<p className="text-sm font-medium text-text-medium font-satoshi leading-[150%]">

// Small text
<span className="text-xs font-medium text-text-medium font-satoshi leading-[160%] tracking-[0.24px]">
```

### Icons
- Use Lucide React for common icons
- Use inline SVG for custom/brand-specific icons
- Always set `className="flex-shrink-0"` on icons in flex containers
- Default size: 16px or 20px

## File Structure

### Pages
- `client/pages/Index.tsx` - Main freight detail page (homepage)
- `client/pages/NotFound.tsx` - 404 page

### Routing
- Uses React Router v6
- All routes defined in `client/App.tsx`
- Use `<Link>` component for internal navigation

### Styling
- Global styles in `client/global.css`
- Tailwind config in `tailwind.config.ts`
- CSS variables defined in `:root` in global.css

### PWA Files
- `public/manifest.json` - PWA manifest
- `public/sw.js` - Service worker
- `public/icon-*.svg` - App icons
- `index.html` - Meta tags and font imports

## Common Tasks

### Adding a New Page
1. Create component in `client/pages/`
2. Add route in `client/App.tsx`
3. Follow existing component patterns
4. Maintain design system consistency

### Updating Styles
1. Check if CSS variable exists
2. Use Tailwind utilities when possible
3. Follow existing naming conventions
4. Maintain responsive design

### Adding Icons
1. Check Lucide React library first
2. For custom icons, use inline SVG
3. Preserve exact paths from Figma
4. Set proper viewBox and sizes

### Updating PWA
1. Update manifest.json for metadata changes
2. Update sw.js for cache strategy changes
3. Increment cache version when updating
4. Test installation flow

## Testing Checklist

- [ ] Mobile viewport (360px)
- [ ] Tablet viewport (768px)
- [ ] Desktop viewport (1024px+)
- [ ] PWA installation works
- [ ] Service worker registers
- [ ] All fonts load correctly
- [ ] All icons render properly
- [ ] Spacing matches design
- [ ] Colors match design exactly
- [ ] Buttons have proper states
- [ ] Links work correctly

## Important Notes

1. **Never remove the service worker** - It's essential for PWA functionality
2. **Always use Satoshi font** - Except for system elements (status bar)
3. **Maintain the max-width container** - Keeps design centered on large screens
4. **Fixed bottom bar** - Must stay fixed with proper shadow
5. **Spacing consistency** - Use the design system values
6. **Color accuracy** - Use CSS variables, not hardcoded values (except rgba for opacity)

## Language and Content

- Primary language: Portuguese (Brazil)
- All UI text should be in Portuguese
- Currency format: R$ (Brazilian Real)
- Date format: DD/MM/YYYY

## Build and Deployment

```bash
# Development
pnpm dev

# Production build
pnpm build

# Production server
pnpm start
```

The build generates:
- `dist/spa/` - Frontend assets
- `dist/server/` - Backend build

## Resources

- Figma Design: Implemented in Index.tsx
- Design System: Defined in global.css and tailwind.config.ts
- Icons: Lucide React + custom SVGs
- Fonts: Satoshi (Fontshare), Roboto (Google Fonts)
