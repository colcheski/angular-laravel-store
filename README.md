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

### Backend
Refer to the [backend README](backend/README.md) for setup instructions.

### Frontend
Refer to the [frontend README](frontend/README.md) for setup instructions.