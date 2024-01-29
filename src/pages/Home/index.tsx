import { Clock, Coffee, Package, ShoppingCart } from "phosphor-react";
import { BackgroundComponents, BackgroundContainer, CardContainer, Items } from "./styles";

import ImagemCoffee from "../../assets/ImagemBg.png";
import { CoffeeCard } from "./components/CoffeeCard";

export function Home() {
    return(
        <>
        <BackgroundContainer>
            <BackgroundComponents>
                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                </div>
                <Items>
                    <p><ShoppingCart size={16}  /> Compra simples e segura</p>
                    <p><Package className="icon" size={16} /> Embalagem mantém o café intacto</p>
                    <p><Clock className="icon" size={16} /> Entrega rápida e rastreada</p>
                    <p><Coffee className="icon" size={16} /> O café chega fresquinho até você</p>
                </Items>
            </BackgroundComponents>
            <img src={ImagemCoffee} alt="Coffee" />
        </BackgroundContainer>

        <CardContainer>
            <h2>Nossos Cafés</h2>
            <CoffeeCard />
        </CardContainer>
        </>
    )
}