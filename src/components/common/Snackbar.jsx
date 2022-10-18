import React from "react";

import { Snackbar as MSnackbar, Slide } from "@mui/material";

const Snackbar = ({ open, message, onClose, autoHideDuration, children }) => {
    return (
        <MSnackbar
            open={open}
            onClose={onClose}
            message={message}
            autoHideDuration={autoHideDuration}
            children={children}
            TransitionComponent={(props) => <Slide {...props} direction="left" />}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            sx={{ top: { sm: 48 } }}
        />
    )
}

export default Snackbar;