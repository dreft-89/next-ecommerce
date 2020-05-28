import React from "react";
import { Grid, Container } from "@material-ui/core";
import { useGlobal } from "../src/context/GlobalContext";
import WishListItem from "../components/WishListItem";

export default () => {
  const [state, dispatch] = useGlobal();

  return (
    <Container maxWidth="lg">
      <h1>Wishlist</h1>

      <Grid container spacing={3} alignItems="stretch">
        {!state.wishlist.length && <h2>Your wishlist is empty</h2>}

        {state.wishlist.map((product, index) => (
          <WishListItem key={index} product={product} />
        ))}
      </Grid>
    </Container>
  );
};
