import { createGlobalStyle } from 'styled-components';

import './fonts.css';

export default createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        font-family: ubuntu;
    }

    body {
        background: ${props => props.theme.background_primary || 'white'};
        color: ${props => props.theme.primary || 'black'};
        box-sizing: border-box;
    }

    main {
        padding: 2% 25% 2% 25%;
        box-sizing: border-box;

        /* 70px + 104px = 192px is the footer + header height */
        min-height: calc(100vh - 174px);
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${props => props.theme.secondary || 'black'};
        line-height: 1.2em;
    }

    a {
        color: ${props => props.theme.tertiary || 'blue'};
        line-height: 1.8em;
        font-size: 18px;
        text-decoration: none;
        transition: opacity 0.2s ease;
    }

    a:hover {
        opacity: 0.8;        
    }

    p, li, ol, ul {
        color: ${props => props.theme.primary || 'black'};
        line-height: 1.8em;
        font-size: 18px;
    }

    li {
        margin-bottom: 0.4em;
    }

    h1 {
        font-size: 32px;
    }

    h2 {
        font-size: 24px;
    }

    h3 {
        font-size: 20px;
    }

    h4 {
        font-size: 18px;
    }

    @media screen and (max-width: 800px) {
        main {
            padding: 2% 4% 2% 4%;
        }
    }
`;
