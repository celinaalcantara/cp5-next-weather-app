// src/app/login/page.tsx
"use client";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

export default function Login() {
    const { setUserName } = useContext(UserContext);
    const router = useRouter();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event: React.C
