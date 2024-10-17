"use client";
import UserContextProvider from "@/context/UserContext";
import '@/styles/GlobalStyles.css'; // Importação do CSS global
import React from "react";
import { Menu } from "../menu/Menu";
import { layoutStyles } from "./Layout.style";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div style={layoutStyles}>
            <UserContextProvider>
                <main>{children}</main>
                <Menu />
            </UserContextProvider>
        </div>
    );
};
