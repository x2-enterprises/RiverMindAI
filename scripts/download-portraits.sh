#!/bin/bash

# Create the team directory if it doesn't exist
mkdir -p public/team

# Download portraits for each team member
curl -o public/team/ada.jpg "https://thispersondoesnotexist.com"
sleep 2
curl -o public/team/max.jpg "https://thispersondoesnotexist.com"
sleep 2
curl -o public/team/luna.jpg "https://thispersondoesnotexist.com"
sleep 2
curl -o public/team/zephyr.jpg "https://thispersondoesnotexist.com"

echo "Team portraits downloaded successfully!" 