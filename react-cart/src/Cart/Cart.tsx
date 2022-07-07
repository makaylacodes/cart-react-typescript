
import CartItem from "../CartItem/CartItem";

//types
import { CartItemType } from "../App";

//styles
import { Wrapper } from "./Cart.styles";

type Props = {
    //receives an array of items that are in the cart
    cartItems: CartItemType[];
    addToCart:(clickedItem: CartItemType) => void;
    //Takes the id to remove
    removeFromCart: (id:number) => void;
};

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) =>{
return (
    //If there are no items in cart, a message will be displayed. If there are items in the cart, no message will be displayed
    <Wrapper>
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? <p>No items in cart.</p> : null}
        {cartItems.map(item => (

            //sending props to the cart items
            <CartItem
            //set a key to map through the items
            key={item.id}
             item={item}
             addToCart={addToCart}
             removeFromCart={removeFromCart}

            />
        ))}
    </Wrapper>
);
};

export default Cart;
