import styled from "styled-components";

export const Titulo1 = styled.h1`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    color: #1c1a1b;
    text-align: ${(props) => `${props.textAlign}` || `left`};
    margin-bottom: ${(props) => `${props.marginBottom}rem` || `2rem`};

    @media (max-width: 768px) {
        font-size: 32px;
        line-height: normal;
    }
`;

export const Titulo2 = styled.h2`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 39px;
    line-height: 58px;
    color: #1c1a1b;
`;

export const Titulo3 = styled.h3`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 31px;
    line-height: 46px;
    text-align: ${(props) => `${props.alignText}` || `left`};
    color: ${(props) => `#${props.color}` || `#1c1a1b`};
`;

export const Titulo5 = styled.h5`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
`;

export const Texto = styled.p`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-align: ${(props) => `${props.textAlign}` || `left`};
    color: ${(props) => `#${props.color}` || `#1c1a1b`};
`;
