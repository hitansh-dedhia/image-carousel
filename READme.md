# 📸 Smart Image Carousel (Full Stack)

## 🔍 Project Overview

The **Smart Image Carousel** is a full-stack web application that displays images in a modern, interactive carousel interface. Unlike a basic carousel, this project intelligently tracks user behavior (views and clicks) and dynamically ranks images based on engagement and recency.

The system demonstrates how frontend interactions can be connected to backend analytics to create a smarter and more personalized user experience.

---

## ✨ Features

* 🎯 **Gesture-Based Navigation**

  * Swipe left/right (mobile + desktop)
  * Next/Previous buttons

* 📊 **User Interaction Tracking**

  * Tracks image **views**
  * Tracks image **clicks**

* 🧠 **Smart Ranking Algorithm**

  * Images are ranked dynamically based on:

    * Clicks
    * Views
    * Recency

* 📂 **Category-Based Recommendation**

  * Tracks category popularity
  * Boosts images from frequently interacted categories

* 🔄 **Real-Time Updates**

  * Backend updates data instantly on user actions
  * Rankings adjust dynamically

---

## 🛠️ Tech Stack

### Frontend

* React (Functional Components, Hooks)

### Backend

* Node.js
* Express.js

### Database

* In-memory data structure (No external database used)

---

## 🧠 Algorithm Explanation (Important)

The ranking system determines the order of images using a **scoring formula**:

```
score = (clicks * 3) + (views * 1) + recencyBoost + categoryBoost
```

### 🔹 1. Clicks (High Importance)

* Each click adds more weight
* Indicates strong user interest

```
clicks * 3
```

---

### 🔹 2. Views (Moderate Importance)

* Shows general popularity

```
views * 1
```

---

### 🔹 3. Recency Boost (Freshness Factor)

* Recently viewed images get higher priority
* Older images gradually lose boost

```
recencyBoost = 100 - timeDifference (in hours)
```

---

### 🔹 4. Category Boost (Personalization)

* Based on how often users interact with a category
* More interactions → higher boost for that category

```
categoryBoost = categoryStats[image.category] || 0
```

---

### 🧠 Final Behavior

* Frequently clicked images → rank higher
* Recently viewed images → stay relevant
* Popular categories → get promoted

👉 This creates a **smart and adaptive carousel system**

---

## 🚀 How to Run Locally

### 1️⃣ Clone the Repository

```
git clone <your-repo-link>
cd project-folder
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173 (or similar)
```

---

### 4️⃣ Test the Application

* Open browser → Frontend URL
* Ensure backend is running
* Interact with carousel:

  * Swipe / click buttons
  * Click images

👉 Backend will automatically track data

---

## 🔮 Future Improvements

* 🗄️ Integrate a real database (MongoDB / MySQL)
* 👤 User-based personalization (login system)
* 📊 Analytics dashboard (views, clicks, trends)
* 🎯 Advanced recommendation algorithms (ML-based)
* 🎬 Smooth animations and transitions
* 🌐 Deployment (Render / Vercel)

---

## 📌 Conclusion

This project demonstrates how a simple UI component like a carousel can be enhanced using backend logic to create a **smart, data-driven system**. It combines frontend interactivity with backend analytics, making it a strong example of a beginner-level full-stack application.

---

**Made for learning, experimentation, and academic presentation 🎓**
