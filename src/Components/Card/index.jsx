import { useContext } from "react"
import { PlusIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"


const Card = (data) => {

    const context = useContext(ShoppingCartContext)

    const showProduct = (ProductDetail) => {
        context.openProductDetail()
        context.setProductToShow(data.data)
    }

    return (
        <div 
        className="  bg-white cursor-pointer w-56 h-60 "
        onClick={() => showProduct(data.data)} >
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 py-0.5 px-2 my-1 mx-1 rounded-2xl text-black text-sm">{data.data.category.name}</span>
                <img className="w-full h-full object-cover rounded-xl" src={data.data.images[0]} alt={data.data.title} />
                <div
                    className="absolute top-1 right-1 flex justify-center items-center bg-white  w-6 h-6 rounded-full text-lg text-bold"
                    onClick={() => context.setCount(context.count + 1)}>
                    <PlusIcon className="size-8 cursor-pointer text-blue-500" />
                </div>
            </figure>
            <p className="flex justify-between text">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-bold">${data.data.price}</span>
            </p>
        </div>
    )
}
export default Card