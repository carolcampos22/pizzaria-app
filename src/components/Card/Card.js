import React, { useState } from "react";

const PizzaCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalQuantity, setModalQuantity] = useState(1);
  const [modalSize, setModalSize] = useState()

  const handleAddToCart = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalConfirm = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-orange-500 text-white rounded-lg overflow-hidden shadow-lg mx-auto w-full h-128 min-w-128 min-h-128">
      <img className="w-full h-48 object-cover object-center" src={product.image} alt={product.name} />
      <div className="p-4">
        <h2 className="text-4xl font-bold mb-2">{product.name}</h2>
        <p className="text-white text-2xl">{product.ingredients}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-3xl">Preços:</span>
          <ul>
            {product.price.map((price, index) => (
              <li key={index} className="text-white text-2xl">
                R${price.toFixed(2)} - {tamanhoDaPizza(index)}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button onClick={handleAddToCart}>Adicionar ao carrinho</button>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-black p-4 rounded-lg text-3xl border-2 border-blue-500">
            <label htmlFor="quantity">Quantidade:</label>
            <input
              type="number"
              id="quantity"
              value={modalQuantity}
              onChange={(e) => setModalQuantity(parseInt(e.target.value))}
              className="bg-black border-2 border-orange-500 text-white px-2 py-1 rounded-md mr-6 ml-2"
            />
            <label htmlFor="size">Tamanho:</label>
            <select
              id="size"
              value={modalSize}
              onChange={(e) => setModalSize(e.target.value)}
              className="bg-black border-2 border-orange-500 text-white px-2 py-1 rounded-md mr-6 ml-2"
            >
              <option value="broto">Broto (25cm)</option>
              <option value="média">Média (30cm)</option>
              <option value="grande">Grande (35cm)</option>
              <option value="gigante">Gigante (40cm)</option>
              <option value="família">Família (45cm)</option>
              <option value="super-família">Super Família (50cm)</option>
            </select>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={handleModalConfirm}
            >
              Confirmar
            </button>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-md"
              onClick={handleModalClose}
            >
              Fechar
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

function tamanhoDaPizza(index) {
  switch (index) {
    case 0:
      return "Broto (25cm)";
    case 1:
      return "Média (30cm)";
    case 2:
      return "Grande (35cm)";
    case 3:
      return "Gigante (40cm)";
    case 4:
      return "Família (45cm)";
    case 5:
      return "Super Família (50cm)";
    default:
      return "";
  }
}

export default PizzaCard;
