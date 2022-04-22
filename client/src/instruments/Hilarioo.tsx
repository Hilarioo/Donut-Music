/*
    File:          Hilarioo.jsx
    Details:       Instrument
    Instrument:    Bass Guitar
*/

// 3rd party library imports
import * as Tone from "tone";
import classNames from "classnames";
import { List, Range } from "immutable";
import React, { useEffect, useState } from "react";

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
  const [cord01, setCord01] = useState(0);
  const [cord02, setCord02] = useState(0);
  const [cord03, setCord03] = useState(0);
  const [cord04, setCord04] = useState(0);

  return (
    <div className='guitar-container'>
      <div className='guitar'>
        <div className='row'>
          {notes
            .slice(-2)
            .concat(notes)
            .map((v, i) => (
              <div
                key={`g${i}-` + v.note}
                id={`g${i}-` + v.note}
                className='fret'
                onClick={() => setCord01(1)}
                onAnimationEnd={() => setCord01(0)}>
                <div
                  toggle-animation={cord01}
                  className={`string g-str ${
                    !cord01 ? "" : "vshake-animation"
                  }`}
                  id={`g${i}-` + v.note}></div>
                <span className='fret-key' id={`g${i}-` + v.note}>
                  {v.note}
                </span>
              </div>
            ))}
        </div>
        <div className='row'>
          {notes
            .slice(5)
            .concat(notes.slice(0, 7))
            .map((v, i) => (
              <div
                key={`d${i}-` + v.note}
                id={`d${i}-` + v.note}
                className='fret'
                onClick={() => setCord02(1)}
                onAnimationEnd={() => setCord02(0)}>
                <div
                  toggle-animation={cord02}
                  className={`string d-str ${
                    !cord02 ? "" : "vshake-animation"
                  }`}
                  id={`d${i}-` + v.note}></div>
                <div className='fret-key' id={`d${i}-` + v.note}>
                  {v.note}
                </div>
              </div>
            ))}
        </div>
        <div className='row'>
          {notes.concat(notes.slice(0, 2)).map((v, i) => (
            <div
              key={`a${i}-` + v.note}
              id={`a${i}-` + v.note}
              className='fret'
              onClick={() => setCord03(1)}
              onAnimationEnd={() => setCord03(0)}>
              <div
                toggle-animation={cord03}
                className={`string a-str ${!cord03 ? "" : "vshake-animation"}`}
                id={`a${i}-` + v.note}></div>
              <span className='fret-key' id={`a${i}-` + v.note}>
                {v.note}
              </span>
            </div>
          ))}
        </div>
        <div className='row'>
          {notes
            .slice(-5)
            .concat(notes.slice(0, -3))
            .map((v, i) => (
              <div
                key={`e${i}-` + v.note}
                id={`e${i}-` + v.note}
                className='fret'
                onClick={() => setCord04(1)}
                onAnimationEnd={() => setCord04(0)}>
                <div
                  toggle-animation={cord04}
                  className={`string e-str ${
                    !cord04 ? "" : "vshake-animation"
                  }`}
                  id={`e${i}-` + v.note}></div>
                <span className='fret-key' id={`e${i}-` + v.note}>
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
