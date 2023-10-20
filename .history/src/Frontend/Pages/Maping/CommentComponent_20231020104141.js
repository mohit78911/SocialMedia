import { Box, Typography} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
 

export default function CommentComponent({ comments, commentDeleteHandler ,setOpen ,open , handleClickOpen}) {
  

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
       
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
           
        </DialogContent>
        <DialogActions>
           
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

    </Box>
  );
}
