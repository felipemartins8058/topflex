import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as S from "./styles";
import * as T from "../stylesText";
import CTA from "../CTA";

const Hero = () => {
    return (
        <S.HeroWrapper>
            <S.HeroGradient></S.HeroGradient>
            <S.HeroBackground>
                <StaticImage layout="fullWidth" src="../../images/hero.png" alt="Background" />
            </S.HeroBackground>
            <S.HeroGrid>
                <S.HeroContent>
                    <T.Titulo1>Ergonomia e Conforto na hora de trabalhar</T.Titulo1>
                    <T.Texto>Conheça as melhores opções de cadeiras office para quem trabalha o dia todo sentado</T.Texto>
                    <CTA marginTop={3} />
                </S.HeroContent>
                <div></div>
            </S.HeroGrid>
        </S.HeroWrapper>
    );
};

export default Hero;
