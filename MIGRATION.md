# Migration Guide: Render to Heroku

This guide will help you migrate your Coffee Brew Log application from Render to Heroku PostgreSQL.

---

## Why Migrate to Heroku?

- **Reliability:** Heroku offers robust, managed PostgreSQL databases
- **Ease of Use:** Simple CLI tools and automatic configuration
- **Integration:** Seamless integration with Git deployments
- **Free Tier:** Essential-0 PostgreSQL plan for development/testing

---

## Prerequisites

Before you begin, make sure you have:

- A Heroku account ([Sign up here](https://signup.heroku.com/))
- Heroku CLI installed ([Installation guide](https://devcenter.heroku.com/articles/heroku-cli))
- Git installed and configured
- Access to your GitHub repository ([SixxPathz/micro-roastery-brew-logger-SixxPathz](https://github.com/SixxPathz/micro-roastery-brew-logger-SixxPathz))

---

## Step 1: Install Heroku CLI

### Windows (PowerShell)
```powershell
# Download and run the installer
winget install heroku
```

### macOS
```bash
brew tap heroku/brew && brew install heroku
```

### Linux
```bash
curl https://cli-assets.heroku.com/install.sh | sh
```

Verify installation:
```sh
heroku --version
```

---

## Step 2: Prepare Your Local Repository

1. **Clone the repository** (if not already done):
   ```sh
   git clone https://github.com/SixxPathz/micro-roastery-brew-logger-SixxPathz.git
   cd micro-roastery-brew-logger-SixxPathz
   ```

2. **Ensure you have the latest changes**:
   ```sh
   git pull origin main
   ```

3. **Verify the backend configuration files exist**:
   - `backend/package.json` - should have `heroku-postbuild` script
   - `backend/config/config.js` - should have production config with `DATABASE_URL`
   - `backend/seeders/20250222000000-demo-brews.js` - seed data file

---

## Step 3: Login to Heroku

```sh
heroku login
```

This will open a browser window for authentication. Log in with your Heroku credentials.

---

## Step 4: Create a New Heroku App

```sh
heroku create your-coffee-brew-app
```

**Tips:**
- Replace `your-coffee-brew-app` with your preferred app name
- App names must be unique across all Heroku apps
- If you don't specify a name, Heroku will generate one for you
- Your app URL will be: `https://your-coffee-brew-app.herokuapp.com`

**Save your app name!** You'll need it for the frontend configuration.

---

## Step 5: Add Heroku PostgreSQL

Add a PostgreSQL database to your app:

```sh
heroku addons:create heroku-postgresql:essential-0 --app your-coffee-brew-app
```

**What this does:**
- Creates a managed PostgreSQL database
- Automatically sets the `DATABASE_URL` environment variable
- Provides connection details in your Heroku dashboard

**Verify the database was created:**
```sh
heroku addons --app your-coffee-brew-app
```

---

## Step 6: Configure Environment Variables

### Set Required Environment Variables

```sh
# Set NODE_ENV to production
heroku config:set NODE_ENV=production --app your-coffee-brew-app

# Set FRONTEND_URL (use a placeholder for now, update later)
heroku config:set FRONTEND_URL=https://coffee-brew-log.netlify.app/ --app your-coffee-brew-app
```

**Note:** If you haven't deployed your frontend yet, you can use a placeholder URL and update it later.

### Verify Environment Variables

```sh
heroku config --app your-coffee-brew-app
```

You should see:
- `DATABASE_URL` (automatically set by PostgreSQL addon)
- `NODE_ENV=production`
- `FRONTEND_URL=your-netlify-url`

---

## Step 7: Deploy to Heroku

### Commit Your Changes First

Before deploying, you need to commit all the migration changes (seeder, config updates, etc.):

```sh
# Check what files have changed
git status

# Add all changes
git add -A

# Commit with a descriptive message
git commit -m "Migrate to Heroku: Add database seeder and update config for Heroku deployment"

# Push to GitHub (optional but recommended)
git push origin main
```

### Deploy to Heroku

Since your backend is in a subdirectory (`backend/`), you need to use `git subtree`:

**First, add the Heroku remote:**
```sh
heroku git:remote -a your-coffee-brew-app
```

**Option 1: Using git subtree push (recommended)**
```sh
git subtree push --prefix backend heroku main
```

**Note:** This command can take 3-5 minutes on the first deploy. Be patient and don't interrupt it.

**Option 2: Using git subtree split (if Option 1 is too slow or fails)**

For PowerShell (Windows):
```powershell
git push heroku $(git subtree split --prefix backend main):main --force
```

For Bash/Terminal (Mac/Linux):
```sh
git push heroku `git subtree split --prefix backend main`:main --force
```

**What happens during deployment:**
1. Heroku receives your code
2. Installs dependencies (`npm install`)
3. Runs the `heroku-postbuild` script (migrations + seeding)
4. Starts your app with `npm start`

---

## Step 8: Verify Deployment

### Check Deployment Logs

```sh
heroku logs --tail --app your-coffee-brew-app
```

Look for:
- ✅ Migration success messages
- ✅ Seeding completion (8 brew records inserted)
- ✅ Server started successfully

### Open Your App

```sh
heroku open --app your-coffee-brew-app
```

### Test API Endpoints

```sh
# List all brews (should show 8 seeded entries)
curl https://your-coffee-brew-app.herokuapp.com/api/brews

# Get a specific brew
curl https://your-coffee-brew-app.herokuapp.com/api/brews/1
```

---

## Step 9: Update Frontend Configuration

### Update Netlify Environment Variable

1. Go to your Netlify dashboard
2. Select your Coffee Brew Log site
3. Go to **Site settings** > **Environment variables**
4. Update `REACT_APP_API_URL` to your new Heroku URL:
   ```
   REACT_APP_API_URL=https://your-coffee-brew-app.herokuapp.com
   ```
5. **Trigger a redeploy** of your frontend

### Update Heroku FRONTEND_URL

```sh
heroku config:set FRONTEND_URL=https://your-actual-netlify-site.netlify.app --app your-coffee-brew-app
```

---

## Step 10: Verify End-to-End Functionality

1. **Visit your Netlify frontend URL**
2. **Check that brews load** (should see 8 seeded brews)
3. **Test creating a new brew** (+ Add button)
4. **Test editing a brew** (Edit button)
5. **Test filtering by method** (dropdown)
6. **Test deleting a brew** (Delete button in edit page)

---

## Step 11: Clean Up Old Render Resources

Once you've verified everything works on Heroku:

1. **Export any custom data from Render** (if you had production data):
   - Use `pg_dump` to backup your Render database
   - Import to Heroku if needed: `heroku pg:psql < backup.sql`

2. **Delete Render services**:
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Delete the Web Service
   - Delete the PostgreSQL database
   - This will stop any charges

---

## Useful Heroku Commands

### Database Management

```sh
# Access PostgreSQL console
heroku pg:psql --app your-coffee-brew-app

# View database info
heroku pg:info --app your-coffee-brew-app

# Run migrations manually
heroku run npm run migrate --app your-coffee-brew-app

# Run seeds manually
heroku run npm run seed --app your-coffee-brew-app

# Reset database (migrations + seeds)
heroku run npm run migrate:seed --app your-coffee-brew-app
```

### Application Management

```sh
# View logs (real-time)
heroku logs --tail --app your-coffee-brew-app

# View recent logs
heroku logs --app your-coffee-brew-app

# Restart the app
heroku restart --app your-coffee-brew-app

# Check dyno status
heroku ps --app your-coffee-brew-app

# Open app in browser
heroku open --app your-coffee-brew-app
```

### Environment Variables

```sh
# View all config vars
heroku config --app your-coffee-brew-app

# Set a config var
heroku config:set KEY=value --app your-coffee-brew-app

# Unset a config var
heroku config:unset KEY --app your-coffee-brew-app
```

---

## Troubleshooting

### Issue: "fatal: not a git repository" error

**Solution:**

Navigate to your project directory:

PowerShell (Windows):
```powershell
cd C:\Users\YourUsername\Documents\GitHub\coffee-brew-log
```

Bash/Terminal (Mac/Linux):
```sh
cd ~/Documents/GitHub/coffee-brew-log
```

Verify you're in the right place:
```sh
git status
```

### Issue: "fatal: 'heroku' does not appear to be a git repository"

**Solution:**

Add the Heroku git remote:
```sh
heroku git:remote -a your-coffee-brew-app
```

Verify it was added:
```sh
git remote -v
```

You should see:
```
heroku  https://git.heroku.com/your-coffee-brew-app.git (fetch)
heroku  https://git.heroku.com/your-coffee-brew-app.git (push)
origin  https://github.com/SixxPathz/coffee-brew-log.git (fetch)
origin  https://github.com/SixxPathz/coffee-brew-log.git (push)
```

Now try deploying again:
```sh
git subtree push --prefix backend heroku main
```

### Issue: Uncommitted changes before deployment

**Solution:**
```sh
# Check what files changed
git status

# Add all changes
git add -A

# Commit the changes
git commit -m "Migrate to Heroku: Add database seeder and update config"

# Push to GitHub
git push origin main

# Now deploy to Heroku
git subtree push --prefix backend heroku main
```

### Issue: Migration fails during deployment

**Solution:**
```sh
# Check logs for specific error
heroku logs --tail --app your-coffee-brew-app

# Run migration manually
heroku run npm run migrate --app your-coffee-brew-app
```

### Issue: "Application Error" when opening app

**Solution:**
```sh
# Check logs
heroku logs --tail --app your-coffee-brew-app

# Verify config vars are set
heroku config --app your-coffee-brew-app

# Restart app
heroku restart --app your-coffee-brew-app
```

### Issue: CORS errors from frontend

**Solution:**
```sh
# Verify FRONTEND_URL is set correctly
heroku config:get FRONTEND_URL --app your-coffee-brew-app

# Update if needed
heroku config:set FRONTEND_URL=https://your-netlify-site.netlify.app --app your-coffee-brew-app
```

### Issue: Database connection errors

**Solution:**
```sh
# Check DATABASE_URL exists
heroku config:get DATABASE_URL --app your-coffee-brew-app

# Check database status
heroku pg:info --app your-coffee-brew-app

# If database doesn't exist, add it
heroku addons:create heroku-postgresql:essential-0 --app your-coffee-brew-app
```

### Issue: Git subtree push fails

**Solution:**

First, ensure Heroku remote is added:
```sh
heroku git:remote -a your-coffee-brew-app

# Verify it was added
git remote -v
```

Try the alternative method:

PowerShell (Windows):
```powershell
git push heroku $(git subtree split --prefix backend main):main --force
```

Bash/Terminal (Mac/Linux):
```sh
git push heroku `git subtree split --prefix backend main`:main --force
```

Or create a subtree branch:
```sh
git subtree split --prefix backend -b heroku-deploy
git push heroku heroku-deploy:main --force
git branch -D heroku-deploy
```

---

## Database Backup & Recovery

### Create a Backup

```sh
# Create manual backup
heroku pg:backups:capture --app your-coffee-brew-app

# List all backups
heroku pg:backups --app your-coffee-brew-app

# Download latest backup
heroku pg:backups:download --app your-coffee-brew-app
```

### Restore from Backup

```sh
# Restore from latest backup
heroku pg:backups:restore --app your-coffee-brew-app

# Restore specific backup
heroku pg:backups:restore b001 --app your-coffee-brew-app
```

---

## Scaling & Performance

### Check Current Dyno Usage

```sh
heroku ps --app your-coffee-brew-app
```

### View Dyno Types

```sh
heroku ps:type --app your-coffee-brew-app
```

### Scale Dynos (if needed)

```sh
# Free tier (1 dyno)
heroku ps:scale web=1 --app your-coffee-brew-app

# Add more dynos (requires paid plan)
heroku ps:scale web=2 --app your-coffee-brew-app
```

---

## Cost Comparison

### Heroku Pricing

- **Essential-0 PostgreSQL:** $5/month (1GB storage, 20 connections)
- **Eco Dynos:** $5/month (shared, sleeps after 30 min inactivity)
- **Basic Dynos:** $7/month (never sleeps)

### Free Tier Limitations

- Eco dynos sleep after 30 minutes of inactivity
- Apps have 1000 free dyno hours per month (shared across all apps)
- Database has connection limits

**Recommendation:** For development/testing, the free tier is fine. For production, consider Essential-0 database + Basic dyno.

---

## Next Steps

1. ✅ **Monitor your app** for the first few days
2. ✅ **Set up automatic backups** (Heroku Postgres does this automatically)
3. ✅ **Update documentation** with new deployment URLs
4. ✅ **Update your README.md** with Heroku deployment instructions
5. ✅ **Consider setting up CI/CD** with GitHub Actions for automatic deployments

---

## Additional Resources

- [Heroku Dev Center](https://devcenter.heroku.com/)
- [Heroku Postgres Documentation](https://devcenter.heroku.com/categories/heroku-postgres)
- [Heroku CLI Commands](https://devcenter.heroku.com/articles/heroku-cli-commands)
- [Deploying React Apps to Netlify](https://docs.netlify.com/frameworks/react/)
- [Node.js Best Practices on Heroku](https://devcenter.heroku.com/articles/node-best-practices)

---

## Support

If you encounter issues:

1. Check the [troubleshooting section](#troubleshooting) above
2. Review [Heroku logs](#application-management): `heroku logs --tail --app your-coffee-brew-app`
3. Consult [Heroku Dev Center](https://devcenter.heroku.com/)
4. Check your [deployment.md](deployment.md) for configuration details

---

**Migration Complete! 🎉**

Your Coffee Brew Log is now running on Heroku with PostgreSQL and seeded with sample data.
