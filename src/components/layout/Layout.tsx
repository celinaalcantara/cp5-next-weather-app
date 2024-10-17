"use client";
import { UserContextProvider } from "@/context/UserContext";
import '@/styles/GlobalStyles.css';
import React from "react";
import { Menu } from "../menu/Menu";
import { layoutStyles } from "./Layout.style";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <UserContextProvider>
            <div style={layoutStyles}>
                <main>{children}</main>
                <Menu />
            </div>
        </UserContextProvider>
    );
};
