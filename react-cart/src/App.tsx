

import { useState } from "react";
import { useQuery } from "react-query";

//Components
import Item from './Item/Item';
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



/*

import { useState } from 'react'
import { useQuery } from 'react-query';

/components
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCart from '@material-ui/icons';
import Badge from '@material-ui/core/Badge'; 
  
//styles
import { Wrapper } from './App.styles';

export type CartItemType = {
  id: number;
  catergory: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

//creating a fetching function for the fake store API
//the return type promise
const getProducts = async (): Promise<CartItemType[]> =>

  //The first await is for the API call & the second is for converting to json
  await(await fetch('https://fakestoreapi.com/products')).json();


const App = () =>{

//React Query 
  const {data, isLoading, error} = useQuery<CartItemType[]>(
    'products',
    getProducts

    );

  console.log(data);
  return 
    <div className="App">
      Start
    </div>

};

export default App;
*/