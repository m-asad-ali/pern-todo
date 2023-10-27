import PropTypes from "prop-types";
import { Container, TextField, Button, Box } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

function TextBox({ onAddTask }) {
  const {
    handleSubmit,
    control,
    formState: { isValid },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form data", data);
    onAddTask(data.title);
    reset();
  };

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
