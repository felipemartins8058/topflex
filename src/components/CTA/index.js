import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as S from "./styles";

const CTA = ({...props}) => {
    return (
        <S.CTA href="https://api.whatsapp.com/send?phone=5585989489182&text=Quero%20saber%20mais%20sobre%20os%20produtos%20Topflex" marginTop={props.marginTop}> <span>Entre em contato</span>  <StaticImage layout="fixed" src="../../images/arrow_button.svg"  /></S.CTA>
    )
}

export default CTA