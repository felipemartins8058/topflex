import styled from "styled-components";

export const SaleWrapper = styled.section`
    position: relative;
    margin-top: 5rem;
`;

export const SaleBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;

    .gatsby-image-wrapper img {
        transform: translateY(-25%) scaleX(-1);
    }

    @media (max-width: 768px) {
        .gatsby-image-wrapper {
            height: 100%;
        }
        .gatsby-image-wrapper img {
            transform: scaleX(-1);
        }
    }
`;

export const Wrapper = styled.div`
    max-width: 1400px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 6fr);
    gap: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const Box = styled.div`
    background: #ffffffdb;
    padding: 2rem;
    margin: 2rem 1rem 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (max-width: 768px) {
        padding: 0.5rem;
    }
`;
