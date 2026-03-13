import styled from "styled-components";

export const ContainerButton = styled.button`
    background-color: #9758a6;
    border-radius: 7.78px;
    border: 0;
    height: 52px;
    width: 100%;
    font-size: 30px;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s ease;

    img {
        width: 25px;
    }

    &:hover {
       background-color: #6f357c;
    }   
`;