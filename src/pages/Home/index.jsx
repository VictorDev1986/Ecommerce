import Layout from "../../Components/Layout";

function Home() {
    return (
        <Layout>
            <section className="bg-white">
                <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-32 py-12 space-y-6 lg:space-y-0 lg:space-x-12">
                    
                    {/* Texto principal */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                            Descubre la <span className="text-blue-600">mejor</span> selección de accesorios
                        </h1>
                        <p className="text-gray-600 mb-6">
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

                    {/* Imagen destacada */}
                    <div className="lg:w-1/2">
                        <img src="public/Ecommerce.png" alt="Productos destacados" className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Home;
