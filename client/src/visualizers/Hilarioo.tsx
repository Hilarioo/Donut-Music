/*
    File:               Hilarioo.jsx
    Details:            Music Visualizer
    Visualizer Type:    unknown
*/

// 3rd party library imports
import { Box } from "@mui/system";
import P5 from "p5";
import * as Tone from "tone";

// project imports
import { Visualizer } from "../Visualizers";

let duration = 0;

const rotateBox = (
  p5: P5,
  width: number,
  height: number,
  depth: number,
  time: number
) => {
  p5.normalMaterial();
  p5.rotateX(duration);
  p5.rotateY(duration);
  p5.rotateZ(duration / 2);
  // box([width], [Height], [depth], [detailX], [detailY])
  p5.box(width, height, depth);
  if (time !== 0) duration += 0.0001;
  // console.log("duration: " + duration);
};

const HVisualizer = (p5: P5, analyzer: Tone.Analyser) => {
  const width = window.innerWidth;
  const height = window.innerHeight / 2;

  p5.background(42, 46, 55);

  // trap(p5, 500, 200, 100, 4);

  const values = analyzer.getValue();
  console.log("values: " + values);

  for (let i = 0; i < values.length; i++) {
    const amp = values[i] as number;
    // map(value, start1, stop1, start2, stop2, [withinBounds])
    const d = p5.map(amp, 0, 1, -100, 100);
    // webgl ( Waveform)
    rotateBox(p5, d, d, 100, amp);
  }
};

export const HilariooVisualizer = new Visualizer(
  "@Hilarioo: Visualizer",
  HVisualizer
);
