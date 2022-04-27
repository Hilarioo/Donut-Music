// project imports
import { Visualizer } from "../Visualizers";

// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';


export const JustDioVisualizer = new Visualizer('@JustDio: Visualizer', 
(p5: P5, analyzer: Tone.Analyser) => {
    // class Particle{
    //     _pos: P5.Vector
    //     _vel: P5.Vector
    //     _acc: P5.Vector
    //     constructor(){
    //         this._pos = P5.Vector.random2D().mult(250);
    //         this._vel = p5.createVector(0,0);
    //         this._acc = this._pos.copy().mult(p5.random(0.0001, 0.00001))
    //     }
    //     update(){
    //         this._vel.add(this._acc)
    //         this._pos.add(this._vel)
    //     }
    //     show(){
    //         p5.fill(255);
    //         p5.ellipse(this._pos.x, this._pos.y, 4)
    //     }
    // }

    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);
    let particles = [];

    p5.background(0, 0, 0, 255);
    p5.strokeWeight(dim * 0.01);
    p5.stroke(255, 255, 255, 255);
    
    let values = analyzer.getValue();
    p5.angleMode("degrees")
  
    p5.translate(width/2.5, height/2)
    for (let t = -1; t <= 1; t +=2){
        p5.beginShape();
        for (let i = 0 ; i <= 180; i++) {
            let amplitude = values[i] as number;
            let radius = p5.map(amplitude, 0, 1, height/3, 0);
            p5.fill(161.5, 255, 255)
            let x = radius * p5.sin(i) * t;
            let y = radius * p5.cos(i);
        p5.vertex(x , y );
        }
        p5.endShape();

    }
    
    // let p = new Particle();
    // particles.push(p);

    // for (let i = 0; i < particles.length; i++){
    //     particles[i].show();
    //     particles[i].update();
    // }
});