// 3rd party library imports
import * as Tone from "tone";
import Sketch from "react-p5";
import P5 from "p5";
import React, { useEffect, useMemo, useCallback } from "react";

type VisualizerDrawer = (
  p5: P5,
  waveform: Tone.Analyser,
  fft: Tone.Analyser
) => void;

interface VisualizerContainerProps {
  visualizer: Visualizer;
}

export class Visualizer {
  public readonly name: string;
  public readonly draw: VisualizerDrawer;

  constructor(name: string, draw: VisualizerDrawer) {
    this.name = name;
    this.draw = draw;
  }
}

export function VisualizerContainer({ visualizer }: VisualizerContainerProps) {
  const { name, draw } = visualizer;

  const waveform: Tone.Analyser = useMemo(
    () => new Tone.Analyser("waveform", 512),
    []
  );

  const fft: Tone.Analyser = useMemo(() => new Tone.Analyser("fft", 64), []);

  const onResize = useCallback((p5: P5) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;

    p5.resizeCanvas(width, height, false);
  }, []);

  useEffect(() => {
    Tone.getDestination().volume.value = -5;
    Tone.getDestination().connect(waveform);
    Tone.getDestination().connect(fft);
    return () => {
      Tone.getDestination().disconnect(waveform);
      Tone.getDestination().disconnect(fft);
    };
  }, [waveform, fft]);

  const setup = (p5: P5, canvasParentRef: Element) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    p5.createCanvas(width, height, p5.WEBGL).parent(canvasParentRef);
  };

  return (
    <div className={"bg-black absolute bottom-0 right-0 left-0 h-50"}>
      <div className={"z-1 absolute left-0 top-0 pa4 white f5 disable-select"}>
        {name}
      </div>
      <Sketch
        setup={setup}
        draw={(p5) => draw(p5, waveform, fft)}
        windowResized={onResize}
      />
    </div>
  );
}
