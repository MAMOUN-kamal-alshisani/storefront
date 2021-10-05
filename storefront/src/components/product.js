
import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { AddProduct,DeleteProduct } from "../store/products";
import {inventory} from '../store/cart'
// import "../../style/product.scss";
// const useStyle = makeStyles((theme) => ({
//   cardGrid: {
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//   },
//   card: {
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//   },
//   cardMedia: {
//     paddingTop: "56.25%",
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
// }));

const Products = (props) => {
  // const classes = useStyle();
  return (
    <Container>
      <Grid container spacing={4}>
        {props.products.map((product) => {
          if (props.active === product.category) {
            return (
              <Grid item key={product.name} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                 
                   
                    // title={product.name}
                    component="img"
                    height="194"
                    image={product.img}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography>
                     name : {product.name}
                    </Typography>
                    <Typography>
                      Category: {product.category} <br />
                      Price: {product.price} <br />
                      Inventory: {product.InventoryCount}
                      <br />
                      <hr />
                  
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      onClick={(inventory) => {
                        if (product.InventoryCount) {
                          props.AddProduct(product);
                          props.inventory(product);
                        } else {
                          alert("out of stook");
                        }
                      }}
                    
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          }
        })}
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
  active: state.categories.activeCategory,
});
const mapDispatchToProps = { AddProduct, inventory };

export default connect(mapStateToProps, mapDispatchToProps)(Products);