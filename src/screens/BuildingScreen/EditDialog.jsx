import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TextField } from "@material-ui/core";
import FileBase64 from "react-file-base64";
import EditIcon from "@material-ui/icons/Edit";
import AlertBox from "../../components/AlertBox";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  iconStyle: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EditDialog = ({ editBuilding, building }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(building.name);
  const [area, setArea] = useState(building.area);
  const [location, setLocation] = useState(building.location);
  const [image, setImage] = useState(building.image);
  const [alertMessage, setAlertMessage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = () => {
    if (!name || !area) {
      return setAlertMessage("Please fill the Name and Area!");
    }
    editBuilding({ name, area, location, image }, building.id);
    handleClose();
  };

  const onFileUpload = (file) => {
    console.log(file.base64);
    setImage(file.base64);
  };

  return (
    <div>
      <EditIcon onClick={handleClickOpen} className={classes.iconStyle} />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Add New Building
        </DialogTitle>
        <DialogContent>
          <TextField
            title="Name"
            label="Name"
            value={name}
            variant="outlined"
            onChange={(event) => setName(event.target.value)}
            required
          />
          <TextField
            title="Area"
            label="Area"
            value={area}
            variant="outlined"
            onChange={(event) => setArea(event.target.value)}
            required
          />
          <TextField
            title="Location"
            label="Location"
            value={location}
            variant="outlined"
            onChange={(event) => setLocation(event.target.value)}
          />

          <FileBase64 onDone={onFileUpload} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEdit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      {alertMessage ? (
        <AlertBox
          success={false}
          text={alertMessage}
          display={setAlertMessage}
        />
      ) : null}
    </div>
  );
};

export default EditDialog;
