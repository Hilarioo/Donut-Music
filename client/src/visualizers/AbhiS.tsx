// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

var start = 0;

export const AbhiSVisualizer = new Visualizer(
  '@AbhiS: Visualizer',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
	p5.background(0, 0, 0, 255);
    //center circle
    p5.translate(width / 2.5, height / 2);
    p5.noiseDetail(3,2);
	

    const values = analyzer.getValue();
    p5.beginShape();

    var space = 1
	
	for (let i = 0; i <= 300; i++){
        let space = width/60;
        let my_amp = values[i] as number;
        p5.stroke(400);
        let y = p5.map(my_amp, -1, 1, height, 0);
        // p5.line(i * space, height, i * space, y);
        p5.rect(width - (i*space), y, space, height-y)
    }

    for (let i = 0; i < 360; i += space) {
      var amplitude = values[i] as number;
      var my_amp = Math.abs(amplitude)
      var xoff = p5.map(Math.cos(i), 0, 1, 0, my_amp * 10)
      var yoff = p5.map(Math.sin(i), 0, 1, 0, my_amp * 10)
      var n = p5.noise(xoff + start, yoff + start) * (my_amp * 5)
      var h = p5.map(n, 0, 1, 0, 200)
      var w = 4
      var r = p5.map(Math.sin(i), 2, 21, 45, my_amp * 150 + 147)
      var g = p5.map(i / 4, -100, 75, 0, my_amp * 150 + 112)
      var b = p5.map(n, 0, 1, 175, my_amp * 150 + 219)
      p5.stroke(r, g, b);
      p5.fill(r, g, b);
      p5.rotate(space);
      p5.rect(200, 75, h, w);
      var x = p5.random(0, 30)+(my_amp*p5.random(0, width*2));
      var y = p5.random(0, 30)+(my_amp*p5.random(0, height*2));
      var size = p5.random(1, 10);
      p5.circle(x, y, size);

    }
	
   for (let i = 0; i <= 700; i++){
        let space = width/60;
        let my_amp = values[i] as number;
        p5.stroke(125);
        let y = p5.map(my_amp, -1, 1, height, 0);
        // p5.line(i * space, height, i * space, y);
        p5.rect(width - (i*space), y, space, height-y)
    }
		start += 0.08;

    p5.endShape();

  },
  
);