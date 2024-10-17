"use client";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

export default function Login() {
    const context = useContext(UserContext);


    if (!context) {
        throw new Error("Erro ao fazer login");
    }

    const { setUserName } = context;
    const router = useRouter();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        setUserName(login);
        router.push("/");
    };

    return (
        <form onSubmit={handleLogin}>
            <div>
                <label htmlFor="login">Login</label>
                <input
                    type="text"
                    id="login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Entrar</button>
        </form>
    );
}
