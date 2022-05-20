import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as S from "./styles";

const CTA = ({...props}) => {
    return (
        <S.CTA href="https://api.whatsapp.com/message/MO3VD2KS2IZ3O1?autoload=1&app_absent=0" marginTop={props.marginTop}> <span>Comprar Online</span>  <StaticImage layout="fixed" src="../../images/arrow_button.svg"  /></S.CTA>
    )
}

export default CTA