import React from "react";
import { FormattedMessage } from "react-intl";
import { Grid, Container } from "@material-ui/core";
import { useGlobal } from "../src/context/GlobalContext";
import WishListItem from "../components/WishListItem";

export default () => {
  const [state, dispatch] = useGlobal();

  return (
    <Container maxWidth="lg">
      <h1>
        <FormattedMessage id="wishlist.page.title" />
      </h1>

      <Grid container spacing={3} alignItems="stretch">
        {!state.wishlist.length && (
          <h2>
            <FormattedMessage id="wishlist.empty" />
          </h2>
        )}

        {state.wishlist.map((product, index) => (
          <WishListItem key={index} product={product} />
        ))}
      </Grid>
    </Container>
  );
};
