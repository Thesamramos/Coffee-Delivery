import styled from "styled-components"

export const CardCoffee = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    background: ${(props) => props.theme["base-card"]};
    width: 16rem;
    height: 19.375rem;
    border-radius: 0.375rem 2.25rem;

    img {
        position: relative;
        top: -1.3rem;
        width: 7.5rem;
        height: 7.5rem;
        
    }

    span:nth-child(2) {
        color: ${(props) => props.theme["yellow-dark"]};
        background: ${(props) => props.theme["yellow-light"]};

        text-transform: uppercase;
        font-size: 0.625rem;
        font-weight: 700;
        padding: 0.25rem 0.5rem;
        border-radius: 100px;
        margin-bottom: 1rem;
    }
`

export const Title = styled.div`
    
    h2 {
        font-size: 1.25rem;
        font-weight: 700;
        text-align: center;
        color: ${(props) => props.theme["base-subtitle"]};
    }

    p {
        font-size: 0.875rem;
        font-weight: 400;
        text-align: center;
        color: ${(props) => props.theme["base-label"]};
        padding: 0 1.25rem;
    }
`

export const Buy = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 13rem;
    margin-top: 2.06rem;
    margin-bottom: 1.47rem;

    span {
        display: flex;
        align-items: center;
        gap: 0.3rem;

        font-family: 'Baloo 2', sans-serif;
        font-size: 1.5rem;
        font-weight: 800;

        p {
            font-family: 'Roboto', sans-serif;
            font-size: 0.875rem;
            font-weight: 400;
            text-align: right;
        }
    }

    div {
        display: flex;
        gap: 0.5rem;
    }

    input {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        height: 2.375rem;
        width: 4.5rem;
        border-radius: 6px;
        border: none;
        text-align: center;
        font-size: 1rem;
        font-weight: 400;

        color: ${(props) => props.theme["base-title"]};
        background: ${(props) => props.theme["base-button"]};
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        padding: 0.5rem;
        border-radius: 6px;
        border: none;
        width: 2.375rem;
        cursor: pointer;
        background: ${(props) => props.theme["purple-dark"]};

        &:hover {
            background: ${(props) => props.theme["purple"]};
        }
    }
`