
    import * as React from 'react';
    import Button from 'components/common/Button';
    import Dialog from '@mui/material/Dialog';
    import DialogActions from '@mui/material/DialogActions';
    import DialogContent from '@mui/material/DialogContent';
    import DialogTitle from '@mui/material/DialogTitle';
    
    export default function ConfirmDeleteAmenityModel(
      {open, handleClose , handleDelete,deleteMdg}
    ) {
      
    
      return (
        <div>
         
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" sx={{fontSize:"15px"}}>
              {deleteMdg}
            </DialogTitle>
            <DialogContent>
              
            </DialogContent>
            <DialogActions 
            sx={{
              justifyContent: 'space-around'
            }}
            >
              <Button sx={{fontSize:'15px'}} onClick={() => handleClose()} autoFocus>Cancel</Button>
              <Button onClick={handleDelete} 
              sx={{backgroundColor: 'red', color: 'white',fontSize:'15px'}}>
              
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
    