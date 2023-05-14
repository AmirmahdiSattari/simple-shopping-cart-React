export default function Header(props) {
    return (
        <header className="flex bg-[#474e68] justify-between p-4
        rounded w-full ">
            <div>
                <a href="#/">
                    <h1 className="text-white text-xl 
                    font-bold">Small Shopping Cart</h1>
                </a>
            </div>
            <div className="text-white text-sm 
                    font-semibold">
              <a href="#/cart">Cart </a>
              <a href="#/signin"> SignIn</a>  
            </div>
        </header>
    );
}