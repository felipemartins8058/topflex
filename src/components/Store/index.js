import React from "react";
import * as S from "./styles";
import * as T from "../stylesText";
import CTA from "../CTA";
import { StaticImage } from "gatsby-plugin-image";

import Modal from "react-modal";

const Store = () => {
    const [modalTpx, setModalTpx] = React.useState(false);
    const [modalSong, setModalSong] = React.useState(false);
    const [modalGoha, setModalGoha] = React.useState(false);
    const [modalMoveis, setModalMoveis] = React.useState(false);

    function handleOpenTpx() {
        setModalTpx(true);
    }

    function handleOpenSong(){
        setModalSong(true)
    }

    function handleOpenMoveis(){
        setModalMoveis(true)
    }

    function handleOPenGoha() {
        setModalGoha(true)
    }

    function handleCloseModal() {
        setModalTpx(false);
        setModalSong(false);
        setModalMoveis(false);
        setModalGoha(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '20px'
        }
    }

    return (
        <S.StoreWrapper>
            <T.Titulo1>Mais conforto e sofisticação no seu Office</T.Titulo1>

            <S.HorizontalScroll>
                <S.CardProduct>
                    <S.ProductImg>
                        <StaticImage src="../../images/tpx.jpg" layout="fullWidth" />
                    </S.ProductImg>
                    <T.Titulo3>TPX Diretor</T.Titulo3>
                    <StaticImage src="../../images/rating.png" width={100} />
                    <S.Button onClick={handleOpenTpx}>Ver mais</S.Button>
                </S.CardProduct>

                <S.CardProduct>
                    <S.ProductImg>
                        <StaticImage src="../../images/song.jpg" layout="fullWidth" />
                    </S.ProductImg>
                    <T.Titulo3>Cadeira Song </T.Titulo3>
                    <StaticImage src="../../images/rating.png" width={100} />
                    <S.Button onClick={handleOpenSong}>Ver mais</S.Button>
                </S.CardProduct>
                
                <S.CardProduct>
                    <S.ProductImg>
                        <StaticImage src="../../images/goha.jpg" layout="fullWidth" />
                    </S.ProductImg>
                    <T.Titulo3>Cadeira Goha </T.Titulo3>
                    <StaticImage src="../../images/rating.png" width={100} />
                    <S.Button onClick={handleOPenGoha}>Ver mais</S.Button>
                </S.CardProduct>

                <S.CardProduct>
                    <S.ProductImg>
                        <StaticImage src="../../images/start2.png" layout="fullWidth" />
                    </S.ProductImg>
                    <T.Titulo5 color="#1a1b1c">Móveis de escritório no geral</T.Titulo5>
                    <StaticImage src="../../images/rating.png" width={100} />
                    <S.Button onClick={handleOpenMoveis}>Ver mais</S.Button>
                </S.CardProduct>
            </S.HorizontalScroll>

            <Modal isOpen={modalTpx} onRequestClose={handleCloseModal} style={customStyles}>
                <S.CloseModal onClick={handleCloseModal}><T.Texto color="CCCCCC">x</T.Texto></S.CloseModal>
                <T.Titulo2>TPX Diretor</T.Titulo2>
                <StaticImage src="../../images/tpx.jpg" quality={10} layout="fullWidth" />
                <T.Texto>Moderno e amplo encosto em tela de linhas marcantes e angulares, braços ajustáveis, espuma de boa resiliência e um mecanismo exclusivo</T.Texto>
                <CTA />
            </Modal>

            <Modal isOpen={modalSong} onRequestClose={handleCloseModal} style={customStyles}>
                <S.CloseModal onClick={handleCloseModal}><T.Texto color="CCCCCC">x</T.Texto></S.CloseModal>
                <T.Titulo2>Cadeira Song </T.Titulo2>
                <StaticImage src="../../images/song.jpg" layout="fullWidth" />
                <T.Texto>Os apoios de cabeça, de braços e lombar são ajustáveis e, somados ao mecanismo deslizante, oferecem múltiplas combinações para se adaptarem aos mais diversos biotipos.</T.Texto>
                <CTA />
            </Modal>

            <Modal isOpen={modalGoha} onRequestClose={handleCloseModal} style={customStyles}>
                <S.CloseModal onClick={handleCloseModal}><T.Texto color="CCCCCC">x</T.Texto></S.CloseModal>
                <T.Titulo2>Cadeira Goha </T.Titulo2>
                <StaticImage src="../../images/song.jpg" layout="fullWidth" />
                <T.Texto>Braços, altura do assento e inclinação do encosto ajustáveis. A tela do seu encosto é dublada, aumentando sua durabilidade, além de ser fixada a um estrutural produzido em polímero injetado de alta resistência que protege a tela de atritos.</T.Texto>
                <CTA />
            </Modal>

            <Modal isOpen={modalMoveis} onRequestClose={handleCloseModal} style={customStyles}>
                <S.CloseModal onClick={handleCloseModal}><T.Texto color="CCCCCC">x</T.Texto></S.CloseModal>
                <T.Titulo5>Móveis de escritório no geral</T.Titulo5>
                <StaticImage src="../../images/start2.png" layout="fullWidth" />
                <T.Texto>Conheça outras opções incríveis</T.Texto>
                <CTA />
            </Modal>

        </S.StoreWrapper>
    );
};

export default Store;