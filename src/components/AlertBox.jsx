import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import Divider from "@material-ui/core/Divider";

const AlertBox = ({ text, display, success }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    display("");
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth="sm"
      fullWidth={true}
    >
      <DialogTitle id="simple-dialog-title" style={{ textAlign: "center" }}>
        Building System
      </DialogTitle>
      <Divider />

      <DialogContentText style={{ textAlign: "center", marginTop: "1rem" }}>
        {success === true ? (
          <CheckCircleIcon
            size={100}
            style={{ color: "green", fontSize: 70 }}
          />
        ) : (
          <CancelIcon size={100} style={{ color: "red", fontSize: 70 }} />
        )}
      </DialogContentText>
      <DialogContent>
        <DialogContentText style={{ textAlign: "center" }}>
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertBox;
