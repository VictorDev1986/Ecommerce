
import { createContext, useState } from "react";

// Este contexto será utilizado para compartir información del carrito de compras entre componentes.
export const ShoppingCartContext = createContext();

// Definimos un componente proveedor que envolverá los componentes que necesitan acceso al contexto.
export const ShoppingCartProvider = ({ children }) => {

    // Estado para la cantidad de productos en el carrito
    const [count, setCount] = useState(0);
    // Estado para los productos agregados al carrito
    const [cartProducts, setCartProducts] = useState([]);

    // Definimos funciones para abrir y cerrar el detalle del producto.
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false);
    const openProductDetail = () => {setisProductDetailOpen(true);}
    const closeProductDetail = () => {setisProductDetailOpen(false);}

    // Definimos el estado para almacenar el producto actualmente seleccionado.
    const [productToShow, setProductToShow] = useState({});


    return (
        <ShoppingCartContext.Provider value={{
            count, // cantidad de productos
            setCount,
            cartProducts, // productos en el carrito
            setCartProducts,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};





