const DessertCard = ({product}) => {
    return (
        <div className={`bg-orange-500 text-white rounded-lg overflow-hidden shadow-lg mx-auto w-full h-128 min-w-128 min-h-128 `} role="region" aria-labelledby={`pizza-card-${product.id}`}>
          <img className="w-full h-96 object-cover object-center" src={product.image} alt={`Imagem de ${product.name}`} />
          <div className="p-4">
            <h2 id={`pizza-card-${product.id}`} className="text-4xl font-bold mb-2">{product.name}</h2>
            <div className="mt-4 flex justify-between items-center">
              <span className="font-bold text-5xl ml-56">R${product.price}</span>
              
            </div>
          </div>
           <button
            className="m-5 px-4 py-2 bg-green-900 text-white rounded-md text-xl shadow-md transform transition duration-500 hover:bg-green-800 hover:shadow-lg hover:shadow-gray-900 hover:scale-105"
            
            aria-haspopup="dialog"
            aria-controls="add-to-cart-modal"
            
          >
            Adicionar ao carrinho
          </button> 
          {/* <button
            className="m-5 px-4 py-2 bg-green-900 text-white rounded-md text-xl shadow-md transform transition duration-500 hover:bg-green-800 hover:shadow-lg hover:shadow-gray-900 hover:scale-105"
            onClick={handleAddToCart}
            aria-haspopup="dialog"
            aria-controls="add-to-cart-modal"
            disabled={isModalOpen}
          >
            Adicionar ao carrinho
          </button> */}
          
        </div>
      );
}

export default DessertCard