import { createRoot } from 'react-dom/client'
import BarcodeScanButton from './components/BarcodeScanButton.jsx'
import BarcodeScan from "./components/BarcodeScan.jsx";

createRoot(document.getElementById('barcode_scan_button')).render(
    <>
        <BarcodeScanButton />
        <BarcodeScanButton text={'test 123'} classes={'btn btn-outline-danger me-2'} />
    </>
);
createRoot(document.getElementById('barcode_scan_wrapper')).render(
    <BarcodeScan />
);
