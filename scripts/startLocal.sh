#!/bin/bash

# Start the backend server
echo "Starting backend server..."
(cd ../backend && php artisan serve) &

# Start the frontend server
echo "Starting frontend server..."
(cd ../frontend && ng serve) 

# This makes it so that the script remains active making ctrl + c stop all processes started in this
wait