// project imports
import { Visualizer } from "../Visualizers";

// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';



export const RuiQiHuang1832Visualizer = new Visualizer(
  '@RuiQiHuang1832: Visualizer',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);
    
    p5.background(0, 0, 0, 255);
    p5.stroke(2, 255, 255, 255);
    
    p5.strokeWeight(dim * 0.03);
    p5.noFill();
    

    const values = analyzer.getValue();
    let arr = []
    arr = Array(360).fill(values[4])
  
 
    p5.angleMode("degrees")
  
    p5.translate(width/2.5, height/2)
    p5.beginShape();
    for (let i = 0 ; i < 360; i++) {
      let radius = p5.map(arr[i], 0, 0.6, height/2 - 100, 0);
      let x = radius * p5.sin(i) ;
      let y = radius * p5.cos(i);
  
    p5.vertex(x , y );
   
  }

    for (let i = 0 ; i < 350; i++) {
        const amplitude = values[i] as number;
        let radius = p5.map(arr[i] + amplitude + 2, 0, 0.6, height/2 - 110, 0);
        let x = radius * p5.sin(i + 3) ;
        let y = radius * p5.cos(i + 2);
      
      p5.vertex(x , y );
     
    }
    p5.endShape();
  
  },
);