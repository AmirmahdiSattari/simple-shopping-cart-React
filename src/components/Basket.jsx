export default function Basket(props) {

   const { cartItems, onAdd, onRemove } = props;

   const itemsPrice = cartItems.reduce((a,c)=> a + c.price * c.qty,0);
   const taxPrice = itemsPrice*0.14;
   const shippingPrice= itemsPrice > 2000 ? 0 : 50;
   const totalPrice = itemsPrice + taxPrice + shippingPrice;

   
   return (
      <aside className="bg-[#474e68]
       w-[30%] py-4 rounded text-white">
         <h2>Cart Items</h2>
         <div>
            {cartItems.length === 0 && <div> Cart is Empty</div>}
         </div>
         {cartItems.map((item) => (
            <div key={item.id} className="flex flex-row flex-wrap
            bg-[#50577a] shadow-2xl m-2 rounded-sm px-2
            ">
               <div className="px-2  flex justify-start
               items-center">
                  {item.name}
               </div>
               <div className="flex justify-center">
                  <button onClick={() => onAdd(item)}
                     className="text-white
                      bg-gradient-to-r from-green-400
                      via-green-500 to-green-600 
                      hover:bg-gradient-to-br focus:ring-4
                      focus:outline-none
                      focus:ring-green-300
                      dark:focus:ring-green-800 
                      shadow-lg shadow-green-500/50 
                      dark:shadow-lg dark:shadow-green-800/80 
                      font-medium rounded-lg text-sm px-2
                      text-center m-2">
                     +
                  </button>
                  <button onClick={() => onRemove(item)}
                     className="text-white bg-gradient-to-r
                      from-red-400 via-red-500
                      to-red-600 hover:bg-gradient-to-br
                      focus:ring-4 focus:outline-none
                      focus:ring-red-300
                      dark:focus:ring-red-800 shadow-lg
                      shadow-red-500/50 dark:shadow-lg
                      dark:shadow-red-800/80 font-medium
                      rounded-lg text-sm px-2
                      text-center m-2">
                     -
                  </button>
               </div>
               <div className="flex justify-end items-center px-2">
                  {item.qty} x ${item.price.toFixed(2)}
               </div>
            </div>
         ))}
         {cartItems.length !== 0 && (
            <div className="flex flex-col
            flex-warp w-full p-2">
               <hr className="w-[90%]
               flex mx-auto
               opacity-20"></hr>

               <div className="flex">
                  <div className="p-2">
                     Items Price :
                  </div>
                  <div className="p-2">
                     ${itemsPrice.toFixed(2)}
                  </div>
               </div>

               <div className="flex">
                  <div className="p-2">
                     Tax Price :
                  </div>
                  <div className="p-2">
                     ${taxPrice.toFixed(2)}
                  </div>
               </div>

               <div className="flex">
                  <div className="p-2">
                     Shipping Price :
                  </div>
                  <div className="p-2">
                     ${shippingPrice.toFixed(2)}
                  </div>
               </div>

               <div className="flex">
                  <div className="p-2">
                    <strong>
                     Total Price :
                    </strong>
                  </div>
                  <div className="p-2">
                     ${totalPrice.toFixed(2)}
                  </div>
               </div>

            </div>
         )}
      </aside>
   );
}