import { Link } from "react-router-dom";

function Cart({ cartItems, setCartItems }) {
  function removeFromCart(id) {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    console.log(newCartItems);
    setCartItems(newCartItems);
  }

  return (
    <>
      <div className="container mt-3">
        {cartItems.length == 0 ? (
          <>
            <div className="flex flex-col justify-center items-center gap-3 mt-5 font-semibold">
              <h1 className="text-[35px]">Cart is Empty</h1>
              <Link to="/" className="btn btn-warning">
                Continue Shoping...
              </Link>
            </div>
          </>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="card mb-3 w-[700px] mx-auto">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={item.imgSrc}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 flex items-center">
                  <div className="card-body">
                    <h5 className="card-title font-bold">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                    <div className="flex gap-3 mt-3">
                      <button className="btn btn-primary">₹{item.price}</button>
                      <button className="btn btn-warning">Buy Now</button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="btn btn-danger"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length !== 0 && (
        <div className="container flex justify-center gap-3 my-3">
          <button className="btn btn-warning">Checkout</button>
          <button onClick={() => setCartItems([])} className="btn btn-danger">
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
}

export default Cart;
