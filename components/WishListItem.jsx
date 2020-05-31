import React from 'react';
import { FormattedMessage } from "react-intl";
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  CardActions,
  CardContent,
  CardMedia,
  Card,
  CardActionArea,
  Button,
} from '@material-ui/core';
import { useGlobal } from '../src/context/GlobalContext';
import DeleteIcon from "@material-ui/icons/Delete";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 400,
    [theme.breakpoints.only('md')]: {
      height: 580,
    },
    [theme.breakpoints.only('sm')]: {
      height: 850,
    },
    [theme.breakpoints.only('xs')]: {
      height: 550,
    },
  },
  card: {
    height: '100%',
  }
}));

export default function WishListItem({ product }) {
  const classes = useStyles();
  const [state, dispatch] = useGlobal();

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product.image}
            title={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              align="center"
              fontSize={16}
            >
              {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <Button
                size="small"
                color="primary"
                variant="contained"
                fullWidth
                endIcon={<DeleteIcon />}
                onClick={(evt) => {
                  if (evt) {
                    evt.preventDefault();
                  }

                  dispatch({
                    type: "REMOVE_FROM_WISHLIST",
                    payload: {
                      id: product.id,
                    },
                  });
                }}
              >
                <FormattedMessage id="remove.btn" />
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                size="small"
                color="primary"
                variant="contained"
                fullWidth
                endIcon={<ShoppingCartIcon />}
                onClick={(evt) => {
                  if (evt) {
                    evt.preventDefault();
                  }

                  dispatch({
                    type: "ADD_TO_CART_FROM_WISHLIST",
                    payload: {
                      id: product.id,
                    },
                  });
                }}
              >
                <FormattedMessage id="from.wish.to.bag.btn" />
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}