import { useNavigate } from "react-router-dom"
import { goToHomepage, goToLoginPage, goToSignUpPage } from "../../routes/coordinator"

export const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => goToHomepage(navigate)}>Início</button>
            <button onClick={() => goToLoginPage(navigate)}>Login</button>
            <button onClick={() => goToSignUpPage(navigate)}>Cadastro</button>
        </div>
    )
}