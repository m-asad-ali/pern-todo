/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React from "react";
import { mutate } from "swr";
import {
  Checkbox,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useSelector } from "react-redux";
import { deleteTodo } from "../api/HandleTodoAPI";
import { completeTodo } from "../api/HandleTodoAPI";

function TodoItem({ todo }) {
  const token = useSelector((state) => state.auth.token);
  let formattedDate;
  if (todo?.dueDate !== null)
    formattedDate = new Date(todo?.dueDate).toLocaleDateString();

  async function handleDeleteTodo(id) {
    await deleteTodo({ id, token });
    mutate(token);
  }

  async function handleCheckboxChange(id) {
    await completeTodo({ id, token });
    mutate(token);
  }

  return (
    <div>
      <ListItem sx={{ pl: 0 }}>
        <Checkbox
          checked={todo?.completed}
          onClick={() => {
            handleCheckboxChange(todo?.id);
          }}
        />
        <ListItemText primary={todo?.title} />

        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => {
              handleDeleteTodo(todo?.id);
            }}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
