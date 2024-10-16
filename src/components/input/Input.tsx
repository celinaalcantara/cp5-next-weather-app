import React from "react";
import { inputStyles, labelStyles } from "./Input.style";

interface InputProps {
    type: string;
    id: string;
    name: string;
    label: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
    type,
    id,
    name,
    label,
    placeholder,
    onChange,
    ...rest
}: InputProps) => {
    return (
        <>
            <label htmlFor={id} style={labelStyles}>{label}</label>
            <input
                placeholder={placeholder}
                type={type}
                id={id}
                name={name}
                onChange={onChange}
                style={inputStyles}
                {...rest}
            />
        </>
    );
};
