import styled from 'styled-components';

export const AboutWrapper = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 9rem;
    margin-top: 5rem;

    @media (max-width: 768px) {
        margin-bottom: 0;
    }
`

export const AboutFlex = styled.div`
    display: flex;
    align-items: center;
    max-width: 1400px;
    width: 100%;
    padding: 1rem;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`

export const AboutContent = styled.div`
    flex: 0 0 41.5%;

    @media (max-width: 768px){
        flex: 0 100%;
    }
`

export const AboutImage = styled.div`
    flex: 0 0 41.5%;

    @media (max-width: 768px){
        flex: 0 100%;
    }
`

export const BigNumbers = styled.div`
    position: absolute;
    top: 90%;
    left: 0;
    background: #1C1A1B;
    width: 100%;
    z-index: -1;
    padding: 2rem 0 0.4rem;

    @media (max-width: 768px){
        display: none;
    }
`

export const BigNumbersGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(115px, 200px));
    justify-content: center;
    transform: translateX(-18rem);
`