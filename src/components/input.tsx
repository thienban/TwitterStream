import React from 'react';
import styled from "styled-components";

interface InputProps {
    Input: any;
    Type: string;
    Name: string;
    onChange : (val: any) => void
}
const StyleInput = styled.input   `
width: 100%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
border: 1px solid #ccc;
`;

const Input: React.FC<InputProps> =
    ({ Input, Name, Type, onChange}) => {
        const input = (
            <StyleInput 
            value={Input} 
            name={Name}
            onChange={e => onChange(e)} type={Type} />
        );
        return input;
    }

export default Input;