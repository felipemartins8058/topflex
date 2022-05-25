import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as T from "../stylesText"
import * as S from "./styles";

const Navbar = () => {
    return (
        <S.Navbar>
            <S.NavbarContainer>
                <S.Logo>
                    <StaticImage src="../../images/logo.png" />
                </S.Logo>
                <S.Info>
                    <div className="icon">
                        <StaticImage src="../../images/whatsapp_icon_preto.png" />
                    </div>
                    <div className="text">
                        <T.Texto color="1c1a1b">85 98948-9182</T.Texto>
                    </div>
                </S.Info>
            </S.NavbarContainer>
        </S.Navbar>
    );
};

export default Navbar;
