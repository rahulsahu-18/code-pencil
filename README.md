# Code Pencil

<p align="center"> <img src="https://img.shields.io/badge/Frontend-React%20%2B%20Vite-blue?style=for-the-badge" alt="React + Vite" /> <img src="https://img.shields.io/badge/Backend-Node%20%2B%20Express-green?style=for-the-badge" alt="Node + Express" /> <img src="https://img.shields.io/badge/Database-MongoDB-brightgreen?style=for-the-badge" alt="MongoDB" /> <img src="https://img.shields.io/badge/Auth-JWT-orange?style=for-the-badge" alt="JWT" /> <img src="https://img.shields.io/badge/Language-TypeScript-blueviolet?style=for-the-badge" alt="TypeScript" /> </p>

## Overview

Code Pencil is a modern full-stack playground for building HTML/CSS/JS snippets. It lets users write code, compile instantly, save projects, share short URLs, download code as ZIP, and manage saved snippets through a secure authenticated flow.

## Features

- Live HTML/CSS/JS editor with instant preview
- Save and load saved code snippets
- Share code using unique URLs
- Download the project as a ZIP file
- User registration and login with JWT cookie authentication
- View, edit, and delete saved snippets
- Responsive design for desktop and mobile

## Architecture

The app uses a clean client-server architecture:

- **Frontend:** React + Vite + TypeScript
- **State:** Redux Toolkit + RTK Query
- **Editor:** CodeMirror
- **Styling:** Tailwind CSS
- **Backend:** Node.js + Express + TypeScript
- **Database:** MongoDB + Mongoose
- **Auth:** JWT stored in secure HttpOnly cookies

### Project workflow

1. **Landing & auth**
   - User arrives on the home page
   - Login/register to access saved snippets and protected features
2. **Editor workflow**
   - Write HTML, CSS, and JavaScript in the editor
   - Switch language tabs to edit each file
   - Preview the rendered output instantly in the preview pane
3. **Saving & sharing**
   - Save code using the save dialog
   - The app returns a shareable short URL
   - Open that URL later to reload the same snippet
4. **Management**
   - Browse saved snippets under “My Codes”
   - Open any snippet in the editor
   - Delete snippets when no longer needed
5. **Download**
   - Download the current project as a ZIP archive

## Tech Stack

### Frontend

- React
- Vite
- TypeScript
- Redux Toolkit
- RTK Query
- Tailwind CSS
- CodeMirror
- React Router

### Backend

- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose
- JSON Web Tokens
- Cookie Parser

## Local Setup

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

## Environment Variables

| Variable | Description |
| --- | --- |
| `MONGODB_URI` | MongoDB connection string |
| `CLIENT_URL` | Frontend origin URL |
| `JWT_KEY` | Secret used to sign JWTs |
| `PORT` | Server port (default 4000) |

> In production, if cookies are sent cross-site, set `sameSite: "none"` and `secure: true`.

## API Routes

### Auth Routes

| Method | Route | Purpose |
| --- | --- | --- |
| POST | `/auth/register` | Create a new user |
| POST | `/auth/login` | Authenticate user and set cookie |
| POST | `/auth/logout` | Clear authentication cookie |
| GET | `/auth/userInfo` | Get current user and saved codes |

### Snippet Routes

| Method | Route | Purpose |
| --- | --- | --- |
| POST | `/compile/saveCode` | Save or update a snippet |
| POST | `/compile/loadCode` | Load a snippet by share URL |
| GET | `/compile/my-codes` | Fetch all saved snippets for user |
| DELETE | `/compile/delete/:id` | Delete a saved snippet |

## Notes

- The frontend and backend communicate via secure cookie-based authentication.
- The compiler preview pane is responsive and uses a fixed 30% width preview on desktop.
- The app is designed to work well on both mobile and desktop devices.

