

import { useState } from "react";
import { useQuery } from "react-query";

//Components
import Item  from "./Item/Item";
import Drawer  from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from '@material-ui/core/Grid';
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import Cart from "./Cart/Cart";

//styles
import { Wrapper, StyledButton } from "./App.styles";

//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;

  //adding this property to track the # of items in cart
  amount: number;
};

//Fetching function for fake store
const getProducts = async (): Promise<CartItemType[]> =>
await(await fetch('https://fakestoreapi.com/products')).json();


//badge displays the number of items in the cart 

const App = () => {

  //create a few of the states needed for the cart
  //boolean that tells me whether the cart is opened or closed
  const [cartOpen, setCartOpen] = useState(false);

//UseState initializes an array
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products', 
    getProducts
    );
  console.log(data);

  //implicit returns
  const getTotalItems = (items: CartItemType[]) =>
   //Accumulator starts with zero and adds amount for each item
  items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      //1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);
      //updates the amounts
      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
          //updates amount if returned
          ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      //First time item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };


  // Adds a loading bar when the page is loading
  if (isLoading) return < LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  return(
    //Inside wrapper to map the data
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
      <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>

      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCart />
        </Badge>
      </StyledButton>

      <Grid container spacing ={3}>
       {data?.map(item => (
          // Need a keep to map through  
          <Grid item key={item.id} xs={12} sm={4}>
          <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
      ))}
    </Grid>
  </Wrapper>
);
};

export default App;
