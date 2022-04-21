/*
    File:          Hilarioo.jsx
    Details:       Instrument
    Instrument:    Bass Guitar
*/

// 3rd party library imports
import * as Tone from "tone";
import classNames from "classnames";
import { List, Range } from "immutable";
import React from "react";

// project imports
import { Instrument, InstrumentProps } from "../Instruments";

const notes = [
  { note: "A", duration: 0, synth: "" },
  { note: "A#", duration: 0, synth: "" },
  { note: "B", duration: 0, synth: "" },
  { note: "C", duration: 0, synth: "" },
  { note: "C#", duration: 0, synth: "" },
  { note: "D", duration: 0, synth: "" },
  { note: "D#", duration: 0, synth: "" },
  { note: "E", duration: 0, synth: "" },
  { note: "F", duration: 0, synth: "" },
  { note: "F#", duration: 0, synth: "" },
  { note: "G", duration: 0, synth: "" },
  { note: "G#", duration: 0, synth: "" },
];

// on click vibrate string(s)
const vibrateStrings = (e: any) => {
  // [TEST] outputs fret clicked and any after
  console.log(e.target.value);
};

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Guitar.
 ** ------------------------------------------------------------------------ */

const Guitar = () => {
  return (
    <div className='guitar-container'>
      <div className='guitar'>
        <div className='row'>
          {notes
            .slice(-2)
            .concat(notes)
            .map((v, i) => (
              <div
                key={`g-${i}` + v.note}
                className='fret'
                onClick={(e) => {
                  vibrateStrings(e);
                }}>
                <div className='string g-str'></div>
                <span className='fret-key'>{v.note}</span>
              </div>
            ))}
        </div>
        <div className='row'>
          {notes
            .slice(5)
            .concat(notes.slice(0, 7))
            .map((v, i) => (
              <div key={`d-${i}` + v.note} className='fret'>
                <div className='string d-str'></div>
                <div className='fret-key'>{v.note}</div>
              </div>
            ))}
        </div>
        <div className='row'>
          {notes.concat(notes.slice(0, 2)).map((v, i) => (
            <div key={`a-${i}` + v.note} className='fret'>
              <div className='string a-str'></div>
              <span className='fret-key'>{v.note}</span>
            </div>
          ))}
        </div>
        <div className='row'>
          {notes
            .slice(-5)
            .concat(notes.slice(0, -3))
            .map((v, i) => (
              <div key={`e-${i}` + v.note} className='fret'>
                <div className='string e-str'></div>
                <span className='fret-key '>{v.note}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export const HilariooInstrument = new Instrument("@Hilarioo: Guitar", Guitar);
