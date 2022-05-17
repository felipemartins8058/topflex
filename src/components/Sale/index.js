import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as S from './styles';
import * as T from '../stylesText'
import CTA from '../CTA';

const Sale = () => {
    return(
        <S.SaleWrapper>
            <S.SaleBackground>
                <StaticImage src='../../images/sale.png' layout='fullWidth' quality={1}/>
            </S.SaleBackground>
            <S.Wrapper>
                <div></div>
                <S.Box>
                    <T.Titulo1 marginBottom={1} textAlign={"right"}>Nossa filosofia é<br></br> o seu conforto</T.Titulo1>
                    <T.Texto textAlign={"right"}> Curabitur vel arcu in magna gravida ornare et sit amet nulla. Vestibulum arcu ex, eleifend a orci in, consectetur tincidunt augue. Donec et urna quis enim porta dictum.</T.Texto>
                    <CTA />
                </S.Box>
            </S.Wrapper>
        </S.SaleWrapper>
    )
}

export default Sale