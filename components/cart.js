import React from 'react';
import { useSelector } from 'react-redux';

const CartItems = () => {

    const cartItems = useSelector(state => state.cartReducer.cart);

    return (
        <div>
            <h2>Cart Items</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartItems;
