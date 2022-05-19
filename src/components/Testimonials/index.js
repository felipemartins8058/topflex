import React from "react";
import * as S from "./styles";
import * as T from "../stylesText";
import Feedback from "../Feedback";

const Testimonials = () => {
    return (
        <S.TestimonialsWrapper>
            <T.Titulo1 marginBottom={5}>Veja a opinião dos nossos clientes!</T.Titulo1>
            <S.TestimonialsGrid>
                <div><Feedback texto={"Eu comprei uma cadeira maravilhosa super confortável e com o preço justo. Super recomendo a loja!"} customer={"Alilia Alves"} /></div>
                <div><Feedback texto={"Atendimento rápido e de qualidade! Cheguei achando que minha cadeira estava com problema no pistão, o moço me informou que o problema poderia ser outro e resolveu, resultado: minha cadeira está parecendo que acabei de comprar nova. Super recomendo! "} customer={"Jessica Kynn"}  /></div>
                <div><Feedback texto={"Ótimo atendimento tanto na loja quanto na entrega. Design e qualidade em seus produtos!"} customer={"Timóteo Lopes"} /></div>
            </S.TestimonialsGrid>
        </S.TestimonialsWrapper>
    );
};

export default Testimonials;
