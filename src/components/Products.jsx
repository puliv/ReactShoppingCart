import React from "react";
import { useState } from "react";
import { useGlobalDispatch } from "../context/GlobalState";
import "../scss/Products.scss";
import { addToCart } from "../context/actions";

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
    img: "https://noticias24carabobo.com/wp-content/uploads/2018/03/hamburguesa-de-berenjena.jpg",
  },
  {
    id: 5,
    name: "Hamburgesa NOT",
    price: 7000,
    img: "https://evenamed.com/wp-content/uploads/2022/03/Are-Burgers-Good-for-Bulking-768x512.jpg",
  },
];

export default function Products() {
  const [products, setProducts] = useState(listProducts);
  const dispatch = useGlobalDispatch();

  const showProducts = () => {
    return products.map((product, idx) => (
      <li key={idx}>
        <img className="img-product" src={product.img} alt="" />
        {product.name}
        <br />${product.price}
        <button
          className="add-product"
          onClick={() => handleAddItemToCart(product)}
        >
          Agregar al carrito
        </button>
      </li>
    ));
  };

  const handleAddItemToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-list">
      <ul>{showProducts()}</ul>
    </div>
  );
}
