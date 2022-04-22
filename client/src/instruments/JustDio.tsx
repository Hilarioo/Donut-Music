// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';
import { Filter, Frequency, NoiseSynth, Part, Synth, PolySynth, FrequencyEnvelope} from 'tone';

const drum = new Tone.MembraneSynth().toDestination();

const hihat = new Tone.NoiseSynth().toDestination();

const snare = new Tone.NoiseSynth({
    envelope:{
        decay: 0.5
    }
}).toDestination();

const cymbal = new Tone.MetalSynth({
    envelope:{
        attack: 0.0001,
        decay: 0.4,
        release: 0.001
    },
    harmonicity: 10,
    modulationIndex: 32,
    resonance: 4000,
    octaves: 1.5,
}).toDestination();



const Drums = () => {

    //CSS styling
    const css = `
        .buttonKick {
            height: 100px;
            width: 100px;
            background-color: orange;
            cursor: pointer;
            margin-right: 10px;
            margin-left: 10px;
            border: 5px solid coral;
            margin-top:10px;
        }
        .buttonKick:hover{
            background-color: chocolate;
            color: white;
        }

        .buttonSnare {
            height: 100px;
            width: 100px;
            background-color: #0be389;
            cursor: pointer;
            margin-right: 10px;
            margin-left: 10px;
            border: 5px solid cadetblue;
            margin-top:10px;
        }
        .buttonSnare:hover{
            background-color: mediumseagreen;
            color: white;
        }

        .buttonHat {
            height: 100px;
            width: 100px;
            background-color: #f5bff1;
            cursor: pointer;
            margin-right: 10px;
            margin-left: 10px;
            border: 5px solid #d158c9;
            margin-top:10px;
        }
        .buttonHat:hover{
            background-color: #c4a3c2;
            color: white;
        }

        .buttonCymbal {
            height: 100px;
            width: 100px;
            background-color: #9089e0;
            cursor: pointer;
            margin-right: 10px;
            margin-left: 10px;
            border: 5px solid #6b5fed;
            margin-top:10px;
        }
        .buttonCymbal:hover{
            background-color: #4c4878;
            color: white;
        }
    `

    return (<><div className='title'><h1>JustDio Drum Machine</h1></div>
    
    {/* Row 1: C notes */}
    <div>

    <style>
        {css}
    </style>
    
    <button className="buttonKick" onClick={() => drum.triggerAttackRelease('C0', 1)}>
        <b>Kick C0</b>
    </button>
    <button className='buttonKick' onClick={() => drum.triggerAttackRelease("C1", 1)}>
        <b>Kick C1</b>
    </button>
    <button className='buttonKick' onClick={() => drum.triggerAttackRelease("Ab1", 1)}>
        <b>Kick Ab1</b>
    </button>
    <button className='buttonKick' onClick={() => drum.triggerAttackRelease("Bb1", 1)}>
        <b>Kick Bb1</b>
    </button>
    </div>

    <div style={{paddingLeft:60}}>
    <button className="buttonHat" onClick={() => hihat.triggerAttackRelease("8n")}>
        <b>Hi-Hat</b>
    </button>
    <button className='buttonCymbal' onClick={() => cymbal.triggerAttackRelease("B2", 1)}>
        <b>Cymbal</b>
    </button>
    <button className='buttonSnare' onClick={() => snare.triggerAttackRelease("8n")}>
        <b>Snare</b>
    </button>
    </div>
      

      </>);
  };

  
export const JustDioInstrument = new Instrument("@JustDio: Drums", Drums);