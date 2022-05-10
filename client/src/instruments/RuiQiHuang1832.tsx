// 3rd party library imports
import * as Tone from "tone";
// @ts-ignore
import FluteMp3 from "tonejs-instrument-flute-mp3";

import A4 from "../audio/fluteaudio/A4.mp3";
import A6 from "../audio/fluteaudio/A6.mp3";
import A5 from "../audio/fluteaudio/A5.mp3";
import E4 from "../audio/fluteaudio/E4.mp3";
import C4 from "../audio/fluteaudio/C4.mp3";
import C5 from "../audio/fluteaudio/C5.mp3";
import C6 from "../audio/fluteaudio/C6.mp3";

// project imports
import { Instrument, InstrumentProps } from "../Instruments";
const flute = new FluteMp3();
flute.toMaster();
const flutenotes = new Tone.ToneAudioBuffers({
  A4: A4,
  A6: A6,
  A5: A5,
  E4: E4,
  C4: C4,
  C5: C5,
  C6: C6,
});

interface FlutePropKeys {
  note: string;
  duration?: string;
  synth?: Tone.Synth;
  index: number;
}

const instrument = new Tone.Synth({
  oscillator: {
    type: "sine",
  },
  envelope: {
    attack: 0.01,
    decay: 0,
    sustain: 1,
    release: 1,
  },
});

const Flute = () => {
  const player = new Tone.Player().toDestination();

  return (
    <>
      <div>
        <div style={rawflute}>
          <span style={dotend}></span>
          <span
            style={dot}
            onClick={() => {
              flute.triggerAttackRelease("A6", 1);
            }}></span>
          <span
            style={dot}
            onClick={() => {
              flute.triggerAttackRelease("A4", 1);
            }}></span>
          <span
            style={dot}
            onClick={() => {
              flute.triggerAttackRelease("A5", 1);
            }}></span>
          <span
            style={dot}
            onClick={() => {
              flute.triggerAttackRelease("E4", 1);
            }}></span>
          <span
            style={dot}
            onClick={() => {
              flute.triggerAttackRelease("C4", 1);
            }}></span>
          <span
            style={dot}
            onClick={() => {
              flute.triggerAttackRelease("C5", 1);
            }}></span>
          <span
            style={dot}
            onClick={() => {
              flute.triggerAttackRelease("C6", 1);
            }}></span>
            {/**if too big remove mouthpeice */}
          <span style={mouthpiece}></span>
        </div>
        <span style={leaf}></span>
      </div>
    </>
  );
};

const leaf = {
  borderBottomLeftRadius: "200px",
  borderTopRightRadius: "200px",
  paddingLeft: "35px",
  paddingTop: "40px",
  backgroundColor: "green",
  marginLeft: "50px",
  marginTop: "25px",
};

const rawflute = {
  borderStyle: "solid",
  backgroundColor: "silver",
  marginTop: "6rem",
  borderRadius: "19px",
  borderWidth: "3px",
};

const dotend = {
  height: "40px",
  width: "18px",
  backgroundColor: "#22240f",
  borderRadius: "50%",
  display: "inline-block",
  marginRight: "7rem",
  marginTop: "3px",
  borderLeft: "2px solid #545724",
  borderTop: "2px solid #545724",
};

const borderside = {
  borderStyle: "solid",
  display: "inline-block",
};

const dot = {
  height: "40px",
  width: "40px",
  backgroundColor: "#22240f",
  borderRadius: "50%",
  display: "inline-block",
  marginRight: "3rem",
  borderLeft: "4px solid #545724",
  borderTop: "2px solid #545724",
};

const mouthpiece = {
  height: "40px",
  width: "40px",
  backgroundColor: "#22240f",
  borderRadius: "50%",
  marginLeft: "3rem",
  display: "inline-block",
  borderLeft: "10px solid silver",
  borderTop: "2px solid silver",
};

export const RuiQiHuang1832Instrument = new Instrument(
  "@RuiQiHuang1832: Flute",
  Flute
);
