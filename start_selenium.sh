#!/bin/bash

# Image and container name settings
IMAGE_NAME="selenium/standalone-chrome:latest"
CONTAINER_NAME="selenium-chrome"

# Function to check if a command exists
command_exists() {
  command -v "$1" &> /dev/null
}

# Start container with Podman or Docker
if command_exists podman; then
  echo "Starting container with Podman..."
  podman run -d -p 4444:4444 --name $CONTAINER_NAME $IMAGE_NAME
elif command_exists docker; then
  echo "Starting container with Docker..."
  docker run -d -p 4444:4444 --name $CONTAINER_NAME $IMAGE_NAME
else
  echo "Error: Neither Podman nor Docker is installed on this system."
  exit 1
fi

echo "Container $CONTAINER_NAME started successfully!"
