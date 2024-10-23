import {createContext, useEffect, useState} from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
    const [cartData, setCartData] = useState(null);
    const [cartLoading, setCartLoading] = useState(true);
    const [cartDataError, setCartDataError] = useState(null);

    const fetchCartData = () => {
        fetch(`http://localhost:8000/cart-preview`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                return response.json();
            })
            .then(data => {
                setCartData(data);
                setCartLoading(false);
            })
            .catch((err) => {
                setCartDataError(err.message);
                setCartLoading(false);
            });
    }

    const reloadCart = () => {
        setCartLoading(true);
        setCartDataError(null)
        setCartData(null);
        fetchCartData();
    }

    const removeCartItem = (id) => {
        fetch(`http://localhost:8000/cart-preview/${id}`, {method: 'DELETE'})
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to delete item');
                }

                return response.json();
            })
            .then(data => {
                fetchCartData()
            })
            .catch((err) => {
                // setCartDataError(err.message);
                // setCartLoading(false);
            });
    }

    useEffect(fetchCartData, []);

    return (
        <CartContext.Provider value={{cartData, cartLoading, cartDataError, reloadCart, removeCartItem}}>
            {children}
        </CartContext.Provider>
    );
}