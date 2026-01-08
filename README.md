# Media Search App 🚀

A modern **Media Search Application** built using **React, Redux Toolkit, and Vite**, allowing users to search **photos, videos, and GIFs** using public APIs and manage a personal collection.

This project focuses not only on UI but on **solid JavaScript logic, Redux state flow, async handling, and real-world debugging**.

---

## 🔗 Live Demo
👉 https://your-netlify-link.netlify.app

## 💻 GitHub Repository
👉 https://github.com/your-username/media-search-redux

---

## 🛠 Tech Stack

- **React** (Component-based UI)
- **Redux Toolkit** (Global state management)
- **Vite** (Fast build tool)
- **Axios** (API handling)
- **Unsplash API** (Photos)
- **Pexels API** (Videos)
- **Tenor API** (GIFs)
- **Netlify** (Deployment)

---

## ✨ Features

- 🔍 Search media using keywords
- 🖼 Switch between **Photos / Videos / GIFs**
- 💾 Save media to a personal collection
- ❌ Remove items from collection
- 🔄 Persistent data using LocalStorage
- ⚡ Fast UI with Vite
- 🌐 Deployed on Netlify

---

## 🧠 What I Focused On (Important)

This project was built with a **learning-first approach**, where I intentionally focused on:

- **Redux state design**  
  - Proper slice separation (`searchSlice`, `collectionSlice`)
  - Predictable state flow
- **Asynchronous logic handling**
  - API calls with loading & error states
- **Debugging real-world issues**
  - Silent Redux bugs (`activeTab` vs `activeTabs`)
  - API authentication errors (401 handling)
  - Environment variable handling in Vite & Netlify
- **JavaScript logic clarity**
  - Conditional rendering
  - Data transformation from APIs
  - Defensive coding to avoid runtime crashes

Instead of blindly following tutorials, I **debugged issues step-by-step**, verified state using logs, and fixed real deployment problems.

---

## 📁 Project Structure

src/
├── api/ # API calls (Unsplash, Pexels, Tenor)
├── components/ # Reusable UI components
├── pages/ # Page-level components
├── redux/
│ ├── features/ # Redux slices
│ └── store.js # Redux store
├── App.jsx
├── main.jsx



---

## 🚀 How to Run Locally

```bash
git clone https://github.com/your-username/media-search-redux.git
cd media-search-redux
npm install
npm run dev
