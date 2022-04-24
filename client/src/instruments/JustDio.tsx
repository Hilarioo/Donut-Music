// 3rd party library imports
import * as Tone from "tone";
import classNames from "classnames";
import { List, Range } from "immutable";
import React from "react";

// project imports
import { Instrument, InstrumentProps } from "../Instruments";

const drum = new Tone.MembraneSynth().toDestination();

const Drums = () => {
  return (
    <>
      <div>
        <h1>JustDio Drum Machine</h1>
      </div>

      {/* Row 1: C notes */}
      <div>
        <button
          style={{
            height: 100,
            width: 100,
            backgroundColor: "orange",
            cursor: "pointer",
          }}
          onClick={() => drum.triggerAttackRelease("C1", 1)}>
          <b>C1</b>
        </button>
        <button
          style={{
            height: 100,
            width: 100,
            backgroundColor: "orange",
            cursor: "pointer",
          }}
          onClick={() => drum.triggerAttackRelease("C2", 1)}>
          <b>C2</b>
        </button>
        <button
          style={{
            height: 100,
            width: 100,
            backgroundColor: "orange",
            cursor: "pointer",
          }}
          onClick={() => drum.triggerAttackRelease("C3", 1)}>
          <b>C3</b>
        </button>
        <button
          style={{
            height: 100,
            width: 100,
            backgroundColor: "orange",
            cursor: "pointer",
          }}
          onClick={() => drum.triggerAttackRelease("C4", 1)}>
          <b>C4</b>
        </button>
      </div>

      <div>
        <button
          style={{ height: 100, width: 100, backgroundColor: "orange" }}
          onClick={() => drum.triggerAttackRelease("C", 1)}>
          <b>C</b>
        </button>
        <button
          style={{ height: 100, width: 100, backgroundColor: "orange" }}
          onClick={() => drum.triggerAttackRelease("Cb", 1)}>
          <b>Cb</b>
        </button>
      </div>
    </>
  );
};

export const JustDioInstrument = new Instrument("@JustDio: Drums", Drums);
