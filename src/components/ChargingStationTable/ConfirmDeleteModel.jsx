
    import * as React from 'react';
    import Button from 'components/common/Button';
    import Dialog from '@mui/material/Dialog';
    import DialogActions from '@mui/material/DialogActions';
    import DialogContent from '@mui/material/DialogContent';
    import DialogTitle from '@mui/material/DialogTitle';
    
    export default function ConfirmDeleteModel(
      {open, handleClose , handleDelete}
    ) {
      
    
      return (
        <div>
          
          <Dialog 
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" >
              {"Are you sure you want to delete this item ?"}
            </DialogTitle>
            <DialogContent>
              
            </DialogContent>
            <DialogActions 
            sx={{
              justifyContent: 'space-around'
            }}
            >
              <Button onClick={() => handleClose()} autoFocus>Cancel</Button>
              <Button onClick={handleClose} 
              sx={{backgroundColor: 'red', color: 'white'}}>
              
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
    