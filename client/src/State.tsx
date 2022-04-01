// 3rd party
import { List, Map } from "immutable";

// project dependencies
import { PianoInstrument } from "./instruments/Piano";
import { WaveformVisualizer } from "./visualizers/Waveform";
import { HilariooInstrument } from "./instruments/Hilarioo";
import { HilariooVisualizer } from "./visualizers/Hilarioo";
import { RuiQiHuang1832Visualizer } from "./visualizers/RuiQiHuang1832";
import { RuiQiHuang1832Instrument } from "./instruments/RuiQiHuang1832";
import { JustDioVisualizer } from "./visualizers/JustDio";
import { JustDioInstrument } from "./instruments/JustDio";

/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */
export type AppState = Map<string, any>; // similar to { [id: string]: any }

/**
 * Start with the default piano instrument.
 * Add your instruments to this list.
 */
const instruments = List([PianoInstrument, HilariooInstrument,RuiQiHuang1832Instrument, JustDioInstrument]); // similar to Instrument[]

/**
 * Start with the default waveform visualizer.
 * Add your visualizers to this list.
 */
const visualizers = List([WaveformVisualizer, HilariooVisualizer, RuiQiHuang1832Visualizer, JustDioVisualizer]); // similar to Visualizer[]

/**
 * The default application state contains a list of instruments and a list of visualizers.
 *
 * 'instrument': List<Instrument>
 * 'visualizer': List<Visualizer>
 */
export const defaultState: AppState = Map<string, any>({
  instruments: instruments,
  visualizers: visualizers,
  
});
