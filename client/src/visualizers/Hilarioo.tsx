/*
    File:               Hilarioo.jsx
    Details:            Music Visualizer
    Visualizer Type:    Two webGL "visualizers"
                          3DCircle: x&y reacts to the keys amplitude (z fixed)
                          3DSquare: x&y reacts to the keys hertz, but its 
*/

// 3rd party library imports
import P5 from "p5";
import * as Tone from "tone";
// project imports
import { Visualizer } from "../Visualizers";

// rotation variables
let rotationWave: number = 0;
let rotationFft: number = 0;

const HVisualizer = (p5: P5, waveform: Tone.Analyser, fft: Tone.Analyser) => {
  let amp: number = 0;
  let htz: number = 0;
  const amps = waveform.getValue();
  const frequency = fft.getValue();
  // changed default background color
  p5.background(42, 46, 55);

  // -----------------
  // 3DCircle Rotation
  // -----------------
  p5.push(); // start a new drawing state
  for (let i = 0; i < amps.length; i++) {
    amp = amps[i] as number;
    const resize = p5.map(amp, 0, 1, -100, 100); // map(value, start1, stop1, start2, stop2)

    // Amplitude Visualizer
    p5.normalMaterial();
    // "must be called Z-X-Y order or there might be unexpected behaviour" - p5.js Documentation
    p5.rotateZ(250);
    p5.rotateX(-rotationWave);
    p5.rotateY(rotationWave);

    //box(width, height and depth)
    p5.box(resize, resize, 100);

    // check if audio complete (amp: -1 to 1 // 0 at no sound)
    rotationWave = amp !== 0 ? rotationWave + 0.00002 : 0;
  }
  p5.pop();

  // -----------------
  // 3DSquare Rotation
  // -----------------
  p5.translate(-340, 0, -100); // move the object within canvas
  p5.push(); // start a new drawing state
  for (let i = 0; i < frequency.length; i++) {
    // default size = 200 when nothing is playing
    htz = amp === 0 ? 200 : (frequency[i] as number);

    // Frequency Visualizer
    p5.normalMaterial();
    p5.rotateZ(0);
    p5.rotateX(rotationFft);
    p5.rotateY(0);

    //box(width, height and depth)
    p5.box(htz, htz, 10);

    // rotating based on hertz converted to fit radian constraints (-Pi to Pi)

    rotationFft = amp !== 0 ? htz : 0;
    console.log("hertz: " + rotationFft);
  }
  p5.pop();
};

export const HilariooVisualizer = new Visualizer(
  "@Hilarioo: Visualizer",
  HVisualizer
);
