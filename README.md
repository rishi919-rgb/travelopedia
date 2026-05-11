<h1 align="center">
  <img src="https://raw.githubusercontent.com/rishi919-rgb/travelopedia/main/frontend/public/logo.png" alt="Travelopedia" width="60" />
  <br />
  Travelopedia – AI Travel Companion
</h1>

<p align="center">
  <b>A production-grade, full-stack travel safety platform powered by real-time data, geospatial intelligence, and an AI assistant (AURA).</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat&logo=mongodb" />
  <img src="https://img.shields.io/badge/Socket.IO-Realtime-010101?style=flat&logo=socket.io" />
  <img src="https://img.shields.io/badge/Google-Gemini_AI-4285F4?style=flat&logo=google" />
  <img src="https://img.shields.io/badge/Mapbox-GL-000000?style=flat&logo=mapbox" />
</p>

---

## ✨ Features

| Feature | Status |
|---|---|
| 🔐 JWT Authentication (Register / Login) | ✅ Complete |
| 🗺️ Interactive Mapbox Dark Map | ✅ Complete |
| 🤖 AURA — Gemini-powered AI Assistant | ✅ Complete |
| ⚡ Quick Action Carousel (auto-prompt AI) | ✅ Complete |
| 📍 Live Location Tracking (WebSocket) | ✅ Complete |
| 🆘 Real-time SOS Broadcast System | ✅ Complete |
| 🏥 Geospatial POI Queries (Clinics, Chargers) | ✅ Complete |
| 🛡️ Safe Zone Boundary Engine | ✅ Complete |
| 👤 User Profile Dashboard | ✅ Complete |
| 🔔 Global Toast Notification System | ✅ Complete |
| 🔒 Private Route Guards | ✅ Complete |
| 🌐 Centralized Axios API with JWT Injection | ✅ Complete |

---

## 🏗️ Architecture

```
travelopedia/
├── frontend/                  # React + Vite application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Assistant/     # ChatInterface, ActionCarousel
│   │   │   ├── Common/        # Loader, PrivateRoute, LocationTracker
│   │   │   ├── Home/          # Map UI, DiscoveryPanel, SOSButton
│   │   │   └── Map/           # MapComponent (Mapbox GL)
│   │   ├── pages/             # Home, Login, Register, Profile, Assistant, Scanner
│   │   ├── router/            # AppRouter with protected routes
│   │   ├── services/          # api.js (Axios), socket.js (Socket.IO)
│   │   └── store/             # Redux Toolkit (authSlice, poiSlice)
│   └── .env                   # VITE_API_URL, VITE_MAPBOX_TOKEN
│
└── backend/                   # Node.js + Express API
    ├── src/
    │   ├── config/            # MongoDB connection
    │   ├── controllers/       # auth, user, poi, ai controllers
    │   ├── middlewares/       # JWT protect middleware
    │   ├── models/            # user, poi, safezone models
    │   └── routes/            # auth, user, poi, ai routes
    └── .env                   # PORT, MONGO_URI, JWT_SECRET, GEMINI_API_KEY
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Mapbox Access Token
- Google Gemini API Key

### 1. Clone the repository
```bash
git clone https://github.com/rishi919-rgb/travelopedia.git
cd travelopedia
```

### 2. Configure Environment Variables

**Backend** — create `backend/.env`:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_jwt_key
GEMINI_API_KEY=your_google_gemini_api_key
```

**Frontend** — create `frontend/.env`:
```env
VITE_API_URL=http://localhost:5000/api
VITE_MAPBOX_TOKEN=your_mapbox_access_token
```

### 3. Install dependencies & run

```bash
# Backend
cd backend
npm install
npm run dev

# Frontend (in a new terminal)
cd frontend
npm install
npm run dev
```

The app will be available at **http://localhost:5173**

---

## 🔌 API Reference

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/auth/register` | ❌ | Register a new user |
| `POST` | `/api/auth/login` | ❌ | Login and receive JWT |
| `GET` | `/api/user/profile` | ✅ | Get authenticated user profile |
| `PUT` | `/api/user/profile` | ✅ | Update user profile & travel mode |
| `GET` | `/api/pois` | ❌ | Get all Points of Interest |
| `GET` | `/api/pois/radius/:lat/:lng/:km` | ❌ | Get POIs within a radius |
| `POST` | `/api/ai/chat` | ✅ | Send a message to AURA (Gemini AI) |

---

## ⚡ Real-Time Socket Events

| Event | Direction | Description |
|---|---|---|
| `location_update` | Client → Server | Emit live GPS coordinates |
| `sos_triggered` | Client → Server | Broadcast an SOS alert |
| `sos_cancelled` | Client → Server | Cancel an active SOS |
| `sos_alert` | Server → All Clients | Receive SOS notification |
| `sos_resolved` | Server → All Clients | SOS has been cancelled |

---

## 🛠️ Tech Stack

**Frontend:** React 18, Vite, Redux Toolkit, React Router v6, Mapbox GL, Framer Motion, Formik, Yup, react-hot-toast, Socket.IO Client, Lucide React

**Backend:** Node.js, Express, MongoDB, Mongoose, Socket.IO, JSON Web Tokens, Google Generative AI (Gemini)

---

## 📄 License

MIT © [Rishi](https://github.com/rishi919-rgb)