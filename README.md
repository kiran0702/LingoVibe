<div align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</div>

<h1 align="center">🌐 LingoVibe</h1>

<p align="center">
  <strong>A language-learning social platform that helps users connect with peers, practice speaking, and improve fluency.</strong><br>
  <em>Inspired by The Social Network, this project envisions a platform where languages unite people.</em>
</p>

<p align="center">
  <a href="https://lingovibe.onrender.com/"><strong>🔗 View Live Demo</strong></a>
</p>

<hr>

## 🚀 Key Features

- **👥 User Authentication**: Secure login, signup, and session management using JWT and Cookies.
- **🤝 Friend System**: Send, accept, or reject friend requests to build your language network.
- **🌍 Language-based User Matching**: Find language partners based on the languages you want to learn or practice.
- **🔎 Recommended Users List**: Discover potential peers and language experts easily.
- **📱 Responsive UI**: Beautiful, mobile-friendly interface styled with Tailwind CSS.

## 📦 Tech Stack

### Frontend
- **React.js**: For building interactive user interfaces.
- **Tailwind CSS**: For utility-first, responsive styling.
- **Vite**: Fast frontend build tool.

### Backend
- **Node.js & Express.js**: For handling server-side logic and API requests.
- **MongoDB**: NoSQL database for flexible data storage.
- **JWT (JSON Web Tokens)**: Secure authentication and session tracking.

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/kiran0702/LingoVibe.git
cd LingoVibe
```

### 2. Install Dependencies

**For Frontend:**
```bash
cd frontend
npm install
```

**For Backend:**
```bash
cd backend
npm install
```

### 3. Environment Variables
Create a `.env` file in the `backend` directory with the following variables:
```ini
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

If needed for the frontend, create a `.env` file in the `frontend` directory:
```ini
VITE_API_URL=http://localhost:5000
```

### 4. Run the App Locally

Start both servers in separate terminal windows:

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

## ⚙️ Production Deployment

- **Backend**: Can be deployed to platforms like Render, Heroku, or DigitalOcean.
- **Frontend**: Best suited for platforms like Vercel, Netlify, or integrated with the backend static serving.
- Make sure to properly configure all **environment variables** in your production environment!

To build the frontend for production:
```bash
cd frontend
npm run build
```

## 🤝 Contributing

Contributions are always welcome! 

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the **MIT License**.

## 📬 Contact

For any queries, feedback, or collaborations, feel free to reach out:

- **Name**: Kiran P
- **Email**: kiran7722p@gmail.com
- **LinkedIn**: [Kiran P](https://www.linkedin.com/in/kiran-p-2a74b3310/)

---

<p align="center">
  <em>🧠 LingoVibe is more than just a project — it’s a step toward creating meaningful digital communities through languages. Built with passion and open for the world to contribute!</em>
</p>
