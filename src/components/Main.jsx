import Product from './Product';
export default function Main(props){
    const {products,onAdd} = props;

    return(
        <main className="bg-[#474e68]
        w-[70%] py-4 rounded mr-4">
            <h2 className="font-bold text-white">Products</h2>
            <div className="flex w-full flex-wrap justify-center">

            {products.map((product)=>(
                <Product key={product.id} 
                         product={product}
                         onAdd={onAdd}>
                         </Product>
            ))}

            </div>
        </main>
    );
}