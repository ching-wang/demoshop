import type { NextPage } from "next";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
};

const Home: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((json) => setProducts(json.data));
  }, []);

  return (
    <div style={{padding: "1em"}}>
      <h1>Products</h1>
      {products?.map((p) => (
        <section key={p.id}>
          <h2>{p.name}</h2>
          <p>{p.description}</p>
        </section>
      ))}
    </div>
  );
};

export default Home;
