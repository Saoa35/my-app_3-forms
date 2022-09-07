import styled, { css } from "styled-components";

export const Section = styled.section`
    border: 1px solid black;
    padding: 15px;
    margin: 15px;
    color: blue;
    font-size: 110%;
`;

export const Button = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: rgb(250, 250, 11);
    border: 2px solid #00FF7F;
    cursor: pointer;

    ${props => props.primary && css`
        background: #006400;
        border-color: white;
        color: white;
    `}
`;