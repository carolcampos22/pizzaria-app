import DessertCard from "../../components/DessertCard/DessertCard";
import { dessertProducts } from "../../utils/products"
import { MenuContainer } from "../pizzaMenu/styledMenu";

export const DessertsMenu = () => {

    return (
        <MenuContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          role="menu"
        >
          {dessertProducts.map((product) => (
            <DessertCard key={product.id} product={product} role="menuitem" />
          ))}
        </MenuContainer>
      );
    // return (
    //     <div>
    //         <h1>Aqui serão listadas as sobremesas</h1>
    //         {dessertProducts.map((product) => (
    //             <div>
    //                 {<li>{product.name}</li>}
    //                 <img src={product.image} />
    //             </div>
    //         ))}
    //     </div>
    // )
}