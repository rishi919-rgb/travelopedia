# Travelopedia – AI Travel Companion

> Your intelligent, context-aware travel partner for safety, discovery, and seamless journeys.

**Figma Design**: https://www.figma.com/design/4fYUX71AGbIBLB1eZoPCew/Untitled?node-id=318-13&t=VeaJUe0H8SFmklQt-1

---

## Problem Statement

Modern travelers face persistent challenges that diminish the joy of exploration:

- **Safety Concerns**: Solo travelers, especially women, often feel vulnerable in unfamiliar environments lacking real-time safety nets.
- **Essential Resource Scarcity**: Finding critical amenities like charging stations, clinics, or safe zones on-the-go remains difficult and time-consuming.
- **Language Barriers**: Menus, signs, and local interactions become obstacles without instant translation tools.
- **Generic Experiences**: Over-reliance on tourist traps leads to missing authentic local culture and hidden gems.

These issues create stress, reduce spontaneity, and limit meaningful travel experiences.

---

## Solution

Travelopedia integrates **context-aware intelligence** to transform travel into a secure, enriching, and effortless experience. By combining real-time safety mechanisms, utility services, AI-driven assistance, vision-based translation, and hyper-local discovery, Travelopedia adapts dynamically to the user's location, mode, and needs — acting as a true travel companion.

---

## Key Features

### 🛡️ Safety System
- **SOS Alert**: One-tap emergency signal sharing live location with contacts and local authorities.
- **Safe Zones**: Dynamically updated areas rated by safety scores (crime data, user feedback, lighting).
- **Live Tracking**: Optional real-time location sharing with trusted contacts during journeys.
- **Check-in Reminders**: Automated prompts to confirm safety after entering/exiting zones.

### ⚡ Utility Layer
- **Charging Station Finder**: Real-time availability of public chargers (EV & device).
- **Clinic & Pharmacy Locator**: Nearest medical facilities with ratings and wait times.
- **Essential Services**: ATMs, water refill points, public restrooms, and laundromats.
- **Offline Access**: Critical utility data cached for low-connectivity areas.

### 🤖 AI Assistant
- **Chat-Based Help**: Natural language queries for itinerary changes, local customs, or emergency phrases.
- **Proactive Suggestions**: Contextual tips (e.g., “Rain expected in 2h—seek covered attractions”).
- **Multi-Lingual Support**: Understands and responds in 50+ languages.
- **Personalized Learning**: Adapts recommendations based on user history and preferences.

### 📷 Vision System
- **Menu & Sign Translation**: Point camera at text for instant AR overlay translation.
- **Object Recognition**: Identify plants, landmarks, or products for contextual info.
- **Batch Processing**: Translate entire documents or multiple signs quickly.
- **Low-Light Mode**: Enhanced OCR for dimly lit environments.

### 🌍 Discovery Engine
- **Hyper-Local Recommendations**: Curated spots known only to locals (cafes, trails, events).
- **Cultural Event Alerts**: Real-time notifications of festivals, markets, or performances nearby.
- **Authenticity Scoring**: Ranks experiences by local patronage vs. tourist density.
- **User-Generated Hidden Gems**: Community-shared offbeat locations with verification.

### 🎒 Travel Mode System
Travelopedia’s interface and intelligence adapt dynamically to three distinct traveler profiles:

| Mode | Priority | UI Adaptation | Recommendation Focus |
|------|----------|---------------|----------------------|
| **Solo Female Mode** | Maximum Safety | Prominent SOS button, safe zone highlighting, discreet check-ins | Well-lit paths, female-hosted stays, group tours |
| **Solo Traveler Mode** | Balanced Exploration | Equal emphasis on safety & discovery, social meetup alerts | Hostels, co-working cafes, local meetups |
| **Family Mode** | Comfort & Planning | Stroller-friendly routes, rest stop suggestions, activity timers | Parks, kid-friendly museums, family suites |

Modes are selectable or inferred from travel companions’ profiles and trip context.

---

## Tech Stack

- **Frontend**: React Native with Expo (TypeScript) for cross-platform iOS/Android.
- **Backend**: Node.js / Express REST API (deployed on AWS EC2 with Docker).
- **Database**: MongoDB Atlas for flexible, scalable storage of user trails, POIs, and interactions.
- **Maps**: Mapbox SDK for customizable, offline-capable maps with safety layer overlays.
- **AI Services**:
  - Conversational: OpenAI GPT-4o (fallback to Llama 3 via Hugging Face).
  - Vision: Tesseract.js for OCR + custom CNN models for object recognition.
- **Real-Time**: Socket.IO for live location sharing and SOS alerts.
- **Authentication**: JWT with Firebase Auth (Google/Apple/OAuth).
- **DevOps**: GitHub Actions for CI/CD; Prometheus & Grafana for monitoring.

---

## System Architecture

```plaintext
+---------------------+      +---------------------+      +---------------------+
|   Mobile Client     |<---->|     API Gateway     |<---->|   Auth Service      |
| (React Native/Expo) |      | (Node.js/Express)   |      | (Firebase/JWT)      |
+---------------------+      +---------------------+      +---------------------+
          ^                           ^                          ^
          |                           |                          |
          |                           v                          v
+---------------------+      +---------------------+      +---------------------+
|   Safety Engine     |      |   Utility Engine    |      |   Discovery Engine  |
| (SOS, Tracking)     |      | (POIs, Routing)     |      | (Local Recs, Events)|
+---------------------+      +---------------------+      +---------------------+
          ^                           ^                          ^
          |                           |                          |
          |                           v                          v
+---------------------+      +---------------------+      +---------------------+
|      AI Engine      |<---->|    Vision Engine    |<---->|   Analytics Store   |
| (LLM, Context)      |      | (OCR, Recognition)  |      | (MongoDB + Redis)   |
+---------------------+      +---------------------+      +---------------------+
```

**Data Flow**:  
1. User inputs (voice, text, camera) captured by client.  
2. Preprocessed locally (vision tasks) or sent to backend via secure API.  
3. AI Engine interprets intent, consults context (location, mode, history).  
4. Relevant Engines (Safety, Utility, Discovery) generate responses.  
5. Response formatted and delivered to client with UI updates (map, chat, AR overlay).  

---

## Screens & UI

- **Home (Map)**: Interactive map showing user location, safe zones, nearby utilities, and discovery pins. Toggle layers for safety, utilities, or exploration.
- **Safety**: SOS activation, safe zone map, live tracking controls, emergency contacts, and check-in history.
- **Assistant**: Chat interface with AI companion, voice input, quick-action buttons (“Find clinic”, “Translate menu”), and suggestion carousel.
- **Scanner**: Camera view with translation overlay, flash control, history of scanned texts, and copy/share options.
- **Explore**: Curated lists of local experiences, filterable by type (food, culture, adventure), with authenticity scores and booking links.

Design follows Material 3 principles with adaptive dark/light mode, accessible touch targets, and motion-reducing options.

---

## How It Works (User Flow)

1. **Arrival in New City**:  
   - User opens Travelopedia; app detects location via GPS.  
   - Safety Engine highlights surrounding safe zones and loads utility POIs.  
   - AI Assistant greets with a contextual tip: “Welcome to Barcelona! Tap for today’s hidden gem.”

2. **Finding Essentials**:  
   - User taps “Utilities” → selects “Charging”.  
   - Map displays real-time availability of nearby chargers with plug types and pricing.  
   - Navigation launched via integrated maps.

3. **AI Assistance**:  
   - User asks via voice: “Where can I find authentic paella away from tourists?”  
   - AI Engine consults Discovery Engine + local reviews, responds with a hidden Valencia-style restaurant and offers to book a table.

4. **Menu Translation**:  
   - User points camera at a Spanish menu; Vision Engine overlays English text in real time.  
   - Taps a dish to see ingredients and allergen info.

5. **Evening Exploration**:  
   - As dusk falls, Safety Engine increases safe zone prominence.  
   - Discovery Engine suggests a local flamenco show in a resident’s courtyard (authenticity score: 9.2/10).  
   - User shares live location with a friend for the duration of the event.

---

## Installation & Setup

### Prerequisites
- Node.js >= 18
- Expo CLI (or Android Studio / Xcode for emulators)
- MongoDB Atlas account
- Mapbox access token
- OpenAI API key (or Hugging Face token for Llama 3)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/rishi919-rgb/travelopedia.git
   cd travelopedia
   ```

2. **Install dependencies**
   ```bash
   # Backend
   cd backend
   npm install
   
   # Frontend
   cd ../frontend
   npm install
   ```

3. **Configure environment**
   - Create `.env` in `backend/`:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_atlas_uri
     JWT_SECRET=your_jwt_secret
     MAPBOX_TOKEN=your_mapbox_token
     OPENAI_API_KEY=your_openai_key
     ```
   - Create `.env` in `frontend/` (Expo):
     ```
     EXPO_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
     EXPO_PUBLIC_API_URL=http://localhost:5000/api
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