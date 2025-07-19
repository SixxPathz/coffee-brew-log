# Coffee Brew Log

**Live Demo:** [https://coffee-brew-log.netlify.app/](https://coffee-brew-log.netlify.app/)
---
**Fuctional Test** [https://drive.google.com/file/d/1po5SIeffObR-1YOUTJirnuTDajTAZhnh/view?usp=sharing](https://drive.google.com/file/d/1po5SIeffObR-1YOUTJirnuTDajTAZhnh/view?usp=sharing)

---

## Introduction
A minimal, modern full-stack app to log and manage your coffee brews.

## Features
- Create, read, update, and delete (CRUD) brew entries
- Filter brews by method
- Responsive, mobile-friendly UI
- Modern minimal dark design

## Tech Stack
- **Frontend:** React, Tailwind CSS (deployed on Netlify)
- **Backend:** Node.js, Express, Sequelize ORM (deployed on Render)
- **Database:** PostgreSQL (default on Render)

---

## Getting Started

### 1. Fork the Repository
- Go to [https://github.com/Umuzi-org/micro-roastery-brew-logger-SixxPathz/tree/main](https://github.com/Umuzi-org/micro-roastery-brew-logger-SixxPathz/tree/main)
- Click the **Fork** button (top right) to create your own copy.
- Clone your fork:
- Open your terminal and run:
  ```sh
  git clone https://github.com/<your-username>/micro-roastery-brew-logger-SixxPathz.git
  cd micro-roastery-brew-logger-SixxPathz
  ```

---

## 1. Creating a PostgreSQL Database on Render

After forking the repository, your first step is to create a managed PostgreSQL database on Render:

1. Go to your Render dashboard: https://dashboard.render.com/
2. Click “New +” > “PostgreSQL”.
3. Fill in the database details (name, region) and create the database.
4. Once provisioned, click your new database to view connection details.
5. Copy the Host, Database, User, Password, and Port values.


---

## Backend Deployment (Render)

### 1. Create a new Web Service on Render
- Go to [https://dashboard.render.com/](https://dashboard.render.com/)
- Click **New +** > **Web Service**
- Connect your forked GitHub repo
- Set the root directory to `backend`
- Set the build command to:
  ```sh
  npm install
  ```
- Set the start command to:
  ```sh
  npm run migrate && npm start
  ```
- Choose Node version 20+ (Render will auto-detect from `.node-version`)

### 2. Environment Variables (PostgreSQL & CORS)

- In the Render dashboard, add the following environment variables for your backend:
  - `DB_USER` = your PostgreSQL username
  - `DB_PASSWORD` = your PostgreSQL password
  - `DB_NAME` = your PostgreSQL database name
  - `DB_HOST` = your PostgreSQL host (from Render database dashboard)
  - `DB_PORT` = 5432
  - `FRONTEND_URL` = your Netlify site URL (e.g., https://your-site.netlify.app)
  - `NODE_ENV` = production (optional, but recommended)

**Example:**
```
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
DB_HOST=your_db_host
DB_PORT=5432
FRONTEND_URL=https://your-site.netlify.app
NODE_ENV=production
```
- `FRONTEND_URL` is used by the backend to allow CORS requests from your deployed frontend.

**Important:**
Deploying to Netlify and Render:

- **Step 1:** Deploy your backend on Render. You can leave `FRONTEND_URL` blank or set it to a placeholder.
- **Step 2:** Deploy your frontend on Netlify. After deployment, copy your Netlify site URL.
- **Step 3:** Go back to your Render backend environment variables, set `FRONTEND_URL` to your Netlify site URL (e.g., `https://your-site.netlify.app`), and redeploy your backend.

This ensures your backend will accept requests from your frontend once both are live.

### 3. Database Migrations
- The start command runs migrations automatically: `npm run migrate && npm start`

### 4. API URL
- After deploy, note your Render backend URL (e.g., `https://your-backend.onrender.com`)

---

## Frontend Deployment (Netlify)

### 1. Create a new site on Netlify
- Go to [https://app.netlify.com/](https://app.netlify.com/)
- Click **Add new site** > **Import an existing project**
- Connect your forked GitHub repo
- Set the base directory to `frontend`
- Set the build command to:
  ```sh
  npm install && npm run build
  ```
- Set the publish directory to:
  ```sh
  build
  ```

### 2. Environment Variables
- In Netlify dashboard, go to **Site settings > Environment variables**
- Add:
  - KEY = REACT_APP_API_URL
  - VALUE = https://your-backend.onrender.com
- This ensures the frontend talks to your deployed backend.

### 3. Deploy
- Click **Deploy site**
- After deploy, your site will be live (e.g., `https://your-site.netlify.app`)

---

## Usage
- Visit the [Live Demo](https://coffee-brew-log.netlify.app/) or your Netlify site.
- On the homepage, you will see a list of all brews.
- Use the filter dropdown to filter by brew method.
- Click "+ Add" to create a new brew entry.
- Click "Edit" on any brew to update or delete it.
- All forms require every field to be filled and will not allow negative values for grams.
- The page title will update to show the number of brews.

---

## API Endpoints
- `GET    /api/brews`         - List all brews (optionally filter by method)
- `POST   /api/brews`         - Create a new brew
- `GET    /api/brews/:id`     - Get a single brew
- `PUT    /api/brews/:id`     - Update a brew
- `
---

---
