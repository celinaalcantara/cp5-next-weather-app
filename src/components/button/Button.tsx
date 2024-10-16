import React, { useState } from "react";
import { buttonHoverStyles, buttonStyles } from "./Button.style";

interface ButtonProps {
    children: React.ReactNode;
    type: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
}

export const Button = ({ children, type, onClick }: ButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            type={type}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={isHovered ? { ...buttonStyles, ...buttonHoverStyles } : buttonStyles}
        >
            {children}
        </button>
    );
};
