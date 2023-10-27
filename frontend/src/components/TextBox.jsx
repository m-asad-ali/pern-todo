import { Container, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

function TextBox() {
  const { control, handleSubmit, reset } = useForm();

  const handleAddTask = (data) => {
    // onAddTask(data.task);
    reset();
  };

  return (
    <Container sx={{ padding: "16px" }}>
      <form onSubmit={handleSubmit(handleAddTask)}>
        <Controller
          name="task"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField label="Add your task" variant="outlined" {...field} />
          )}
        />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>
    </Container>
  );
}

export default TextBox;
