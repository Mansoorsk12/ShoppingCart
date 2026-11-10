import CartItem from "./CartItem";

function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItem
}) {

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">

      <div className="cart-header">
        <h2>My Cart</h2>
      </div>

      {/* Conditional Rendering */}

      {cart.length === 0 ? (

        <div className="empty-cart">
          <h3>Your cart is empty</h3>
          <p>Add some products to your cart.</p>
        </div>

      ) : (

        <>
          <div className="cart-items">

            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeItem={removeItem}
              />
            ))}

          </div>

          <div className="cart-footer">

            <div className="subtotal">
              <span>Subtotal</span>

              <strong>
                ${subtotal.toFixed(2)}
              </strong>
            </div>

            <button className="checkout">
              CHECKOUT
            </button>

          </div>
        </>

      )}

    </div>
  );
}

export default Cart;