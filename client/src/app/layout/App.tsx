import { useEffect, useState } from "react";
import { Product } from "../models/products";
import Catalog from "../../features/catalog/Catalog";
function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5047/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Az Store</h1>
      <Catalog products={products} />
    </div>
  );
}

export default App;
