
import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button
} from "@material-ui/core";
import project_1 from "../images/html-css-javascript-lg.jpg"
import project_2 from "../images/javascript-fullstack.jpg"
import project_3 from "../images/mern-stack.jpg"
import project_4 from "../images/react-redux.jpg"

import Navbar from './Navbar'




const useStyles = makeStyles({
    mainContainer:{
        background:'#233',
        height:"100%"
    },

    cardContainer:{
        maxWidth:345,
        margin:"5rem auto"
    }    

});


const Portfolio = () => {
    const classes=useStyles();


    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center" alignItems="center">

                {/* Project One */}
                <Grid item xs={12} sm={8} md={6}>

                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project_1"
                                height="140"
                                image={project_1}
                                />

                            <CardContent>

                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>

                                <Typography component="p" color="textSecondary" variant="body2">
                                    Lorem, ipsum dolor sit ame distinctio, explicabo non quaerat deserunt sit architecto voluptate et ullam dolore nam impedit magni, vero labore ratione consequuntur quibusdam, voluptas laudantium?

                                </Typography>

                            </CardContent>
                        </CardActionArea>

                            <CardActions>
                                <Button size="small" color="primary">Share</Button>
                                <Button size="small" color="primary">Live Demo</Button>
                            </CardActions>
                            


                    </Card>
                </Grid>
            

                {/* Project Two*/}
                <Grid item xs={12} sm={8} md={6}>

                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project_2"
                                height="140"
                                image={project_2}
                                />

                            <CardContent>

                                <Typography gutterBottom variant="h5">
                                    Project 2
                                </Typography>

                                <Typography component="p" color="textSecondary" variant="body2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus distinctio, explicabo non quaerat deserunt sit architecto voluptate et ullam dolore nam impedit magni, vero labore ratione consequuntur quibusdam, voluptas laudantium?

                                </Typography>

                            </CardContent>
                        </CardActionArea>

                            <CardActions>
                                <Button size="small" color="primary">Share</Button>
                                <Button size="small" color="primary">Live Demo</Button>
                            </CardActions>
                            


                    </Card>
                </Grid>
            
                  {/* Project Three*/}
                <Grid item xs={12} sm={8} md={6}>

                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project_3"
                                height="140"
                                image={project_3}
                                />

                            <CardContent>

                                <Typography gutterBottom variant="h5">
                                    Project 3
                                </Typography>

                                <Typography component="p" color="textSecondary" variant="body2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus distinctio, explicabo non quaerat deserunt sit architecas laudantium?

                                </Typography>

                            </CardContent>
                        </CardActionArea>

                            <CardActions>
                                <Button size="small" color="primary">Share</Button>
                                <Button size="small" color="primary">Live Demo</Button>
                            </CardActions>
                            


                    </Card>
                </Grid>


                 {/* Project Three*/}
                <Grid item xs={12} sm={8} md={6}>

                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project_4"
                                height="140"
                                image={project_4}
                                />

                            <CardContent>

                                <Typography gutterBottom variant="h5">
                                    Project 4
                                </Typography>

                                <Typography component="p" color="textSecondary" variant="body2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus distinctio, explicabo non quaerat deserunt sit architecto voluptate et ullam dolore nam impedit magni, vero labore ratione consequuntur quibusdam, voluptas laudantium?

                                </Typography>

                            </CardContent>
                            </CardActionArea>

                            <CardActions>
                                <Button size="small" color="primary">Share</Button>
                                <Button size="small" color="primary">Live Demo</Button>
                            </CardActions>
                            


                    </Card>
                </Grid>


            </Grid>
        </Box>
    )
}

export default Portfolio
