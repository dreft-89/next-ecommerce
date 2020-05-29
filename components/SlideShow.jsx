import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Typography,
    CardMedia,
    Button,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    media: {
        height: 250,
        [theme.breakpoints.up("md")]: {
            height: 400,
        },
    },
    thumbnail: {
        height: 30,
        opacity: 0.3,
        [theme.breakpoints.up("md")]: {
            height: 40,
        },
    },
    avtive: {
        opacity: 1,
    },
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: theme.palette.background.paper,
    },
}));

const SlideShow = ({
    slides = [],
    thumbnails = [],
    initialSlide = 0,
}) => {  
    const [activeSlide, setActiveSlide ] = useState(initialSlide);
    const classes = useStyles();

    if (!slides.length || !thumbnails.lenght) {
        return null;
    }

    return <>
    
    <h1>SlideShow</h1>
        <Grid container spacing={1}>
            <Grid xs="12" item>
                <CardMedia
                    className={classes.media}
                    image={slides[activeSlide].src}
                    title={slides[activeSlide].alt}
                />
                <Button 
                  onClick={() =>
                    setActiveSlide(activeSlide -1 < 0 ? slides.length -1 : activeSlide - 1)
                  }
                >
                    Prev
                </Button>
                <Button
                    onClick={() =>
                        setActiveSlide(activeSlide + 1 === slides.length ? 0 : activeSlide + 1)
                    }
                >
                    Next
                </Button>
            </Grid>
            <Grid xs={12}>
                <Typography variant="h5" gutterButtom>
                    {slides[activeSlide].alt}
                </Typography>
            </Grid>
            <Grid container spacing={0}>
                {thumbnails.map((thumbnail, index) => {
                    return (
                        <Grid item xs={2}>
                            <CardMedia
                                className={`${classes.thumbnail} ${activeSlide === index ? classes.active : ''}`}
                                image={thumbnail.src}
                                title={thumbnail.alt}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
     </>;
};

export default SlideShow;