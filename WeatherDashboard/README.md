# 🌦️ Weather Dashboard

## Overview
The Weather Dashboard is a frontend capstone project built with **React (Vite)** and styled with **Tailwind CSS**. It allows users to search for current weather conditions in any city using the **OpenWeatherMap API**, displaying temperature, humidity, wind speed, and weather icons. The app emphasizes responsive UI, API integration, and deployment.

WeatherDashboard/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── ErrorMessage.jsx
│   │   └── ForecastCard.jsx        # for weekly forecast
│   ├── services/
│   │   └── weatherService.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   ├── main.jsx
│   └── vite-env.d.ts
├── .env
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md

## Features
- City search with error handling
- Weather details: temperature, humidity, wind speed, icon
- Responsive design with Tailwind CSS
- Auto refresh every few minutes
- Manual refresh button

## Setup
1. Clone the repo
2. Run `npm install`
3. Create `.env` with `VITE_OPENWEATHER_KEY=your_api_key_here`
4. Run `npm run dev`

## Deployment
- **Vercel**: Import repo, set env variable, deploy
- **Netlify**: Build with `npm run build`, publish `dist`, set env variable

## Stretch Goals
- Local storage for recent searches
- Weekly forecast
- Light/dark mode
- Geolocation API
- Internationalization
