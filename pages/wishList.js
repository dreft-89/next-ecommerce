import React from "react";
import { Grid, Container } from "@material-ui/core/";
import { useGlobal } from "../src/context/GlobalContext";
import WishListItem from "../components/WishListItem";

export default () => {
  const [state, dispatch] = useGlobal();

  return (
    <Container maxWidth="lg">
      <h1>Your Wishlist</h1>

      <Grid container spacing={3} alignItems="stretch">
        {!state.wishlist.lengh && <h2>Empty wishlist</h2>}
        {state.wishlist.map((product, index) => {
          <WishListItem key={index} product={product} />;
        })}
      </Grid>
    </Container>
  );
};