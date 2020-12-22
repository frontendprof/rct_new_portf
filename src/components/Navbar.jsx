
import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
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
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import av2 from "./linuxm.png"




const useStyles=makeStyles(theme=>({
    sliderContainer:{
        width:250,
        background:"#511",
        height:"30rem"
    },
    avatar:{
        display:"block",
        margin:".5rem auto",
        width:theme.spacing(13),
        height:theme.spacing(13)
    },
    listItem:{
        color:"tan"
    }
}));


const menuItems=[
    {
        listIcon:<Home />,
        listText:"Home"
    },

    {
        listIcon:<AssignmentInd />,
        listText:"Resume"
    },

    {
        listIcon:<Apps />,
        listText:"Portfolio"
    },

    {
        listIcon:<ContactMail />,
        listText:"Contacts"
    },
    
]



const Navbar = () => {
    const classes=useStyles();
    return (
        <>
            <Box className={classes.sliderContainer}>
                <Avatar className={classes.avatar} src={av2} alt='Linux Icon'/>
                <Divider />
                <List>
                    {menuItems.map((lstItem,key)=>(
                        <ListItem button key={key}>
                            <ListItemIcon className={classes.listItem}>
                                {lstItem.listIcon}
                            </ListItemIcon>
                            <ListItemText />
                        </ListItem>

                    ))}
                    
                </List>

            </Box>
            <AppBar position="static" style={{ background:"#333" }}>
                <Toolbar>

                    <IconButton>
                        <ArrowBack  style={{color:"tomato"}}/>
                    </IconButton>

                    <Typography variant="h5" style={{ color:"tan" }}>
                        Portfolio
                    </Typography>

                </Toolbar>
            
            </AppBar>
        </>

    )
}

export default Navbar;
