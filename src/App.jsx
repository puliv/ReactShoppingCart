import { useEffect } from "react";
import "./scss/App.scss";
import Cart from "./components/Cart";
import Products from "./components/Products";
import { GlobalProvider } from "./context/GlobalState";

function App() {
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
    window.addEventListener("resize", setEqualHeight);
  }, []);

  return (
    <GlobalProvider>
      <Products />
      <Cart />
    </GlobalProvider>
  );
}

export default App;
