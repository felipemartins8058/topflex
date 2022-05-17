import React from "react";
import * as S from "./styles";
import * as T from "../stylesText";
import Feedback from "../Feedback";

const Testimonials = () => {
    return (
        <S.TestimonialsWrapper>
            <T.Titulo1 marginBottom={5}>Veja a opinião dos nossos clientes!</T.Titulo1>
            <S.TestimonialsGrid>
                <div><Feedback /></div>
                <div><Feedback /></div>
                <div><Feedback /></div>
            </S.TestimonialsGrid>
        </S.TestimonialsWrapper>
    );
};

export default Testimonials;
