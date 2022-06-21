import React from "react";
import * as S from "./styles";
import * as T from "../stylesText";
import { StaticImage } from "gatsby-plugin-image";

const Feedback = ({...props}) => {

    function clientImg (customer) {
        if (customer === "Alilia Alves") {
            return <StaticImage src="../../images/client2.png" width={120} />
        } else if (customer === "Jessica Kynn") {
            return <StaticImage src="../../images/client3.png" width={120} />
        } else {
            return <StaticImage src="../../images/client.png" width={120} />
        }
    }

    return(
        <S.FeedbackWrapper>
            <S.Img>
                {clientImg(props.customer)}
            </S.Img>
            <S.Flex>
                <StaticImage src="../../images/quote_icon.png" />
                <T.Texto>{props.texto}<br/><strong>{props.customer}</strong></T.Texto>
            </S.Flex>
        </S.FeedbackWrapper>
    )
}

export default Feedback;