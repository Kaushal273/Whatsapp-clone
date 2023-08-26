import React from 'react'
import Drawer from '@mui/material/Drawer';


const drawerStyle = {
    left:20,
    top: 14,
    height: '96%',
    width: '25%',
    boxShadow: 'none'
}

function InfoDrawer({open, setOpen}) {

    const handleClose = () => {
        setOpen(false);
    }

  return (
    <Drawer
        open={setOpen}
        onClose={handleClose}
        PaperProps={{sx: drawerStyle}}
        style={{ zIndex: 1500}}
      
    >
      <h4>profile</h4>
      <h4>Name</h4>
    </Drawer>
  )
}

export default InfoDrawer
