import { StyleProps } from '../../model'
import styled from 'styled-components'

export const NotifierContainer = styled.div<StyleProps>`
    right: ${({isNotifier}) => isNotifier ? 3 : -70}rem;
    opacity: ${({isNotifier}) => isNotifier ? 1 : 0};
    transform: translateX(0%);
    background-color: ${({bgColor}) => bgColor || '#ffffff'};
    width: 40rem;
    padding: 1.5rem
    position: fixed;
    top: 3rem;
    z-index: 35;
    border-radius: 0.8rem;
    box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
    transition: all 1s;

    @media (max-width: 380px) {
        right: ${({isNotifier}) => isNotifier ? 50 : 120}%;
        transform: ${({isNotifier}) => isNotifier ? 'translateX(50%)' : 'translateX(0%)'};
    }
    @media (max-width: 345px) {
        width: 35rem
    }
    @media (max-width: 295px) {
        width: 33rem
    }
`