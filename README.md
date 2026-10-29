# 🌿 Green Garden — Landscaping & Garden Care Website

A responsive, Arabic (RTL) brand website for a landscaping and garden-care company, built with plain **HTML, CSS, and JavaScript** — no frameworks and no build step.

> **Live demo:** _add your link here_

<!-- Add screenshots here:
![Desktop view](docs/desktop.png)
![Mobile view](docs/mobile.png)
-->

## ✨ Features

- **Responsive design** that adapts to phones, tablets, and desktops
- **Modern, clean interface** with a calm natural palette that reflects the business
- **Arabic-first typography** using the Cairo font for clear, readable text
- **Smooth navigation** between sections
- **Easy theming** through CSS variables

## 📄 Sections

| Section | What it contains |
| --- | --- |
| **Home** | Company logo, hero background image, short introduction, and a contact button |
| **About** | Company background and experience, key statistics (years of experience, projects, client satisfaction), and the team |
| **Services** | Garden design, planting, garden maintenance, irrigation systems, plant consulting, and space landscaping |
| **Contact** | Contact form (name, email, message) and contact details (phone, email, address, working hours) |

## 🛠️ Tech Stack

- HTML5
- CSS3 (custom properties, responsive layout)
- JavaScript (vanilla)
- Google Fonts — Cairo

## 🚀 Run Locally

No installation or server needed:

1. Clone or download the repository.
2. Open `index.html` in any modern browser.

You can also use the **Live Server** extension in VS Code for automatic reloading.

## 📁 Project Structure

```
├── index.html    # Page structure and content
├── styles.css    # Styling and design system
└── script.js     # Interactivity
```

## 🎨 Customization

### Colors
Edit the CSS variables at the top of `styles.css`:

```css
:root {
  --primary-color: #2d5016;        /* Primary */
  --secondary-color: #4a7c2a;      /* Secondary */
  --accent-color: #6b9e3e;         /* Accent */
  --light-green: #a8d5a3;          /* Light green */
  --very-light-green: #e8f5e6;     /* Very light green */
}
```

### Content and images
- Edit text and contact details directly in `index.html`.
- To use real photos, create an `images/` folder, add your images, and update the image paths in `index.html`.

## ⚠️ Notes

- The contact form currently shows a confirmation message only. To actually receive submissions, connect it to a backend or a form service.
- Emoji icons can be replaced with real images or an icon library such as Font Awesome.

## 🌐 Browser Support

Any modern browser: Chrome, Firefox, Safari, and Edge.

## 📄 License

© Shahad Brighish. All rights reserved.
