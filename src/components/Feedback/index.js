import React from "react";
import * as S from "./styles";
import * as T from "../stylesText";
import { StaticImage } from "gatsby-plugin-image";

const Feedback = () => {
    return(
        <S.FeedbackWrapper>
            <S.Img>
                <StaticImage src="../../images/client.png" quality={100} width={120} />
            </S.Img>
            <S.Flex>
                <StaticImage src="../../images/quote_icon.png" />
                <T.Texto>Sed sed dolor vitae est vehicula consectetur at ac nibhSed sed dolor vitae est vehicula consectetur at ac nibh</T.Texto>
            </S.Flex>
        </S.FeedbackWrapper>
    )
}

export default Feedback;