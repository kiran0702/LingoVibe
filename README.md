# LingoVibe

LingoVibe is a social language-learning platform where users can find language partners, practice conversations, and build connections across cultures.

## Features

- Secure signup and login with JWT and HTTP-only cookies
- Friend requests and friend management
- Language-based user recommendations
- Real-time chat and calling with Stream
- Responsive React interface
- Random profile avatars during onboarding

## Tech Stack

- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose
- Chat: Stream Chat
- Authentication: JSON Web Tokens

## Getting Started

### Prerequisites

- Node.js 16 or newer
- Git
- A MongoDB Atlas cluster or local MongoDB instance
- A Stream Chat account for chat features

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/kiran0702/LingoVibe.git
cd LingoVibe

cd backend
npm install

cd ../frontend
npm install
```

Create `backend/.env` with the following values. Never commit this file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_super_secret_jwt_key
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
NODE_ENV=development
```

Start the backend and frontend in separate terminals:

```bash
cd backend
npm run dev
```

```bash
cd frontend
npm run dev
```

The frontend runs at `http://localhost:5173` and the backend runs at `http://localhost:5000`.

## Deployment

The backend can be deployed to Render, Railway, or Heroku. The frontend can be deployed to Vercel or Netlify. Configure all environment variables through the hosting provider's secret settings.

For a combined Render deployment, configure these variables before building:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
VITE_STREAM_API_KEY=your_stream_api_key
NODE_ENV=production
CLIENT_URL=https://your-render-domain.onrender.com
```

MongoDB Atlas must also allow the deployment network in its IP access list. Otherwise MongoDB rejects the connection even when `MONGODB_URI` is correct.

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch and open a pull request.

## License

This project is distributed under the MIT License.

## Links

- Live demo: https://lingovibe.onrender.com/
- Repository: https://github.com/kiran0702/LingoVibe
<div align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</div>

<h1 align="center">🌐 LingoVibe</h1>

### **Server-Side (Backend)**

- **[Node.js](https://nodejs.org/)**: JavaScript Runtime
- **[Express.js](https://expressjs.com/)**: Web Framework
- **[MongoDB](https://www.mongodb.com/)**: NoSQL Database
- **JWT**: Secure Authentication Protocol

## 🛠️ Getting Started

Follow these instructions to set up the project locally on your machine.

</p>

```bash
cd frontend
npm run dev
```

The application runs at `http://localhost:5173` with the backend on `http://localhost:5000`.

## ⚙️ Production Deployment

- **Backend**: Ready for platforms such as Render, Railway, or Heroku. Configure environment variables in the platform dashboard.
- **Frontend**: Can be hosted on Vercel or Netlify. Run `npm run build` in the frontend directory for a production build.

## 🤝 Contributing

Contributions make the open-source community stronger and are greatly appreciated.

1. Fork the project.
2. Create a feature branch: `git checkout -b feature/AmazingFeature`.
3. Commit your changes.
4. Push the branch and open a pull request.

## 📄 License

Distributed under the MIT License.

## 📬 Contact

**Kiran P**

- Email: [kiran7722p@gmail.com](mailto:kiran7722p@gmail.com)
- LinkedIn: [Kiran P](https://www.linkedin.com/in/kiran-p-2a74b3310/)

---

<p align="center">
  <em>🧠 LingoVibe is more than just a project — it’s a step toward creating meaningful digital communities through languages. Built with passion and open for the world to contribute!</em>
</p>
cd backend
npm run dev

````

**Frontend:**
```bash
cd frontend
npm run dev
````

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
