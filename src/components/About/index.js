import React from "react";
import * as S from "./styles";
import * as T from "../stylesText";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
    return (
        <S.AboutWrapper>
            <S.AboutFlex>
                <S.AboutContent>
                    <T.Titulo1>Sobre Nós</T.Titulo1>
                    <T.Texto>Victory Gallery is at your service – your personal space for shopping and entertainment, featuring a swimming ool.Victory Gallery is at your service your personal space for shopping and entertainment, featuring a swimming pool.Victory Gallery is at your service – your personal space for shopping and tertainment, featuring a swimming pool.</T.Texto>
                </S.AboutContent>
                <S.AboutImage>
                    <StaticImage layout="fullWidth" src="../../images/about.png" />
                </S.AboutImage>
            </S.AboutFlex>
            <S.BigNumbers>
                <S.BigNumbersGrid>
                    <div>
                        <T.Titulo3 color="fff" alignText="center">500</T.Titulo3>
                        <T.Texto color="fff" textAlign="center">Completed Projects</T.Texto>
                    </div>
                    <div>
                        <T.Titulo3 color="fff" alignText="center">400</T.Titulo3>
                        <T.Texto color="fff" textAlign="center">Professional Designers</T.Texto>
                    </div>
                    <div>
                        <T.Titulo3 color="fff" alignText="center">500</T.Titulo3>
                        <T.Texto color="fff" textAlign="center">Completed Projects</T.Texto>
                    </div>
                    <div>
                        <T.Titulo3 color="fff" alignText="center">400</T.Titulo3>
                        <T.Texto color="fff" textAlign="center">Professional Designers</T.Texto>
                    </div>
                </S.BigNumbersGrid>
            </S.BigNumbers>
        </S.AboutWrapper>
    );
};

export default About;
