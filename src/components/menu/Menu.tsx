import Link from "next/link";
import { BiHeart, BiHomeAlt, BiSearch, BiUserCircle } from "react-icons/bi";
import {
    linkStyles,
    menuItemStyles,
    menuStyles,
    wrapperMenuStyles,
} from "./Menu.style";

export const Menu = () => {
    return (
        <nav style={menuStyles}>
            <ul style={wrapperMenuStyles}>
                <li style={menuItemStyles}>
                    <BiHomeAlt size="1.5rem" color="#38aede" />
                    <Link href="/" style={linkStyles}>Inicio</Link>
                </li>
                <li style={menuItemStyles}>
                    <BiSearch size="1.5rem" color="#38aede" />
                    <Link href="/search" style={linkStyles}>Busca</Link>
                </li>
                <li style={menuItemStyles}>
                    <BiHeart size="1.5rem" color="#38aede" />
                    <Link href="/favorites" style={linkStyles}>Favoritos</Link>
                </li>
                <li style={menuItemStyles}>
                    <BiUserCircle size="1.5rem" color="#38aede" />
                    <Link href="/profile" style={linkStyles}>Perfil</Link>
                </li>
            </ul>
        </nav>
    );
};
