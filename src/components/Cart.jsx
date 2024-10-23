import {useContext} from "react";
import {CartContext} from "../context/CartContext.jsx";

const Cart = function() {
    const { cartData, cartLoading, cartDataError, reloadCart, removeCartItem } = useContext(CartContext);

    return (
        <>
            {!cartLoading ? (
                !cartDataError ? (
                    <div className="card mt-5">
                        <div className="card-header">
                            Cart
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Item</th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">Price</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartData.map(row => (
                                        <tr key={`cartItem${row.id}`}>
                                            <th scope="row">{row.id}</th>
                                            <td>{row.name}</td>
                                            <td>{row.qty}</td>
                                            <td>{row.price}</td>
                                            <td>
                                                <button className={'btn btn-danger btn-sm'} onClick={() => removeCartItem(row.id)}>X</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer">
                            <button className={'btn btn-primary btn-outline'} onClick={reloadCart}>Reload cart</button>
                        </div>
                    </div>
                ) : (
                    <div className="alert alert-danger">
                        Cart data load error.
                    </div>
                )
            ) : (
                <>
                    Cart loading...
                </>
            )}
        </>
    );
};

export default Cart;