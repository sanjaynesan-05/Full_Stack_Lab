# EX-4: Sign In & Sign Up Page

## Overview
This is a modern **Sign In & Sign Up** web application featuring a clean, professional design with dual authentication forms. The page includes a navigation bar, elegant card layout with a background image, responsive HTML and CSS styling, and interactive JavaScript functionality for form validation and user feedback.

## Features
- 🔐 **Sign In Form** - Username/Email/Phone and password fields with validation
- ✍️ **Sign Up Form** - Create new account with name, email, and password validation
- 🎨 **Modern Design** - Clean, professional card-based UI
- 📱 **Responsive Layout** - Works on desktop, tablet, and mobile
- 🧭 **Navigation Bar** - Quick navigation links (Home, Products, Services, Contact Us)
- 💫 **Smooth Animations** - Hover effects and transitions
- 🖼️ **Beautiful Background** - Custom background image support
- ✨ **Underline Input Fields** - Clean, minimal input styling
- 🌗 **Dark Overlay** - Ensures text visibility on background
- ✅ **Form Validation** - Client-side validation with error messages
- 👁️ **Show/Hide Password** - Toggle visibility for password fields
- 🎯 **Keyboard Navigation** - Enter key support for form submission
- 📢 **User Feedback** - Success and error messages
- ♿ **Accessibility** - Proper form labels and keyboard support

## File Structure
```
Ex-4/
├── index.html      # HTML structure with background image and forms
├── style.css       # Professional styling with background image support
├── script.js       # JavaScript for form validation and interactivity
├── image.png       # Background image file (local)
└── README.md       # Documentation
```

## How to Use
1. Add your background image file as `image.png` in the Ex-4 folder
2. Open `index.html` in your web browser
3. You'll see the background image with navigation bar at the top
4. Two authentication cards are centered on the page:
   - **Sign In Card** (left) - For existing users
   - **Sign Up Card** (right) - For new users
5. Enter your information in the respective form fields
6. Click the button to proceed

## Form Fields

### Sign In Form
| Field | Type | Placeholder |
|-------|------|-------------|
| Username | Text | Enter Username / Email / Phone Number |
| Password | Password | Enter Password |

### Sign Up Form
| Field | Type | Placeholder |
|-------|------|-------------|
| Name | Text | Enter Name |
| Email | Text | Enter Email |
| Password | Password | Enter Password |

## JavaScript Functionality

### Form Validation
- **Client-side validation** for all form fields
- **Email format validation** using regex
- **Password length validation** (minimum 6 characters)
- **Required field validation** for all inputs

### User Interactions
- **Form submission handling** with preventDefault
- **Show/Hide password toggle** for better UX
- **Keyboard navigation** (Enter key submits forms)
- **Success/Error messages** with auto-dismiss
- **Console logging** for development (simulates API calls)

### Accessibility Features
- **Proper form labels** linked to inputs
- **Keyboard support** for all interactive elements
- **Screen reader friendly** markup
- **Focus management** with visual indicators

## Technical Details

### HTML Structure
- Semantic HTML5 markup
- Background image (`<img>` tag) with `bg-image` class
- Navigation bar with 4 menu items
- Two form cards (Sign In and Sign Up) with side-by-side layout
- Input fields with labels and underline styling
- Submit buttons for each form
- Pure HTML and CSS - no JavaScript required

### CSS Styling
- **Background Image:**
  - `position: fixed` - Stays in place while scrolling
  - `width: 100%` and `height: 100%` - Covers entire viewport
  - `object-fit: cover` - Scales without distortion
  - `z-index: 0` - Behind all content
  
- **Dark Overlay:**
  - 25% opacity dark layer for better readability
  - Positioned over background image using pseudo-element
  
- **Card-based Design:**
  - White background with rounded corners (15px)
  - Box shadow for depth and elevation
  - 50px gap between Sign In and Sign Up cards
  - Hover effects with transform animations
  
- **Input Fields:**
  - Bottom border only styling (underline)
  - Transparent background allows image to show through
  - Focus effects with blue border
  
- **Responsive Design:**
  - Side-by-side cards on desktop (> 768px)
  - Stacked layout on tablet (481-768px)
  - Single column on mobile (≤ 480px)

## Background Image Setup
- **File Location:** Place `image.png` in the Ex-4 folder
- **File Name:** Must be exactly `image.png` (as referenced in HTML)
- **Recommended Size:** At least 1400x900px
- **Format:** PNG, JPG, or other image formats
- **Display:** Fixed background that doesn't scroll
- **Overlay:** Dark 25% opacity for better card visibility

## Z-Index Layering

| Element | Z-Index | Purpose |
|---------|---------|---------|
| Background Image | 0 | Base layer |
| Dark Overlay | 1 | Improves text visibility |
| Background Container | 5 | Content area |
| Navbar | 10 | Top navigation |

## Color Scheme

| Element | Color | Hex Code |
|---------|-------|----------|
| Navbar Background | Blue | #007bff |
| Card Background | White | #ffffff |
| Text | Dark Gray | #333333 |
| Label | Medium Gray | #666666 |
| Input Border | Light Gray | #dddddd |
| Input Border (Focus) | Blue | #007bff |
| Button | Blue | #007bff |
| Button Hover | Darker Blue | #0056b3 |
| Placeholder | Light Gray | #bbbbbb |
| Dark Overlay | Black | rgba(0, 0, 0, 0.25) |

## Responsive Breakpoints

| Device | Width | Layout |
|--------|-------|--------|
| Desktop | > 768px | Side-by-side cards (50px gap) |
| Tablet | 481-768px | Stacked layout |
| Mobile | ≤ 480px | Single column, responsive |

## Visual Layout

```
┌────────────────────────────────────────────────────────────┐
│  Home      Products      Services      Contact Us           │  Navbar
├────────────────────────────────────────────────────────────┤
│                                                              │
│         Background Image with 25% Dark Overlay              │
│                                                              │
│         ┌──────────────┐       ┌──────────────┐             │
│         │  Sign In     │       │  Sign Up     │             │
│         │              │       │              │             │
│         │ Username     │       │ Name         │             │
│         │ ────────     │       │ ────────     │             │
│         │ Password     │       │ Email        │             │
│         │ ────────     │       │ ────────     │             │
│         │ [Sign In]    │       │ Password     │             │
│         │              │       │ ────────     │             │
│         └──────────────┘       │ [Sign Up]    │             │
│                                 │              │             │
│                                 └──────────────┘             │
│                                                              │
└────────────────────────────────────────────────────────────┘
```

## Requirements
- Modern web browser with JavaScript enabled (Chrome, Firefox, Safari, Edge)
- Background image file (`image.png`) in the project folder
- No external libraries or frameworks required
- ES6+ JavaScript support
- No external libraries

## Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## Key CSS Features

### Fixed Background Image
```css
.bg-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
}
```

### Dark Overlay for Readability
```css
.bg-image::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 1;
}
```

### Flexbox Alignment
- Parent container uses `display: flex`
- Cards centered with `justify-content: center` and `align-items: center`
- Gap of 50px between cards maintains proper spacing

### Input Styling
- Bottom border only for minimal, clean look
- Transparent background allows background image to show
- Border color changes on focus for user feedback
- Smooth transitions for all interactions

### Card Design
- 280px fixed width for consistency
- Rounded corners (border-radius: 15px)
- Box shadow for depth and elevation
- Hover effect with slight upward translation

