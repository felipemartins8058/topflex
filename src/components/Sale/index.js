import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as S from './styles';
import * as T from '../stylesText'
import CTA from '../CTA';

const Sale = () => {
    return(
        <S.SaleWrapper>
            <S.SaleBackground>
                <StaticImage src='../../images/start.png' layout='fullWidth' quality={100}/>
            </S.SaleBackground>
            <S.Wrapper>
                <div></div>
                <S.Box>
                    <T.Titulo1 marginBottom={1} textAlign={"right"}>Sua saúde<br/> também nos importa!</T.Titulo1>
                    <T.Texto textAlign={"right"}> Priorize seu bem estar a hora de trabalhar e aumente sua produtividade</T.Texto>
                    <CTA />
                </S.Box>
            </S.Wrapper>
        </S.SaleWrapper>
    )
}

export default Sale