import NavBar from "../components/NavBar";
import TextBox from "../components/TextBox";
import { Container } from "@mui/material";
const MainPage = () => {
  return (
    <div>
      <NavBar username={"Asad Ali"} />
      <Container maxWidth="md">
        <TextBox onAddTask={() => console.log("Hello")} />
      </Container>
      {/* <TextBox /> */}
    </div>
  );
};

export default MainPage;
