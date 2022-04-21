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

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Guitar.
 ** ------------------------------------------------------------------------ */

const Guitar = () => {
  return (
    <>
      <div className='guitar'>
        <div className='g-string'>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
            <div key={`g${i}`} className='fret'>
              {i}
            </div>
          ))}
        </div>
        <div className='d-string'>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
            <div key={`d${i}`} className='fret'>
              {i}
            </div>
          ))}
        </div>
        <div className='a-string'>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
            <div key={`a${i}`} className='fret'>
              {i}
            </div>
          ))}
        </div>
        <div className='e-string'>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
            <div key={`e${i}`} className='fret'>
              {i}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const HilariooInstrument = new Instrument("@Hilarioo: Guitar", Guitar);
