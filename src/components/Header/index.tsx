import { MapPin, ShoppingCart } from "phosphor-react";
import LogoCoffee from "../../assets/LogoCoffee.svg";
import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <img src={LogoCoffee} />
            <nav>
                <p>{<MapPin size={22} />} Campo Grande, MS </p>
                <NavLink to='/checkout' title="Carrinho">
                    <ShoppingCart size={22}/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}