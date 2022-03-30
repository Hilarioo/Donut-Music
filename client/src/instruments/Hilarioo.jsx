/*
    File:          Hilarioo.jsx
    Details:       Instrument
    Instrument:    Guitar
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
  return <div>Hilarioo Instrument</div>;
};

export const HilariooInstrument = new Instrument("@Hilarioo: Guitar", Guitar);
