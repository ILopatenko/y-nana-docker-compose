# y-nana-docker-compose
https://youtu.be/SXwC9fSwct8

UPDATED May 16, 2024

This is an almost ready-to-use development environment for MERN stack. At this moment it contains:
1. MongoDB (documented, nonSQL database) - IP:27017
2. Mongo-Express (UI for worki with MongoDB) - IP:8081
3. Backend server (Node.js + express) - IP:5000


How to use this repo:

1. Just clone it to your computer using this command:
git clone https://github.com/ILopatenko/y-nana-docker-compose.git

2. Open the project folder:
cd y-nana-docker-compose

3. Run docker-compose.yaml file:
docker compose up -d


OR USE THIS COMMAND:
git clone https://github.com/ILopatenko/y-nana-docker-compose.git && cd y-nana-docker-compose && docker compose up -d


TODO:
add frontend service (React.js + Vite)
