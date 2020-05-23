import React from 'react';
import { Grid, Container } from "@material-ui/core/";
// import { makeSytles } from '../src/reducers.js'
// import theme from '../src/theme';
import { useGlobal } from '../src/context/GlobalContext.js'
import { ProductItem } from "../components/ProductItem.js";

export default () => {
  const [state, dispatch] = useGlobal();

    return (
      <Container maxWidth="lg">
        <h1>Product List</h1>

        <Grid container spacing={3} alignItems="stretch">
          {state.products.map((product, index) => { <ProductItem key={index} product={product} />; })}
        </Grid>
      </Container>
    );
}
