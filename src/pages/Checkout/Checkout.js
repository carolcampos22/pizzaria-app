import logo from "../../assets/logo.png"
import delivery from "../../assets/delivery-guy.png"
import { useNavigate } from "react-router-dom"
import { useProtectedPage } from "../../hooks/useProtectedPages"

export const Checkout = () => {
    const navigate = useNavigate()
    useProtectedPage(navigate)
    
    return (
        <div className="flex justify-around bg-black text-white min-h-[37vh]">
            <div className="mt-24 min-h-[58vh]">
                <h1 className="text-7xl">Pedido finalizado!</h1>
                <span className="flex text-4xl">Obrigado por escolher PizzaPalooza! Até a próxima!</span>
            </div>
            <div>
                <img className="w-96 mt-36" src={delivery} />
            </div>
        </div>
    )
}