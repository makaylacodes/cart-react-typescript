

import { useState } from "react";
import { useQuery } from "react-query";

//Components
import { Item } from "./Item/Item";
import Drawer  from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from '@material-ui/core/Grid';
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";


//styles
import { Wrapper } from "./App.styles";

//Types
export type CartItemType = {
  id: number;
  description:string;
  category: string;
  image: string;
  price: number;
  title: string;

  //adding this property to track the # of items in cart
  amount: number;
}

//Fetching function for fake store
const getProducts = async (): Promise<CartItemType[]> =>
await(await fetch('https://fakestoreapi.com/products')).json();

const App= () => {

  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts);
  console.log(data);

  //
  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;


  // Adds a loading bar when the page is loading
  if (isLoading) return < LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  return(

    //Inside wrapper to map the data
    <Wrapper className="App">
      <Grid container spacing ={3}>
        {data?.map(item => (
          // Need a keep to map through  
          <Grid item key={item.id} xs={12} sm ={4}>
        <Item item={item} handleAddToCart={handleAddToCart} />
        </Grid> 
        ))}
        </Grid>
    </Wrapper>
  );
}

export default App;
