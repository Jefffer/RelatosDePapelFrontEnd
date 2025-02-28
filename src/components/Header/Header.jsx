import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Box
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";


const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Relatos de Papel 📖
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2" sx={{ marginRight: 1 }}>
            Aquí podrás encontrar una gran selección de libros en formato físico y
            digital.
          </Typography>
          <Tooltip title="GitHub de Jefffer">
            <IconButton
              color="inherit"
              href="https://github.com/Jefffer"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;