import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    max-width: 460px;
    min-height: 100vh;
    margin: 0px auto;
    text-align: center;
    display: grid;
    grid-template-rows: auto 1fr;
`;

export const Loader = styled.span`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    color: var(--header-text);
    font-size: 24px;
`