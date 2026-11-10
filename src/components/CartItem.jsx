function CartItem({ item, increaseQuantity, decreaseQuantity, removeItem }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-info">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <h4>${item.price}</h4>

        <div className="quantity">
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
        </div>

        <button className="remove" onClick={() => removeItem(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
