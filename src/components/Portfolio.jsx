
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore, quidem fuga obcaecati iste culpa maxime incidunt ab tempora dolorum recusandae amet vitae illum minus! Esse maxime saepe voluptates dolores.
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
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates porro, molestias tempora temporibus corrupti sint sequi modi excepturi dolor enim, eligendi inventore, unde aut. Officiis vitae repellat placeat doloribus consequuntur?

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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum non delectus eligendi, sit iusto accusantium error eaque perspiciatis at ipsa autem officia praesentium laborum modi dignissimos, magnam eos illo ut.

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
                                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus nemo rerum ex saepe incidunt cupiditate rem eos perferendis dicta corporis impedit obcaecati placeat quidem, delectus ipsum in at tempora harum.
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
