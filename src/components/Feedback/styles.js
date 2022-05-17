import styled from "styled-components";

export const FeedbackWrapper = styled.div`
    position: relative;
    padding: 4rem 2rem 2rem;
    display: flex;
    border: 1px solid #1C1A1B;
    border-radius: 1rem;
`
export const Img = styled.div`
    position: absolute;
    bottom: 70%;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    padding: 1rem;

    @media (max-width: 768px) {
        bottom: 78%;
    }
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    p{
        flex: 0 0 87%;
    }
`