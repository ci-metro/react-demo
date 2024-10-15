const BarcodeScanButton = ({text = 'Barcode scan', classes = 'btn btn-outline-light me-2'}) => {
    function handleClick() {
        const event = new CustomEvent('openBarcodeScan');
        window.dispatchEvent(event);
        console.log('Dispatch openBarcodeScan', event);
    }

    return (
        <button
            onClick={handleClick}
            type="button"
            className={classes}>{text}</button>
    )
}

export default BarcodeScanButton
