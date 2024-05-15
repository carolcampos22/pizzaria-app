import React from "react";
import { useCart } from "../../context/CartContext";
import img from "../../assets/chef-2.png";
import { useNavigate } from "react-router-dom";
import { goToCheckoutPage } from "../../routes/coordinator";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    updateCartItemQuantity,
  } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrement = (itemId, itemSize) => {
    updateCartItemQuantity(itemId, itemSize, 1);
  };

  const handleDecrement = (itemId, itemSize) => {
    updateCartItemQuantity(itemId, itemSize, -1);
  };

  const navigate = useNavigate()

  return (
    <div className="bg-black w-full h-full flex">
      <div className="bg-black text-white container p-10 min-h-[37vh]">
        <h1 className="text-xl font-bold mb-4">Seu Carrinho</h1>
        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <div>
            <ul>
              {cartItems.map((item) => (
                <li
                  key={`${item.id}-${item.size}`}
                  className="flex justify-between items-center py-2 border-b"
                >
                  <div>
                    <span className="font-bold">{item.name}</span> -{" "}
                    {item.size} -{" "}
                    <button
                      onClick={() => handleDecrement(item.id, item.size)}
                      className="px-2 py-1 text-xs bg-orange-700 text-white rounded-md"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="text-xl m-2">{item.quantity}x</span>
                    <button
                      onClick={() => handleIncrement(item.id, item.size)}
                      className="ml-2 px-2 py-1 text-xs bg-blue-700 text-white rounded-md"
                    >
                      +
                    </button>
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
            <button
              onClick={() => goToCheckoutPage(navigate)}
              className="mt-4 ml-2 px-4 py-2 bg-green-700 text-white rounded-md"
            >
              Finalizar pedido
            </button>

          </div>
        )}
      </div>
      <div className="bg-black hidden md:block">
        <img className="h-full bg-black" src={img} alt="Cliente com uma pizza" />
      </div>
    </div>
  );
};

export default Cart;