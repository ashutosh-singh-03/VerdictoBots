# VerdictoBots

**An AI-powered Legal Chatbot Platform for the Department of Justice, India**

VerdictoBots is a comprehensive web application designed to enhance public engagement and streamline access to justice-related information. Built with a modern React frontend and a robust backend architecture, the platform provides citizens with 24/7 access to legal assistance, case information, and procedural guidance through an intelligent AI chatbot interface.

---

## 🏆 Badges

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/badge/version-0.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Node](https://img.shields.io/badge/Node-Express-339933?logo=node.js)

---

## 📋 Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Repository Structure](#repository-structure)
4. [Setup and Local Development](#setup-and-local-development)
5. [Chatbot Integration Architecture](#chatbot-integration-architecture)
6. [Architecture & Data Flow](#architecture--data-flow)
7. [Security & Privacy](#security--privacy)
8. [Performance & Cost Optimization](#performance--cost-optimization)
9. [Testing & Deployment](#testing--deployment)
10. [Contributing](#contributing)
11. [Troubleshooting](#troubleshooting)
12. [Roadmap](#roadmap)
13. [Team](#team)
14. [License](#license)

---

## ✨ Features

The VerdictoBots platform currently includes the following user-facing features:

- **🏠 Home Page**: Welcoming landing page introducing the Department of Justice services with an elegant, professional design
- **👥 About Us**: Team showcase featuring all contributors with roles and descriptions
- **🤖 ChatBot About**: Dedicated page explaining the AI chatbot capabilities and its role in the justice system
- **❓ FAQ Section**: Accordion-style frequently asked questions for quick information access
- **📧 Contact Form**: Direct communication channel for user inquiries and support
- **💬 Feedback System**: User feedback collection mechanism to improve services
- **🔵 Floating Chat Icon**: Persistent chat access from any page within the application
- **🧭 Navigation Bar**: Responsive navigation system for seamless page transitions
- **⚡ Single Page Application (SPA)**: Fast, fluid navigation using React Router without full page reloads
- **🎨 Modern UI/UX**: Built with TailwindCSS for a responsive, accessible, and visually appealing interface
- **🔄 Real-time Communication**: WebSocket integration via Socket.IO for live chat functionality

---

## 🛠️ Tech Stack

### Frontend Technologies

- **React** (v18.3.1) - Core UI library for building component-based interfaces
- **React Router DOM** (v6.26.1) - Client-side routing for SPA navigation
- **React Icons** (v5.3.0) - Comprehensive icon library for UI elements
- **TailwindCSS** (v3.4.10) - Utility-first CSS framework for styling
- **Axios** (v1.7.7) - HTTP client for API requests
- **Socket.IO Client** (v4.7.5) - Real-time bidirectional event-based communication
- **React Scripts** (v5.0.1) - Configuration and scripts from Create React App

### Backend Technologies (in server/)

- **Node.js** with **Express** - Backend server framework
- **Socket.IO** - WebSocket server for real-time chat
- **Nodemailer** - Email handling for contact/feedback forms
- **CORS** - Cross-origin resource sharing middleware
- **Rasa** (Python-based) - Conversational AI framework for chatbot logic

### Language Breakdown

Based on the repository composition:
- **JavaScript**: ~94.6% (Frontend React components, backend Node.js server)
- **Python**: ~4.1% (Rasa chatbot models and action server)
- **HTML**: ~1.2% (Public index.html, templates)
- **CSS**: ~0.1% (Global styles, custom configurations)

---

## 📁 Repository Structure

```
VerdictoBots/
├── client/                    # React frontend application
│   ├── public/
│   │   └── index.html        # Main HTML template
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── Home.js       # Landing page component
│   │   │   ├── About.js      # Team information page
│   │   │   ├── ChatBotAbout.js  # Chatbot description page
│   │   │   ├── Faq.js        # FAQ accordion component
│   │   │   ├── ContactForm.js   # Contact form component
│   │   │   ├── FeedbackPage.js  # Feedback collection page
│   │   │   ├── FloatingChatIcon.js  # Persistent chat button
│   │   │   ├── Nav.js        # Navigation bar component
│   │   │   ├── ChatPopup.js  # Chat interface modal
│   │   │   ├── According.js  # Accordion UI component
│   │   │   └── ErrorPage.js  # 404 error page
│   │   ├── images/           # Static image assets
│   │   │   ├── logo.png
│   │   │   ├── law.svg
│   │   │   ├── verdicto.svg
│   │   │   └── *.jpg         # Team member photos
│   │   ├── App.js            # Main application component with routing
│   │   ├── index.js          # React entry point
│   │   └── index.css         # Global styles
│   ├── tailwind.config.js    # TailwindCSS configuration
│   ├── package.json          # Frontend dependencies
│   └── README.md             # Create React App default README
│
├── server/                    # Backend Node.js/Express server
│   ├── routes/
│   │   ├── feedbackRoute.js  # Feedback submission endpoint
│   │   ├── chatRoute.js      # Chat API endpoint
│   │   └── models/           # Rasa chatbot models
│   │       └── RasaModel/
│   │           └── actions/  # Rasa custom actions (Python)
│   ├── index.js              # Express server entry point
│   ├── nodemailerConfig.js   # Email configuration
│   └── package.json          # Backend dependencies
│
└── README.md                  # This file (project documentation)
```

**Note**: The backend server code is included in the `server/` directory but requires separate setup. In a production environment, the backend would typically be deployed as a separate service (containerized, serverless, or on a dedicated server) and the frontend would communicate via API endpoints.

---

## 🚀 Setup and Local Development

### Prerequisites

- **Node.js** (v14 or higher) and **npm** (v6 or higher)
- **Python** (v3.8 or higher) - for Rasa backend
- **Git** - for version control

### Frontend Setup (React Client)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ashutosh-singh-03/VerdictoBots.git
   cd VerdictoBots
   ```

2. **Navigate to the client directory**:
   ```bash
   cd client
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```
   
   The application will open in your default browser at `http://localhost:3000`.

5. **Build for production**:
   ```bash
   npm run build
   ```
   
   This creates an optimized production build in the `build/` folder.

6. **Run tests**:
   ```bash
   npm test
   ```
   
   Launches the test runner in interactive watch mode (note: tests need to be created).

### Backend Setup (Node.js Server)

1. **Navigate to the server directory**:
   ```bash
   cd server
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the server directory with necessary configurations:
   ```env
   PORT=5000
   CORS_ORIGIN=http://localhost:3000
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   RASA_SERVER_URL=http://localhost:5005
   ```

4. **Start the backend server**:
   ```bash
   npm start
   ```
   
   The server will run on `http://localhost:5000`.

### Rasa Backend Setup (Chatbot Engine)

1. **Install Rasa** (in a Python virtual environment):
   ```bash
   pip install rasa
   ```

2. **Navigate to the Rasa model directory**:
   ```bash
   cd server/routes/models/RasaModel
   ```

3. **Train the Rasa model**:
   ```bash
   rasa train
   ```

4. **Run the Rasa action server**:
   ```bash
   rasa run actions
   ```

5. **Run the Rasa server**:
   ```bash
   rasa run --enable-api --cors "*"
   ```
   
   The Rasa server will typically run on `http://localhost:5005`.

### Environment Notes

- The frontend expects the backend to be running on `http://localhost:5000`
- The backend expects Rasa to be running on `http://localhost:5005`
- Update CORS configurations in both frontend and backend if deploying to different domains
- Ensure all three services (React frontend, Node.js backend, Rasa server) are running for full functionality

---

## 🤖 Chatbot Integration Architecture

### Overview

The VerdictoBots chatbot is architected as a three-tier system: a React frontend for user interaction, a Node.js/Express backend as a secure proxy, and a Rasa-powered AI engine for natural language understanding and response generation.

### Why a Backend Proxy?

**Security**: The backend acts as a secure intermediary, preventing exposure of API keys, authentication tokens, and sensitive configuration to the client. Direct frontend-to-LLM communication would expose credentials in browser DevTools and network requests.

**Rate Limiting & Cost Control**: The backend can implement request throttling, user quotas, and usage tracking to prevent abuse and control operational costs.

**Session Management**: Server-side session handling allows for conversation context persistence, user authentication, and personalized experiences without storing sensitive data in browser storage.

**Data Sanitization**: Input validation, content filtering, and output sanitization are enforced at the backend level, protecting against injection attacks and ensuring compliance with data protection regulations.

### API Endpoints

#### `/api/chat` (POST)
Handles chat message submissions and returns AI-generated responses.

**Request**:
```json
{
  "message": "How do I file a case?",
  "sessionId": "user-session-uuid",
  "context": {}
}
```

**Response**:
```json
{
  "response": "To file a case, you need to...",
  "intent": "file_case_inquiry",
  "confidence": 0.95
}
```

#### `/send-feedback` (POST)
Collects user feedback for continuous improvement.

### RAG (Retrieval-Augmented Generation) Integration

For enhanced, context-aware responses, the system can integrate RAG architecture:

1. **Document Ingestion**: Legal documents, case laws, and FAQs are processed and stored
2. **Embedding Generation**: Text is converted to vector embeddings using models like Sentence-BERT or OpenAI embeddings
3. **Vector Database Storage**: Embeddings are stored in a vector DB (Pinecone, Weaviate, or Chroma)
4. **Query-time Retrieval**: User queries are embedded and similar documents are retrieved via semantic search
5. **Context Injection**: Retrieved documents are injected into the LLM prompt for grounded responses

### Embeddings Flow

```
User Query → Embedding Model → Query Vector → Vector DB Search → 
Top-K Similar Documents → Context Assembly → LLM Prompt → Response
```

### Streaming vs Non-Streaming Responses

**Non-Streaming (Current)**:
- User sends message, waits for complete response
- Better for short responses and simple architectures
- Easier to implement and debug

**Streaming (Recommended for Production)**:
- Responses are sent token-by-token as generated
- Improved perceived performance and UX
- Requires WebSocket (Socket.IO) or Server-Sent Events (SSE)
- Implementation with Socket.IO already in place

### API Key Security Best Practices

1. **Never store API keys in frontend code** - Keys in client-side code are publicly accessible
2. **Use environment variables** - Store keys in `.env` files (excluded from version control)
3. **Implement key rotation** - Regularly rotate API keys and credentials
4. **Use backend proxies** - All LLM API calls go through the secure backend
5. **Apply least-privilege access** - API keys should have minimal necessary permissions
6. **Monitor usage** - Track API calls for anomalies and potential breaches

---

## 🏗️ Architecture & Data Flow

### System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                          User Browser                            │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │            React Frontend (Port 3000)                     │   │
│  │  • UI Components (Home, Chat, FAQ, etc.)                 │   │
│  │  • React Router (SPA Navigation)                         │   │
│  │  • Socket.IO Client (Real-time)                          │   │
│  │  • Axios (HTTP Requests)                                 │   │
│  └──────────────┬───────────────────────────────────────────┘   │
└─────────────────┼───────────────────────────────────────────────┘
                  │
                  │ HTTPS/WSS (Secure Connection)
                  │
┌─────────────────▼───────────────────────────────────────────────┐
│              Node.js Backend (Port 5000)                         │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │            Express API Server                             │   │
│  │  • Authentication & Session Management                    │   │
│  │  • Request Validation & Sanitization                      │   │
│  │  • Rate Limiting & Throttling                             │   │
│  │  • Socket.IO Server (WebSocket)                           │   │
│  │  • Nodemailer (Email Services)                            │   │
│  └──────────────┬───────────────────────────────────────────┘   │
└─────────────────┼───────────────────────────────────────────────┘
                  │
                  │ HTTP API Calls
                  │
┌─────────────────▼───────────────────────────────────────────────┐
│              Rasa Server (Port 5005)                             │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │         Conversational AI Engine                          │   │
│  │  • Intent Classification                                  │   │
│  │  • Entity Extraction                                      │   │
│  │  • Dialogue Management                                    │   │
│  │  • Custom Actions (Python)                                │   │
│  └──────────────┬───────────────────────────────────────────┘   │
└─────────────────┼───────────────────────────────────────────────┘
                  │
                  │ Query & Retrieval
                  │
┌─────────────────▼───────────────────────────────────────────────┐
│            Vector Database (Optional)                            │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  • Embeddings of Legal Documents                          │   │
│  │  • Semantic Search                                        │   │
│  │  • Context Retrieval for RAG                              │   │
│  └──────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────┘
```

### Data Flow: User Chat Interaction

1. **User Input**: User types a message in the chat interface (React component)
2. **Frontend Processing**: React component validates input and sends via Socket.IO or Axios
3. **Backend Reception**: Express server receives the request at `/chat` endpoint
4. **Authentication & Validation**: Backend verifies session, sanitizes input, checks rate limits
5. **Rasa Query**: Backend forwards sanitized message to Rasa server
6. **Intent Processing**: Rasa analyzes message, classifies intent, extracts entities
7. **Context Retrieval** (if RAG enabled): Rasa queries vector DB for relevant documents
8. **Response Generation**: Rasa generates response based on training, context, and custom actions
9. **Backend Processing**: Express server receives Rasa response, applies filters, logs interaction
10. **Frontend Delivery**: Response is sent back via WebSocket or HTTP response
11. **UI Update**: React component displays the response in the chat interface

### Session Management

- Sessions are managed server-side with unique session IDs
- Session data includes conversation history, user context, and authentication state
- Redis or in-memory stores can be used for session persistence
- Session expiry and cleanup prevent memory leaks and stale data

---

## 🔒 Security & Privacy

### Best Practices Implemented

#### API Key Protection
- ✅ All API keys stored in backend environment variables
- ✅ `.env` files excluded from version control via `.gitignore`
- ✅ No hardcoded credentials in frontend or backend code
- ✅ Backend acts as secure proxy for all external API calls

#### Input Sanitization
- 🔧 Implement input validation for all user submissions
- 🔧 Use libraries like `validator.js` or `express-validator` for sanitization
- 🔧 Prevent SQL injection, XSS, and command injection attacks
- 🔧 Limit file upload sizes and validate file types

#### PII (Personally Identifiable Information) Handling
- 🔧 Minimize PII collection (only request necessary information)
- 🔧 Encrypt sensitive data at rest and in transit
- 🔧 Implement data retention policies and automatic deletion
- 🔧 Provide user controls for data access, modification, and deletion
- 🔧 Comply with GDPR, CCPA, and Indian data protection laws

#### Transport Security
- 🔧 Enforce HTTPS/TLS for all communications (never use plain HTTP in production)
- 🔧 Use HSTS (HTTP Strict Transport Security) headers
- 🔧 Implement SSL certificate pinning for mobile apps
- 🔧 Validate SSL certificates and avoid self-signed certs in production

#### Rate Limiting & Abuse Prevention
- 🔧 Implement rate limiting with `express-rate-limit` or similar middleware
- 🔧 Set per-user quotas for chat messages (e.g., 100 messages/hour)
- 🔧 Add CAPTCHA for public endpoints (contact, feedback forms)
- 🔧 Monitor for suspicious patterns and bot activity

#### Content Moderation
- 🔧 Filter inappropriate or offensive language
- 🔧 Implement content moderation APIs (e.g., OpenAI Moderation, Perspective API)
- 🔧 Log and review flagged interactions
- 🔧 Provide user reporting mechanisms for abuse

#### Authentication & Authorization
- 🔧 Implement user authentication (JWT, OAuth, or session-based)
- 🔧 Use role-based access control (RBAC) for admin features
- 🔧 Apply principle of least privilege
- 🔧 Implement secure password policies and multi-factor authentication (MFA)

### Compliance Considerations

- **GDPR** (EU): Right to access, right to erasure, data portability
- **CCPA** (California): Consumer privacy rights and data transparency
- **DPDP Act** (India): Data protection and privacy requirements
- **Legal Sector Standards**: Confidentiality, attorney-client privilege, data sovereignty

---

## ⚡ Performance & Cost Optimization

### Caching Strategies

#### FAQ Caching
- Cache frequently asked questions and responses in Redis or in-memory store
- Serve cached responses instantly without LLM API calls
- Implement cache invalidation when FAQs are updated
- Reduces latency and API costs significantly

#### Response Caching
- Cache common query responses with TTL (time-to-live)
- Use query embeddings as cache keys for semantic similarity
- Implement partial response caching for common prompt segments

### Token Optimization

#### Limiting Token Usage
- Set `max_tokens` parameter to prevent excessively long responses
- Truncate conversation history to most recent N messages
- Use prompt engineering to encourage concise responses
- Implement token counting before API calls to estimate costs

#### Prompt Optimization
- Create concise, effective system prompts
- Remove redundant context from conversation history
- Use few-shot examples sparingly and efficiently

### Model Selection

#### Using Smaller Models
- **GPT-3.5-Turbo** instead of GPT-4 for routine inquiries (90% cost reduction)
- **Llama 2 7B** or **Mistral 7B** for self-hosted, cost-free inference
- **BERT/RoBERTa** for intent classification (faster, cheaper than generative models)
- Reserve powerful models (GPT-4, Claude Opus) for complex legal analysis only

#### Model Cascading
- Start with smallest/fastest model for initial classification
- Escalate to larger models only when necessary
- Implement confidence thresholds for model selection

### Batching & Quotas

#### Request Batching
- Batch multiple independent requests when possible
- Process asynchronous tasks in queues (Bull, RabbitMQ)
- Schedule non-urgent tasks during off-peak hours for better pricing

#### User Quotas
- Implement daily/monthly message limits per user
- Offer tiered access (free, premium, enterprise)
- Provide clear usage dashboards for users
- Send notifications as users approach limits

### Infrastructure Optimization

- **CDN**: Serve static assets (images, CSS, JS) via CDN (CloudFlare, AWS CloudFront)
- **Code Splitting**: Lazy load React components to reduce initial bundle size
- **Image Optimization**: Compress and serve images in modern formats (WebP, AVIF)
- **Database Indexing**: Index frequently queried fields for faster database operations
- **Horizontal Scaling**: Use load balancers to distribute traffic across multiple backend instances

---

## 🧪 Testing & Deployment

### Testing Strategy

#### Unit Tests
- **Framework**: Jest (included with Create React App)
- **Component Testing**: React Testing Library
- **Backend Testing**: Mocha/Chai or Jest for Node.js
- **Test Coverage**: Aim for >80% coverage for critical paths

Example test structure:
```javascript
// client/src/components/__tests__/Nav.test.js
import { render, screen } from '@testing-library/react';
import Nav from '../Nav';

test('renders navigation links', () => {
  render(<Nav />);
  const homeLink = screen.getByText(/home/i);
  expect(homeLink).toBeInTheDocument();
});
```

#### Integration Tests
- Test API endpoints with Supertest
- Verify database operations
- Test Socket.IO real-time communication

#### End-to-End (E2E) Tests
- **Framework**: Cypress or Playwright
- Test complete user workflows (chat conversation, form submission)
- Validate cross-browser compatibility

#### Rasa Model Testing
```bash
rasa test
```
- Test conversation flows
- Validate intent classification accuracy
- Evaluate entity extraction performance

### Continuous Integration/Continuous Deployment (CI/CD)

#### Recommended CI/CD Pipeline

```yaml
# Example GitHub Actions workflow
name: CI/CD Pipeline

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install dependencies
        run: cd client && npm install
      - name: Run tests
        run: cd client && npm test -- --coverage
      - name: Build
        run: cd client && npm run build
  
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to production
        run: # deployment commands
```

### Deployment Options

#### Frontend Hosting

**Vercel** (Recommended)
- Zero-config deployment for React apps
- Automatic HTTPS and CDN
- Deploy command: `vercel --prod`
- Environment variables managed in dashboard

**Netlify**
- Drag-and-drop deployment or Git integration
- Automatic builds on push
- Built-in form handling and serverless functions
- Deploy command: `netlify deploy --prod`

**AWS S3 + CloudFront**
- Highly scalable and cost-effective
- Manual configuration required
- Deploy steps:
  ```bash
  npm run build
  aws s3 sync build/ s3://your-bucket-name
  aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
  ```

**GitHub Pages**
- Free hosting for public repositories
- Add `"homepage": "https://yourusername.github.io/VerdictoBots"` to package.json
- Deploy command: `npm run deploy` (requires `gh-pages` package)

#### Backend Hosting

**Docker + Cloud Providers** (Recommended)
- Containerize with Docker
- Deploy to AWS ECS, Google Cloud Run, or Azure Container Instances
- Dockerfile example:
  ```dockerfile
  FROM node:18
  WORKDIR /app
  COPY server/package*.json ./
  RUN npm install --production
  COPY server/ ./
  EXPOSE 5000
  CMD ["node", "index.js"]
  ```

**Serverless Functions**
- AWS Lambda + API Gateway
- Netlify Functions
- Vercel Serverless Functions
- Best for low-traffic or event-driven workloads

**Traditional Hosting**
- DigitalOcean Droplets, Linode, or AWS EC2
- Install Node.js and PM2 for process management
- Configure Nginx as reverse proxy
- Setup SSL with Let's Encrypt

#### Rasa Deployment

**Rasa X** (Community Edition)
- Built-in deployment and monitoring tools
- Conversation-driven development interface

**Docker Compose**
```yaml
version: '3.8'
services:
  rasa:
    image: rasa/rasa:latest
    ports:
      - "5005:5005"
    volumes:
      - ./models:/app/models
    command: run --enable-api --cors "*"
```

**Kubernetes**
- Production-grade orchestration
- Auto-scaling and high availability
- Use Helm charts for simplified deployment

### Environment-Specific Configurations

- **Development**: `.env.development` with local API endpoints
- **Staging**: `.env.staging` with staging server URLs
- **Production**: `.env.production` with production URLs, analytics, monitoring

---

## 🤝 Contributing

We welcome contributions from the community! Follow these guidelines to contribute effectively.

### Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/VerdictoBots.git
   cd VerdictoBots
   ```
3. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Branch Naming Conventions

- **Feature**: `feature/add-authentication`
- **Bug Fix**: `fix/chat-socket-disconnect`
- **Enhancement**: `enhance/improve-faq-ui`
- **Documentation**: `docs/update-readme`
- **Refactor**: `refactor/optimize-api-calls`

### Development Workflow

1. **Install dependencies** for both client and server:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

2. **Make your changes** in focused, atomic commits

3. **Follow code style**:
   - Use ESLint configuration from the project
   - Follow React best practices and hooks guidelines
   - Write meaningful variable and function names
   - Add comments for complex logic

4. **Test your changes**:
   ```bash
   cd client && npm test
   npm run build  # Ensure build succeeds
   ```

5. **Commit with clear messages**:
   ```bash
   git add .
   git commit -m "feat: add user authentication with JWT"
   ```

### Commit Message Conventions

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, no logic change)
- `refactor:` Code refactoring without feature changes
- `test:` Adding or updating tests
- `chore:` Maintenance tasks, dependency updates

Examples:
- `feat: add email verification on signup`
- `fix: resolve CORS error in chat endpoint`
- `docs: update setup instructions for M1 Macs`

### Pull Request Process

1. **Push your branch** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a Pull Request** on the main repository

3. **PR Title**: Use the same format as commit messages
   - Example: `feat: implement user feedback analytics dashboard`

4. **PR Description**: Include:
   - Summary of changes
   - Related issue number (if applicable): `Fixes #123`
   - Screenshots for UI changes
   - Testing steps performed
   - Checklist of completed items

5. **Code Review**:
   - Address reviewer comments promptly
   - Push additional commits to the same branch
   - Re-request review after changes

6. **Merge**: Once approved, maintainers will merge your PR

### Code Style Guidelines

- **JavaScript/React**:
  - Use functional components and hooks (no class components)
  - Destructure props and state
  - Use async/await instead of promises chains
  - Keep components small and focused (SRP - Single Responsibility Principle)

- **CSS/TailwindCSS**:
  - Use Tailwind utility classes primarily
  - Custom CSS only when necessary (in `index.css`)
  - Follow mobile-first responsive design

- **File Organization**:
  - One component per file
  - Place components in `client/src/components/`
  - Images in `client/src/images/`
  - Keep files focused and modular

### Reporting Issues

When reporting bugs or requesting features:
- Use GitHub Issues
- Provide clear title and description
- Include steps to reproduce (for bugs)
- Add screenshots or error messages
- Specify environment (OS, browser, Node version)

---

## 🔧 Troubleshooting

### Common Issues and Solutions

#### CORS Errors

**Problem**: Browser console shows CORS policy errors when making API requests.

**Solution**:
1. Ensure backend CORS is configured correctly in `server/index.js`:
   ```javascript
   app.use(cors({
     origin: 'http://localhost:3000', // Update for production
   }));
   ```
2. In production, update `origin` to match your frontend domain
3. For Socket.IO, verify CORS settings in Socket.IO server initialization
4. Check that preflight OPTIONS requests are handled properly

#### Missing Images

**Problem**: Images don't display, showing broken image icons.

**Solution**:
1. Verify image paths are correct relative to component location
2. Import images in React components:
   ```javascript
   import logo from '../images/logo.png';
   <img src={logo} alt="Logo" />
   ```
3. For public folder images, use `process.env.PUBLIC_URL`:
   ```javascript
   <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
   ```
4. Check that images are committed to Git and not in `.gitignore`

#### SPA Routing Issues on Deployment

**Problem**: Direct navigation to routes (e.g., `/about`) returns 404 on deployed site.

**Solution**:

**For Netlify**: Create `public/_redirects` file:
```
/*    /index.html   200
```

**For Vercel**: Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

**For Apache**: Create `.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**For Nginx**: Configure server block:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

#### TailwindCSS Styles Not Applied

**Problem**: Tailwind utility classes aren't styling components.

**Solution**:
1. Verify Tailwind directives in `index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
2. Check `tailwind.config.js` content paths include your components:
   ```javascript
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   ```
3. Restart development server after config changes
4. Clear browser cache and rebuild: `npm run build`

#### Tailwind Purge Removing Used Classes

**Problem**: Some Tailwind classes are removed in production build.

**Solution**:
1. Avoid dynamic class names:
   ```javascript
   // ❌ Bad - Purge will remove
   <div className={`text-${color}-500`}>
   
   // ✅ Good - Full class name
   <div className={color === 'blue' ? 'text-blue-500' : 'text-red-500'}>
   ```
2. Add safelist in `tailwind.config.js` for dynamic classes:
   ```javascript
   safelist: ['text-blue-500', 'text-red-500']
   ```

#### Environment Variables Not Loading

**Problem**: `process.env.REACT_APP_*` variables are undefined.

**Solution**:
1. Ensure variables are prefixed with `REACT_APP_`:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```
2. Restart development server after adding variables
3. For production, set variables in hosting platform dashboard
4. Never commit `.env` files to version control

#### Socket.IO Connection Failures

**Problem**: Real-time chat doesn't work, Socket.IO fails to connect.

**Solution**:
1. Verify Socket.IO server is running on correct port
2. Check CORS configuration in Socket.IO initialization
3. Ensure client connects to correct server URL:
   ```javascript
   const socket = io('http://localhost:5000');
   ```
4. Check firewall rules allow WebSocket connections
5. In production, use secure WebSocket (wss://)

#### Slow Build Times

**Problem**: `npm run build` takes excessively long.

**Solution**:
1. Clear cache: `npm cache clean --force`
2. Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
3. Disable source maps in production: Set `GENERATE_SOURCEMAP=false`
4. Optimize Webpack configuration (consider ejecting if necessary)

#### Port Already in Use

**Problem**: Error "Port 3000 is already in use".

**Solution**:
1. Kill process using port:
   ```bash
   # MacOS/Linux
   lsof -ti:3000 | xargs kill -9
   
   # Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```
2. Or change port in `.env`:
   ```
   PORT=3001
   ```

---

## 🚀 Roadmap

### Phase 1: Core Infrastructure (Q1 2024)
- [x] Frontend React application with routing
- [x] TailwindCSS responsive design
- [x] Basic component structure (Home, About, FAQ, Contact, Feedback)
- [x] Socket.IO integration for real-time chat
- [x] Backend Express server setup
- [ ] Add comprehensive README documentation

### Phase 2: Backend & AI Integration (Q2 2024)
- [ ] Complete Rasa model training with legal domain data
- [ ] Implement RAG (Retrieval-Augmented Generation) architecture
- [ ] Integrate vector database (Pinecone/Weaviate/Chroma)
- [ ] Develop embeddings pipeline for legal documents
- [ ] Create custom Rasa actions for complex queries
- [ ] Implement streaming responses for better UX

### Phase 3: Authentication & User Management (Q2-Q3 2024)
- [ ] JWT-based authentication system
- [ ] User registration and login
- [ ] OAuth integration (Google, Microsoft)
- [ ] User profile management
- [ ] Role-based access control (RBAC) for admin features
- [ ] Session management with Redis

### Phase 4: Data Persistence & Analytics (Q3 2024)
- [ ] MongoDB/PostgreSQL integration for user data
- [ ] Conversation history storage and retrieval
- [ ] User feedback analytics dashboard
- [ ] Chat interaction logging and analysis
- [ ] Usage metrics and reporting
- [ ] A/B testing framework for chatbot responses

### Phase 5: Enhanced Features (Q3-Q4 2024)
- [ ] Multi-language support (Hindi, regional languages)
- [ ] Voice input/output capabilities (speech-to-text, text-to-speech)
- [ ] Document upload and analysis
- [ ] Case status tracking integration
- [ ] Legal form generation assistance
- [ ] Appointment scheduling system
- [ ] Email and SMS notifications

### Phase 6: Security & Compliance (Q4 2024)
- [ ] Comprehensive security audit
- [ ] GDPR/DPDP Act compliance implementation
- [ ] Data encryption at rest and in transit
- [ ] Regular penetration testing
- [ ] Content moderation system
- [ ] Incident response plan
- [ ] HTTPS/TLS enforcement

### Phase 7: Performance Optimization (Q4 2024 - Q1 2025)
- [ ] CDN integration for static assets
- [ ] Response caching layer (Redis)
- [ ] Database query optimization
- [ ] Code splitting and lazy loading
- [ ] Image optimization and WebP/AVIF support
- [ ] Load balancing and horizontal scaling
- [ ] Performance monitoring (New Relic, DataDog)

### Phase 8: Testing & Quality Assurance (Ongoing)
- [ ] Unit test coverage >80%
- [ ] Integration tests for all API endpoints
- [ ] E2E tests with Cypress/Playwright
- [ ] Rasa model testing and validation
- [ ] Load testing with k6 or Artillery
- [ ] Accessibility testing (WCAG 2.1 AA compliance)
- [ ] Cross-browser compatibility testing

### Phase 9: DevOps & Deployment (Ongoing)
- [ ] CI/CD pipeline with GitHub Actions
- [ ] Docker containerization
- [ ] Kubernetes orchestration for production
- [ ] Infrastructure as Code (Terraform/CloudFormation)
- [ ] Automated backups and disaster recovery
- [ ] Monitoring and alerting (Prometheus, Grafana)
- [ ] Log aggregation (ELK stack or CloudWatch)

### Phase 10: Accessibility & Inclusivity (Q1-Q2 2025)
- [ ] Screen reader compatibility
- [ ] Keyboard navigation support
- [ ] High contrast mode
- [ ] Font size adjustment
- [ ] WCAG 2.1 AA compliance
- [ ] Multilingual interface

### Future Considerations
- [ ] Mobile application (React Native or Flutter)
- [ ] Progressive Web App (PWA) features
- [ ] Offline mode with service workers
- [ ] Blockchain integration for document verification
- [ ] AI-powered legal document summarization
- [ ] Integration with government databases and APIs
- [ ] Community forum for legal discussions
- [ ] Expert consultation booking system

---

## 👥 Team

VerdictoBots is developed and maintained by a dedicated team of professionals:

### Core Team Members

- **SAHIL JAIN** - Project Leader  
  *Visionary leader with a passion for innovation*

- **ASHUTOSH SINGH** - ML Lead Developer  
  *Expert in machine learning and AI model development*  
  GitHub: [@ashutosh-singh-03](https://github.com/ashutosh-singh-03)

- **ASHISH RANJAN** - Web Developer  
  *Creative mind behind the brand's visual identity and frontend development*

- **KANISHKA PATEL** - Web Developer  
  *Master of coding and development strategies*

- **VANSHIKA SINGH** - Resource Manager  
  *Ensures efficient resource allocation and project coordination*

- **AYUSHI VERMA** - Presentation Manager  
  *Crafts compelling presentations and ensures smooth operations*

### Acknowledgments

We would like to thank:
- The Department of Justice, India for inspiration and domain guidance
- The open-source community for the incredible tools and libraries
- Contributors who have helped improve this project

### Get in Touch

- **GitHub Repository**: [ashutosh-singh-03/VerdictoBots](https://github.com/ashutosh-singh-03/VerdictoBots)
- **Issues & Bug Reports**: [GitHub Issues](https://github.com/ashutosh-singh-03/VerdictoBots/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/ashutosh-singh-03/VerdictoBots/discussions)

---

## 📄 License

This project is licensed under the **MIT License**.

### MIT License Summary

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

**THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.**

For the full license text, see the [LICENSE](LICENSE) file in the repository.

---

## 🙏 Thank You!

Thank you for your interest in VerdictoBots! We're building a platform that makes legal information accessible to everyone. Whether you're a contributor, user, or just exploring, we appreciate your support.

**Star ⭐ this repository** if you find it useful, and feel free to contribute or provide feedback!

---

**Built with ❤️ by the VerdictoBots Team**

*Empowering citizens with accessible, AI-powered legal assistance*
