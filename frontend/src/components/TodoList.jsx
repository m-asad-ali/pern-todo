/* eslint-disable no-unused-vars */

import { Container, Typography, List } from "@mui/material";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({ todo }) => {
  return (
    <div>
      <Container sx={{ marginTop: "30px" }}>
        <Typography variant="h5">Todo List</Typography>
        <List style={{ listStyleType: "none" }}>
          {todo.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </List>
      </Container>
    </div>
  );
};

TodoList.propTypes = {
  todo: PropTypes.array.isRequired,
};

export default TodoList;
