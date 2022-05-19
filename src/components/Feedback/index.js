import React from "react";
import * as S from "./styles";
import * as T from "../stylesText";
import { StaticImage } from "gatsby-plugin-image";

const Feedback = ({...props}) => {
    return(
        <S.FeedbackWrapper>
            <S.Img>
                <StaticImage src="../../images/user.png" quality={100} width={120} />
            </S.Img>
            <S.Flex>
                <StaticImage src="../../images/quote_icon.png" />
                <T.Texto>{props.texto}<br/><strong>{props.customer}</strong></T.Texto>
            </S.Flex>
        </S.FeedbackWrapper>
    )
}

export default Feedback;