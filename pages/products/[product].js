import React from "react";
import { withRouter } from "next/router";
import {
  Grid,
  Container,
  CardMedia,
  CircularProgress,
} from "@material-ui/core";
import { useGlobal } from "../../src/context/GlobalContext";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "../../components/TabPanel";

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const ProductPage = (props) => {
  const [{ products }, dispatch] = useGlobal();
  const [qty, setQty] = useState(1);

  const product = products.find(
    (item) => item.id === props.router.query.product
  );

  console.log(product);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return product ? (
    <Container maxWidth="lg">
      <h1>Product page</h1>
      <Grid container spacing={2}>
        <Grid xs="12" md="6" item>
          <CardMedia
            className={classes.media}
            image={product.image}
            title={product.name}
          />
        </Grid>
        <Grid xs="12" md="6" item>
          <h5>{product.name}</h5>
          <p>Console</p>
          <ul>
            <li>
              <i className="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-primary"></i>
            </li>
            <li>
              <i class="far fa-star fa-sm text-primary"></i>
            </li>
          </ul>
          <p>
            <span>
              <strong>$150.99</strong>
            </span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim
            perferendis voluptates laboriosam. Distinctio, officia quis dolore
            quos sapiente tempore alias.
          </p>
        </Grid>
        <Grid xs="12" item fullWidth>
          Tabs
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            variant="fullWidth"
            centered
          >
            <Tab label="Description" {...a11yProps(0)} />
            <Tab label="Information" {...a11yProps(1)} />
            <Tab label="Reviews" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            Description
          </TabPanel>
          <TabPanel value={value} index={1}>
            Info
          </TabPanel>
          <TabPanel value={value} index={2}>
            Review
          </TabPanel>
        </Grid>
        <Grid xs="12" item>
          Related products
        </Grid>
      </Grid>
    </Container>
  ) : (
    <CircularProgress />
  );
};

export default withRouter(ProductPage);
