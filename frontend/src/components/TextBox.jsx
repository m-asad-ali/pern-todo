/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState } from "react";
import { Container, TextField, Button, Box } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { addTodo } from "../api/HandleTodoAPI";
import { mutate } from "swr";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";

import "react-datepicker/dist/react-datepicker.css";
const CustomDatePicker = styled(DatePicker)({
  "& .react-datepicker": {
    height: "56px",
  },
});
function TextBox() {
  const [dueDate, setDueDate] = useState(null);
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const {
    handleSubmit,
    control,
    formState: { isValid },
    reset,
  } = useForm({ mode: "onChange" });

  async function onSubmit(data) {
    console.log(data.dueDate);
    const apiObj = {
      title: data.title,
      userId: user.id,
      dueDate: data.dueDate,
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
          {/* <Controller
            control={control}
            name="dueDate"
            render={({ field }) => (
              <DatePicker
                placeholderText="Select date"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          /> */}
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

export default TextBox;
