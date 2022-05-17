import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as S from "./styles";

const CTA = ({...props}) => {
    return (
        <S.CTA href="#" marginTop={props.marginTop}> <span>Comprar Online</span>  <StaticImage layout="fixed" src="../../images/arrow_button.svg"  /></S.CTA>
    )
}

export default CTA