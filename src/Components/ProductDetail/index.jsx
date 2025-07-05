import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import './style.css'

const ProductDetail = () => {

    const context = useContext(ShoppingCartContext)
    console.log('PRODUCT TO SHOW', context.productToShow)

    const product = context.productToShow;
    return (
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 top-0 border border-black rounded-lg bg-white shadow-2xl`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detalle del producto</h2>
                <div>
                    <XMarkIcon className="size-8 cursor-pointer text-blue-500" onClick={() => context.closeProductDetail()} />
                </div>
            </div>
            {product && product.images && (
                <figure className="px-6 flex flex-col items-center">
                    <img
                        className="w-80 h-80 object-cover rounded-lg mb-4"
                        src={Array.isArray(product.images) ? product.images[0] : product.images}
                        alt={product.title}
                    />
                </figure>
            )}
            <div className="flex flex-col p-6">
                <span className="font-medium text-2xl mb-2">{product?.title}</span>
                <span className="font-medium text-lg text-blue-600 mb-2">${product?.price}</span>
                <span className="font-light text-sm mb-2">{product?.description}</span>
            </div>
        </aside>
    )
}

export default ProductDetail