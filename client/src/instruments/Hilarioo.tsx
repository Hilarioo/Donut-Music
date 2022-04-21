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

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Guitar.
 ** ------------------------------------------------------------------------ */

const Guitar = () => {
  return (
    <div className='guitar-container'>
      <div className='guitar'>
        <div className='string g-str'>
          {notes
            .slice(-2)
            .concat(notes)
            .map((i) => (
              <div key={i.note} className='fret'>
                <span className='fret-key'>{i.note}</span>
              </div>
            ))}
        </div>
        <div className='string d-str'>
          {notes
            .slice(5)
            .concat(notes.slice(0, 7))
            .map((i) => (
              <div key={i.note} className='fret'>
                <span className='fret-key'>{i.note}</span>
              </div>
            ))}
        </div>
        <div className='string a-str'>
          {notes.concat(notes.slice(0, 2)).map((i) => (
            <div key={i.note} className='fret'>
              <span className='fret-key'>{i.note}</span>
            </div>
          ))}
        </div>
        <div className='string e-str'>
          {notes
            .slice(-5)
            .concat(notes.slice(0, -3))
            .map((i) => (
              <div key={i.note} className='fret'>
                <span className='fret-key'>{i.note}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export const HilariooInstrument = new Instrument("@Hilarioo: Guitar", Guitar);
