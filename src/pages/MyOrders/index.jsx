import Layout from "../../Components/Layout"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import ProductDetail from "../../Components/ProductDetail";

function MyOrders() {
    const context = useContext(ShoppingCartContext);
    const { cartProducts, openProductDetail, setProductToShow } = context;

    const handleShowProduct = (product) => {
        setProductToShow(product);
        openProductDetail();
    };

    return (
        <Layout>
            <div className="mt-24">
                <h1 className="text-2xl font-bold mb-4">My Orders</h1>
                <ProductDetail />
                {cartProducts.length === 0 ? (
                    <p className="text-gray-500">No hay productos en el carrito.</p>
                ) : (
                    <>
                        <ul className="space-y-4 w-full max-w-xl">
                            {cartProducts.map((product, idx) => (
                                <li key={idx} className="flex items-center border-b pb-2 cursor-pointer hover:bg-gray-100 transition"
                                    onClick={() => handleShowProduct(product)}>
                                    <img src={product.images[0]} alt={product.title} className="w-24 h-24 object-cover rounded mr-6" />
                                    <div className="flex-1">
                                        <div className="font-semibold">{product.title}</div>
                                        <div className="text-gray-600">${product.price}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {/* Total y botón de pagar */}
                        <div className="flex flex-col items-end mt-8 gap-4">
                            <div className="text-xl font-bold">Total: ${cartProducts.reduce((acc, p) => acc + Number(p.price), 0).toFixed(2)}</div>
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">Pagar</button>
                        </div>
                    </>
                )}
            </div>
        </Layout>
    )
}

export default MyOrders