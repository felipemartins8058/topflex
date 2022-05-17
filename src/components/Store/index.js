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
                        <S.StoreImg>
                            <StaticImage src="../../images/product1.png" quality={10} layout="fullWidth" />
                        </S.StoreImg>
                        <S.FlexBox>
                            <div id="content">
                                <T.Titulo2>TPX Presidente</T.Titulo2>
                                <T.Texto>Your service your personal space for shopping and entertainment, featuring a swimming pool</T.Texto>
                                <CTA />
                            </div>
                        </S.FlexBox>
                    </S.StoreItemBig>
                </div>
                <div className="gap">
                    <S.StoreItemSmall>
                        <S.StoreImg>
                            <StaticImage src="../../images/product2.png" layout="fullWidth" />
                        </S.StoreImg>
                        <S.FlexBox>
                            <div id="content">
                                <T.Titulo2>TPX Presidente</T.Titulo2>
                                <T.Texto>Your service your personal space for shopping and entertainment, featuring a swimming pool</T.Texto>
                                <CTA />
                            </div>
                        </S.FlexBox>
                    </S.StoreItemSmall>
                    <S.StoreItemSmall>
                        <S.StoreImg>
                            <StaticImage src="../../images/product2.png" layout="fullWidth" />
                        </S.StoreImg>
                        <S.FlexBox>
                            <div id="content">
                                <T.Titulo2>TPX Presidente</T.Titulo2>
                                <T.Texto>Your service your personal space for shopping and entertainment, featuring a swimming pool</T.Texto>
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
