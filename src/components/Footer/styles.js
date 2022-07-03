import styled from "styled-components";

export const Footer = styled.footer`
    position: relative;
    margin-top: 15rem;

    @media (max-width: 768px){
        margin-top: 2rem;
    }
`;

export const FooterBackground = styled.div`
    background: #1c1a1b;
`;

export const TitleWrapper = styled.div`
    max-width: 1400px;
    margin: auto;
    margin-bottom: 2rem;
    padding: 0 1rem;
`;

export const Flex = styled.div`
    width: 65%;
`

export const FooterGrid = styled.div`
    max-width: 1400px;
    margin: auto;
    display: grid;
    grid-template-columns: 6fr 1fr 5fr;
    gap: 1rem;
    padding: 2rem 1rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const FormWrapper = styled.div`

    form{
        margin-bottom: 2rem;
    }

    input,
    textarea {
        width: 100%;
        display: block;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        border: none;
        /* Texto */
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        /* identical to box height */
        color: #000000;
    }
    textarea {
        resize: none;
        min-height: 160px;
    }
    button {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: #fc1515;
        border-radius: 16px;
        padding: 1rem 3rem;
        text-decoration: none;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        color: #ffffff;
        border: none;
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
`;

export const Maps = styled.div`
    height: 120%;
    transform: translateY(-20%);

    iframe {
        border: 0;
    }

    @media (max-width: 768px){
        display: none;
    }
`;

export const Info = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;

    .text {
        flex: 1;
    }
`