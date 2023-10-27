/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { mutate } from "swr";
import {
  Checkbox,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import { deleteTodo } from "../api/HandleTodoAPI";
import { completeTodo } from "../api/HandleTodoAPI";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5ODMzNTkzOCwiZXhwIjoxNjk4NDIyMzM4fQ.KNuDN5KvhkZjwu_d9axNSL6MyDSukTScvhTcQZJJAOU";

function TodoItem({ todo }) {
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
          {/* <IconButton edge="end" aria-label="delete">
            <EditOutlinedIcon />
          </IconButton> */}

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
