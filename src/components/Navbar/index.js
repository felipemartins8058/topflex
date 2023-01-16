import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as T from "../stylesText"
import * as S from "./styles";

const Navbar = () => {
    return (
        <S.Navbar>
            <S.NavbarContainer>
                <S.Logo>
                    <StaticImage src="../../images/logo2.png" />
                </S.Logo>
                <S.Info href="https://api.whatsapp.com/send?phone=5585989489182&text=Quero%20saber%20mais%20sobre%20os%20produtos%20Topflex">
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
