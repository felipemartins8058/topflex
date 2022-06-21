import styled from "styled-components";

export const Navbar = styled.nav`
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(4px);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
`;

export const NavbarContainer = styled.div`
    padding: 1rem;
    position: relative;
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        justify-items: center;
    }
`;

export const Logo = styled.div`
    max-width: 150px;
`;

export const Info = styled.a`
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
    text-decoration: none;

    @media (max-width: 768px) {
        display: none;
    }
`;
