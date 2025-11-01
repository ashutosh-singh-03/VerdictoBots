# VerdictoBots

A short React frontend for an AI-powered legal chatbot (UI only). Provides landing pages, FAQ, contact and a floating chat entry point. Backend for LLMs is not included.

Tech Stack
- JavaScript (React, Create React App)
- React Router
- react-icons
- Tailwind-style utility classes (CSS)

Folder structure
- client/
  - public/index.html
  - src/index.js
  - src/App.js (routing)
  - src/index.css
  - src/components/ (Home, About, ChatBotAbout, Faq, ContactForm, Nav, FloatingChatIcon, FeedbackPage)
  - src/images/

Quick start
1. cd client
2. npm install
3. npm start  # open http://localhost:3000
4. npm run build  # for production

Notes
- No backend included. To enable chat, provide a backend endpoint (e.g., POST /api/chat) and set REACT_APP_API_BASE_URL in the environment.
- Do NOT store API keys in the frontend.

License: Add a LICENSE file if you want to set one.
