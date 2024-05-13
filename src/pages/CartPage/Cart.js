import React from "react";
import { useCart } from "../../context/CartContext";
import img from "../../assets/chef-2.png"

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="flex">
      <div className="bg-black text-white container p-10 min-h-[37vh]">
        <h1 className="text-3xl font-bold mb-4">Seu Carrinho</h1>

        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <div>
            <ul>
              {cartItems.map((item) => (
                <li key={`${item.id}-${item.size}`} className="flex justify-between items-center py-2 border-b">
                  <div>
                    <span className="font-bold">{item.name}</span> - {item.size} -{" "}
                    {item.quantity}x
                  </div>
                  <div>
                    R${(item.price * item.quantity).toFixed(2)}
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="ml-2 px-2 py-1 text-xs text-white bg-red-500 rounded-md"
                    >
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex justify-between items-center">
              <span className="font-bold">Total:</span>
              <span className="text-xl">R${totalPrice.toFixed(2)}</span>
            </div>

            <button
              onClick={clearCart}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Limpar Carrinho
            </button>
          </div>
        )}
      </div>
      <div>
        <img className="bg-black" src={img} />
      </div>
    </div>
  );
};

export default Cart;