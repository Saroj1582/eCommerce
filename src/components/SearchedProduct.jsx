import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";
import { useEffect } from "react";
import { useState } from "react";

function SearchedProduct() {
  const [searchProducts, setSearchProducts] = useState([]);
  const { item } = useParams();

  useEffect(() => {
    const foundProducts = items.filter((prod) =>
      prod.title.toLowerCase().includes(item.toLowerCase())
    );
    setSearchProducts(foundProducts);
  }, [item]);

  console.log(searchProducts);

  return (
    <>
      <Product data={searchProducts} />
    </>
  );
}

export default SearchedProduct;
