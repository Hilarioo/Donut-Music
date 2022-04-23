import React, { useState, useEffect, useRef } from "react";
// Marterial UI
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

export interface Cord {
  note: string;
  showNote: boolean;
}
export interface Note {
  str: string;
  cords: Cord[];
}
const HilariooFeatures = (guitarCords: Note[], setGuitarCords: any) => {
  // reset content
  // const resetNotes = () => {
  //   const newNotes = notes.map((note) => ({ ...note, showNote: false }));
  //   setNotes(newNotes);
  //   console.log(notes);
  // };
  // MUI
  const [open, setOpen] = React.useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (e: any) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(e.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      {/* Guitar Feautres */}
      <div className='guitar-features'>
        <Button variant='outlined' color='primary' className='mark'>
          Mark
        </Button>
        <div className='highlight'>
          <Button
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup='true'
            variant='outlined'
            onClick={handleToggle}>
            Highlight
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}>
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id='menu-list-grow'
                      onKeyDown={handleListKeyDown}>
                      {guitarCords[1].cords.map((n) => (
                        <MenuItem onClick={handleClose}>{n.note}</MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
        <Button variant='outlined' className='reset'>
          Reset
        </Button>
      </div>
    </>
  );
};

export default HilariooFeatures;
