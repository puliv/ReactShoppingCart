    import { useState } from "react";
    import deleteIcon from "../assets/img/delete-icon.png";
    import { useGlobalState, useGlobalDispatch } from "../context/GlobalState";
    import "../scss/Cart.scss";

    function Cart() {
    const [totalPriceCart, setTotalPriceCart] = useState(0);
    const { cart } = useGlobalState();
    const dispatch = useGlobalDispatch();

    const deleteItemFromCart = (burger) => {
        // setCart((prevCart) => {
        // return prevCart.filter((item) => item.id !== burger.id);
        // });
        // setTotalPriceCart((prev) => prev - burger.price * burger.count);

        dispatch(removeFromCart(id));
    };

    const handleCount = (burger, operation) => {
        setCart((prevCart) => {
        const found = prevCart.find((item) => item.id === burger.id);
        if (found) {
            if (operation === "mas") {
            setTotalPriceCart((prev) => prev + burger.price);
            return prevCart.map((item) =>
                item.id === burger.id ? { ...item, count: item.count + 1 } : item
            );
            }
            if (operation === "menos") {
            if (found.count > 1) {
                setTotalPriceCart((prev) => prev - burger.price);
                return prevCart.map((item) =>
                item.id === burger.id ? { ...item, count: item.count - 1 } : item
                );
            } else {
                setTotalPriceCart((prev) => prev - burger.price);
                return prevCart.filter((item) => item.id !== burger.id);
            }
            }
        }
        return prevCart;
        });
    };

    return (
        <>
        <div className="shopping-cart">
            <ul className="shopping-cart-list">
            {cart &&
                cart.map((product, idx) => (
                <li key={idx} className="cart-item">
                    <div className="cart-item-name">{product.name}</div>
                    <div className="cart-item-count">
                    <button onClick={() => handleCount(product, "menos")}>
                        -
                    </button>
                    {product.count}
                    <button onClick={() => handleCount(product, "mas")}>+</button>
                    </div>
                    <div className="cart-item-delete">
                    <img
                        src={deleteIcon}
                        alt="alt"
                        onClick={() => deleteItemFromCart(product)}
                    />
                    </div>
                </li>
                ))}
            </ul>
            <div className="shopping-cart-total">
            <h1>Total: ${totalPriceCart}</h1>
            </div>
        </div>
        </>
    );
    }

    export default Cart;
