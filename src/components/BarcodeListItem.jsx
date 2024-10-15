const BarcodeListItem = ({code, remove}) => {
    return (
        <li>
            <a href={`/search-url/${code}`}>{code}</a>
            <button className="btn btn-sm btn-danger" onClick={remove}>X</button>
        </li>
    );
}

export default BarcodeListItem;