import styled from "styled-components";

export const BackgroundContainer = styled.div`
    display: flex;
    gap: 0.5rem;

    margin: 5.75rem 0;
`

export const BackgroundComponents = styled.div`
    h1 {
        font-size: 3rem;
        font-weight: 800;
        color: ${(props) => props.theme["base-title"]};
    }

    span {
        font-size: 1.25rem;
        font-weight: 400;
        color: ${(props) => props.theme["base-subtitle"]};
    }

`

export const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;

    margin-top: 4.12rem;
    font-size: 1rem;
    font-weight: 400;

    p {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.38rem;
    h2 {
        color: ${(props) => props.theme["base-subtitle"]};
        font-size: 2rem;
        font-weight: 800;
    }
`