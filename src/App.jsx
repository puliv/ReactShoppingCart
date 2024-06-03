import { useState } from "react";
import "./scss/App.scss";
import Cart from "./Cart.jsx";
import deleteIcon from "./assets/img/delete-icon.png";

function App() {
  const [totalPriceCart, setTotalPriceCart] = useState(0);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
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
      id: 2,
      name: "Hamburgesa de seitan",
      price: 8800,
      img: "https://3.bp.blogspot.com/-O0Ti17quqWM/V5SnN2Y_EiI/AAAAAAAASYs/Xazew0vWJoIYtocVBj7WWdkUE8pZk46ygCLcB/s1600/Vegan%2Bmegaburger.jpg",
    },
    {
      id: 3,
      name: "Hamburgesa de berenjenas",
      price: 7490,
      img: "https://th.bing.com/th?id=OIF.0LuXluLGvbnLfrWzcN0%2bZg&rs=1&pid=ImgDetMain",
    },
  ]);

  const showProducts = () => {
    return products.map((product, idx) => (
      <li key={idx}>
        <img className="img-product" src={product.img} alt="" />
        {product.name}
        <br />${product.price}
        <button onClick={() => AddProductToCart(product)}>
          Agregar al carrito
        </button>
      </li>
    ));
  };
  const AddProductToCart = (product) => {
    setCart([...cart, product]);
    setTotalPriceCart((prev) => prev + product.price);
  };
  const deleteProductFromCart = (product, index) => {
    setCart(cart.filter((item, idx) => idx !== index));
    setTotalPriceCart((prev) => prev - product.price);
  };

  return (
    <div className="App">
      <div className="product-list">
        <ul>{showProducts()}</ul>
      </div>
      <div className="shopping-cart">
        <ul>
          {cart &&
            cart.map((product, idx) => (
              <li key={idx}>
                {product.name}{" "}
                <img
                  src={deleteIcon}
                  alt="alt"
                  onClick={() => deleteProductFromCart(product, idx)}
                />
              </li>
            ))}
        </ul>
        <h4>Total: ${totalPriceCart}</h4>
      </div>
    </div>
  );
}

export default App;
