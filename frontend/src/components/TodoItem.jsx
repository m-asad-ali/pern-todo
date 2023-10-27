/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import {
  Checkbox,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { mutate } from "swr";

import { deleteTodo } from "../api/HandleTodoAPI";

function TodoItem({ todo }) {
  async function handleDeleteTodo(id) {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5ODMzNTkzOCwiZXhwIjoxNjk4NDIyMzM4fQ.KNuDN5KvhkZjwu_d9axNSL6MyDSukTScvhTcQZJJAOU";

    await deleteTodo({ id, token });
    mutate(token);
  }

  return (
    <div>
      <ListItem sx={{ pl: 0 }}>
        <Checkbox checked={todo?.completed} />
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
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
