/*
    File:          Hilarioo.jsx
    Details:       Instrument
    Instrument:    Bass Guitar
*/

// 3rd party library imports
import * as Tone from "tone";
import classNames from "classnames";
import { List, Range, update } from "immutable";
import React, { useState } from "react";

// Tone Instruments
import A1 from "../audio/guitar/A1.mp3";
import As1 from "../audio/guitar/As1.mp3";
import A2 from "../audio/guitar/A2.mp3";
import As2 from "../audio/guitar/As2.mp3";

import B1 from "../audio/guitar/B1.mp3";
import B2 from "../audio/guitar/B2.mp3";

import C2 from "../audio/guitar/C2.mp3";
import Cs2 from "../audio/guitar/Cs2.mp3";
import C3 from "../audio/guitar/C3.mp3";
import Cs3 from "../audio/guitar/Cs3.mp3";

import D2 from "../audio/guitar/D2.mp3";
import Ds2 from "../audio/guitar/Ds2.mp3";
import D3 from "../audio/guitar/D3.mp3";
import Ds3 from "../audio/guitar/Ds3.mp3";

import E1 from "../audio/guitar/E1.mp3";
import E2 from "../audio/guitar/E2.mp3";
import E3 from "../audio/guitar/E3.mp3";

import F1 from "../audio/guitar/F1.mp3";
import Fs1 from "../audio/guitar/Fs1.mp3";
import F2 from "../audio/guitar/F2.mp3";
import Fs2 from "../audio/guitar/Fs2.mp3";
import F3 from "../audio/guitar/F3.mp3";
import Fs3 from "../audio/guitar/Fs3.mp3";

import G1 from "../audio/guitar/G1.mp3";
import Gs1 from "../audio/guitar/Gs1.mp3";
import G2 from "../audio/guitar/G2.mp3";
import Gs2 from "../audio/guitar/Gs2.mp3";
import G3 from "../audio/guitar/G3.mp3";
import Gs3 from "../audio/guitar/Gs3.mp3";

// Components
import HilariooFeatures from "./components/HilariooFeatures";
// project imports
import { Instrument, InstrumentProps } from "../Instruments";

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Guitar.
 ** ------------------------------------------------------------------------ */

// interface
interface Cord {
  index: number;
  note: string;
  sample: string;
  showNote: boolean;
}
interface Note {
  str: string;
  cords: Cord[];
}

const guitarSamples = new Tone.ToneAudioBuffers(
  {
    A1: A1,
    A2: A2,
    B1: B1,
    B2: B2,
    C2: C2,
    C3: C3,
    D2: D2,
    D3: D3,
    E1: E1,
    E2: E2,
    E3: E3,
    F1: F1,
    F2: F2,
    F3: F3,
    G1: G1,
    G2: G2,
    G3: G3,
    "A1#": As1,
    "A2#": As2,
    "C2#": Cs2,
    "C3#": Cs3,
    "D2#": Ds2,
    "D3#": Ds3,
    "F1#": Fs1,
    "F2#": Fs2,
    "F3#": Fs3,
    "G1#": Gs1,
    "G2#": Gs2,
    "G3#": Gs3,
  },
  () => {
    console.log("audio loaded");
  }
);

// React.FC: react functional component
const Guitar: React.FC = () => {
  // guitar cords
  const [guitarCords, setGuitarCords] = useState<Array<Note>>([
    {
      str: "G",
      cords: [
        { index: 0, note: "G", sample: "G2", showNote: false },
        { index: 1, note: "G#", sample: "G2#", showNote: false },
        { index: 2, note: "A", sample: "A2", showNote: false },
        { index: 3, note: "A#", sample: "A2#", showNote: false },
        { index: 4, note: "B", sample: "B2", showNote: false },
        { index: 5, note: "C", sample: "C3", showNote: false },
        { index: 6, note: "C#", sample: "C3#", showNote: false },
        { index: 7, note: "D", sample: "D3", showNote: false },
        { index: 8, note: "D#", sample: "D3#", showNote: false },
        { index: 9, note: "E", sample: "E3", showNote: false },
        { index: 10, note: "F", sample: "F3", showNote: false },
        { index: 11, note: "F#", sample: "F3#", showNote: false },
        { index: 12, note: "G", sample: "G3", showNote: false },
        { index: 13, note: "G#", sample: "G3#", showNote: false },
      ],
    },
    {
      str: "D",
      cords: [
        { index: 0, note: "D", sample: "D2", showNote: false },
        { index: 1, note: "D#", sample: "D2#", showNote: false },
        { index: 2, note: "E", sample: "E2", showNote: false },
        { index: 3, note: "F", sample: "F2", showNote: false },
        { index: 4, note: "F#", sample: "F2#", showNote: false },
        { index: 5, note: "G", sample: "G2", showNote: false },
        { index: 6, note: "G#", sample: "G2#", showNote: false },
        { index: 7, note: "A", sample: "A2", showNote: false },
        { index: 8, note: "A#", sample: "A2#", showNote: false },
        { index: 9, note: "B", sample: "B2", showNote: false },
        { index: 10, note: "C", sample: "C3", showNote: false },
        { index: 11, note: "C#", sample: "C3#", showNote: false },
        { index: 12, note: "D", sample: "D3", showNote: false },
        { index: 13, note: "D#", sample: "D3#", showNote: false },
      ],
    },
    {
      str: "A",
      cords: [
        { index: 0, note: "A", sample: "A1", showNote: false },
        { index: 1, note: "A#", sample: "A1#", showNote: false },
        { index: 2, note: "B", sample: "B1", showNote: false },
        { index: 3, note: "C", sample: "C2", showNote: false },
        { index: 4, note: "C#", sample: "C2#", showNote: false },
        { index: 5, note: "D", sample: "D2", showNote: false },
        { index: 6, note: "D#", sample: "D2#", showNote: false },
        { index: 7, note: "E", sample: "E2", showNote: false },
        { index: 8, note: "F", sample: "F2", showNote: false },
        { index: 9, note: "F#", sample: "F2#", showNote: false },
        { index: 10, note: "G", sample: "G2", showNote: false },
        { index: 11, note: "G#", sample: "G2#", showNote: false },
        { index: 12, note: "A", sample: "A2", showNote: false },
        { index: 13, note: "A#", sample: "A2#", showNote: false },
      ],
    },
    {
      str: "E",
      cords: [
        { index: 0, note: "E", sample: "E1", showNote: false },
        { index: 1, note: "F", sample: "F1", showNote: false },
        { index: 2, note: "F#", sample: "F1#", showNote: false },
        { index: 3, note: "G", sample: "G1", showNote: false },
        { index: 4, note: "G#", sample: "G1#", showNote: false },
        { index: 5, note: "A", sample: "A1", showNote: false },
        { index: 6, note: "A#", sample: "A1#", showNote: false },
        { index: 7, note: "B", sample: "B1", showNote: false },
        { index: 8, note: "C", sample: "C2", showNote: false },
        { index: 9, note: "C#", sample: "C2#", showNote: false },
        { index: 10, note: "D", sample: "D2", showNote: false },
        { index: 11, note: "D#", sample: "D2#", showNote: false },
        { index: 12, note: "E", sample: "E2", showNote: false },
        { index: 13, note: "F", sample: "F2", showNote: false },
      ],
    },
  ]);
  // toggle for "show all notes"
  const [showToggle, setShowToggle] = useState(false);

  // string animation
  const [animateG, setAnimateG] = useState(0);
  const [animateD, setAnimateD] = useState(0);
  const [animateA, setAnimateA] = useState(0);
  const [animateE, setAnimateE] = useState(0);

  // switch note visibility when clicked && play audio
  const handleNoteClick = (cord: string, sample: string, index: number) => {
    const player = new Tone.Player().toDestination();
    // play  sample once all-load (onload)
    player.buffer = guitarSamples.get(sample);
    player.start();
    // update cords
    const updateCords = guitarCords[index].cords.map((c) =>
      c.sample === sample ? { ...c, showNote: !c.showNote } : c
    );
    const updateGuitar = guitarCords.map((g) =>
      g.str === cord.toUpperCase() ? { ...g, cords: updateCords } : g
    );

    // update state
    setGuitarCords(updateGuitar);
    setShowToggle(false);
  };

  const handleCordAnimation = (e: any) => {
    const cord = e.target.id.charAt(0).toUpperCase();
    const sample = e.target.id.slice(2);

    switch (cord) {
      case "G":
        setAnimateG(1);
        handleNoteClick(cord, sample, 0);
        e.preventDefault();
        return 0;
      case "D":
        setAnimateD(1);
        handleNoteClick(cord, sample, 1);
        e.preventDefault();
        return 0;
      case "A":
        setAnimateA(1);
        handleNoteClick(cord, sample, 2);
        e.preventDefault();
        return 0;
      default: // E
        setAnimateE(1);
        handleNoteClick(cord, sample, 3);
        e.preventDefault();
        return 0;
    }
  };

  return (
    <div className='guitar-container'>
      {/* Guitar Feautres */}
      <HilariooFeatures
        showToggle={showToggle}
        setShowToggle={setShowToggle}
        guitarCords={guitarCords}
        setGuitarCords={setGuitarCords}
      />

      {/* Guitar Fretboard */}
      <div className='guitar'>
        {/* G String (1st) */}
        <div className='row'>
          {guitarCords[0].cords.map((v) => (
            <div
              key={v.index}
              id={`G-${v.sample}`}
              className='fret'
              onClick={(e) => handleCordAnimation(e)}
              onAnimationEnd={() => setAnimateG(0)}>
              <div
                toggle-animation={animateG}
                className={`string g-str ${
                  !animateG ? "" : "vshake-animation"
                }`}
                id={`G-${v.sample}`}></div>
              <span
                className={`fret-key ${v.showNote ? null : "hide-content"}`}
                id={`G-${v.sample}`}>
                {v.note}
              </span>
            </div>
          ))}
        </div>

        {/* D String (2nd) */}
        <div className='row'>
          {guitarCords[1].cords.map((v, i) => (
            <div
              key={v.index}
              id={`D-${v.sample}`}
              className='fret'
              onClick={(e) => handleCordAnimation(e)}
              onAnimationEnd={() => setAnimateD(0)}>
              <div
                toggle-animation={animateD}
                className={`string d-str ${
                  !animateD ? "" : "vshake-animation"
                }`}
                id={`D-${v.sample}`}></div>
              <span
                className={`fret-key ${v.showNote ? null : "hide-content"}`}
                id={`D-${v.sample}`}>
                {v.note}
              </span>
            </div>
          ))}
        </div>

        {/* A String (3rd) */}
        <div className='row'>
          {guitarCords[2].cords.map((v, i) => (
            <div
              key={v.index}
              id={`A-${v.sample}`}
              className='fret'
              onClick={(e) => handleCordAnimation(e)}
              onAnimationEnd={() => setAnimateA(0)}>
              <div
                toggle-animation={animateA}
                className={`string a-str ${
                  !animateA ? "" : "vshake-animation"
                }`}
                id={`A-${v.sample}`}></div>
              <span
                className={`fret-key ${v.showNote ? null : "hide-content"}`}
                id={`A-${v.sample}`}>
                {v.note}
              </span>
            </div>
          ))}
        </div>

        {/* E String (4th) */}
        <div className='row'>
          {guitarCords[3].cords.map((v, i) => (
            <div
              key={v.index}
              id={`E-${v.sample}`}
              className='fret'
              onClick={(e) => handleCordAnimation(e)}
              onAnimationEnd={() => setAnimateE(0)}>
              <div
                toggle-animation={animateE}
                className={`string e-str ${
                  !animateE ? "" : "vshake-animation"
                }`}
                id={`E-${v.sample}`}></div>
              <span
                className={`fret-key ${v.showNote ? null : "hide-content"}`}
                id={`E-${v.sample}`}>
                {v.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const HilariooInstrument = new Instrument("@Hilarioo: Guitar", Guitar);
