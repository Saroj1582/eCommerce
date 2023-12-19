import { useParams } from "react-router-dom";
import { items } from "./Data";
import { useState } from "react";
import { useEffect } from "react";
import Product from "./Product";

function ProductDetail({ cartItems, setCartItems }) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    const filteredProduct = items.filter((item) => item.id == id);
    setProduct(filteredProduct[0]);

    const filteredItems = items.filter(
      (item) => item.category === product.category
    );
    setRelatedProducts(filteredItems);

    console.log(filteredItems);
  }, [id, product.category]);

  function addToCart() {
    setCartItems([...cartItems, product]);
  }

  return (
    <>
      <div className="flex justify-center items-center gap-[5rem]">
        <div className="flex justify-center items-center">
          <img className="w-[350px] h-[350px]" src={product.imgSrc} alt="" />
        </div>
        <div className="leading-10 text-center">
          <h1 className="font-bold text-[32px]">{product.title}</h1>
          <p>{product.description}</p>
          <div className="flex justify-center gap-3">
            <button className="btn btn-primary">{product.price}</button>
            <button onClick={addToCart} className="btn btn-warning">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <Product
        data={relatedProducts}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </>
  );
}

export default ProductDetail;
