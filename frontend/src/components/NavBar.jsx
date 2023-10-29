/* eslint-disable no-unused-vars */

import { AppBar, Toolbar, Typography, Avatar, Button } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

const Navbar = ({ username }) => {
  const dispatch = useDispatch();
  return (
    <AppBar
      position="sticky"
      color="default"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Toolbar>
        <TaskAltIcon />

        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Todo List
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* <Avatar alt={username} src="/path-to-avatar-image.jpg" /> */}
          <Typography
            variant="body1"
            style={{ marginLeft: "16px", marginRight: "16px" }}
          >
            Hello, {username}
          </Typography>
        </div>
        <Button
          color="inherit"
          onClick={() => {
            dispatch(logout());
          }}
        >
          LogOut
        </Button>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Navbar;
