# React Blog UI

A simple React-based blog interface that displays blog posts dynamically from a JSON file.

The project includes **search and category filtering** to help users find relevant posts.

## Features

* React component-based UI
* Blog posts loaded from JSON data
* Dynamic rendering using `map()`
* Search posts by title
* Filter posts by category
* Combined search and category filtering
* Reusable Blog Card component
* Responsive design
* Simple dark-themed UI

## Components

The project is divided into reusable React components:

* **Navbar** — Displays the navigation bar
* **SearchBar** — Handles search and category selection
* **BlogCard** — Displays individual blog posts
* **BlogList** — Dynamically renders the blog cards

## Technologies Used

* React.js
* JavaScript
* HTML
* CSS
* Vite

## React Concepts Used

This project was created to practice fundamental React concepts:

* Components
* Props
* `useState`
* Event handling
* Conditional rendering
* Array `map()`
* Array `filter()`
* JSON data handling

## Search and Filter

The application provides two filtering options:

### Search

Users can search for a blog post by entering text in the search box.

### Category

Users can select a category such as:

* React
* JavaScript
* Node.js
* Database
* Backend

The application combines both conditions to display only the matching posts.

## Project Structure

```text
react-blog/
│
├── src/
│   ├── components/
│   │   ├── BlogCard.jsx
│   │   └── BlogList.jsx
│   │
│   ├── data/
│   │   └── posts.json
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## How to Run

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd react-blog
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal.

## Purpose

This project was created as part of my internship mini-project to practice **React components, props, state, JSON data, dynamic rendering, search, and filtering**.

## Author

**Saurabh Pandey**

* MCA Student, NIT Agartala
* Aspiring Full Stack Developer
