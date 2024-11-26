
import { createContext, useState } from "react";

// Este contexto será utilizado para compartir información del carrito de compras entre componentes.
export const ShoppingCartContext = createContext();

// Definimos un componente proveedor que envolverá los componentes que necesitan acceso al contexto.
export const ShoppingCartProvider = ({ children }) => {
    // Inicializamos el estado del carrito con un valor inicial de 0.
    const [count, setCount] = useState(0);

    // Definimos funciones para abrir y cerrar el detalle del producto.
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false);
    const openProductDetail = () => {setisProductDetailOpen(true);}
    const closeProductDetail = () => {setisProductDetailOpen(false);}

    // Definimos el estado para almacenar el producto actualmente seleccionado.
    const [productToShow, setProductToShow] = useState({});

    return (
        <ShoppingCartContext.Provider value={{
            count, // El estado actual del carrito (cantidad de productos, por ejemplo).
            setCount, // La función para actualizar la cantidad de productos.
            openProductDetail,// La función para abrir el detalle del producto.
            closeProductDetail,// La función para cerrar el detalle del producto.
            isProductDetailOpen,// El estado para controlar la visibilidad del detalle del producto.
            productToShow,// El producto actualmente seleccionado para mostrar su detalle.
            setProductToShow,// La función para actualizar el producto a mostrar.
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};





