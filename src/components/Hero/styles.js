import styled from "styled-components";

export const HeroWrapper = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
`;

export const HeroGrid = styled.div`
    max-width: 1400px;
    margin: auto;
    height: 100%;
    padding: 1rem;
    display: grid;
    grid-template-columns: 5fr 7fr;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;

    .gatsby-image-wrapper{
        height: 100%;
    }
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;    
    background: radial-gradient(50% 50% at 50% 50%, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
`;
