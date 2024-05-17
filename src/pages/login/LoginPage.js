import { useEffect, useState } from "react";
import { Form, LoginPageContainer } from "./styledLogin";
import img from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../redux/user/actions";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            navigate("/"); 
        }
    }, [currentUser, navigate]);

    const handleLogin = () => {
        if (!email || !password) {
            alert("Email e senha são obrigatórios");
            return;
        }

        dispatch(loginUser({ email, password }));
    };

    return (
        <LoginPageContainer>
            <Form>
                <div>
                    <img src={img} alt="Logo" />
                    <p>Fazer login</p>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <input
                    value={email}
                    type="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    value={password}
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={handleLogin}
                    className="flex justify-center items-center bg-orange-700 text-center text-white rounded-2text-center w-[20vw] h-[7vh] bg-darkorange text-whitesmoke text-xl font-bold rounded-lg shadow-[8px_8px_8px_rgba(0,255,0,0.5)] transform transition duration-500 ease-in-out hover:bg-orange hover:scale-110 hover:shadow-[10px_10px_10px_rgba(0,255,0,0.2)]"
                >
                    Entrar
                </button>
                <span>Ainda não tem conta? Cadastre-se!</span>
                <Link
                    className="flex justify-center items-center bg-blue-700 text-center text-white rounded-2text-center w-[20vw] h-[7vh] bg-darkorange text-whitesmoke text-xl font-bold rounded-lg shadow-[8px_8px_8px_rgba(0,255,0,0.5)] transform transition duration-500 ease-in-out hover:bg-orange hover:scale-110 hover:shadow-[10px_10px_10px_rgba(0,255,0,0.2)]"
                    to="/signup"
                >
                    Cadastrar
                </Link>
            </Form>
        </LoginPageContainer>
    );
};
