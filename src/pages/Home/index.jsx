import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Home() {

    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data));
    }, []);

    return (
        <Layout>
            <section className="h-screen bg-gradient-to-r from-blue-950 to-blue-500">
                <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-32 py-12 space-y-6 lg:space-y-0 lg:space-x-12">

                    {/* Texto principal */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
                            Descubre la <span className="text-blue-600">mejor</span> selección de accesorios
                        </h1>
                        <p className="text-white mb-6">
                            Encuentra zapatillas, gorras, relojes y ropa al mejor precio. Ofrecemos entrega rápida y soporte 24/7.
                        </p>
                        <div className="flex justify-center lg:justify-start space-x-4">
                            <a href="#productos" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500">
                                Explorar productos
                            </a>
                            <a href="#promociones" className="px-6 py-3 rounded-lg shadow-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                                Ver promociones
                            </a>
                        </div>
                    </div>


                    <div className="lg:w-1/2">
                        <img src="public/Ecommerce.png" alt="Productos destacados" className="rounded-lg mb-12 mt-12" />
                    </div>
                </div>
            </section>
            <div className="text-center mb-16 mt-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                    Lo mas  <span className="text-blue-600">destacado</span>
                </h1>
            </div>
           {/* Ventana modal carrito */} 
            <ProductDetail/>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-lg">
                {
                    items?.map((item) => (
                        <Card key={item.id} data={item} />
                    ))
                }
            </div>

        </Layout>
    );
}
export default Home;
