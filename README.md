# LingoVibe 🌐✨

**LingoVibe** is a modern, responsive MERN stack web application designed for language lovers to connect, learn, and interact seamlessly. It features real-time chat, notifications, user authentication, dark/light mode toggle, and an intuitive UI optimized for multiple device screen sizes.

## Features

- Responsive layout with sidebar and navbar  
- Real-time chat functionality  
- User authentication and profile management  
- Notifications system with a dedicated notifications page  
- Dark mode and light mode toggle with dropdown integration on mobile  
- Adaptive dropdown menu for profile options on small screens  
- Seamless navigation with React Router  
- Backend REST API built with Express and MongoDB  

## Tech Stack

- **Frontend:** React, React Router DOM, Tailwind CSS, lucide-react icons  
- **State Management:** Zustand (for theme and global state), with custom React hooks  
- **Backend:** Node.js, Express.js, MongoDB, Mongoose  

## Getting Started

### Prerequisites

- Node.js (version 14 or newer recommended)  
- npm or yarn  
- MongoDB instance (local or cloud)  

### Backend Setup

1. Navigate to the backend folder:
    ```bash
    cd backend
    ```

2. Create a `.env` file (you can use `.env.example` as a template) and set:
    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the backend server (with nodemon for development):
    ```bash
    npm run dev
    ```

### Frontend Setup

1. Navigate to the frontend folder:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm run dev
    ```

> The frontend typically runs at [http://localhost:3000](http://localhost:3000) and communicates with backend APIs.

## Usage

- Register and log in to access all features  
- Navigate between Home, Friends, Notifications, and Chat pages  
- Toggle light/dark mode using the theme selector (in dropdown on mobile)  
- Use avatar dropdown for profile and logout options  

## Deployment

- Backend: Deploy to Render, Heroku, or any Node.js-compatible platform  
- Frontend: Deploy to Vercel, Netlify, or integrate with backend  
- Set all environment variables securely in production  

To build the frontend for production:
```bash
npm run build
Contributing
Contributions are welcome!
Fork the repository, make your changes, and open a pull request.

License
This project is licensed under the MIT License.
You are free to use, modify, and distribute it with proper attribution.

Contact
GitHub: https://github.com/kiran0702/LingoVibe

Live Demo: https://lingovibe.onrender.com

LingoVibe started as a passion project inspired by my love for languages, culture, and tech.  
It’s been a rewarding journey building it from scratch — tackling challenges, learning new tools, and bringing this idea to life.

If you find it useful, interesting, or inspiring in any way, feel free to leave a ⭐ on the repo or share your thoughts!  
I’m always open to feedback, collaboration, or just geeking out about code.

Thanks for stopping by — and happy coding! 🚀
