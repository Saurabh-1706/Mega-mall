# Frontend Test Cases: West Edmonton Mall Landing Page

This document contains a comprehensive set of frontend test cases for the Next.js landing page. These test cases cover visual rendering, interactive elements, forms, and responsive behavior.

## 1. Hero Section Tests

**Test Case 1.1: Verify Hero Section Rendering**
*   **Action**: Navigate to the homepage.
*   **Expected Behavior**: 
    - The hero section should take up the full screen height (`h-screen`).
    - The background image of the mall interior should load correctly.
    - The main heading "THE ORIGINAL MEGA-MALL" should be visible with appropriate typography and gradient text styling.

**Test Case 1.2: Validate Call to Action (CTA) Buttons**
*   **Action**: Locate the CTA buttons in the hero section ("Experience The Vision" and "View Retail Space"). Hover over them.
*   **Expected Behavior**:
    - The "Experience The Vision" button should scale up on hover (`hover:scale-105`) and scale down on click (`active:scale-95`).
    - The "View Retail Space" button border and background should transition color smoothly on hover (`hover:bg-white/10`).

## 2. Global Scroll & Progress Indicators

**Test Case 2.1: Progress Scroll Indicator**
*   **Action**: Scroll down the page.
*   **Expected Behavior**: The fixed progress bar at the top of the screen (`fixed top-0 left-0`) should be visible above all other content (`z-[60]`).

## 3. Stats Section Tests

**Test Case 3.1: Verify Statistics Grid**
*   **Action**: Scroll to the Stats section (below the Hero section).
*   **Expected Behavior**:
    - Four primary statistics should be displayed: "5.3M", "800+", "30.8M", and "20K+".
    - The layout should be a 1-column grid on mobile, transitioning to a 4-column grid on desktop/medium screens (`md:grid-cols-4`).

## 4. The Vision Section Tests

**Test Case 4.1: Hover Interaction on Vision Image**
*   **Action**: Scroll to "The Vision" section and hover the mouse over the grayscale architectural image.
*   **Expected Behavior**: 
    - The image should smoothly transition from grayscale to full color (`hover:grayscale-0`).
    - The image should slightly scale up during the transition (`hover:scale-110`).

## 5. The Districts Section Tests

**Test Case 5.1: District Cards rendering**
*   **Action**: Scroll to "The Districts" section.
*   **Expected Behavior**: Three district cards ("Europa Boulevard", "Bourbon Street", and "Chinatown") should be laid out side-by-side on desktop or stacked on mobile.

**Test Case 5.2: District Cards Hover State**
*   **Action**: Hover over any of the district cards.
*   **Expected Behavior**: The background image opacity should increase from 60% to 100% (`opacity-60 group-hover:opacity-100`) smoothly, making the image brighter.

## 6. Availability CTA Form Tests

**Test Case 6.1: Form Input Interaction**
*   **Action**: Scroll to the "Claim Your Place" availability section. Click on the "COMPANY NAME" input field and type a test name.
*   **Expected Behavior**: 
    - The input field border should highlight (`focus:border-primary`).
    - The typed text should be visible and readable.

**Test Case 6.2: Dropdown Selection**
*   **Action**: Click on "The Requirement" dropdown.
*   **Expected Behavior**: A selection list should appear with options: "PREMIUM RETAIL", "FOOD & BEVERAGE", "OFFICE SPACE", "POP-UP / SHORT TERM". Selecting one should update the dropdown value.

**Test Case 6.3: Form Submission Button**
*   **Action**: Formulate a click on the "Request Availability Brief" button.
*   **Expected Behavior**: Hovering should brighten the button (`hover:brightness-110`). *(Further testing will require backend integration check, just verify frontend reaction for now).*

## 7. Footer Tests

**Test Case 7.1: Footer Navigation Links**
*   **Action**: Scroll down to the bottom of the page and hover over the footer category links (e.g., "Leasing Portal", "Privacy Policy").
*   **Expected Behavior**: The text color for the links should transform smoothly, typically transitioning to a lighter or primary color state.

**Test Case 7.2: Responsive Layout Check**
*   **Action**: Resize the browser window to mobile width limit (`< 768px`).
*   **Expected Behavior**: 
    - The footer should collapse from a 4-column layout into a single-column block format.
    - Spacing remains consistent.
