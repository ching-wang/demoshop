import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Product } from "../types/product";
import ProductCard from "../components/productCard/ProductCard";
import Layout from "../components/layout/layout";

const Home: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((json) => setProducts(json.data));
  }, []);

  return (
    <Layout>
      {products?.map((p) => (
          <ProductCard key={p.id} product={p} />
      ))}
    </Layout>
  );
};

export default Home;
