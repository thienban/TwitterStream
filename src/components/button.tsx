import React from 'react';
import styled from "styled-components";

const StyleButton = styled.button`
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 0rem;
width: 11rem;
color: black;
border: 2px solid white;
`;

interface ButtonProps {
    label: string
    onClick: (val: any) => void
}

const Button: React.FC<ButtonProps>= ({label,onClick}) => {
    return(
        <StyleButton onClick={e => onClick(e)}>
            {label}
        </StyleButton>
    );
}
export default Button;