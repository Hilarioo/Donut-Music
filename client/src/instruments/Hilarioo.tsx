/*
    File:          Hilarioo.jsx
    Details:       Instrument
    Instrument:    Bass Guitar
*/

// 3rd party library imports
import * as Tone from "tone";
import classNames from "classnames";
import { List, Range } from "immutable";
import React, { useState } from "react";
// Marterial UI
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
// project imports
import { Instrument, InstrumentProps } from "../Instruments";
/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Guitar.
 ** ------------------------------------------------------------------------ */
// resets
const resetGuitarOff = [
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
];
const resetGuitarOn = [
  {
    str: "G",
    cords: [
      { index: "00", note: "G", showNote: true },
      { index: "01", note: "G#", showNote: true },
      { index: "02", note: "A", showNote: true },
      { index: "03", note: "A#", showNote: true },
      { index: "04", note: "B", showNote: true },
      { index: "05", note: "C", showNote: true },
      { index: "06", note: "C#", showNote: true },
      { index: "07", note: "D", showNote: true },
      { index: "08", note: "D#", showNote: true },
      { index: "09", note: "E", showNote: true },
      { index: "10", note: "F", showNote: true },
      { index: "11", note: "F#", showNote: true },
      { index: "12", note: "G", showNote: true },
      { index: "13", note: "G#", showNote: true },
    ],
  },
  {
    str: "D",
    cords: [
      { index: "00", note: "D", showNote: true },
      { index: "01", note: "D#", showNote: true },
      { index: "02", note: "E", showNote: true },
      { index: "03", note: "F", showNote: true },
      { index: "04", note: "F#", showNote: true },
      { index: "05", note: "G", showNote: true },
      { index: "06", note: "G#", showNote: true },
      { index: "07", note: "A", showNote: true },
      { index: "08", note: "A#", showNote: true },
      { index: "09", note: "B", showNote: true },
      { index: "10", note: "C", showNote: true },
      { index: "11", note: "C#", showNote: true },
      { index: "12", note: "D", showNote: true },
      { index: "13", note: "D#", showNote: true },
    ],
  },
  {
    str: "A",
    cords: [
      { index: "00", note: "A", showNote: true },
      { index: "01", note: "A#", showNote: true },
      { index: "02", note: "B", showNote: true },
      { index: "03", note: "C", showNote: true },
      { index: "04", note: "C#", showNote: true },
      { index: "05", note: "D", showNote: true },
      { index: "06", note: "D#", showNote: true },
      { index: "07", note: "E", showNote: true },
      { index: "08", note: "F", showNote: true },
      { index: "09", note: "F#", showNote: true },
      { index: "10", note: "G", showNote: true },
      { index: "11", note: "G#", showNote: true },
      { index: "12", note: "A", showNote: true },
      { index: "13", note: "A#", showNote: true },
    ],
  },
  {
    str: "E",
    cords: [
      { index: "00", note: "E", showNote: true },
      { index: "01", note: "F", showNote: true },
      { index: "02", note: "F#", showNote: true },
      { index: "03", note: "G", showNote: true },
      { index: "04", note: "G#", showNote: true },
      { index: "05", note: "A", showNote: true },
      { index: "06", note: "A#", showNote: true },
      { index: "07", note: "B", showNote: true },
      { index: "08", note: "C", showNote: true },
      { index: "09", note: "C#", showNote: true },
      { index: "10", note: "D", showNote: true },
      { index: "11", note: "D#", showNote: true },
      { index: "12", note: "E", showNote: true },
      { index: "13", note: "F", showNote: true },
    ],
  },
];

// interface
export interface Cord {
  index: string;
  note: string;
  showNote: boolean;
}
export interface Note {
  str: string;
  cords: Cord[];
}

// component
const Guitar = () => {
  // toggle for "show all notes"
  const [showNotes, setShowNotes] = useState(false);
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
  // string animation
  const [vibrateAnimation01, setVibrateAnimation01] = useState(0);
  const [vibrateAnimation02, setVibrateAnimation02] = useState(0);
  const [vibrateAnimation03, setVibrateAnimation03] = useState(0);
  const [vibrateAnimation04, setVibrateAnimation04] = useState(0);

  // switch note visibility when clicked
  const handleNoteClick = (e: any) => {
    // obtain the key needing update
    const cord = e.target.id.charAt(1).toUpperCase();
    const key = e.target.id.slice(2, 4);

    // update cords
    const newCords = guitarCords[e.target.id.charAt(0)].cords.map((c) =>
      c.index === key ? { ...c, showNote: !c.showNote } : c
    );
    const newGuitar = guitarCords.map((g) =>
      g.str === cord ? { ...g, cords: newCords } : g
    );

    // update state
    setGuitarCords(newGuitar);
    // reset show all notes toggle
    setShowNotes(false);
  };

  const handleCord01 = (e: any) => {
    setVibrateAnimation01(1);
    handleNoteClick(e);
    e.preventDefault();
  };
  const handleCord02 = (e: any) => {
    setVibrateAnimation02(1);
    handleNoteClick(e);
    e.preventDefault();
  };
  const handleCord03 = (e: any) => {
    setVibrateAnimation03(1);
    handleNoteClick(e);
    e.preventDefault();
  };
  const handleCord04 = (e: any) => {
    setVibrateAnimation04(1);
    handleNoteClick(e);
    e.preventDefault();
  };

  // Show all notes
  const showAll = (e: any) => {
    setShowNotes((showNotes) => !showNotes);
    setGuitarCords(!showNotes ? resetGuitarOn : resetGuitarOff);
  };

  // reset to not show any nodes and reset's toggle button
  const resetNotes = (e: any) => {
    setGuitarCords(resetGuitarOff);
    setShowNotes(false);
    console.log("toggle04: " + showNotes);
  };

  return (
    <div className='guitar-container'>
      {/* Guitar Feautres */}
      <div className='guitar-features'>
        {/* show all notes toggle */}
        <FormGroup>
          <FormControlLabel
            control={<Switch />}
            label='Show All Notes'
            onClick={(e) => showAll(e)}
            checked={showNotes}
          />
        </FormGroup>
        {/* reset button to clear fretboard */}
        <Button
          variant='outlined'
          className='reset guitar-btn'
          onClick={(e) => resetNotes(e)}>
          Reset
        </Button>
      </div>

      {/* Guitar Fretboard */}
      <div className='guitar'>
        {/* G String (1st) */}
        <div className='row'>
          {guitarCords[0].cords.map((v) => (
            <div
              key={`g${v.index}-${v.note}`}
              id={`0g${v.index}-${v.note}`}
              className='fret'
              onClick={(e) => handleCord01(e)}
              onAnimationEnd={() => setVibrateAnimation01(0)}>
              <div
                toggle-animation={vibrateAnimation01}
                className={`string g-str ${
                  !vibrateAnimation01 ? "" : "vshake-animation"
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
              onClick={(e) => handleCord02(e)}
              onAnimationEnd={() => setVibrateAnimation02(0)}>
              <div
                toggle-animation={vibrateAnimation02}
                className={`string d-str ${
                  !vibrateAnimation02 ? "" : "vshake-animation"
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
              onClick={(e) => handleCord03(e)}
              onAnimationEnd={() => setVibrateAnimation03(0)}>
              <div
                toggle-animation={vibrateAnimation03}
                className={`string a-str ${
                  !vibrateAnimation03 ? "" : "vshake-animation"
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
              onClick={(e) => handleCord04(e)}
              onAnimationEnd={() => setVibrateAnimation04(0)}>
              <div
                toggle-animation={vibrateAnimation04}
                className={`string e-str ${
                  !vibrateAnimation04 ? "" : "vshake-animation"
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
