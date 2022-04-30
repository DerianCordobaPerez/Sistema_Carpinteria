import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "./../utils/Menu";
import ConfigMenu from "./configmenu";

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const toogleMenu = () => setOpenMenu(!openMenu);

    return (
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toogleMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Carpi-Co
                        </Typography>
                        <ConfigMenu />
                    </Toolbar>
                </AppBar>
            </Box>
            <Menu open={openMenu} toogle={toogleMenu} />
        </header>
    );
}
