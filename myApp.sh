#!/bin/bash

case "$1" in
    start)
        echo "Starting the app..."
        docker-compose up -d   # This starts the app in detached mode.
        echo "App started."
        ;;
    
    stop)
        echo "Stopping the app..."
        docker-compose down
        echo "App stopped."
        ;;

    status)
        echo "Checking the status of the app..."
        docker-compose ps
        ;;

    *)
        echo "Usage: $0 {start|stop|status}"
        exit 1
esac
