import { useState } from "react"
import { Form, LoginPageContainer } from "./styledLogin"
import { Button } from "../../components/Button/Button"
import img from "../../assets/logo.png"

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
                <Button name="Cadastrar" />
            </Form>
        </LoginPageContainer>
    )
}