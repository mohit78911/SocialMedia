import { Box, Typography ,Button} from "@mui/material";
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
 

export default function CommentComponent({ comments, commentDeleteHandler }) {
  return (
    <Box>
       
    </Box>
  );
}
