
# 🍩 Donut Music

![Travis (.com)](https://travis-ci.com/rinaykumar/word-blast.svg?branch=master)
![GitHub language count](https://img.shields.io/github/languages/count/Hilarioo/Donut-Music)
![GitHub top language](https://img.shields.io/github/languages/top/Hilarioo/Donut-Music)
![GitHub contributors](https://img.shields.io/github/contributors/Hilarioo/Donut-Music)
![GitHub](https://img.shields.io/github/license/Hilarioo/Donut-Music)

[https://[insert-link-here.com](https://google.com)
<br />
<sub><sup>Best viewed on a laptop/desktop.</sup></sub>

Interactive instruments with visualizers.

![hilarioo-instruments demo](client/src/videos/hilarioo-instruments-demo.gif)


Donut Music 🍩 is a full-stack web application built with TypeScript, React + Redux, Node.js, p5.js, tone.js, socket.io, and sqlite3.
It features a violin, guitar, drums, and flute as instruments and four unique visualizers. Our visualizers react to the amps, hertz, and/or speed of the song or key playing. 

Yes! We have songs within our database that holds metadata like the songs artist, publisher, song title, and notes. It's dockerized into two containers (client & server), then called by docker-compose. The client docker is optimized using an nginx template on the build only. Lastly, an AWS EC2 instance allows us to showcase this project to the world(: 


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
