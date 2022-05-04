/*
    File:               Hilarioo.jsx
    Details:            Music Visualizer
    Visualizer Type:    unknown
*/

// 3rd party library imports
import { Box } from "@mui/system";
import P5 from "p5";
import * as Tone from "tone";
import { useEffect } from "react";
// project imports
import { Visualizer } from "../Visualizers";

// rotation variables
let rotationWave: number = 0;
let rotationFft: number = 0;

const HVisualizer = (p5: P5, waveform: Tone.Analyser, fft: Tone.Analyser) => {
  let waveValue: number = 0;
  let fftValue: number = 0;
  const waveValues = waveform.getValue();
  const fftValues = fft.getValue();
  // changed default background color
  p5.background(42, 46, 55);

  p5.push(); // start a new drawing state
  for (let i = 0; i < waveValues.length; i++) {
    waveValue = waveValues[i] as number;
    const d = p5.map(waveValue, 0, 1, -100, 100); // map(value, start1, stop1, start2, stop2)

    // Amplitude Visualizer
    p5.normalMaterial();
    p5.rotateX(-rotationWave);
    p5.rotateY(rotationWave);
    p5.rotateZ(10);
    p5.box(d, d, 100);

    console.log(d);
    // check if audio complete (wave values: -1 to 1 // 0 at no sound)
    rotationWave = waveValue !== 0 ? rotationWave + 0.00002 : 0;
  }
  p5.pop();

  p5.translate(-340, 0, -100); // move the object within canvas
  p5.push(); // Start a new drawing state
  for (let i = 0; i < fftValues.length; i++) {
    fftValue = waveValue === 0 ? 200 : (fftValues[i] as number);
    p5.normalMaterial();
    p5.rotateX(rotationFft);
    p5.rotateY(-rotationFft);
    p5.rotateZ(0);

    p5.box(fftValue, fftValue, 10); // box([width], [Height], [depth], [detailX], [detailY])
    // console.log(waveValue);
    rotationFft = waveValue !== 0 ? rotationFft + fftValue / 10000000 : 0;
  }
  p5.pop();
};

export const HilariooVisualizer = new Visualizer(
  "@Hilarioo: Visualizer",
  HVisualizer
);
