// src/app/profile/page.tsx
"use client";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { Header } from "../../components/header/Header";
import { Layout } from "../../components/layout/Layout";
import UserContext from "../../context/UserContext";

export default function Profile() {
    const router = useRouter();
    const { userName, setUserName } = useContext(UserContext);

    useEffect(() => {
        const userToken = JSON.parse(sessionStorage.getItem("userToken") || "null");

        if (userToken) {
            const userData = jwtDecode(userToken.token);
            setUserName(userData.name);
        } else {
            router.push("/login");
        }
    }, [setUserName, router]);

    return (
        <Layout>
            <Header title="Perfil" userName={userName} />
        </Layout>
    );
}
