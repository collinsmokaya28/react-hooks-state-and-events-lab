import React, { useState } from "react";

function Item({ name, category }) {
  const [isCart, setIsCart] = useState(false);

  function handleAddToCart () {
    setIsCart((isCart)=> !isCart);
  }
  return (
    <li className={isCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {handleAddToCart}className="add">{isCart ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
