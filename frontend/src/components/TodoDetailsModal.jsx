/* eslint-disable no-unused-vars */

import { Typography, Button, Card } from "@mui/material";
import PropTypes from "prop-types";

function TodoDetailsModal({ todo, onClose }) {
  return (
    <Card>
      <Typography variant="h6" gutterBottom>
        {/* {todo?.title} */}
        Title Name
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {/* {todo?.description} */}
        Description here...
      </Typography>
      <Button variant="contained" color="primary" onClick={onClose}>
        Close
      </Button>
    </Card>
  );
}

TodoDetailsModal.propTypes = {
  todo: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TodoDetailsModal;
