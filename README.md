# 📝 Google Tasks Clone (Built with Vite + React)

A fast, lightweight task management app built using **Vite** and **React**. Add, prioritize, and organize tasks with a clean UI, persistent storage, and responsive design.

---

## 🚀 Features

- 📌 Add tasks with title and description  
- ⭐ Star/unstar tasks to mark importance  
- 📂 View all or only starred tasks  
- 📄 Pagination support  
- 💾 Persistent data via `localStorage`  
- 🧭 Sidebar toggle and contextual views  
- 💻 Responsive design (mobile + desktop)

---

## ⚙️ Tech Stack

- ⚡ [Vite](https://vitejs.dev/) – Lightning-fast build tool  
- ⚛️ [React](https://react.dev/) – Functional components + hooks  
- 🧠 Context API – Global state management  
- 🎨 CSS + media queries – Custom styling  
- 📦 LocalStorage – Task persistence

---

## 📁 Folder Structure

```

GOOGLETASKS/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   ├── addTask.svg
│   │   └── logo.svg
│   ├── components/
│   │   ├── Context/
│   │   │   └── TaskContext.jsx
│   │   ├── FormCard/
│   │   │   ├── BodyForm/
│   │   │   │   ├── BodyForm.jsx
│   │   │   │   └── form.css
│   │   │   └── Form/
│   │   │       ├── Form.jsx
│   │   │       └── form.css
│   │   ├── Card.jsx
│   │   ├── card.css
│   │   ├── Navbar/
│   │   │   ├── Menu.jsx
│   │   │   ├── Nav.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── nav.css
│   │   │   └── sidebar.css
│   │   ├── Pagination/
│   │   │   ├── Pagination.jsx
│   │   │   └── pagination.css
│   │   └── ShowTasks/
│   │       ├── AllTasks.jsx
│   │       ├── ShowAllTasks.jsx
│   │       ├── ShowStarTasks.jsx
│   │       └── allTasks.css
│   ├── App.jsx
│   ├── app.css
│   ├── index.js
├── .gitignore
├── .deepsource.toml
└── eslint.config.js

````

---

## 🧑‍💻 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/seshu-yaswanth-2001/googleTask.git
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Open in browser

Navigate to `http://localhost:5173` (or the port Vite tells you)

---

## 📦 Build for Production

```bash
npm run build
```

Then preview with:

```bash
npm run preview
```

---

## 🔮 Planned Features

* ✅ Task Creation
* 🗑️ Task deletion

---

## 👨‍💻 Author

Made with ❤️ by Seshu Yaswanth
GitHub: https://github.com/seshu-yaswanth-2001
