import React, { memo, useEffect } from "react";
import {
  Dialog as MDialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@mui/material";

import IconButton from "./IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Dialog = (props) => {
  const [open, setOpen] = React.useState(false);
  const {
    openComponent,
    actionComponent,
    contentComponent,
    title,
    icon = {},
    onOpen,
    onClose,
    children,
    disableCloseIcon,
  } = props;

  useEffect(() => {
    setOpen(props.open === true);
  }, [props.open]);

  const onClickOpenInside = (e) => {
    e.preventDefault();
    setOpen(true);
    onOpen();
  };

  const onCloseInside = () => {
    setOpen(false);
    onClose();
  };

  const getIcon = () => {
    if (!icon.src) {
      return null;
    }

    return (
      <div
        style={{
          display: "flex",
          margin: "20px 20px",
          justifyContent: "center",
        }}
      >
        <img
          alt="na"
          src={icon.src}
          style={{ width: "130px", height: "130px", ...icon }}
        />
      </div>
    );
  };

  return (
    <>
      {openComponent ? openComponent(onClickOpenInside) : null}
      <MDialog
        open={open}
        onClose={onCloseInside}
        fullWidth
        maxWidth="sm"
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {getIcon()}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {title}
            {!disableCloseIcon && (
              <IconButton
                aria-label="close"
                onClick={onCloseInside}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[400],
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
          </div>
        </DialogTitle>

        <DialogContent>
          {contentComponent ? contentComponent(onCloseInside) : children}
        </DialogContent>
        <DialogActions>{actionComponent(onCloseInside)}</DialogActions>
      </MDialog>
    </>
  );
};

Dialog.defaultProps = {
  onClose: () => null,
  onOpen: () => null,
  actionComponent: () => null,
  openComponent: null,
  closeIcon: true,
};

export default memo(Dialog);
