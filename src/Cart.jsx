import { useState } from "react";

function Cart() {
    const [products, setProducts] = useState([{name: "kjsahsa"}, {name: "iojoij"}])
    
    const renderListOfUserNames = () => {
        return products.map(product => <li>{product.name}</li>)
    }

    return (
        <>
        <div className="cart-products">
            <ul>
                {renderListOfUserNames()}
            </ul>
        </div>
        <div className="cart-purchase">
            <div className="cart-purchase-total"></div>
            <div className="cart-purchase-pay"></div>
        </div>
        </>
    );
}

export default Cart;