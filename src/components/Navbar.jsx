
import React from 'react';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons"



const Navbar = () => {
    return (
        <AppBar position="static" style={{ background:"#444" }}>
            <Toolbar>
                <IconButton>
                    <ArrowBack  style={{color:"tomato"}}/>
                </IconButton>

            </Toolbar>
            
        </AppBar>
    )
}

export default Navbar;
