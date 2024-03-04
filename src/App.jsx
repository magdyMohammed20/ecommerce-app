import "./App.css";
import WebFont from "webfontloader";
import { useEffect, useState } from "react";
import Layout from "./layout/Layout";
import Banner from "./components/Banner/Banner";
import Stats from "./components/Stats/Stats";
import MoveRequests from "./components/MoveRequests/MoveRequests";

function App() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");

    const result = await response.json();

    setProducts(result);
  };
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Noto Kufi Arabic"],
      },
    });

    fetchProducts();
  }, []);

  return (
    <div className="font-loader bg-gradient-to-r  transition-all duration-1000 bg-gray-200">
      <Layout>
        <Banner />
        <Stats />
        <MoveRequests products={products} />
      </Layout>
    </div>
  );
}

export default App;
