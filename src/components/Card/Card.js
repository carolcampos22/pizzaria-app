import React from "react";

const PizzaCard = ({ product }) => {
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
      <button>Adicionar ao carrinho</button>
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
