
import React, { useState } from 'react'
import {makeStyles} from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";

import Footer from "./Footer"

import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";
import {Link} from "react-router-dom";
import { 
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail 
} from '@material-ui/icons';
import av2 from "./images/linuxm.png"


const useStyles=makeStyles(theme=>({
    menuSlider:{
        width:250,
        background:"#511",
        height:"100%"
    },
    avatar:{
        display:"block",
        margin:".5rem auto",
        width:theme.spacing(25),
        height:theme.spacing(25),
    },
    listItems:{
        color:"tan"
    }
}))


const menuItems=[
    {
        listIcon:<Home />,
        listText:"Home",
        listPath:"/"
    },

    {
        listIcon:<AssignmentInd />,
        listText:"Resume",
        listPath:"/resume"
    },

    {
        listIcon:<Apps />,
        listText:"Portfolio",
        listPath:"/portfolio"
    },

    {
        listIcon:<ContactMail />,
        listText:"Contacts",
        listPath:"/contacts"
    },
    
]


const Navbar = () => {
    const classes=useStyles();
    const [state,setState]=useState({ right: false });

    const toggleSlider=(slider,open)=>()=>{
        setState({...state,[slider]:open})
    }

    const sideList=slider=>(
        <Box component="div" className={classes.menuSlider} onClick={toggleSlider("right",false)}>
            <Avatar  src={av2} alt="photo" className={classes.avatar}/>
            <Divider/>
            <List>
                {menuItems.map((item,key)=>(
                        <ListItem key={key} button component={Link} to={item.listPath}>
                            <ListItemIcon className={classes.listItems}>
                                {item.listIcon}
                            </ListItemIcon>

                            <ListItemText className={classes.listItems} primary={item.listText}>{item.listText}</ListItemText>
                        </ListItem>
                ))}                    
                
            </List>
        </Box>
    )
    return (
        <>

            <Box component="nav">
                <AppBar position="static" style={{ background:"#222" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right",true)}>

                            <ArrowBack style={{ background:"tomato" }}/>
                        </IconButton>

                        <Typography variant="h5">Portfolio</Typography>

                        <MobilRightMenuSlider open={state.right} anchor="right" onClose={toggleSlider("right",false)}>
                            {sideList("right")}
                            <Footer />
                        </MobilRightMenuSlider>
                    </Toolbar>

                </AppBar>
                
            </Box>
        </>
        
    )
}

export default Navbar
