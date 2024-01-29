import { Buy, CardCoffee, Title } from "./styles";

import CoffeeImg from "../../../../assets/coffee/Type=Expresso.png"
import { ShoppingCart } from "phosphor-react";

export function CoffeeCard() {
    return (
        <CardCoffee>
            <img src={CoffeeImg} alt="" />
            <span>Tradicional</span>
            <Title>
                <h2>Expresso Tradicional</h2>
                <p>O tradicional café feito com água quente e grãos moídos</p>
            </Title>
            <Buy>
                <span><p>R$</p>9,90</span>
                <div>
                    <input min={1} type="number" name="" id="" />
                    <button><ShoppingCart size={22} weight="fill" color="white" /></button>
                </div>
            </Buy>
        </CardCoffee>
    )
}