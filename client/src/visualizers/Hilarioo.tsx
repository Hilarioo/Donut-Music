/*
    File:               Hilarioo.jsx
    Details:            Music Visualizer
    Visualizer Type:    unknown
*/

// 3rd party library imports
import P5 from "p5";
import * as Tone from "tone";

// project imports
import { Visualizer } from "../Visualizers";

const HVisualizer = (p5: P5, analyzer: Tone.Analyser) => {
  const width = window.innerWidth;
  const height = window.innerHeight / 2;
  const dim = Math.min(width, height);

  p5.background(42, 46, 55);

  p5.strokeWeight(dim * 0.01);
  if (p5.mouseIsPressed) {
    p5.fill(0);
  } else {
    p5.fill(255);
  }
  p5.ellipse(p5.mouseX, p5.mouseY, 80, 80);
};

export const HilariooVisualizer = new Visualizer(
  "@Hilarioo: Visualizer",
  HVisualizer
);
