import {createRoot} from 'react-dom/client'
import BarcodeScanButton from './components/BarcodeScanButton.jsx'
import BarcodeScan from "./components/BarcodeScan.jsx";
import CartPreviewButton from "./components/CartPreviewButton.jsx";
import Cart from "./components/Cart.jsx";
import {CartContextProvider} from "./context/CartContext.jsx";
import {createPortal} from "react-dom";
import {CartPreview} from "./components/CartPreview.jsx";
import {CartPreviewContextProvider} from "./context/CartPreviewContext.jsx";

createRoot(document.getElementById('barcode_scan_button')).render(
    <CartPreviewContextProvider>
            <BarcodeScanButton />
            <CartPreviewButton />
            {createPortal(
                <CartPreview />,
                document.body
            )}
    </CartPreviewContextProvider>
);
createRoot(document.getElementById('barcode_scan_wrapper')).render(
    <CartContextProvider>
        <BarcodeScan />
        <Cart />
    </CartContextProvider>
);
