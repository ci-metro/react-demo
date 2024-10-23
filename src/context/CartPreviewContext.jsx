import {createContext, useState} from "react";

export const CartPreviewContext = createContext(undefined);

export const CartPreviewContextProvider = ({children}) => {
    const [isCartPreviewOpen, setIsCartPreviewOpen] = useState(false)

    const toggleCartPreview = () => setIsCartPreviewOpen(!isCartPreviewOpen);

    return (
        <CartPreviewContext.Provider value={{isCartPreviewOpen, toggleCartPreview}}>
            {children}
        </CartPreviewContext.Provider>
    );
}