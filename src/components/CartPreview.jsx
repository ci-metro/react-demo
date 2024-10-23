import {useContext} from "react";
import {CartPreviewContext} from "../context/CartPreviewContext.jsx";

export const CartPreview = () => {
    const {isCartPreviewOpen, toggleCartPreview} = useContext(CartPreviewContext);

    return (
        <div className="modal" tabIndex="-1" style={{display: isCartPreviewOpen ? 'block' : 'none'}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Cart preview</h5>
                        <button type="button" className="btn-close" onClick={toggleCartPreview}></button>
                    </div>
                    <div className="modal-body">

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={toggleCartPreview}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}