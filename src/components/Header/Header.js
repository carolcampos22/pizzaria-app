import { HeaderContainer, Image } from "./styledHeader"
import logo from "../../assets/logo.png"

export const Header = () => {
    return (
        <HeaderContainer>
            <h1 className="text-8xl font-bold">P</h1>
            <Image src={logo} />
            <h1 className="text-8xl font-bold">izzaPalooza</h1>
        </HeaderContainer>
    )
}