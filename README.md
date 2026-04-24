# Travelopedia – AI Travel Companion

> Your intelligent, context-aware travel partner for safety, discovery, and seamless journeys.

**Figma Design**: https://www.figma.com/design/4fYUX71AGbIBLB1eZoPCew/Untitled?node-id=318-13&t=VeaJUe0H8SFmklQt-1

---

## 🌟 Problem Statement
Modern travelers face persistent challenges that diminish the joy of exploration:
- **Safety Concerns**: Solo travelers, especially women, often feel vulnerable in unfamiliar environments lacking real-time safety nets.
- **Resource Scarcity**: Finding critical amenities like charging stations or pharmacies on-the-go is time-consuming.
- **Language Barriers**: Menus and signs become obstacles without instant translation tools.
- **Generic Experiences**: Over-reliance on tourist traps leads to missing authentic local culture.

## 💡 The Solution
Travelopedia integrates **context-aware intelligence** to transform travel into a secure, enriching, and effortless experience. By combining real-time safety mechanisms, utility services, AI-driven assistance, and vision-based translation, it acts as a true digital companion.

---

## 🚀 Key Features

### 🛡️ Safety System
- **SOS Alert**: One-tap emergency signal sharing live location with contacts and authorities.
- **Safe Zones**: Dynamically updated areas rated by safety scores and user feedback.
- **Live Tracking**: Optional real-time location sharing during journeys.

### ⚡ Utility Layer
- **Resource Finder**: Real-time availability of public chargers (EV & device) and clinics.
- **Essential Services**: ATMs, water refill points, and public restrooms.

### 🤖 AI Assistant
- **Travelopedia AI**: Chat-based concierge for itinerary changes, local customs, and emergency phrases.
- **Proactive Tips**: Contextual advice (e.g., “Rain expected—visit the Prado Museum nearby”).

### 📷 Vision System
- **AR Translation**: Point camera at text for instant AR overlay translation.
- **Object Recognition**: Identify landmarks or products for contextual info.

---

## 🎒 Travel Mode System
The interface and intelligence adapt dynamically to three distinct traveler profiles:

| Mode | Priority | UI Adaptation | Recommendation Focus |
|------|----------|---------------|----------------------|
| **Solo Female** | Maximum Safety | Prominent SOS, safe zone highlighting | Well-lit paths, female-hosted stays |
| **Solo Traveler** | Exploration | Balanced safety & discovery alerts | Hostels, co-working cafes |
| **Family** | Comfort | Stroller-friendly routes, rest stops | Parks, kid-friendly venues |

---

## 🛠️ Tech Stack
- **Frontend**: React (Vite), Redux Toolkit, Framer Motion, Tailwind CSS.
- **Backend**: Node.js / Express REST API (AWS EC2).
- **Database**: MongoDB Atlas.
- **Maps**: Mapbox GL JS.
- **AI/Vision**: OpenAI GPT-4o / Gemini / Tesseract.js.

---

## 🏗️ System Architecture
```plaintext
+---------------------+      +---------------------+      +---------------------+
|   Mobile Web Client |<---->|     API Gateway     |<---->|   Auth Service      |
|    (React / Vite)   |      | (Node.js/Express)   |      | (JWT / MongoDB)     |
+---------------------+      +---------------------+      +---------------------+
          ^                           ^                          ^
          |                           |                          |
+---------------------+      +---------------------+      +---------------------+
|   Safety Engine     |      |   Utility Engine    |      |   AI Vision Engine  |
| (SOS, Tracking)     |      | (POIs, Routing)     |      | (OCR, Recognition)  |
+---------------------+      +---------------------+      +---------------------+
```

---

## 📦 Installation & Setup

1. **Clone & Setup**
   ```bash
   git clone https://github.com/rishi919-rgb/travelopedia.git
   cd travelopedia
   ```

2. **Frontend**
   ```bash
   cd frontend && npm install
   npm run dev
   ```

3. **Backend**
   ```bash
   cd ../backend && npm install
   npm run dev
   ```