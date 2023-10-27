import { useState } from "react";
import { Container } from "@mui/material";

import NavBar from "../components/NavBar";
import TextBox from "../components/TextBox";
const MainPage = () => {
  const [taskData, setTaskData] = useState({ title: "" });

  return (
    <div>
      <NavBar username={"Asad Ali"} />
      <Container maxWidth="md">
        <TextBox onAddTask={setTaskData} />
        {console.log("Actual Task", taskData)}
      </Container>
    </div>
  );
};

export default MainPage;
