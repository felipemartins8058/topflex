import React from "react";
import * as S from "./styles";
import * as T from "../stylesText";
import CTA from "../CTA";
import { StaticImage } from "gatsby-plugin-image";

const Store = () => {
    return (
        <S.StoreWrapper>
            <T.Titulo1>Mais conforto e sofisticação no seu Office</T.Titulo1>
            <S.StoreGrid>
                <div>
                    <S.StoreItemBig>
                        <S.StoreImg left={-140}>
                            <StaticImage src="../../images/tpx.jpg" quality={10} layout="fullWidth" />
                        </S.StoreImg>
                        <S.FlexBox>
                            <div id="content">
                                <T.Titulo2>TPX Presidente</T.Titulo2>
                                <T.Texto>Moderno e amplo encosto em tela de linhas marcantes e angulares, braços ajustáveis, espuma de boa resiliência e um mecanismo exclusivo</T.Texto>
                                <CTA />
                            </div>
                        </S.FlexBox>
                    </S.StoreItemBig>
                </div>
                <div className="gap">
                <S.StoreItemSmall>
                        <S.StoreImg left={-190}>
                            <StaticImage src="../../images/song.jpg" layout="fullWidth" />
                        </S.StoreImg>
                        <S.FlexBox>
                            <div id="content">
                                <T.Titulo2>Cadeira Song </T.Titulo2>
                                <T.Texto>Os apoios de cabeça, de braços e lombar são ajustáveis e, somados ao mecanismo deslizante, oferecem múltiplas combinações para se adaptarem aos mais diversos biotipos.</T.Texto>
                                <CTA />
                            </div>
                        </S.FlexBox>
                    </S.StoreItemSmall>
                    <S.StoreItemSmall>
                        <S.StoreImg opacity={0.5}>
                            <StaticImage src="../../images/start.png" layout="fullWidth" />
                        </S.StoreImg>
                        <S.FlexBox>
                            <div id="content">
                                <T.Titulo2>Móveis de escritório no geral</T.Titulo2>
                                <T.Texto>Conheça outras opções incríveis</T.Texto>
                                <CTA />
                            </div>
                        </S.FlexBox>
                    </S.StoreItemSmall>
                    
                </div>
            </S.StoreGrid>
        </S.StoreWrapper>
    );
};

export default Store;
