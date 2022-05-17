
# 🍩 Donut Music
<br />
<sub><sup>Best viewed on a laptop/desktop.</sup></sub>

## Web App Summary 
Donut Music 🍩 is a full-stack web application built with TypeScript, React + Redux, Node.js, p5.js, tone.js, socket.io, and sqlite3.
It features a violin, guitar, drums, and flute as instruments and four unique visualizers. Our visualizers react to the amps, hertz, and/or speed of the song or key playing. 

Yes! We have songs within our database that holds metadata like the songs artist, publisher, song title, and notes. It's dockerized into two containers (client & server), then called by docker-compose. The client docker is optimized using an nginx template on the build only. 

Im currently working on creating a repo through AWS ECR and then deploying with AWS EC2(: [.....in progress] 

## Demo
<img src="/client/src/videos/hilarioo-instruments-demo.gif" width="70%" />


### Collaborator(s)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?label=Jose-gonzalez&style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hilariooo/)


### Local Install

```bash
# open terminal

# cd into root folder, client subfolder, and server subfolder in terminal and install node modules for each folder
npm i

# cd into client folder

# start client
npm start

# in another terminal cd into server folder

# start server
npm start

# now running on http://localhost:3000/
```
