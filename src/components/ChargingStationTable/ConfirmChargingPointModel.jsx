import * as React from 'react';
import Button from 'components/common/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function ConfirmChargingPointModel(
    { open, handleEnablepoint, handleclosepoint, PointStatus }
) {


    return (
        <div >


            <Dialog 
                open={open}
                onClose={handleEnablepoint}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{fontSize:"15px"}} >
                    {"Are you sure you want to Disable this item ?"}
                </DialogTitle>


                <DialogContent >

                </DialogContent>
                <DialogActions
                    sx={{
                        justifyContent: 'space-around'
                    }}
                >


                    { PointStatus === 1 ?

                        <>
                            <Button sx={{fontSize:'15px'}} onClick={() => handleclosepoint()} autoFocus  >Close</Button>

                            <Button onClick={() => handleEnablepoint()}
                                sx={{ backgroundColor: 'red',color: 'white',fontSize:"15px" }}>
                                Disable
                            </Button>

                        </>

                        :
                        <>
                            <Button sx={{fontSize:"15px"}} onClick={() => handleclosepoint()} autoFocus>Close</Button>

                            <Button  onClick={() => handleEnablepoint()}
                                sx={{ backgroundColor: 'red', color: 'white' , fontSize:'15px'}}>
                                Enable
                            </Button>


                        </>


                    }


                </DialogActions>
            </Dialog>
        </div>
    );
}
