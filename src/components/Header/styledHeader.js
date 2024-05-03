import styled from "styled-components";
import img from "../../assets/header-bg.png";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: orange;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    padding: 1rem;

    h1{
        font-size: 15rem;
        font-family: "Nanum Pen Script", cursive;
    }
`

export const Image = styled.img`
    width: 15vw;
`