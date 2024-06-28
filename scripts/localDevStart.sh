#!/bin/bash

# This script is very specific to MY specific local environment. You'll likely need to change 
# every part of this if you want to use it, but it lays out my steps to starting up my local 
# environment which I think can be useful to someone who doesn't know where to start or what to do.

# Move this file to wherever is convenient for you to start it and change the paths to your actual paths
# if you want to use the same tools as I am (VS Code / Git Bash on a Windows machine)

# Open our app URL in browser (This will not work immediately as the dev servers need to start)
start chrome http://localhost:4200

# Open Extra terminal in the project for running git commands
"C:\Program Files\Git\git-bash.exe" --cd="D:\development\angular-laravel-store" &

# Open Editor or IDE (Change path to your project path and use your desired  editor/IDE command)
code "D:\development\angular-laravel-store" &

# Start local development servers
echo "Starting angular-laravel-store dev servers..."
(cd "D:\\development\\angular-laravel-store\\scripts" && ./startLocal.sh) 