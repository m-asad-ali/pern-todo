/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Checkbox,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Modal,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import TodoDetailsModal from "./TodoDetailsModal";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    backgroundColor: "white",
    boxShadow: 24,
    // padding: theme.spacing(2, 4, 3),
  },
}));

function TodoItem({ todo }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ListItem sx={{ pl: 0 }}>
        <Checkbox checked={todo?.complete} />
        <ListItemText
          primary={todo.title}
          secondary={todo.description}
          button
          onClick={handleOpen}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            {/* Add delete functionality here if needed */}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      {/* <Modal open={open} onClose={handleClose}>
        <div className={classes.modal}>
          <TodoDetailsModal todo={todo} onClose={handleClose} />
        </div>
      </Modal> */}
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
