import React from "react";
import { FormattedMessage } from "react-intl";
import { Grid, Container } from "@material-ui/core";
import { useGlobal } from "../src/context/GlobalContext";
import CartItem from "../components/CartItem";

export default () => {
  const [state, dispatch] = useGlobal();

  return (
    <Container maxWidth="lg">
      <h1>
        <FormattedMessage id="cart.page.title" />
      </h1>

      <Grid container spacing={3} alignItems="stretch">
        {!state.cart.length && (
          <h2>
            <FormattedMessage id="cart.empty" />
          </h2>
        )}

        {state.cart.map((product, index) => (
          <CartItem key={index} product={product} />
        ))}
      </Grid>
    </Container>
  );
};
