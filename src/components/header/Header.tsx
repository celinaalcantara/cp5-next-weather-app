"use client"; // Adicione esta linha

import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation"; // Atualize a importação
import { useContext } from "react";
import {
    h1Styles,
    headerStyles,
    userDataButtonStyles,
    userDataStyles,
} from "./Header.style";

interface HeaderProps {
    title: string;
    userName: string;
}

export const Header = ({ title, userName }: HeaderProps) => {
    const router = useRouter();
    const { setUserName } = useContext(UserContext) as any; // Ajuste o tipo conforme necessário

    const handleLogin = () => {
        router.push("/login");
    };

    const handleLogout = () => {
        setUserName("");
        router.push("/login");
    };

    return (
        <header style={headerStyles}>
            <h1 style={h1Styles}>{title}</h1>
            <div>
                {userName ? (
                    <div style={userDataStyles}>
                        <span>{userName}</span>
                        <button style={userDataButtonStyles} onClick={handleLogout}>
                            Sair
                        </button>
                    </div>
                ) : (
                    <button style={userDataButtonStyles} onClick={handleLogin}>
                        Login
                    </button>
                )}
            </div>
        </header>
    );
};
