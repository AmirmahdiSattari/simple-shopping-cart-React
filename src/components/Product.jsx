
function Product(props) {
    const { product, onAdd } = props;

    return (
        <div className="flex flex-col
         w-[15rem] h-[20rem] m-2 p-2
        shadow-2xl rounded bg-[#50577a]">
            <img className="p-2 object-cover
            w-screen h-[50%]" src={product.image}
                alt={product.name} />

            <div className="flex flex-col items-start p-2 justify-between
            text-xl w-screen h-[30%] text-white">
                <h3 className="font-serif p-2">{product.name}</h3>
                <h3 className="font-semibold p-2">${product.price}</h3>

            </div>

            <div className="flex items-end p-2 justify-start w-screen h-[20%]">
                <button className="
                text-white p-2 cursor-pointer
                bg-gradient-to-r from-purple-500
                via-purple-600 to-purple-700
                hover:bg-gradient-to-br focus:ring-4
                focus:outline-none focus:ring-purple-300
                dark:focus:ring-purple-800 shadow-lg
                shadow-purple-500/50 dark:shadow-lg
                dark:shadow-purple-800/80 font-medium 
                rounded-lg text-sm px-5 py-2.5 
                text-center mr-2 mb-2"
                    onClick={()=>onAdd(product)}>
                    Add To Cart
                    </button>
            </div>

        </div>
    )
}
export default Product;