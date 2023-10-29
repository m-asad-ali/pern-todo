/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Container } from "@mui/material";
import useSWR from "swr";

import NavBar from "../components/NavBar";
import TextBox from "../components/TextBox";
import TodoList from "../components/TodoList";
import { fetchAllTodos } from "../api/HandleTodoAPI";
import { useSelector } from "react-redux";

const MainPage = () => {
  const [todos, setTodos] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  // calling apis
  const { data, error } = useSWR(token, fetchAllTodos, {
    onSuccess: (data) => {
      setTodos(data);
    },
  });

  return (
    <div>
      <Container maxWidth="md">
        <NavBar
          username={user.username[0].toUpperCase() + user.username.slice(1)}
        />
        <TextBox />
        <TodoList todo={todos} />
      </Container>
    </div>
  );
};

export default MainPage;
