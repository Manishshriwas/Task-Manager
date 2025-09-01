# Task Management Application

A full-stack task management application with user authentication and MongoDB integration.

## Features

- ✅ User authentication (login/register)
- ✅ Create, read, update, and delete todos
- ✅ JWT token-based authentication
- ✅ MongoDB database integration
- ✅ Responsive UI with Tailwind CSS
- ✅ Real-time todo management

## 🚀 Live Demo

- **Backend API**: https://task-manager-backend1-s3o1.onrender.com/api
- **Frontend**: Coming soon (deploy to Vercel/Netlify)

## Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **CORS** for cross-origin requests

### Frontend
- **React** with Vite
- **React Router** for navigation
- **Tailwind CSS** for styling
- **React Icons** for UI icons

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Manishshriwas/Task-Manager.git
   cd Task-Manager
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Set up MongoDB**
   
   **Option A: Local MongoDB**
   ```bash
   # Start MongoDB service
   brew services start mongodb-community
   ```
   
   **Option B: MongoDB Atlas (Recommended for deployment)**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a free account and cluster
   - Get your connection string
   - Update the `MONGO_URI` in `backend/.env`

4. **Configure environment variables**
   ```bash
   cd backend
   # Edit .env file with your MongoDB connection string
   nano .env
   ```

5. **Start the servers**
   ```bash
   # Start backend (Terminal 1)
   cd backend
   npm start
   
   # Start frontend (Terminal 2)
   cd frontend
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5174
   - Backend API: http://localhost:8000 (local development)
   - Backend API: https://task-manager-backend1-s3o1.onrender.com/api (production)

## Environment Variables

### Backend (.env file)
```env
# MongoDB Connection String
# For local development: mongodb://localhost:27017/task-management
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/task-management
MONGO_URI=mongodb://localhost:27017/task-management

# JWT Secret Key
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Server Port
PORT=8000
```

## Deployment

### Backend Deployment (Heroku/Railway/Render)

1. **Set up MongoDB Atlas**
   - Create a MongoDB Atlas account
   - Create a new cluster
   - Get your connection string
   - Replace `<username>`, `<password>`, and `<cluster>` with your values

2. **Deploy to your preferred platform**
   ```bash
   # Example for Heroku
   heroku create your-app-name
   heroku config:set MONGO_URI="mongodb+srv://username:password@cluster.mongodb.net/task-management"
   heroku config:set JWT_SECRET="your-production-jwt-secret"
   git push heroku main
   ```

3. **Update frontend API URL**
   - Edit `frontend/src/api.js`
   - Change `API_URL` to your deployed backend URL
   ```javascript
   // For Render deployment
   const API_URL = "https://task-manager-backend1-s3o1.onrender.com/api";
   ```

### Frontend Deployment (Vercel/Netlify)

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

3. **Deploy to Netlify**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Todos (Protected Routes)
- `GET /api/todos` - Get all todos for authenticated user
- `POST /api/todos` - Create a new todo
- `PATCH /api/todos/:id/toggle` - Toggle todo completion
- `DELETE /api/todos/:id` - Delete a todo

## Troubleshooting

### MongoDB Connection Issues

**Error: `ECONNREFUSED ::1:27017`**
- Make sure MongoDB is running locally
- Check if MongoDB service is started: `brew services list | grep mongodb`
- For deployment, use MongoDB Atlas instead of local MongoDB

**Error: `Authentication failed`**
- Check your MongoDB Atlas credentials
- Ensure your IP address is whitelisted in MongoDB Atlas
- Verify the connection string format

### Port Issues

**Error: `EADDRINUSE :::8000`**
- Kill the process using port 8000: `lsof -ti:8000 | xargs kill -9`
- Or change the PORT in .env file

### Frontend Issues

**API calls failing**
- Check if backend is running
- Verify API_URL in `frontend/src/api.js`
- Check browser console for CORS errors

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

If you encounter any issues, please:
1. Check the troubleshooting section
2. Review the console logs
3. Create an issue on GitHub with detailed error information


