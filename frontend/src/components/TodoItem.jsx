/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import {
  Checkbox,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";

function TodoItem({ todo }) {
  return (
    <div>
      <ListItem sx={{ pl: 0 }}>
        <Checkbox checked={todo?.completed} />
        <ListItemText primary={todo?.title} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            {/* Add delete functionality here if needed */}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
