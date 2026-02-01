🎨 Code Pencil — Online HTML/CSS/JS Snippet Editor
<p align="center"> <img src="https://img.shields.io/badge/Frontend-React%20%2B%20Vite-blue?style=for-the-badge" /> <img src="https://img.shields.io/badge/Backend-Node%20%2B%20Express-green?style=for-the-badge" /> <img src="https://img.shields.io/badge/Database-MongoDB-brightgreen?style=for-the-badge" /> <img src="https://img.shields.io/badge/Auth-JWT-orange?style=for-the-badge" /> <img src="https://img.shields.io/badge/Language-TypeScript-blueviolet?style=for-the-badge" /> </p> <p align="center"> <img src="https://img.shields.io/github/license/your-username/code-pencil?style=flat-square" /> <img src="https://img.shields.io/badge/Status-Active-success?style=flat-square" /> </p>
✨ Overview

Code Pencil ek modern full-stack code editor whear you can:

✏️write Live HTML/CSS/JS 

💾 you can save Snippets

🔗 you can shear your url

⬇️ download your code in a ZIP file

🗂️ and you can warched your all code

🧹and you can delete or edit

🔐 JWT cookie-based login/logout system

built with Backend:- Node, express, MongoDB + JWT cookies, and frontend:- React + Vite .

🧰 Tech Stack
Frontend

⚛️ React + TypeScript

📁 Vite

🧩 Redux Toolkit + RTK Query

🎨 TailwindCSS

⌨️ CodeMirror Editor

Backend

🟩 Node.js + Express

🍃 MongoDB + Mongoose

🔐 JWT Cookie Auth

🛠️ TypeScript

Hosting

▲ Frontend → Vercel

✨ Backend → Render

🚀 Local Setup
📌 Backend Setup
cd server
npm install
npm run dev

📌 Frontend Setup
cd client
npm install
npm run dev   # http://localhost:5173

🔑 Environment Variables
Variable	Description
MONGODB_URI	MongoDB URL
CLIENT_URL	Frontend deploy URL
JWT_KEY	Secret for JWT
PORT	Optional (default 4000)

Note: In production, cookies require:

sameSite: "none"
secure: true


So frontend must be HTTPS.

📡 API Routes
🔐 AUTH ROUTES
Method	Route	Purpose
POST	/auth/register	Create new user
POST	/auth/login	Login + sets HttpOnly cookie
POST	/auth/logout	Clears cookie
GET	/auth/userInfo	Get user + saved codes
🗂️ SNIPPET ROUTES
Method	Route	Purpose
POST	/compile/saveCode	Save/update code snippet
POST	/compile/loadCode	Load snippet using short URL
GET	/compile/my-codes	Fetch all user snippets
DELETE	/compile/delete/:id	Delete snippet
📦 Sample Payloads
Save Code Example

