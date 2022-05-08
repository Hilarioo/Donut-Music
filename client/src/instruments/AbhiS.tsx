//External library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React, {useEffect} from 'react';

// Importing Instrument, OscillatorOptions, and RecursivePartial and Material UI

import {Instrument, InstrumentProps} from '../Instruments';
import {OmniOscillatorOptions} from "tone/Tone/source/oscillator/OscillatorInterface";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import {RecursivePartial} from "tone/Tone/core/util/Interface";

//Importing Violin B&W Template
import image from './../img/ViolinTemplate.png';


/** ------------------------------------------------------------------------ **
 * Implementation of components for Violin.
 ** ------------------------------------------------------------------------ */
//Violin interface attributes definition.
interface ViolinKeyProps {
  note: string; // Incorporates C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
  duration?: string; //
  synth?: Tone.Synth; // Contains library code for making sound
  UpDmn: number; //Upper Key Dimension value.
  minor?: boolean; // True if minor key, false if major key
  octave: number; // octave value
  index: number;  // octave + index together give a location for the piano key
  LatDmn: number; //Lateral Key Dimension value
  orientation: string; 
}

export function ViolinStringKey({note, synth, minor, UpDmn, index, LatDmn, orientation}: ViolinKeyProps): JSX.Element {
  return (
    <div
      style={{
        transform: orientation
      }}>
      <div
        onMouseDown={() => synth?.triggerAttack(`${note}`)} 
        onMouseUp={() => synth?.triggerRelease('+0.9')}
        className={classNames('ba pointer absolute dim')}
        style={{
          top: UpDmn,
          transform: "rotate(0deg)",
          left: `${LatDmn}rem`,
          zIndex: 0,
          marginLeft: minor ? '0.25rem' : 0,
          background: "#C8C9C5",
          height: '11px',
          width: "23px",
          borderRadius: "20px"
        }}>
      </div>
    </div>
  );
}
//Defining the main Violin Keys function
function Violin({synth, setSynth}: InstrumentProps): JSX.Element {
  const keys = List([
    { note: 'C', idx: 0 },
    { note: 'Db', idx: 0.5 },
    { note: 'D', idx: 1 },
    { note: 'Eb', idx: 1.5 },
    { note: 'E', idx: 2 },
    { note: 'F', idx: 3 },
    { note: 'Gb', idx: 3.5 },
    { note: 'G', idx: 4 },
    { note: 'Ab', idx: 4.5 },
    { note: 'A', idx: 5 },
    { note: 'Bb', idx: 5.5 },
    { note: 'B', idx: 6 },
  ]);


//Defining Oscillator function
  const setOscillator = () => {
    setSynth(oldSynth => {
      oldSynth.disconnect();
      return new Tone.Synth({
        "volume": 4,
        "detune": 0,
        "portamento": 0,
        "envelope": {
          "attack": 2,
          "attackCurve": "cosine",
          "decay": 0.1,
          "decayCurve": "linear",
          "release": 0.2,
          "releaseCurve": "cosine",
          "sustain": 0.2
        },
        "oscillator": {
          "partialCount": 5,
          "partials": [
            1,
            0.8434636622299384,
            0.000244140625,
            0.31640625,
            0.0625
          ],
          "phase": 8,
          "type": "custom"
        } as RecursivePartial<OmniOscillatorOptions>,
      }).toDestination();}
    );
  };
  
   useEffect(setOscillator, [setSynth]);
//Defining window size, importing image and key octave + orientation and dimensions
//Prefer to open in Chrome as opposed to other browsers due to scaling issues.

  return (
    <div className="pv4">
      <div className={"image"}>
        <img src={image} alt={"Violin"} style={{
          position: 'absolute',
          top: window.innerHeight/25,
          left: window.innerWidth/10
        }}/>
		
		<div className="E String Keys relative dib h4 w-100 ml4"> 
        {Range(6, 7).map(octave =>
          keys.map(key => {
            const isMinor = key.note.indexOf('b') !== -1;
            const note = `${key.note}${octave+1}`;
            if (isMinor) {
              return null
            }
            return (
              <ViolinStringKey
                key={note} 
                note={note}
                synth={synth}
				UpDmn={130}
                minor={isMinor}
                octave={octave+1}
                index={(octave - 2) * 7 + key.idx}
                LatDmn={(((octave - 2) * 7 + key.idx) * 2)-10.5}
                orientation={"rotate(2.5deg)"}
              />
            );
          }),
        )}
      </div>
	  
      <div className="A String Keys relative dib h4 w-100 ml4"> 
        {Range(5, 6).map(octave =>
          keys.map(key => {
            const isMinor = key.note.indexOf('b') !== -1;
            const note = `${key.note}${octave+1}`;
            if (isMinor) {
              return null
            }
            return (
              <ViolinStringKey
                key={note} 
                note={note}
                synth={synth}
				UpDmn={117}
                minor={isMinor}
                octave={octave+1}
                index={(octave - 2) * 7 + key.idx}                
                LatDmn={(((octave - 2) * 7 + key.idx) * 2)+3.5}
                orientation={"rotate(1deg)"}
              />
            );
          }),
        )}
      </div>
	  
      <div className="D String Keys relative dib h4 w-100 ml4"> 
        {Range(4, 5).map(octave =>
          keys.map(key => {
            const isMinor = key.note.indexOf('b') !== -1;
            const note = `${key.note}${octave+1}`;
            if (isMinor) {
              return null
            }
            return (
              <ViolinStringKey
                key={note} //react key
                note={note}
                synth={synth}
				UpDmn={9}
                minor={isMinor}
                octave={octave+1}
                index={(octave - 2) * 7 + key.idx}                
                LatDmn={(((octave - 2) * 7 + key.idx) * 2)+17}
                orientation={"rotate(-0.5deg)"}
              />
            );
          }),
        )}
      </div>
     
      
     </div>
      <div className="G String Keys relative dib h4 w-100 ml4"> 
        {Range(3, 4).map(octave =>
          keys.map(key => {
            const isMinor = key.note.indexOf('b') !== -1;
            const note = `${key.note}${octave+1}`;
            if (isMinor) {
              return null
            } 
            return (
              <ViolinStringKey
                key={note} //react key
                note={note}
                synth={synth}
                UpDmn={-50}
				minor={isMinor}
                octave={octave+1}
                index={(octave - 2) * 7 + key.idx}                
                LatDmn={(((octave - 2) * 7 + key.idx) * 2)+31}
                orientation={"rotate(-1.5deg)"}
              />
            );
          }),
        )}
      </div>
	</div>
  );
}

export const AbhiSInstrument = new Instrument('@AbhiS : Violin', Violin);