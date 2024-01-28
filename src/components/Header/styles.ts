import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        p {
            display: flex;
            align-items: center;
            gap: 0.25rem;

            color: ${(props) => props.theme["purple-dark"]};
            background-color: ${(props) => props.theme["purple-light"]};

            font-size: 0.875rem;
            font-weight: 400;
            border-radius: 6px;
            padding: 0.5rem;
        }

        a {
            display: flex;
            align-items: center;

            border-radius: 6px;
            padding: 0.5rem;

            background-color: ${(props) => props.theme["yellow-light"]};
            color: ${(props) => props.theme["yellow-dark"]};
        }
    }
`