import React from 'react';
import styled from "styled-components";

interface InputProps {
    Input: any;
    Type: string;
    Name: string;
    onChange : (val: any) => void
}

const Input: React.FC<InputProps> =
    ({ Input, Name, Type, onChange}) => {
        const input = (
            <input 
            value={Input} 
            name={Name}
            onChange={e => onChange(e)} type={Type} />
        );
        return input;
    }

    const StyleInput = styled(Input)`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 3px solid #ccc;
    `;
export default StyleInput;