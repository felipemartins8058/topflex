import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as S from "./styles";
import * as T from "../stylesText";
import CTA from "../CTA";

const Hero = () => {
    return (
        <S.HeroWrapper>
            <S.HeroBackground>
                <StaticImage layout="fullWidth" src="../../images/hero.png" alt="Background" />
            </S.HeroBackground>
            <S.HeroGrid>
                <S.HeroContent>
                    <T.Titulo1>Ergonomia e Conforto na hora de trabalhar</T.Titulo1>
                    <T.Texto>Victory Gallery is at your service – your personal space for shopping and entertainment, featuring a swimming pool.</T.Texto>
                    <CTA marginTop={3} />
                </S.HeroContent>
                <div></div>
            </S.HeroGrid>
        </S.HeroWrapper>
    );
};

export default Hero;
