import { useState } from "react"
import { Button } from "../../components/Button/Button"
import img from "../../assets/logo.png"
import { Form, LoginPageContainer } from "./styledSignUp"

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
                <Button name="Entrar" />
            </Form>
        </LoginPageContainer>
    )

}