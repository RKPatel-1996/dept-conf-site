AI Collaboration Guide
Goal:

> start where we left the project at checkpoint 1 and continue from there

Goals: check point 2

> src\data
> This folder has many .js file that holds the data that we want to display on website
> but updating website everytime is tedious
> i want to develop sowe workflow that avoids the
> complex Content mangment systmes that are paid
> i want to create my own system that is very simple and effective suitable for very small sclae one time project

Development Workflow
Our collaboration will follow a clear, 6-step process designed for clarity and accuracy. And special cases
Step 1: You Define the Vision (The "What")
AIs Task: User will describe the feature or component or idea the user has in mind using plain English. Find the way for implementation.
Step 2: AI Confirms and Clarifies
AI's Task: I will summarize my understanding of your request in bullet points.
User Task: user confirm with a "Yes," or provide corrections. This ensures we are aligned before any code is written.
Step 3: AI Handles the Technical Build (The "How")
AI's Task: AI will translate user vision into a complete, functional React component.
What AI Will Do:
Write all the necessary HTML (JSX) structure.
Implement all the JavaScript logic (React Hooks). This is my responsibility.
Apply styling using Tailwind CSS (use version 3, latest produces error with my setup) based on your description.
Provide a brief, plain-English explanation of how the code works.
Step 4: AI Provides Integration Instructions
AI's Task: After creating a component, I will give you the exact code snippets to copy and paste into the parent file (e.g., App.jsx) to make the new component appear.
Step 5: You Review and Provide Feedback
User Task: Copy, paste, and review the component user’s your browser.
Step 6: AI Refines and Iterates
AI's Task:
I will take your feedback and make the necessary code changes, providing the full, updated code for you to paste back into your project. We repeat steps 5 and 6 until the component is perfect.
I will recommend the new pages and components needed to make vision come true you will make them in your project
Special cases:

1. To big code files:

- provide the template with palace holder section names for each code segment
- in next prompt provide each section one by one

Section 1: Project & Tech Stack Definition
This table serves as the foundational context for every request. It is formatted to look clean in both the VS Code editor and the Markdown preview.
Category
Tool / Technology
Version / Details
🎯 Project
Goal
To build an interactive website using the mentioned technology stack.
⚙️ Core Tech
Node.js
v22.19.0

npm
v9.6.4

JavaScript
ES2020+ (Managed by Vite)
📦 Frameworks
Vite
(from package.json)

React
(from package.json)
💻 Environment
VS Code
v1.104.1

Quokka.js
v1.0.739 - For rapid prototyping.

ESLint & Prettier
For code quality & consistent formatting.
🌿 Version Control
Git
v2.51.0.windows.1

GitHub
Platform for hosting and collaboration.
🚀 Deployment
GitHub Actions
I will run actions manually on the github website.
🌐 Browser & Debug
Opera
v120.0.5543.161

React DevTools
v6.1.5

✨ Section 2: already done steps
I have already done this step this should give you some idea about directory structure and paths (default structure):
PS C:\Users\rohit\Documents\websites\chi-square> npm create vite@latest
│
◇ Project name:
│ chi-square-test
│
◇ Select a framework:
│ React
│
◇ Select a variant:
│ JavaScript
│
◇ Scaffolding project in C:\Users\rohit\Downloads\harshil_bhai_26_sept_data\reports>
│
└ Done. Now run:

cd reports

npm install

npm install -D tailwindcss@3 postcss autoprefixer

npx tailwindcss init -p

Created Tailwind CSS config file: tailwind.config.js
Created PostCSS config file: postcss.config.js

This is my directory and file structure if you need to see some file to create a path forward do ask for them
I have my check point 1 for this project

(base) rkpatel@Rohit:/mnt/c/Users/rohit/Documents/websites/dept_conf/dept_conf$ tree -I node_modules/
.
├── README.md
├── checkpoint.md
├── demo_site_2026.html
├── dist
│ ├── assets
│ │ ├── index-D6hDT72z.css
│ │ └── index-xKyU_Ipd.js
│ ├── index.html
│ ├── photos
│ └── vite.svg
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│ ├── photos
│ └── vite.svg
├── src
│ ├── App.css
│ ├── App.jsx
│ ├── assets
│ │ └── react.svg
│ ├── components
│ │ ├── About.jsx
│ │ ├── Abstracts.jsx
│ │ ├── Contact.jsx
│ │ ├── Footer.jsx
│ │ ├── Header.jsx
│ │ ├── Hero.jsx
│ │ ├── Registration.jsx
│ │ ├── Schedule.jsx
│ │ ├── Speakers.jsx
│ │ ├── ThemeSwitcher.jsx
│ │ └── Themes.jsx
│ ├── context
│ │ └── ThemeProvider.jsx
│ ├── data
│ │ ├── about.js
│ │ ├── aboutconf.js
│ │ ├── aboutdepartment.js
│ │ ├── abstracts.js
│ │ ├── contact.js
│ │ ├── navigation.js
│ │ ├── register.js
│ │ ├── registration.js
│ │ ├── schedule.js
│ │ ├── speakers.js
│ │ └── themes.js
│ ├── index.css
│ └── main.jsx
├── tailwind.config.js
└── vite.config.js

10 directories, 43 files

## Project Checkpoint 1: Conference Website v1.0

**Date:** October 1, 2025

**Purpose:** This document serves as a comprehensive checkpoint for the conference website project. It outlines the initial goal, summarizes all development work completed to date, and details the project's architecture. This will provide a solid foundation for the next phase of development without losing context.

---

### I. Project Goal & Current Status

The primary goal was to transform a static, single-file HTML page into a **dynamic, data-driven, and easily maintainable React application**.

**Current Status:** **Complete**. The initial goal has been met. The website is fully functional, component-based, pulls all its content from data files, and has been successfully deployed and is live on GitHub Pages.

---

### II. Key Accomplishments ✅

We have successfully built and deployed a modern web application with the following features:

- **Component-Based Architecture:** The entire UI has been broken down into reusable React components.
- **Data-Driven Content:** All text, lists, and information (speakers, schedule, themes, etc.) have been separated from the presentation layer, making content updates simple and code-free.
- **Fully Responsive Design:** The site is built with a mobile-first approach using Tailwind CSS, ensuring it looks great on all devices.
- **Interactive UI:** We've implemented interactive elements using React state (`useState`), including a mobile hamburger menu, a tabbed schedule, and an accordion for abstracts.
- **Global Theme Switching:** A persistent dark/light mode feature has been implemented using React Context (`useContext`), allowing users to choose their preferred theme.
- **Successful Deployment:** The project has been uploaded to GitHub and deployed as a live website using GitHub Pages, with a proper build process configured in Vite.

---

### III. Project Architecture: Where to Find Important Things

This is your guide to navigating the project for future modifications. Understanding this structure is key to efficient development.

#### Key Directories

- **`src/components/`**

- **What it is:** The heart of the UI. This folder contains all the individual "building blocks" of the website.
  - **When to modify:** When you need to change the _look_, _layout_, or _structure_ of a section.
  - **Files:** `Header.jsx`, `Hero.jsx`, `About.jsx`, `Themes.jsx`, `Schedule.jsx`, `Speakers.jsx`, `Abstracts.jsx`, `Registration.jsx`, `Contact.jsx`, `Footer.jsx`, `ThemeSwitcher.jsx`.

- **`src/data/`**

- **What it is:** The "brain" or the single source of truth for all website **content**.
  - **When to modify:** When you need to change **text, add a speaker, update the schedule, or alter any information** displayed on the site. This is where most future updates will happen.
  - **Files:** `about.js`, `abstracts.js`, `contact.js`, `navigation.js`, `registration.js`, `schedule.js`, `speakers.js`, `themes.js`.

- **`src/context/`**
    - **What it is:** Manages global state that needs to be shared across the entire application.
    - **When to modify:** Only when you need to add or change a global feature (like the theme switcher).
    - **Files:** `ThemeProvider.jsx` (controls the dark/light mode logic).

#### Key Files

- **`src/App.jsx`**

- **What it is:** The main "assembler" for the page. It imports all the components from `src/components/` and arranges them in the correct order to form the final webpage.

- **`src/main.jsx`**

- **What it is:** The top-level entry point for the entire React application. Its main job is to render the `App` component and wrap it with any global providers, like our `ThemeProvider`.

- **`tailwind.config.js`** (Root Folder)

- **What it is:** The central configuration file for all styling.
  - **When to modify:** When you want to change the core color palette (e.g., the primary purple or secondary red), fonts, or add custom design system tokens.

- **`package.json`** (Root Folder)

- **What it is:** The project's manifest. It lists all dependencies and defines key scripts.
  - **Important Sections:** The `scripts` section contains the `deploy` command for publishing the site. The `homepage` property is critical for the deployment to work correctly.

- **`vite.config.js`** (Root Folder)
    - **What it is:** The configuration file for our build tool, Vite.
    - **Important Sections:** The `base` property is essential for ensuring the deployed site on GitHub Pages can find its assets.

---

### IV. The "Why": Our Development Philosophy

The reason we built the site this way is centered on two key principles: **Maintainability** and **Scalability**.

1.  **Easy Maintenance:** By separating content (`src/data/`) from presentation (`src/components/`), we've made the website incredibly easy to update. To change a speaker's name or a schedule time, a person no longer needs to understand React or HTML; they simply need to edit a plain JavaScript data file. This drastically lowers the barrier for future content updates.

2.  **Future-Proof Scalability:** The component-based model means the site is not a rigid, single entity. We can easily add new sections, rearrange existing ones in `App.jsx`, or even expand this into a multi-page site in the future by adding new "page" components. The foundation is robust and ready to grow.

This modern workflow ensures the project remains organized, easy to debug, and simple to hand off to another developer if needed.
