/*
    File:          HilariooFeatures.jsx
    Details:       Toggle & Reset Feature for the Bass Guitar
*/

import React from "react";
// Marterial UI
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

// interface
interface Cord {
  index: string;
  note: string;
  showNote: boolean;
}
interface Note {
  str: string;
  cords: Cord[];
}

type Props = {
  showToggle: boolean;
  setShowToggle: (val: boolean) => void;
  guitarCords: Note[];
  setGuitarCords: (val: Note[]) => void;
};

const HilariooFeatures: React.FC<Props> = ({
  showToggle,
  setShowToggle,
  guitarCords,
  setGuitarCords,
}) => {
  // Show all notes
  const showAll = () => {
    // update toggle state
    setShowToggle(!showToggle);
    // update guitar state
    handleReset(!showToggle);
  };

  // reset showNote: false || true
  const handleReset = (reset: boolean) => {
    const update = guitarCords.map((c: Note) => ({
      str: c.str,
      cords: c.cords.map((n) => ({
        index: n.index,
        note: n.note,
        showNote: reset,
      })),
    }));

    // update guitar state
    setGuitarCords(update);
  };

  // reset to not show any nodes and reset's toggle button
  const resetNotes = (e: any) => {
    handleReset(false);
    setShowToggle(false);
    e.preventDefault();
  };
  return (
    <>
      {/* Guitar Feautres */}
      <div className='guitar-features'>
        {/* show all notes toggle */}
        <FormGroup>
          <FormControlLabel
            control={<Switch />}
            label='Show All Notes'
            onClick={() => showAll()}
            checked={showToggle}
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
    </>
  );
};

export default HilariooFeatures;
