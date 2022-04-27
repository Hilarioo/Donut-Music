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
import A2Noise from "../audio/guitar/A2.mp3";
import A3Noise from "../audio/guitar/A3.mp3";
import A4Noise from "../audio/guitar/A4.mp3";
import A5Noise from "../audio/guitar/A5.mp3";
import Cs2Noise from "../audio/guitar/Cs2.mp3";
import C3Noise from "../audio/guitar/C3.mp3";
import C4Noise from "../audio/guitar/C4.mp3";
import C5Noise from "../audio/guitar/C5.mp3";
import C6Noise from "../audio/guitar/C6.mp3";
import Ds3Noise from "../audio/guitar/Ds3.mp3";
import Ds4Noise from "../audio/guitar/Ds4.mp3";
import Ds5Noise from "../audio/guitar/Ds5.mp3";
import E2Noise from "../audio/guitar/E2.mp3";
import Fs2Noise from "../audio/guitar/Fs2.mp3";
import Fs3Noise from "../audio/guitar/Fs3.mp3";
import Fs4Noise from "../audio/guitar/Fs4.mp3";
import Fs5Noise from "../audio/guitar/Fs5.mp3";

// Components
import HilariooFeatures from "./components/HilariooFeatures";
// project imports
import { Instrument, InstrumentProps } from "../Instruments";

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Guitar.
 ** ------------------------------------------------------------------------ */

// interface
interface Cord {
  index: string;
  note: string;
  showNote: boolean;
}
interface Note {
  str: string;
  cords: Cord[];
}

const guitarSamples = new Tone.ToneAudioBuffers(
  {
    A2: A2Noise,
    A3: A3Noise,
    A4: A4Noise,
    A5: A5Noise,
    C3: C3Noise,
    C4: C4Noise,
    C5: C5Noise,
    C6: C6Noise,
    Cs2: Cs2Noise,
    Ds3: Ds3Noise,
    Ds4: Ds4Noise,
    Ds5: Ds5Noise,
    E2: E2Noise,
    Fs2: Fs2Noise,
    Fs3: Fs3Noise,
    Fs4: Fs4Noise,
    Fs5: Fs5Noise,
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
        { index: "00", note: "G", showNote: false },
        { index: "01", note: "G#", showNote: false },
        { index: "02", note: "A", showNote: false },
        { index: "03", note: "A#", showNote: false },
        { index: "04", note: "B", showNote: false },
        { index: "05", note: "C", showNote: false },
        { index: "06", note: "C#", showNote: false },
        { index: "07", note: "D", showNote: false },
        { index: "08", note: "D#", showNote: false },
        { index: "09", note: "E", showNote: false },
        { index: "10", note: "F", showNote: false },
        { index: "11", note: "F#", showNote: false },
        { index: "12", note: "G", showNote: false },
        { index: "13", note: "G#", showNote: false },
      ],
    },
    {
      str: "D",
      cords: [
        { index: "00", note: "D", showNote: false },
        { index: "01", note: "D#", showNote: false },
        { index: "02", note: "E", showNote: false },
        { index: "03", note: "F", showNote: false },
        { index: "04", note: "F#", showNote: false },
        { index: "05", note: "G", showNote: false },
        { index: "06", note: "G#", showNote: false },
        { index: "07", note: "A", showNote: false },
        { index: "08", note: "A#", showNote: false },
        { index: "09", note: "B", showNote: false },
        { index: "10", note: "C", showNote: false },
        { index: "11", note: "C#", showNote: false },
        { index: "12", note: "D", showNote: false },
        { index: "13", note: "D#", showNote: false },
      ],
    },
    {
      str: "A",
      cords: [
        { index: "00", note: "A", showNote: false },
        { index: "01", note: "A#", showNote: false },
        { index: "02", note: "B", showNote: false },
        { index: "03", note: "C", showNote: false },
        { index: "04", note: "C#", showNote: false },
        { index: "05", note: "D", showNote: false },
        { index: "06", note: "D#", showNote: false },
        { index: "07", note: "E", showNote: false },
        { index: "08", note: "F", showNote: false },
        { index: "09", note: "F#", showNote: false },
        { index: "10", note: "G", showNote: false },
        { index: "11", note: "G#", showNote: false },
        { index: "12", note: "A", showNote: false },
        { index: "13", note: "A#", showNote: false },
      ],
    },
    {
      str: "E",
      cords: [
        { index: "00", note: "E", showNote: false },
        { index: "01", note: "F", showNote: false },
        { index: "02", note: "F#", showNote: false },
        { index: "03", note: "G", showNote: false },
        { index: "04", note: "G#", showNote: false },
        { index: "05", note: "A", showNote: false },
        { index: "06", note: "A#", showNote: false },
        { index: "07", note: "B", showNote: false },
        { index: "08", note: "C", showNote: false },
        { index: "09", note: "C#", showNote: false },
        { index: "10", note: "D", showNote: false },
        { index: "11", note: "D#", showNote: false },
        { index: "12", note: "E", showNote: false },
        { index: "13", note: "F", showNote: false },
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

  // switch note visibility when clicked
  const handleNoteClick = (cord: string, key: string, index: number) => {
    const player = new Tone.Player().toDestination();
    // play one of the samples when they all load
    player.buffer = guitarSamples.get("C3");
    player.start();
    // update cords
    const updateCords = guitarCords[index].cords.map((c) =>
      c.index === key ? { ...c, showNote: !c.showNote } : c
    );
    const updateGuitar = guitarCords.map((g) =>
      g.str === cord.toUpperCase() ? { ...g, cords: updateCords } : g
    );

    // update state
    setGuitarCords(updateGuitar);
    setShowToggle(false);
  };

  const handleCordAnimation = (e: any) => {
    const cordStr = e.target.id.charAt(1);
    const key = e.target.id.slice(2, 4);
    switch (cordStr) {
      case "g":
        setAnimateG(1);
        handleNoteClick(cordStr, key, 0);
        e.preventDefault();
        return 0;
      case "d":
        setAnimateD(1);
        handleNoteClick(cordStr, key, 1);
        e.preventDefault();
        return 0;
      case "a":
        setAnimateA(1);
        handleNoteClick(cordStr, key, 2);
        e.preventDefault();
        return 0;
      default: // e
        setAnimateE(1);
        handleNoteClick(cordStr, key, 3);
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
              key={`g${v.index}-${v.note}`}
              id={`0g${v.index}-${v.note}`}
              className='fret'
              onClick={(e) => handleCordAnimation(e)}
              onAnimationEnd={() => setAnimateG(0)}>
              <div
                toggle-animation={animateG}
                className={`string g-str ${
                  !animateG ? "" : "vshake-animation"
                }`}
                id={`0g${v.index}-${v.note}`}></div>
              <span
                className={`fret-key ${v.showNote ? null : "hide-content"}`}
                id={`0g${v.index}-${v.note}`}>
                {v.note}
              </span>
            </div>
          ))}
        </div>

        {/* D String (2nd) */}
        <div className='row'>
          {guitarCords[1].cords.map((v, i) => (
            <div
              key={`1d${v.index}-${v.note}`}
              id={`1d${v.index}-${v.note}`}
              className='fret'
              onClick={(e) => handleCordAnimation(e)}
              onAnimationEnd={() => setAnimateD(0)}>
              <div
                toggle-animation={animateD}
                className={`string d-str ${
                  !animateD ? "" : "vshake-animation"
                }`}
                id={`1d${v.index}-${v.note}`}></div>
              <span
                className={`fret-key ${v.showNote ? null : "hide-content"}`}
                id={`1d${v.index}-${v.note}`}>
                {v.note}
              </span>
            </div>
          ))}
        </div>

        {/* A String (3rd) */}
        <div className='row'>
          {guitarCords[2].cords.map((v, i) => (
            <div
              key={`2a${v.index}-${v.note}`}
              id={`2a${v.index}-${v.note}`}
              className='fret'
              onClick={(e) => handleCordAnimation(e)}
              onAnimationEnd={() => setAnimateA(0)}>
              <div
                toggle-animation={animateA}
                className={`string a-str ${
                  !animateA ? "" : "vshake-animation"
                }`}
                id={`2a${v.index}-${v.note}`}></div>
              <span
                className={`fret-key ${v.showNote ? null : "hide-content"}`}
                id={`2a${v.index}-${v.note}`}>
                {v.note}
              </span>
            </div>
          ))}
        </div>

        {/* E String (4th) */}
        <div className='row'>
          {guitarCords[3].cords.map((v, i) => (
            <div
              key={`3e${v.index}-${v.note}`}
              id={`3e${v.index}-${v.note}`}
              className='fret'
              onClick={(e) => handleCordAnimation(e)}
              onAnimationEnd={() => setAnimateE(0)}>
              <div
                toggle-animation={animateE}
                className={`string e-str ${
                  !animateE ? "" : "vshake-animation"
                }`}
                id={`3e${v.index}-${v.note}`}></div>
              <span
                className={`fret-key ${v.showNote ? null : "hide-content"}`}
                id={`3e${v.index}-${v.note}`}>
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
