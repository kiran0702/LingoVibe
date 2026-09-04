<div align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</div>

<h1 align="center">🌐 LingoVibe</h1>

<p align="center">
  <strong>A premium language-learning social platform that empowers users to connect, practice, and achieve fluency together.</strong><br>
  <em>Breaking down language barriers and building global communities.</em>
</p>

<p align="center">
  <a href="https://lingovibe.onrender.com/"><strong>🔗 View Live Demo</strong></a>
  ·
  <a href="https://github.com/kiran0702/LingoVibe/issues">Report Bug</a>
  ·
  <a href="https://github.com/kiran0702/LingoVibe/issues">Request Feature</a>
</p>

---

## 📖 Table of Contents
- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## 🌟 About the Project

**LingoVibe** is a modern social networking platform specifically designed for language enthusiasts. Whether you're a beginner trying to learn the basics of Spanish or an advanced speaker looking to maintain your Japanese fluency, LingoVibe connects you with like-minded peers across the globe. 

Unlike traditional language learning apps that focus heavily on repetitive exercises, LingoVibe emphasizes **real-world practice and social connection**. Users can find language partners, engage in conversations, and learn through cultural exchange.

## 🚀 Key Features

- **🔐 Secure Authentication:** Robust user signup, login, and secure session management using JSON Web Tokens (JWT) and HTTP-only cookies.
- **🤝 Dynamic Friend System:** Connect with peers seamlessly. Send, accept, or decline friend requests to build your personalized language learning network.
- **🌍 Smart Language Matching:** Our algorithm recommends language partners based on your target languages and proficiency levels.
- **📱 Responsive & Modern UI:** A sleek, fully responsive user interface built with Tailwind CSS, ensuring a seamless experience across desktop, tablet, and mobile devices.
- **🔎 Discoverability:** Browse recommended users and language experts to expand your network instantly.

## 📦 Tech Stack

LingoVibe is built using the MERN stack, leveraging modern tools for optimal performance and developer experience.

### **Client-Side (Frontend)**
- **[React.js](https://reactjs.org/)**: UI Library
- **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first styling framework

### **Server-Side (Backend)**
- **[Node.js](https://nodejs.org/)**: JavaScript Runtime
- **[Express.js](https://expressjs.com/)**: Web Framework
- **[MongoDB](https://www.mongodb.com/)**: NoSQL Database
- **JWT**: Secure Authentication Protocol

## 🛠️ Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/download/) (v16 or higher)
- [Git](https://git-scm.com/)
- A MongoDB cluster (e.g., [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kiran0702/LingoVibe.git
   cd LingoVibe
   ```

2. **Install Backend Dependencies & Configure Environment**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_jwt_key
   ```

3. **Install Frontend Dependencies & Configure Environment**
   ```bash
   cd ../frontend
   npm install
   ```
   Create a `.env` file in the `frontend` directory:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

4. **Run the Development Servers**

   Open two terminal windows.
   
   **Terminal 1 (Backend):**
   ```bash
   cd backend
   npm run dev
   ```
   
   **Terminal 2 (Frontend):**
   ```bash
   cd frontend
   npm run dev
   ```

   The application will now be running on `http://localhost:5173` (Frontend) and `http://localhost:5000` (Backend).

## ☁️ Deployment

LingoVibe is optimized for cloud deployment.
- **Backend:** Ready to be deployed on platforms like Render, Railway, or Heroku. Ensure all environment variables are securely added to your platform's dashboard.
- **Frontend:** Can be easily hosted on Vercel or Netlify. Run `npm run build` in the frontend directory to generate the production-ready static files.

## 🤝 Contributing

Contributions make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact

**Kiran P**
- Email: [kiran7722p@gmail.com](mailto:kiran7722p@gmail.com)
- LinkedIn: [Kiran P](https://www.linkedin.com/in/kiran-p-2a74b3310/)

---
<p align="center">
  <em>Built with ❤️ for language learners worldwide.</em>
</p>
