import { useEffect, useState } from "react";
import "./scss/App.scss";
import Cart from "./Cart.jsx";
import deleteIcon from "./assets/img/delete-icon.png";

const listProducts = [
  {
    id: 0,
    name: "Hamburgesa de garbanzos",
    price: 6900,
    img: "https://th.bing.com/th/id/OIP.AUgbyanO61l6Pp0Q-nmcpwHaEs?rs=1&pid=ImgDetMain",
  },
  {
    id: 1,
    name: "Hamburgesa de porotos negros",
    price: 6000,
    img: "https://th.bing.com/th/id/OIP.oz8cTR5KN_nbzcOrCVT_MwHaHa?w=745&h=745&rs=1&pid=ImgDetMain",
  },
  {
    id: 2,
    name: "Hamburgesa de tofu",
    price: 5000,
    img: "https://lovingitvegan.com/wp-content/uploads/2021/08/Tofu-Burger-25-683x1024.jpg",
  },
  {
    id: 3,
    name: "Hamburgesa de seitan",
    price: 8800,
    img: "https://3.bp.blogspot.com/-O0Ti17quqWM/V5SnN2Y_EiI/AAAAAAAASYs/Xazew0vWJoIYtocVBj7WWdkUE8pZk46ygCLcB/s1600/Vegan%2Bmegaburger.jpg",
  },
  {
    id: 4,
    name: "Hamburgesa de berenjenas",
    price: 7490,
    img: "https://th.bing.com/th?id=OIF.0LuXluLGvbnLfrWzcN0%2bZg&rs=1&pid=ImgDetMain",
  },
];

function App() {
  const [totalPriceCart, setTotalPriceCart] = useState(0);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(listProducts);

  const showProducts = () => {
    return products.map((product, idx) => (
      <li key={idx}>
        <img className="img-product" src={product.img} alt="" />
        {product.name}
        <br />${product.price}
        <button className="add-product" onClick={() => AddItemToCart(product)}>
          Agregar al carrito
        </button>
      </li>
    ));
  };

  const AddItemToCart = (burger) => {
    setCart((prevCart) => {
      const found = prevCart.find((item) => item.id === burger.id);
      if (found) {
        return prevCart.map((item) =>
          item.id === burger.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCart, { ...burger, count: 1 }];
      }
    });
    setTotalPriceCart((prev) => prev + burger.price);
  };

  const deleteItemFromCart = (burger) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== burger.id);
    });
    setTotalPriceCart((prev) => prev - burger.price * burger.count);
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

  const setEqualHeight = () => {
    const items = document.querySelectorAll(".cart-item");
    let maxHeight = 0;

    // Reset height to auto to get natural height
    items.forEach((item) => {
      item.style.height = "auto";
    });

    // Find the max height
    items.forEach((item) => {
      const height = item.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    // Set all items to the max height
    items.forEach((item) => {
      item.style.height = `${maxHeight}px`;
    });
  };

  useEffect(() => {
    // Call the function on window load and resize
    window.addEventListener("load", setEqualHeight);
    window.addEventListener("resize", setEqualHeight);
    console.log("Cart has changed", cart);
  }, [cart]);

  return (
    <div className="App">
      <div className="product-list">
        <ul>{showProducts()}</ul>
      </div>
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
    </div>
  );
}

export default App;
