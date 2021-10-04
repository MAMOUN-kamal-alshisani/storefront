// import { Card } from '@mui/material';
import React from "react";
import { connect } from "react-redux";
import CardMedia from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import { makeStyles } from '@mui/core/styles';
import Grid from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AddProduct, inventory} from "../store/actions";

const Products = (props) => {
  // const classes = useStyle();
  return (
    <Container >
      <Grid container spacing={4}>
        {props.products.map((product) => {
          if (props.active === product.category) {
            return (
              <Grid item key={product.name} xs={12} sm={6} md={4}>
                <Card >
                  <CardMedia
                    
                    title={product.name}
                  />
                  <CardContent >
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography>
                      Category: {product.name} <br />
                      Price: {product.price} <br />
                      Inventory: {product.InventoryCount}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      onClick={(InventoryCount) => {
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

const mapStateToProps = (state) => (
  // console.log("stateeeee",state)
  {
    products: state.products.products,
    active: state.categories.ActiveCategory
}
);
const mapDispatchToProps = { AddProduct, inventory };
export default connect(mapStateToProps)(Products);
// const Products =props=>{

// return (


// <Container maxWidth="sm">


// {props.products.map((product) => {
//           if (props.active === product.category) {
// <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         {product.name}
//         </Typography>
//         <Typography variant="h5" component="div">
//         Category: {product.category}
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         Price: {product.price} 
//         Inventory: {product.InventoryCount}
//         </Typography>
//         {/* <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography> */}
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>

//           }

// })}

// </Container>

          

// )
// }




// const mapStateToProps = (state) => (
//     // console.log("stateeeee",state)
//     {
//     products: state.products.products,
//     active: state.categories.ActiveCategory,
//   }
//   );
  
//   export default connect(mapStateToProps)(Products);