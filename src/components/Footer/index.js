import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import * as S from "./styles";
import * as T from "../stylesText";

const Footer = () => {
    return (
        <S.Footer>
            <S.TitleWrapper>
                <S.Flex>
                    <T.Titulo3>Prefere que a gente entre em contato?</T.Titulo3>
                    <T.Titulo1>Deixe sua mensagem</T.Titulo1>
                </S.Flex>
            </S.TitleWrapper>
            <S.FooterBackground>
                <S.FooterGrid>
                    <S.FormWrapper>
                        <form name="contact" method="POST" data-netlify="true">
                            <input type="text" id="name" name="name" placeholder="Nome completo" />
                            <input type="email" id="email" name="email" placeholder="E-mail" />
                            <input type="number" name="whatsapp" id="number" placeholder="Whatsapp" />
                            <textarea id="message" name="message" placeholder="Mensagem" rows={8} cols="10"></textarea>
                            <button type="submit">Enviar</button>
                        </form>
                        <S.Info>
                            <div className="icon">
                                <StaticImage src="../../images/location_icon.png" />
                            </div>
                            <div className="text">
                                <T.Texto color="fff">Avenida Dom Manuel, 738</T.Texto>
                            </div>
                        </S.Info>
                        <S.Info>
                            <div className="icon">
                                <StaticImage src="../../images/email_icon.png" />
                            </div>
                            <div className="text">
                                <T.Texto color="fff">topflex@contato.com</T.Texto>
                            </div>
                        </S.Info>
                        <S.Info>
                            <div className="icon">
                                <StaticImage src="../../images/whatsapp_icon.png" />
                            </div>
                            <div className="text">
                                <T.Texto color="fff">85 98948-9182</T.Texto>
                            </div>
                        </S.Info>
                    </S.FormWrapper>
                    <div></div>
                    <S.Maps>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3643760842806!2d-38.52427368553565!3d-3.730503697285869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7485403bf4d3f%3A0x83f2adca252ffd9!2sTOPFLEX%20OFFICE!5e0!3m2!1spt-BR!2sbr!4v1651879619462!5m2!1spt-BR!2sbr" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </S.Maps>
                </S.FooterGrid>
            </S.FooterBackground>
        </S.Footer>
    );
};

export default Footer;
