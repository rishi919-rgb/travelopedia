# AURA – AI Travel Companion

> Your intelligent, context-aware travel partner for safety, discovery, and seamless journeys.

**Figma Design**: https://www.figma.com/design/4fYUX71AGbIBLB1eZoPCew/Untitled?node-id=318-13&t=VeaJUe0H8SFmklQt-1

---

## Tech Stack

- **Frontend**: React (Vite) with Redux Toolkit and Tailwind CSS.
- **Backend**: Node.js / Express REST API (deployed on AWS EC2).
- **Database**: MongoDB Atlas for user data and POIs.
- **Maps**: Mapbox GL JS for interactive safety and utility mapping.
- **AI Services**: OpenAI GPT-4o / Gemini for conversational and proactive assistance.

---

## Installation & Setup

### Prerequisites
- Node.js >= 18
- MongoDB Atlas account
- Mapbox access token

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/rishi919-rgb/travelopedia.git
   cd travelopedia
   ```

2. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   # Create .env with VITE_MAPBOX_TOKEN
   npm run dev
   ```

3. **Setup Backend**
   ```bash
   cd ../backend
   npm install
   # Create .env with MONGODB_URI, JWT_SECRET, etc.
   npm run dev
   ```

4. **Run the development servers**
   ```bash
   # Backend (from backend/)
   npm run dev
   
   # Frontend (from frontend/)
   expo start
   ```
   - Scan QR code with Expo Go app (iOS/Android) or run on emulator/simulator.

5. **Production Build**
   ```bash
   # Backend
   npm run build
   
   # Frontend
   expo build:android -t apk
   expo build:ios
   ```

---

## Future Improvements

- **AR Navigation**: Overlay directional arrows and safety alerts onto live camera view.
- **Wearable Integration**: SOS triggers via smartwatch vibrations; glanceable safety scores on watch face.
- **Real-Time Community Alerts**: Users report hazards (floods, protests) visible to nearby travelers.
- **Advanced AI Personalization**: Fine-tune LLMs on user travel history for predictive itinerary generation.
- **Offline-First Sync**: Queue actions locally when offline, sync upon reconnection with conflict resolution.
- **Multi-Modal Input**: Gesture-based controls for use with gloves or in bulky gear.

---

## Why This Project Stands Out

- **Real-World Impact**: Addresses critical pain points for solo, female, and family travelers—directly enhancing safety and cultural immersion.
- **System Thinking**: Holistic integration of safety, utility, AI, and discovery—not just a collection of features but a cohesive companion.
- **Multi-Feature Innovation**: Combines SOS, live tracking, AR translation, and local discovery in one fluid experience, reducing app-switching fatigue.
- **Cost-Efficient Architecture**: Leverages open-source stacks (Tesseract.js, Llama 3 fallback, MongoDB) with scalable cloud services, minimizing licensing overhead.
- **Production-Ready**: Designed with scalability, offline resilience, and privacy-first principles from the outset.

---

## Author

**Rishi Singh**  
GitHub: [@rishi919-rgb](https://github.com/rishi919-rgb)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue)](https://linkedin.com/in/rishi919-rgb) *(optional)*

---

*Travelopedia — Where every journey feels like coming home.*  