# Course Visualization Tool

## Project Overview
Course Visualization Tool is a Purdue-themed web application that helps users explore different technology-related majors, view required courses, and take a quiz that recommends a possible major. The site is designed around Purdue’s black and gold color palette and uses Bootstrap components to keep the interface professional and responsive.

## SCSS Usage
This project uses SCSS to organize the styling in a more maintainable way. I defined Purdue color variables such as black, gold, white, gray, and border colors at the top of the stylesheet and reused them throughout the app for the navbar, buttons, cards, and modals. Using SCSS helped keep the design consistent and made it easier to update the color theme in one place.

## Responsiveness
The layout is responsive because it uses Bootstrap’s grid system and responsive utility classes. Major cards and job cards use `row-cols-1`, `row-cols-md-2`, `row-cols-md-3`, and `row-cols-lg-3` so the content adjusts to different screen sizes. The navbar also collapses into a hamburger menu on smaller screens, which improves usability on mobile devices.

## Hamburger Menu
The hamburger menu is implemented with Bootstrap’s navbar collapse component. The navbar uses `navbar-toggler`, `data-bs-toggle="collapse"`, and `data-bs-target="#navbarNav"` to hide and reveal navigation links on smaller screens. This allows the site to stay clean on mobile while still giving access to navigation options.

## Favicon
The favicon used in this project is a Purdue-themed icon that matches the overall content and branding of the site. I added it in the `<head>` section so the browser tab displays a small Purdue-related image. This helps the site look more polished and recognizable.

## Bootstrap Features Used
This project uses several Bootstrap features:
- Navbar: for the responsive navigation bar.
- Collapse: for the hamburger menu.
- Grid system: for responsive card layouts.
- Cards: for majors and job examples.
- Buttons: for quiz answers and major links.
- Modals: for displaying major requirements and quiz content.
- Badges: for showing which major relates to each job card.

These features were chosen because they are easy to use, visually clean, and help structure the site in a professional way.

## Accessibility
Accessibility was included by using semantic HTML elements such as `<nav>` and by adding ARIA attributes where needed. The modals use `aria-labelledby` so screen readers can identify the modal titles, and the navbar toggler should include an `aria-label` to explain its purpose. I also made sure the buttons are keyboard accessible and that images have meaningful alt text instead of placeholder text.

## How the Quiz Works
The quiz shows one question at a time and stores the selected major for each answer. When the quiz ends, it counts the selected majors and opens the data modal with the matching major information. The selected answer stays highlighted so users can clearly see their choice.

## Jobs Section
The jobs section gives examples of careers related to the majors on the page. Each card includes a job title, a short description, and a badge that shows which major it connects to. This makes the section more useful because it links careers directly to the program choices.

## Notes
This project was designed to look professional, work well on different screen sizes, and provide a clear way for users to explore Purdue majors and related career paths.
