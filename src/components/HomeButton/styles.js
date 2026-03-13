import styled from "styled-components";

export const HomeButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: #ffffff; 
    color: #9758a6;           
    
    width: 40px;              
    height: 40px;             
    
    border-radius: 50%;       
    border: 2px solid #9758a6;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    
    cursor: pointer;              
    top: 20px;
    left: 20px;
    z-index: 99;
    
    transition: all 0.3s ease;

    &:hover {
        background-color: #9758a6;
        color: #ffffff;
        transform: scale(1.1);
    }    
`;


