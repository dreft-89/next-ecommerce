import React from 'react';
import { FormattedMessage } from "react-intl";
import { Grid, Container } from '@material-ui/core';
import { useGlobal } from '../../src/context/GlobalContext';
import ProductItem from '../../components/ProductItem';


export default () => {
  const [state, dispatch] = useGlobal();

  return (
    <Container maxWidth="lg">
      <h1>
        <FormattedMessage id="product.menu.label" />
      </h1>

      <Grid container spacing={3} alignItems="stretch">
        {state.products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </Grid>
    </Container>
  );
};