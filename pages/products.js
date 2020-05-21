import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { 
  Card, 
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Container
} from "@material-ui/core/";

const products = [
  {
    name: "Nintendo Wii",
    price: "$150",
    descrition: "Description",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Wii_console.png",
  },
  {
    name: "xBox One X",
    price: "$450",
    descrition: "Description",
    imageUrl:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1588800320-xbox-one-x-1-tb-console-1575308995.jpg",
  },
  {
    name: "xBox One S",
    price: "$250",
    descrition: "Description",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61zjj2sgXML._SL1500_.jpg",
  },
  {
    name: "PS4 PRO 500Gb",
    price: "$600",
    descrition: "Description",
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5850/5850905_sd.jpg",
  },
  {
    name: "Tetris",
    price: "$999",
    descrition: "old scool",
    imageUrl:
      "https://cdnp0.stackassets.com/869449479e17886b34c0b2e336116cfaedf5c145/store/opt/596/447/362eb794579fea194aeb77a5fc479a88e4a097dbd589f516ced6a08f27f9/product_33211_product_shots1.jpg",
  },
  {
    name: "PS 5 ",
    price: "$1505",
    descrition: "Description",
    imageUrl:
      "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/ps5_5_0.jpg",
  },
];

export default () => {

    return (
      <Container maxWidth="lg">
        <h1>Product List</h1>

        <Grid container spacing={2}>
          {products.map((product, index) => {
            return (
              <Grid item xs={12} md={6} lg={3}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      style={{ height: "150px" }}
                      image={product.imageUrl}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {product.descrition}
                      </Typography>
                      <Typography
                        variant="body2"
                        align="center"
                        color="black"
                        component="p"
                      >
                        {product.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button variant="contained" size="medium" color="#37474f">
                      Add to Cart
                    </Button>
                    <Button variant="contained" size="medium" color="#37474f">
                      Add to Wish
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
}
