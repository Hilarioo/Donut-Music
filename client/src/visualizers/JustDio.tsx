// project imports
import { Visualizer } from "../Visualizers";
// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

export const JustDioVisualizer = new Visualizer('@JustDio: Visualizer', 
(p5: P5, analyzer: Tone.Analyser) => {
    function randomColor(){
        let letters = '0123456789ABCEDF';
        let color = '#';
        for (let i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0, 0, 0, 255);
    p5.strokeWeight(dim * 0.01);
    p5.stroke(255, 255, 255, 255);
    
    let value = 0;
    p5.mouseClicked = () => { 
        if (value === 0){
            p5.fill(randomColor())
            console.log("Mouse pressed")
        } else {
            p5.fill(255)
        }
    }

    let values = analyzer.getValue();
    p5.angleMode("degrees")
  
    p5.translate(width/2.5, height/2)
    for (let t = -1; t <= 1; t +=2){
        p5.beginShape();
        for (let i = 0 ; i <= 180; i++) {
            let amplitude = values[i] as number;
            let radius = p5.map(amplitude, 0, 1, height/3, 0);
            let x = radius * p5.sin(i) * t;
            let y = radius * p5.cos(i);
        p5.vertex(x , y );
        }
        p5.endShape();
    }
});