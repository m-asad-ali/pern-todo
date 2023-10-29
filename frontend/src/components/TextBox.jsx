/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { Container, TextField, Button, Box } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

import { addTodo } from "../api/HandleTodoAPI";
import { mutate } from "swr";
import { useSelector } from "react-redux";

function TextBox({ onAddTask }) {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const {
    handleSubmit,
    control,
    formState: { isValid },
    reset,
  } = useForm({ mode: "onChange" });

  async function onSubmit(data) {
    // console.log("Form data", data);
    onAddTask(data.title);
    const apiObj = {
      title: data.title,
      userId: user.id,
      token: token,
    };

    await addTodo(apiObj);
    mutate(apiObj.token);
    reset();
  }

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",
        marginTop: "10%",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <Box display="flex" alignItems="center">
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                label="Add your task"
                {...field}
                variant="outlined"
              />
            )}
          />
          <Button
            type="submit"
            disabled={!isValid}
            style={{
              height: "56px",
              marginLeft: "8px",
            }}
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </Box>
      </form>
    </Container>
  );
}

TextBox.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default TextBox;
