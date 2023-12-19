import { useState } from "react";
import { Link } from "react-router-dom";

function Product({ data, setCartItems, cartItems }) {
  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  return (
    <>
      <div className="container my-5">
        <div className="row  mx-auto">
          {data.map((product) => (
            <div
              key={product.id}
              className="col-lg-4 col-md-6 my-3 text-center"
            >
              <div className="card mx-auto " style={{ width: "18rem" }}>
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.imgSrc}
                    className="card-img-top"
                    alt="..."
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title font-bold">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <div className="flex justify-center gap-3 mt-3">
                    <button className="btn btn-primary">
                      ₹ {product.price}
                    </button>
                    <button
                      onClick={() => addToCart(product)}
                      className="btn btn-warning"
                    >
                      Added to Cart"
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
