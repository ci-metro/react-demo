import {useCallback, useContext} from "react";
import {CartPreviewContext} from "../context/CartPreviewContext.jsx";

const CartPreviewButton = ({text = 'Cart preview', classes = 'btn btn-outline-light me-2'}) => {
    const {toggleCartPreview} = useContext(CartPreviewContext);

    const handleClick = useCallback(() => toggleCartPreview(), []);

    return (
        <button
            onClick={handleClick}
            type="button"
            className={classes}>{text}</button>
    )
}

export default CartPreviewButton
