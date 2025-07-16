# Coffee Brew Log

## Introduction
A minimal, modern full-stack app to log and manage your coffee brews. Built for micro-roasteries, home baristas, and coffee enthusiasts.

## Features
- Create, read, update, and delete (CRUD) brew entries
- Filter brews by method
- Responsive, mobile-friendly UI
- Modern minimal dark design

## Tech Stack
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **ORM:** Sequelize
- **Database:** SQLite (default, can be configured for PostgreSQL/MySQL)

---

## Setup Instructions (Step-by-Step)

### 1. Clone the repository
```sh
git clone <your-repo-url>
cd <your-repo-name>
```

---

### 2. Backend Setup

#### a. Go to the backend folder:
```sh
cd backend
```

#### b. Copy the example environment file and edit it:
```sh
cp .env.example .env
```
- Open `.env` in a text editor and set your database connection string if you want to use PostgreSQL or MySQL. By default, SQLite will be used and no changes are needed.

#### c. Install backend dependencies:
```sh
npm install
```

#### d. Run database migrations:
```sh
npx sequelize db:migrate
```
- This will create the necessary tables in your database.

#### e. Start the backend server:
```sh
npm start
```
- The backend will run on http://localhost:5000 by default.
- You should see a message like `Listening on port 5000` in your terminal.

---

### 3. Frontend Setup

#### a. Open a new terminal and go to the frontend folder:
```sh
cd frontend
```

#### b. Install frontend dependencies:
```sh
npm install
```

#### c. Start the frontend development server:
```sh
npm start
```
- The frontend will run on http://localhost:3000 by default.
- It will automatically proxy API requests to the backend.
- Your browser should open automatically. If not, open http://localhost:3000 manually.

---

## Usage
- On the homepage, you will see a list of all brews.
- Use the filter dropdown to filter by brew method.
- Click "+ Add" to create a new brew entry.
- Click "Edit" on any brew to update or delete it.
- All forms require every field to be filled and will not allow negative values for grams.
- The page title will update to show the number of brews.

---

## API Endpoints (for reference)
- `GET    /api/brews`         - List all brews (optionally filter by method)
- `POST   /api/brews`         - Create a new brew
- `GET    /api/brews/:id`     - Get a single brew
- `PUT    /api/brews/:id`     - Update a brew
- `DELETE /api/brews/:id`     - Delete a brew

All endpoints expect/return JSON.

---

## Environment Variables
- All backend configuration is set in `backend/.env` (see `.env.example` for reference).
- Do **not** commit your real `.env` file to version control.

---

## Contact
For questions or contributions contact the maintainer.