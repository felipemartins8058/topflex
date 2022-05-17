import styled from "styled-components";

export const TestimonialsWrapper = styled.section`
    position: relative;
    max-width: 1400px;
    margin: auto;
    margin-top: 5rem;
    padding: 0 1rem;
`

export const TestimonialsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 4fr);
    gap: 1rem;

    @media(max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 5rem;
    }
`