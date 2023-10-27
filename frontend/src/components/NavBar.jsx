import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { PropTypes } from "@mui/material";

const Navbar = ({ username }) => {
  return (
    <AppBar position="sticky" color="default" sx={{ background: "#e0e0e0" }}>
      <Toolbar>
        <TaskAltIcon />

        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Todo List
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1" style={{ marginRight: "16px" }}>
            Hello, {username}
          </Typography>
          <Avatar alt={username} src="/path-to-avatar-image.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Navbar;
