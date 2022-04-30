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
  p5.background(42, 46, 55);

  const values = analyzer.getValue();
  p5.fill(0, 128, 128);
  for (let i = 0; i < values.length; i++) {
    const amp = values[i] as number;
    const d = p5.map(amp, 0, 0.3, 100, 1);
    p5.ellipse(width / 2, height / 2, d, d);
  }
};

export const HilariooVisualizer = new Visualizer(
  "@Hilarioo: Visualizer",
  HVisualizer
);
