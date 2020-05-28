import React from 'react';
import { Grid, Container } from "@material-ui/core/";
import { useGlobal } from '../src/context/GlobalContext';

export default () => {
  const [state, dispatch] = useGlobal();

    return (
      <Container maxWidth="lg">
        <h1>Product List</h1>

        <Grid container spacing={2}>
          <Grid item xs="12" md="6">
            Image
          </Grid>
          <Grid item xs="12" md="6">
            Data
          </Grid>
          <Grid item xs="12">
            Tabs
          </Grid>
          <Grid item xs="12">
            Related products
          </Grid>
        </Grid>
      </Container>
    );
}
