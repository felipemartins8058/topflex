import styled from 'styled-components';

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

    .gap{
        display: grid;
        gap: 1rem;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const StoreItemBig = styled.div`
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    height: 100%;
`

export const FlexBox = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 3rem 2rem;

    #content{
        flex: 0 0 60%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`

export const StoreImg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    right: 0;
    bottom: 0;
    opacity: 0.8;
    z-index: -1;

    .gatsby-image-wrapper{
        height: 100%;
    }
`

export const StoreItemSmall = styled.div`
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
`