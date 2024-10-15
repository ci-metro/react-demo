import {useState} from "react";
import BarcodeListItem from "./BarcodeListItem.jsx";

const BarcodeScan = () => {
    const [isOpened, setIsOpened] = useState(false);
    const [code, setCode] = useState('');
    const [scannedCodes, setScannedCodes] = useState([])

    const classes = isOpened ? '' : 'd-none';

    window.addEventListener('openBarcodeScan', () => setIsOpened(!isOpened));

    function scanCode() {
        if (!code.length) {
            return;
        }

        if (scannedCodes.includes(code)) {
            return;
        }

        setScannedCodes([...scannedCodes, code]);

        setCode('');
    }

    function removeItem(index) {
        setScannedCodes(scannedCodes.filter((val, key) => key !== index));
    }

    return (
        <div className={classes}>
            <div className="input-group py-5 px-3">
                <input type="text"
                       className="form-control"
                       value={code}
                       onChange={(e) => setCode(e.target.value)}/>
                <button
                    onClick={scanCode}
                    className="btn btn-outline-secondary"
                    type="button">Scan
                </button>
            </div>

            {scannedCodes.length > 0 && (
                <ul className="mt-3">
                    {scannedCodes.map((value, index) => (
                        <BarcodeListItem
                            key={`code${index}`}
                            code={value}
                            remove={() => removeItem(index)} />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default BarcodeScan;