/* eslint-disable no-unused-vars */

import { Container, Typography, List } from "@mui/material";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({ todo }) => {
  const sortedTodo = todo.slice().sort((a, b) => a.id - b.id);
  return (
    <div>
      <Container sx={{ marginTop: "30px" }}>
        <Typography variant="h5">Todo List</Typography>
        <List style={{ listStyleType: "none" }}>
          {sortedTodo.map((todo) => (
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
