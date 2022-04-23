/*
    File:          Hilarioo.jsx
    Details:       Instrument
    Instrument:    Bass Guitar
*/

// 3rd party library imports
import * as Tone from "tone";
import classNames from "classnames";
import { List, Range } from "immutable";
import React, { useEffect, useState, useRef } from "react";
// impoort components
import Features from "./components/HilariooFeatures";
// project imports
import { Instrument, InstrumentProps } from "../Instruments";

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Guitar.
 ** ------------------------------------------------------------------------ */

export interface Cord {
  note: string;
  showNote: boolean;
}
export interface Note {
  str: string;
  cords: Cord[];
}

const Guitar = () => {
  // guitar cords
  const [guitarCords, setGuitarCords] = useState<Array<Note>>([
    {
      str: "G",
      cords: [
        { note: "G", showNote: false },
        { note: "G#", showNote: false },
        { note: "A", showNote: false },
        { note: "A#", showNote: false },
        { note: "B", showNote: false },
        { note: "C", showNote: false },
        { note: "C#", showNote: false },
        { note: "D", showNote: false },
        { note: "D#", showNote: false },
        { note: "E", showNote: false },
        { note: "F", showNote: false },
        { note: "F#", showNote: false },
        { note: "G", showNote: false },
        { note: "G#", showNote: false },
      ],
    },
    {
      str: "D",
      cords: [
        { note: "D", showNote: false },
        { note: "D#", showNote: false },
        { note: "E", showNote: false },
        { note: "F", showNote: false },
        { note: "F#", showNote: false },
        { note: "G", showNote: false },
        { note: "G#", showNote: false },
        { note: "A", showNote: false },
        { note: "A#", showNote: false },
        { note: "B", showNote: false },
        { note: "C", showNote: false },
        { note: "C#", showNote: false },
        { note: "D", showNote: false },
        { note: "D#", showNote: false },
      ],
    },
    {
      str: "A",
      cords: [
        { note: "A", showNote: false },
        { note: "A#", showNote: false },
        { note: "B", showNote: false },
        { note: "C", showNote: false },
        { note: "C#", showNote: false },
        { note: "D", showNote: false },
        { note: "D#", showNote: false },
        { note: "E", showNote: false },
        { note: "F", showNote: false },
        { note: "F#", showNote: false },
        { note: "G", showNote: false },
        { note: "G#", showNote: false },
        { note: "A", showNote: false },
        { note: "A#", showNote: false },
      ],
    },
    {
      str: "E",
      cords: [
        { note: "E", showNote: false },
        { note: "F", showNote: false },
        { note: "F#", showNote: false },
        { note: "G", showNote: false },
        { note: "G#", showNote: false },
        { note: "A", showNote: false },
        { note: "A#", showNote: false },
        { note: "B", showNote: false },
        { note: "C", showNote: false },
        { note: "C#", showNote: false },
        { note: "D", showNote: false },
        { note: "D#", showNote: false },
        { note: "E", showNote: false },
        { note: "F", showNote: false },
      ],
    },
  ]);
  // string animation
  const [cord01, setCord01] = useState(0);
  const [cord02, setCord02] = useState(0);
  const [cord03, setCord03] = useState(0);
  const [cord04, setCord04] = useState(0);

  const updateKeys = (e: any) => {
    // [TEST] which update?
    // console.log(e.target.id);
    // obtain the key needing update (clicked)
    const cord = e.target.id.charAt(1).toUpperCase();
    const key = e.target.id.slice(4);
    // [TEST] key correct?
    console.log(cord);

    // update cords
    const newCords = guitarCords[e.target.id.charAt(0)].cords.map((c) =>
      c.note === key ? { ...c, showNote: !c.showNote } : c
    );
    const newGuitar = guitarCords.map((g) =>
      g.str === cord ? { ...g, cords: newCords } : g
    );
    setGuitarCords(newGuitar);
    console.log(newCords);
  };

  const handleCord01 = (e: any) => {
    setCord01(1);
    updateKeys(e);
  };
  const handleCord02 = (e: any) => {
    setCord02(1);
    updateKeys(e);
  };
  const handleCord03 = (e: any) => {
    setCord03(1);
    updateKeys(e);
  };
  const handleCord04 = (e: any) => {
    setCord04(1);
    updateKeys(e);
  };

  return (
    <div className='guitar-container'>
      {/* Guitar Features */}
      <Features {...guitarCords} {...setGuitarCords} />
      {/* Guitar Fretboard */}
      <div className='guitar'>
        {/* G String (1st) */}
        <div className='row'>
          {guitarCords[0].cords.map((v, i) => (
            <div
              key={`g${i}-` + v.note}
              id={`0g${i}-` + v.note}
              className='fret'
              onClick={(e) => handleCord01(e)}
              onAnimationEnd={() => setCord01(0)}>
              <div
                toggle-animation={cord01}
                className={`string g-str ${!cord01 ? "" : "vshake-animation"}`}
                id={`0g${i}-` + v.note}></div>
              <span
                className={`fret-key ${v.showNote ? null : "hide-content"}`}
                id={`0g${i}-` + v.note}>
                {v.note}
              </span>
            </div>
          ))}
        </div>
        {/* D String (2nd) */}
        <div className='row'>
          {guitarCords[1].cords.map((v, i) => (
            <div
              key={`0d${i}-` + v.note}
              id={`0d${i}-` + v.note}
              className='fret'
              onClick={(e) => handleCord02(e)}
              onAnimationEnd={() => setCord02(0)}>
              <div
                toggle-animation={cord02}
                className={`string d-str ${!cord02 ? "" : "vshake-animation"}`}
                id={`0d${i}-` + v.note}></div>
              <span
                className={`fret-key ${v.showNote ? null : "hide-content"}`}
                id={`0d${i}-` + v.note}>
                {v.note}
              </span>
            </div>
          ))}
        </div>
        {/* A String (3rd) */}
        <div className='row'>
          {guitarCords[2].cords.map((v, i) => (
            <div
              key={`0a${i}-` + v.note}
              id={`0a${i}-` + v.note}
              className='fret'
              onClick={(e) => handleCord03(e)}
              onAnimationEnd={() => setCord03(0)}>
              <div
                toggle-animation={cord03}
                className={`string a-str ${!cord03 ? "" : "vshake-animation"}`}
                id={`0a${i}-` + v.note}></div>
              <span
                className={`fret-key ${v.showNote ? null : "hide-content"}`}
                id={`0a${i}-` + v.note}>
                {v.note}
              </span>
            </div>
          ))}
        </div>
        {/* E String (4th) */}
        <div className='row'>
          {guitarCords[3].cords.map((v, i) => (
            <div
              key={`0e${i}-` + v.note}
              id={`0e${i}-` + v.note}
              className='fret'
              onClick={(e) => handleCord04(e)}
              onAnimationEnd={() => setCord04(0)}>
              <div
                toggle-animation={cord04}
                className={`string e-str ${!cord04 ? "" : "vshake-animation"}`}
                id={`0e${i}-` + v.note}></div>
              <span
                className={`fret-key ${v.showNote ? null : "hide-content"}`}
                id={`0e${i}-` + v.note}>
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
