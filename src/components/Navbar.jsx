
import React,{useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
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
    const [state,setState]=useState({
        right:false,

    });

    const toggleSlider=((slider,open)=>()=>{
        setState({...state,[slider]:open})
    });

    const classes=useStyles();

    const sideList=slider=>{
        <Box className={classes.sliderContainer}>
            <Avatar className={classes.avatar} src={av2} alt='Linux Icon'/>
            <Divider />
            <List>
                {menuItems.map((lstItem,key)=>(
                    <ListItem button key={key}>
                        <ListItemIcon className={classes.listItem}>
                            {lstItem.listIcon}
                        </ListItemIcon>
                        <ListItemText primary={lstItem.listText} className={classes.listItem}/>
                    </ListItem>

                ))}
                
            </List>

        </Box>

    }

    return (
        <>
            
            <AppBar position="static" style={{ background:"#333" }}>
                <Toolbar>

                    <IconButton onClick={toggleSlider("right",true)}>
                        <ArrowBack  style={{color:"tomato"}}/>
                    </IconButton>

                    <Typography variant="h5" style={{ color:"tan" }}>
                        Portfolio
                    </Typography>

                    <MobilRightMenuSlider anchor="right" open={state.right}>
                        {sideList("right")}
                    </MobilRightMenuSlider>

                </Toolbar>
            
            </AppBar>
        </>

    )
}

export default Navbar;
