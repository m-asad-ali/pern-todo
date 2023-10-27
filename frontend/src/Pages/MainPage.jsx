/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Container } from "@mui/material";

import NavBar from "../components/NavBar";
import TextBox from "../components/TextBox";
import TodoList from "../components/TodoList";
const MainPage = () => {
  const [taskData, setTaskData] = useState({ title: "" });
  const [todos, setTodos] = useState([
    { title: "Task 1", description: "my description for tasks 1" },
    { title: "Task 2", description: "my description for tasks 2" },
    { title: "Task 3", description: "my description for tasks 3" },
  ]);

  return (
    <div>
      <NavBar username={"Asad Ali"} />
      <Container maxWidth="md">
        <TextBox onAddTask={setTaskData} />
        {console.log("Actual Task", taskData)}
        <TodoList todo={todos} />
      </Container>
    </div>
  );
};

export default MainPage;
