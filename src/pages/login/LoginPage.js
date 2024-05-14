import { useState } from "react"
import { Form, LoginPageContainer } from "./styledLogin"
import { Button } from "../../components/Button/Button"
import img from "../../assets/logo.png"
import { Link } from "react-router-dom"

export const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <LoginPageContainer>
            <Form>
                <div>
                    <img src={img} />
                    <p>Fazer login</p>
                </div>
                <input value={email} type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                <input value={password} type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                <Button name="Entrar" />
                <span>Ainda não tem conta? Cadastre-se!</span>
                <Link className="flex justify-center items-center bg-blue-700 text-center text-white rounded-2text-center w-[20vw] h-[7vh] bg-darkorange text-whitesmoke text-xl font-bold rounded-lg shadow-[8px_8px_8px_rgba(0,255,0,0.5)] transform transition duration-500 ease-in-out hover:bg-orange hover:scale-110 hover:shadow-[10px_10px_10px_rgba(0,255,0,0.2)]" to="/signup">Cadastrar</Link>
            </Form>
        </LoginPageContainer>
    )
}