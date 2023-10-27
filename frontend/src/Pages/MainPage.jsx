/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Container } from "@mui/material";
import useSWR from "swr";

import NavBar from "../components/NavBar";
import TextBox from "../components/TextBox";
import TodoList from "../components/TodoList";
import { fetchAllTodos } from "../api/HandleTodoAPI";
const MainPage = () => {
  const [taskData, setTaskData] = useState({ title: "" });
  const [todos, setTodos] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5ODMzNTkzOCwiZXhwIjoxNjk4NDIyMzM4fQ.KNuDN5KvhkZjwu_d9axNSL6MyDSukTScvhTcQZJJAOU";

  // calling apis
  const { data, error } = useSWR(token, fetchAllTodos, {
    onSuccess: (data) => {
      setTodos(data);
    },
  });

  return (
    <div>
      <Container maxWidth="md">
        <NavBar username={"Asad Ali"} />
        <TextBox onAddTask={setTaskData} />
        <TodoList todo={todos} />
      </Container>
    </div>
  );
};

export default MainPage;
