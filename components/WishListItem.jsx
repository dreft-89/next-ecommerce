import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Grid,
  Typography, 
} from "@material-ui/core";
import { useGlobal } from "../src/context/GlobalContext";

const useStyles = makeStyles(
  (theme) => ({
    media: {
      height: 250,
      [theme.breakpoints.up("md")]: {
        height: 300,
      },
    },
    card: {
      height: "100%",
    },
  }),
  { name: "WishListItem" }
);

export default function WishListItem(product) {  
  const classes = useStyles();
  const [state, dispatch] = useGlobal();

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            title={product.name}
            image={product.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.descrition}
            </Typography>
            <Typography
              variant="body2"
              align="center"
              color="black"
              font-size={16}
              component="p"
            >
              {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container splacing={1}>
            <Grid item xs={12} md={6}>
              <Button
                variant="contained"
                size="small"
                color="#37474f"
                fullWidth
                onClick={(evt) => {
                  if (evt) {
                    evt.preventDefault();
                  }
                  
                  dispatch({
                    type: 'REMOVE_FROM_WISHLIST',
                    payload: {
                      id: product.id,
                    }
                  });
                }}
              >
                Remove from wishlist
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
            <Button
                variant="contained"
                size="small"
                color="#37474f"
                fullWidth
                onClick={(evt) => {
                  if (evt) {
                    evt.preventDefault();
                  }
                  
                  dispatch({
                    type: 'ADD_TO_BAG',
                    payload: {
                      id: product.id,
                      qty: 1
                    }
                  });
                }}
              >
                Add to Bag
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}
