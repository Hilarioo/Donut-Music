// 3rd party library imports
import P5 from "p5";
import * as Tone from "tone";

// project imports
import { Visualizer } from "../Visualizers";

var start = 0;

export const AbhiSVisualizer = new Visualizer(
  "@AbhiS",
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;

    // p5.background(10, 10, 25);

    p5.background(0, 0, 0, 255);
    //  p5.strokeWeight(dim * 0.01);
    //  p5.stroke(255, 255, 255, 255);
    // p5.noStroke();
    // p5.stroke(255, 255, 255, 255);
    // p5.noFill();

    //center circle
    p5.translate(width / 2.5, height / 2);
    p5.noiseDetail(3, 2);

    const values = analyzer.getValue();
    p5.beginShape();

    var space = 1;

    for (let i = 0; i < 360; i += space) {
      var amplitude = values[i] as number;
      var my_amp = Math.abs(amplitude);

      // gives constant movement
      var xoff = p5.map(Math.cos(i), 0, 1, 0, my_amp * 10);
      var yoff = p5.map(Math.sin(i), 0, 1, 0, my_amp * 10);
      var n = p5.noise(xoff + start, yoff + start) * (my_amp * 5);

      // rectangle dims
      var h = p5.map(n, 0, 1, 0, 200);
      var w = 4;

      // colors
      var r = p5.map(Math.sin(i), 0, 1, 100, my_amp * 150 + 147);
      var g = p5.map(i / 4, -100, 100, 0, my_amp * 150 + 112);
      var b = p5.map(n, 0, 1, 175, my_amp * 150 + 219);
      p5.stroke(r, g, b);
      p5.fill(r, g, b);

      // drawing the circle visual
      p5.rotate(space);
      p5.rect(170, 50, h, w);

      // creation of a particle.
      var x = p5.random(0, 30) + my_amp * p5.random(0, width * 2);
      var y = p5.random(0, 30) + my_amp * p5.random(0, height * 2);
      var size = p5.random(1, 10);
      p5.circle(x, y, size);
    }

    for (let i = 0; i <= 700; i++) {
      let space = width / 60;
      let my_amp = values[i] as number;
      p5.stroke(125);
      let y = p5.map(my_amp, -1, 1, height, 0);
      // p5.line(i * space, height, i * space, y);
      p5.rect(width - i * space, y, space, height - y);
    }

    start += 0.03;

    p5.endShape();
  }
);
