import styled from "styled-components";

export const CTA = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    gap: .5rem;
    background: #FC1515;
    border-radius: 16px;
    padding: 1rem 3rem;
    text-decoration: none;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    margin-top: ${(props) => `${props.marginTop}rem` || `2rem`};

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;