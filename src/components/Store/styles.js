import styled from "styled-components";

export const StoreWrapper = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    width: 100%;
    margin: auto;
    padding: 5rem 1rem 0;
`;

export const StoreGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 6fr);
    gap: 1rem;

    .gap {
        display: grid;
        gap: 1rem;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const StoreItemBig = styled.div`
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    height: 100%;
    border: solid 1px #00000029;
`;

export const FlexBox = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 3rem 2rem;

    #content {
        flex: 0 0 60%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    @media (max-width: 768px) {
        #content {
            flex: 0 0 100%;
        }
    }
`;

export const StoreImg = styled.div`
    position: absolute;
    top: 0;
    left: ${(props) => `${props.left}px` || `0px`};
    width: 100%;
    height: 100%;
    right: 0;
    bottom: 0;
    opacity: ${(props) => (props.opacity ? `${props.opacity}` : `0.8`)};
    z-index: -1;

    .gatsby-image-wrapper {
        height: 100%;
    }

    @media (max-width: 768px) {
        opacity: 0.4;
        left: 0;
    }
`;

export const StoreItemSmall = styled.div`
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    border: solid 1px #00000029;
`;

export const HorizontalScroll = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 300px;
    gap: 1rem;
    grid-template-rows: 470px;
    scroll-behavior: smooth;
    overflow-x: auto;

    @media (max-width: 768px) {
        grid-template-columns: 80%;
        align-items: center;
    }
`;

export const CardProduct = styled.div`
    padding: 1rem;
    border-radius: 1rem;
    background: #ffffff;
    border: 1px solid #b9b9b9;
`;

export const ProductImg = styled.div`
    height: 66%;
    width: 100%;
    border-radius: 1em;
    overflow: hidden;

    .gatsby-image-wrapper{
        height: 100%;
    }
`

export const Button = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    gap: .5rem;
    background: #FC1515;
    border-radius: 16px;
    padding: .5rem 1rem;
    text-decoration: none;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 30px;
    color: #ffffff;
    margin-top: ${(props) => `${props.marginTop}rem` || `2rem`};
    border: none;
    margin-top: 1rem;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

export const CloseModal = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    height: 2rem;
`