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
- **Backend:** Node.js, Express, Sequelize ORM (deployed on Heroku)
- **Database:** PostgreSQL (Heroku Postgres)

---

## Getting Started

### 1. Clone the Repository
- Go to [https://github.com/SixxPathz/micro-roastery-brew-logger-SixxPathz](https://github.com/SixxPathz/micro-roastery-brew-logger-SixxPathz)
- Clone the repository:
- Open your terminal and run:
  ```sh
  git clone https://github.com/SixxPathz/micro-roastery-brew-logger-SixxPathz.git
  cd micro-roastery-brew-logger-SixxPathz
  ```

---

## Backend Deployment (Heroku)

### 1. Prerequisites
- Install the Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli
- Create a Heroku account: https://signup.heroku.com/

### 2. Create a new Heroku app
- Open your terminal in the project root directory
- Log in to Heroku:
  ```sh
  heroku login
  ```
- Create a new Heroku app:
  ```sh
  heroku create your-app-name
  ```
  (If you don't specify a name, Heroku will generate one for you)

### 3. Add PostgreSQL Database
- Add Heroku Postgres to your app:
  ```sh
  heroku addons:create heroku-postgresql:essential-0
  ```
  (This creates a PostgreSQL database and automatically sets the `DATABASE_URL` environment variable)

### 4. Environment Variables (CORS)
- Set the `FRONTEND_URL` environment variable:
  ```sh
  heroku config:set FRONTEND_URL=https://your-site.netlify.app
  ```
- Set `NODE_ENV` to production:
  ```sh
  heroku config:set NODE_ENV=production
  ```

**Note:** You can initially set `FRONTEND_URL` to a placeholder and update it after deploying your frontend to Netlify.

### 5. Deploy to Heroku
- Make sure you're in the project root directory
- Deploy your backend:
  ```sh
  git subtree push --prefix backend heroku main
  ```
  (This command pushes only the `backend` folder to Heroku)
  
  Or if you prefer, you can use:
  ```sh
  git push heroku `git subtree split --prefix backend main`:main --force
  ```

### 6. Database Migrations and Seeding
- The `heroku-postbuild` script in `package.json` automatically runs migrations and seeds the database with sample brew data when you deploy.
- Your database will be populated with 8 sample brew entries automatically!

### 7. API URL
- After deploy, your backend URL will be: `https://your-app-name.herokuapp.com`
- You can open your app with:
  ```sh
  heroku open
  ```

### 8. Useful Heroku Commands
- View logs: `heroku logs --tail`
- Run migrations manually: `heroku run npm run migrate`
- Run seeds manually: `heroku run npm run seed`
- Access Postgres: `heroku pg:psql`

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
  - VALUE = https://your-app-name.herokuapp.com
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
