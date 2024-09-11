import { StyleProps } from '../../model'
import styled, { createGlobalStyle } from 'styled-components'

export const NotifierContainer = styled.div<StyleProps>`
    right: ${({$isNotifier}) => $isNotifier ? 30 : -700}px;
    opacity: ${({$isNotifier}) => $isNotifier ? 1 : 0};
    transform: translateX(0%);
    background-color: ${({$bgColor}) => $bgColor || '#ffffff'};
    width: 400px;
    padding: 12px;
    position: fixed;
    top: 30px;
    z-index: 35;
    border-radius: 8px;
    box-shadow: 0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814;
    transition: all 1s;
    box-sizing: border-box;

    @media (max-width: 463px) {
        right: ${({$isNotifier}) => $isNotifier ? 50 : 120}%;
        transform: ${({$isNotifier}) => $isNotifier ? 'translateX(50%)' : 'translateX(0%)'};
    }

    @media (max-width: 428px) {
        width: 230px;
    }

    @media (max-width: 360x) {
        padding: 10px;
    }

    @media (max-width: 388px) {
        width: 95%;
    }
`

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 15px;
        box-sizing: border-box;
    }
`