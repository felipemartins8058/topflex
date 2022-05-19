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
                    <T.Texto>Atuamos no mercado desde 1990, como especialistas em Cadeiras Office, Cadeiras Design e Móveis para Escritório. Estamos entre as líderes de vendas em Fortaleza e nos destacamos pela qualidade técnica, junção do conforto, elegância e ergonomia em nossos produtos, além do atendimento de excelência, tanto online quanto presencial. Produtividade e bem estar, você adquire na Topflex.</T.Texto>
                </S.AboutContent>
                <S.AboutImage>
                    <StaticImage layout="fullWidth" src="../../images/about.png" />
                </S.AboutImage>
            </S.AboutFlex>
            <S.BigNumbers>
                <S.BigNumbersGrid>
                    <div>
                        <T.Titulo3 color="fff" alignText="center">+ 500</T.Titulo3>
                        <T.Texto color="fff" textAlign="center">Empresas atendidas</T.Texto>
                    </div>
                    <div>
                        <T.Titulo3 color="fff" alignText="center">+ 400</T.Titulo3>
                        <T.Texto color="fff" textAlign="center">Clientes satisfeitos</T.Texto>
                    </div>
                    <div>
                        <T.Titulo3 color="fff" alignText="center">+ 10.000</T.Titulo3>
                        <T.Texto color="fff" textAlign="center">Cadeiras entregues</T.Texto>
                    </div>
                </S.BigNumbersGrid>
            </S.BigNumbers>
        </S.AboutWrapper>
    );
};

export default About;
