import { useState } from "react"
import { Button } from "../../components/Button/Button"
import img from "../../assets/logo.png"
import { Form, LoginPageContainer } from "./styledSignUp"
import { Link } from "react-router-dom"

export const SignUpPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    return (
        <LoginPageContainer>
            <Form>
                <p className="message">Seja bem-vindo ao PizzaPalooza!</p>
                <div>
                    <img src={img} />
                    <p>Fazer cadastro</p>
                </div>
                <input value={name} type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
                <input value={email} type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                <input value={password} type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                <Button name="Cadastrar" />
                <span>Já tem conta? Faça login!</span>
                <Link className="bg-orange-500 flex justify-center items-center text-white w-[20vw] h-[7vh] text-2xl font-bold rounded-lg shadow-[8px_8px_8px_rgba(0,255,0,0.5)] transform transition duration-500 ease-in-out hover:bg-orange hover:scale-110 hover:shadow-[10px_10px_10px_rgba(0,255,0,0.2)]" to="/login">Entrar</Link>
            </Form>
        </LoginPageContainer>
    )

}