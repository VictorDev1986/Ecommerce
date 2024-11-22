
import { createContext, useState } from "react";

// Este contexto será utilizado para compartir información del carrito de compras entre componentes.
export const ShoppingCartContext = createContext();

// Definimos un componente proveedor que envolverá los componentes que necesitan acceso al contexto.
export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    return (
        <ShoppingCartContext.Provider value={{
            count, // El estado actual del carrito (cantidad de productos, por ejemplo).
            setCount // La función para actualizar la cantidad de productos.
        }}>
            {children} 
        </ShoppingCartContext.Provider>
    );
};





