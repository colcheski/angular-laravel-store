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
1. Navigate to the `/backend` directory

2. We need our composer dependencies. Run `composer update`

3. We need to create the env file because it is not pushed to GitHub, for now we'll just use the example file and generate an application key

	  `cp .env.example .env`

	  `php artisan key:generate`

I've made edits to the normal `.env.example` file based on what we need for this project. Since we are using a SQLite DB I have set up the path to my implementation in it. You will need to update the absolute path to yours if you are doing the same by changing the `DB_DATABASE=` in the `.env` file.

You may want to be able to tinker with the SQLite database. For this, you'll need to install SQLite locally. I recommend following the instructions at this link to get SQLite:

- [SQLite Tutorialspoint](https://www.tutorialspoint.com/sqlite/sqlite_installation.htm)

If you'd rather a visual tool, for VSCode I like SQLite Viewer in the extension marketplaceName

- [SQLite Viewer](https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer)

4. We need to run our database migrations so that our database exists
  
    `php artisan migrate`

    The migration creates a SQLite database per the env example file, we will likely change this later to use MySQL, but for now this is fine.

#### Frontend
1. Navigate to the `/frontend` directory

2. We need our npm packages for the frontend. Run `npm install`

3. Install the angular cli globally `npm install -g @angular/cli@17`.



### Local Development
Run `./startLocal.sh` from the scripts directory to start local backend and front end development servers.

You can also break out the start of backend and frontend separately if you'd rather by going into the backend directory and running `php artisan serve` and the front end directory and running `ng serve`. You may opt for this if you'd rather have the output from each in its own window.

#### Local Environment Script

If you'd like to have an all in one script that starts up your editor/IDE, runs the local development servers, and opens up the application you can consider copying and changing `/scripts/localDevStart.sh`

I've left this script here as an example of what can be done if you're lazy like me and don't want to go opening up multiple terminals and running commands every time. I have mine sitting in my users folder on Windows where my Git Bash terminal opens by default so I can just run `./localDevStart.sh` and everything will open and start for me. If you are not using the exact same paths, Git Bash, and VSCode, you'll need to change basically every part of it, but it should be easy enough to change and clear enough in its intent and steps.

#### Debugging

This section applies heavily to VSCode and Xdebug. If there is another way you'd like to get this done, please disregard and do your own thing!

Provided is an api route that returns the html page from `phpinfo()` at (if running the default laravel development server) `localhost:8000/api/ping`. Navigate to this page in your browser and right click to inspect the page source. Copy this source and go to [Xdebug Installation Wizard](https://xdebug.org/wizard). Paste the source into the box and run it to get tailored instructions on the installation.

In addition to the php ini change it suggests, you will also need to add:
`xdebug.mode=debug`
`xdebug.start_with_request=yes`

Note that the step that tells you to restart your php server can be skipped and you can just restart the laravel server (ctrl + c then run `php artisan serve` or the local script of your choice).

You will know that xdebug has been correctly installed by trying `localhost:8000/api/ping_debug` which will bring you to a page of xdebug information.

In VSCode you should now install the [PHP Debug](https://marketplace.visualstudio.com/items?itemName=xdebug.php-debug) extension and restart VSCode.

In Chrome you should install [Xdebug Helper](https://chromewebstore.google.com/detail/xdebug-helper/eadndfjplgieldjbigjakmdgkmoaaaoc) and turn it on to debug on the page you want to debug.

After you have completed these steps you should be able to go to the debug view in vscode (in the side panel) and choose "Listen for Xdebug" in the Run and Debug dropdown on the top. I found that this option hadn't shown up in VSCode until I went to the `.vscode/launch.json` file that was generated throughout this process. Once that is complete you should be able to add debug breakpoints in the gutter on the side of php files. If you have problems with this I urge you to look over the documentation.

### Using the Application
To start, we'll need a user. I have a route set up at http://localhost:8000/api/createTestUser

Go to this URL in your browser and a test user will be created with the credentials:

**Email:** test@example.com
**Password:** password

If you'd like to change this you can update the route with whatever credentials you want. This is not intended to be a normal route you'd use in a real application, but a quick and easy account creation tool.

### Backend
Refer to the [backend README](backend/README.md) for setup instructions.

### Frontend
Refer to the [frontend README](frontend/README.md) for setup instructions.