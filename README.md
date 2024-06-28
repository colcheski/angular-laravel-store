# Angular Laravel Store

## Overview
A demo store app with an angular frontend and laravel backend.

## Project Structure
- `/backend` - Contains the Laravel backend.
- `/frontend` - Contains the Angular frontend.
- `/scripts` - Contains scripts for development and deployment.

## Setup Instructions
### First Time Setup
I will not go into it, but you will need to have PHP (I prefer locally to install XAMPP for this), Composer, node and NPM installed. You can find  these at the following URLs:
- [XAMPP](https://www.apachefriends.org/)
- [Composer](https://getcomposer.org/)
- [Node.js (Includes NPM)](https://nodejs.org/en)

#### Backend
1. Navaigate to the `/backend` directory

2. We need our composer dependencies. Run `composer update`

3. We need to create the env file because it is not pushed to GitHub, for now we'll just use the example file and generate an application key

	  `cp .env.example .env`

	  `php artisan key:generate`

4. We need to run our database migrations so that our database exists
  
    `php artisan migrate`

    The migration creates a SQLite database per the env example file, we will likely change this later to use MySQL, but for now this is fine.

#### Frontend
1. Navigate to the `/frontend` directory

2. We need our npm packages for the frontend. Run `npm install`



### Local Development
Run `./startLocal.sh` from the scripts directory to start local backend and front end development servers.

You can also break out the start of backend and frontend separately if you'd rather by going into the backend directory and running `php artisan serve` and the front end directory and running `ng serve`. You may opt for this if you'd rather have the output from each in its own window.

#### Local Environment Script

If you'd like to have an all in one script that starts up your editor/IDE, runs the local development servers, and opens up the application you can consider copying and changing `/scripts/localDevStart.sh`

I've left this script here as an example of what can be done if you're lazy like me and don't want to go opening up multiple terminals and running commands every time. I have mine sitting in my users folder on Windows where my Git Bash terminal opens by default so I can just run `.localDevStart.sh` and everything will open and start for me. If you are not using the exact same paths, Git Bash, and VSCode, you'll need to change basically every part of it, but it should be easy enough to change and clear enough in its intent and steps.

### Backend
Refer to the [backend README](backend/README.md) for setup instructions.

### Frontend
Refer to the [frontend README](frontend/README.md) for setup instructions.