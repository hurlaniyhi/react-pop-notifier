import styled from 'styled-components'
import { StyleProps } from '../model'

export const Button = styled.button<StyleProps>`
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : '20rem'};
    height: ${({height}) => height || 4.5}rem;
    background: ${({bgColor}) => bgColor || '#0D968F'};
    border-radius: ${({radius}) => radius || 0.8}rem;
    outline: none;
    border: none;
    border: ${({borderColor}) => borderColor ? `1px solid ${borderColor}` : 'none'};
    transition: all .2s;
    font-size: ${({titleSize}) => titleSize || 1.4}rem;
    color: ${({color}) => color || '#ffffff'};
    font-weight: ${({fontWeight}) => fontWeight || 700};
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-top: ${({topMargin}) => topMargin || '0'}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin || '0'}rem;
    padding: 0 ${({padding}) => padding || 0}rem;
    padding-top: ${({topPadding}) => topPadding || 0}rem;
    padding-bottom: ${({bottomPadding}) => bottomPadding || 0}rem;
    padding-left: ${({leftPadding, padding}) => leftPadding ? leftPadding : padding ? padding : 0}rem;
    padding-right: ${({rightPadding, padding}) => rightPadding ? rightPadding : padding ? padding : 0}rem;
    box-shadow: ${({shadow}) => shadow || '0px 1px 2px rgba(16, 24, 40, 0.05)'};

    &:hover, &:focus {
        background: ${({hoverBgColor, bgColor}) => hoverBgColor || bgColor};
        color: ${({hoverColor, color}) => hoverColor ? hoverColor : color ? color : '#00071F'};
        outline: none
    }
`
export const OutlineButton = styled.button<StyleProps>`
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : '20rem'};
    height: ${({height}) => height || 4.5}rem;
    border: 1px solid ${({color}) => color || '#6DE7B4'};
    border-radius: ${({radius}) => radius || 0.8}rem;
    outline: none;
    background: transparent;
    transition: all .2s;
    font-size: ${({titleSize}) => titleSize || 1.5}rem;
    color: ${({color}) => color || '#00071F'};
    font-weight: ${({fontWeight}) => fontWeight || 700};
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-top: ${({topMargin}) => topMargin || '0'}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin || '0'}rem;
    padding: 0 ${({padding}) => padding || 0}rem;
    padding-top: ${({topPadding}) => topPadding || 0}rem;
    padding-bottom: ${({bottomPadding}) => bottomPadding || 0}rem;
    padding-left: ${({leftPadding, padding}) => leftPadding ? leftPadding : padding ? padding : 0}rem;
    padding-right: ${({rightPadding, padding}) => rightPadding ? rightPadding : padding ? padding : 0}rem;

    &:hover, &:focus {
        background: ${({hoverBgColor, color}) => hoverBgColor || color};
        color: ${({hoverColor}) => hoverColor || '#00071F'};
        border: none;
        outline: none
    }
`

export const CustomContainer = styled.div<StyleProps>`
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : '100%'};
    height: ${({height, hUnit}) => hUnit && height ? `${height}${hUnit}` : height ? `${height}rem` : 'auto'};
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    padding-top: ${({topPadding, padding}) => topPadding || padding || 0}rem;
    padding-bottom: ${({bottomPadding, padding}) => bottomPadding || padding || 0}rem;
    padding-left: ${({leftPadding, padding}) => leftPadding || padding || 0}rem;
    padding-right: ${({rightPadding, padding}) => rightPadding || padding || 0}rem;
    background-color: ${({bgColor}) => bgColor || 'transparent'};
    border-radius: ${({radius, customRadius}) => customRadius ? customRadius : radius ? `${radius}rem` : '0rem'};
    border: ${({borderColor}) => borderColor ? `1px solid ${borderColor}` : 'none'};
    overflow: ${({overflow}) => overflow || 'hidden'};
    position: relative;
    box-shadow: ${({shadow}) => shadow || 'none'};
    min-height: ${({minHeight, mnHUnit}) => mnHUnit && minHeight ? `${minHeight}${mnHUnit}` : minHeight ? `${minHeight}rem` : 'none'};
    max-height: ${({maxHeight, mxHUnit}) => mxHUnit && maxHeight ? `${maxHeight}${mxHUnit}` : maxHeight ? `${maxHeight}rem` : 'none'};
    min-width: ${({minWidth, mnWUnit}) => mnWUnit && minWidth ? `${minWidth}${mnWUnit}` : minWidth ? `${minWidth}rem` : 'none'};
    max-width: ${({maxWidth, mxWUnit}) => mxWUnit && maxWidth ? `${maxWidth}${mxWUnit}` : maxWidth ? `${maxWidth}rem` : 'none'};
    transition: all 0.2s;
    
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none
    }
`

export const GridContainer = styled.div<StyleProps>`
    display: grid;
    place-items: ${({alignItems}) => alignItems || 'center'};
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : '100%'};
    height: ${({height, hUnit}) => hUnit && height ? `${height}${hUnit}` : height ? `${height}rem` : 'auto'};
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    padding-top: ${({topPadding, padding}) => topPadding || padding || 0}rem;
    padding-bottom: ${({bottomPadding, padding}) => bottomPadding || padding || 0}rem;
    padding-left: ${({leftPadding, padding}) => leftPadding || padding || 0}rem;
    padding-right: ${({rightPadding, padding}) => rightPadding || padding || 0}rem;
    background-color: ${({bgColor}) => bgColor || 'transparent'};
    border-radius: ${({radius}) => radius || 0}rem;
    border: 1px solid ${({borderColor}) => borderColor || 'transparent'};
    box-shadow: ${({shadow}) => shadow || 'none'};
    min-height: ${({minHeight, mnHUnit}) => mnHUnit && minHeight ? `${minHeight}${mnHUnit}` : minHeight ? `${minHeight}rem` : 'none'};
    max-height: ${({maxHeight, mxHUnit}) => mxHUnit && maxHeight ? `${maxHeight}${mxHUnit}` : maxHeight ? `${maxHeight}rem` : 'none'};
    min-width: ${({minWidth, mnWUnit}) => mnWUnit && minWidth ? `${minWidth}${mnWUnit}` : minWidth ? `${minWidth}rem` : 'none'};
    max-width: ${({maxWidth, mxWUnit}) => mxWUnit && maxWidth ? `${maxWidth}${mxWUnit}` : maxWidth ? `${maxWidth}rem` : 'none'};
    position: relative;
    transition: all 0.2s;
    cursor: pointer;
`

export const FlexColumn = styled.div<StyleProps>`
    display: flex;
    flex-direction: column;
    height: ${({height, hUnit}) => hUnit && height ? `${height}${hUnit}` : height ? `${height}rem` : 'auto'};
    justify-content: ${({justifyContent}) => justifyContent || 'center'};
    align-items: ${({alignItems}) => alignItems || 'center'};
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : '100%'};
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    padding-top: ${({topPadding, padding}) => topPadding || padding || 0}rem;
    padding-bottom: ${({bottomPadding, padding}) => bottomPadding || padding || 0}rem;
    padding-left: ${({leftPadding, padding}) => leftPadding || padding || 0}rem;
    padding-right: ${({rightPadding, padding}) => rightPadding || padding || 0}rem;
    background-color: ${({bgColor}) => bgColor || 'transparent'};
    border-radius: ${({radius}) => radius || 0}rem;
    border: ${({borderColor}) => borderColor ? `1px solid ${borderColor}` : 'none'};
    box-shadow: ${({shadow}) => shadow || 'none'};
    min-height: ${({minHeight, mnHUnit}) => mnHUnit && minHeight ? `${minHeight}${mnHUnit}` : minHeight ? `${minHeight}rem` : 'none'};
    max-height: ${({maxHeight, mxHUnit}) => mxHUnit && maxHeight ? `${maxHeight}${mxHUnit}` : maxHeight ? `${maxHeight}rem` : 'none'};
    min-width: ${({minWidth, mnWUnit}) => mnWUnit && minWidth ? `${minWidth}${mnWUnit}` : minWidth ? `${minWidth}rem` : 'none'};
    max-width: ${({maxWidth, mxWUnit}) => mxWUnit && maxWidth ? `${maxWidth}${mxWUnit}` : maxWidth ? `${maxWidth}rem` : 'none'};
    position: relative;
`
export const FlexRow = styled.div<StyleProps>`
    display: flex;
    flex-direction: row;
    justify-content: ${({justifyContent}) => justifyContent || 'flex-start'};
    align-items: ${({alignItems}) => alignItems || 'center'};
    gap: ${({gap, sizeUnit}) => sizeUnit && gap ? `${gap}${sizeUnit}` : gap ? `${gap}rem` : '0'};
    flex-wrap: ${({wrap}) => wrap || 'nowrap'};
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : '100%'};
    height: ${({height, hUnit}) => hUnit && height ? `${height}${hUnit}` : height ? `${height}rem` : 'auto'};
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    padding-top: ${({topPadding, padding}) => topPadding || padding || 0}rem;
    padding-bottom: ${({bottomPadding, padding}) => bottomPadding || padding || 0}rem;
    padding-left: ${({leftPadding, padding}) => leftPadding || padding || 0}rem;
    padding-right: ${({rightPadding, padding}) => rightPadding || padding || 0}rem;
    background-color: ${({bgColor}) => bgColor || 'transparent'};
    border-radius: ${({radius}) => radius || 0}rem;
    border: 1px solid ${({borderColor}) => borderColor || 'transparent'};
    box-shadow: ${({shadow}) => shadow || 'none'};
    min-height: ${({minHeight, mnHUnit}) => mnHUnit && minHeight ? `${minHeight}${mnHUnit}` : minHeight ? `${minHeight}rem` : 'none'};
    max-height: ${({maxHeight, mxHUnit}) => mxHUnit && maxHeight ? `${maxHeight}${mxHUnit}` : maxHeight ? `${maxHeight}rem` : 'none'};
    min-width: ${({minWidth, mnWUnit}) => mnWUnit && minWidth ? `${minWidth}${mnWUnit}` : minWidth ? `${minWidth}rem` : 'none'};
    max-width: ${({maxWidth, mxWUnit}) => mxWUnit && maxWidth ? `${maxWidth}${mxWUnit}` : maxWidth ? `${maxWidth}rem` : 'none'};
    z-index: ${({zIndex}) => zIndex || 1};
    position: relative;
    cursor: pointer;
`
export const AppText = styled.p<StyleProps>`
    font-size: ${({textSize}) => textSize || 1.4}rem;
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : 'auto'};
    color: ${({color}) => color || '#000000'};
    font-weight: ${({fontWeight}) => fontWeight || 400};
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin || 0}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    padding-top: ${({topPadding}) => topPadding || 0}rem;
    padding-bottom: ${({bottomPadding}) => bottomPadding || 0}rem;
    padding-left: ${({leftPadding}) => leftPadding || 0}rem;
    padding-right: ${({rightPadding}) => rightPadding || 0}rem;
    text-align: ${({align}) => align || 'left'};
    font-family: ${({fontFamily}) => fontFamily && fontFamily};
    word-wrap: break-word;
    cursor: ${({cursor}) => cursor || 'auto'};
    overflow-wrap: ${({textWrap}) => textWrap || 'anywhere'};

    &:hover {
        color: ${({color, hoverColor}) => hoverColor || color};
    }
`
export const AppSpan = styled.span<StyleProps>`
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : 'auto'};
    font-size: ${({textSize}) => textSize || 1.4}rem;
    color: ${({color}) => color || '#000000'};
    font-weight: ${({fontWeight}) => fontWeight || 400};
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    padding-top: ${({topPadding}) => topPadding || 0}rem;
    padding-bottom: ${({bottomPadding}) => bottomPadding || 0}rem;
    padding-left: ${({leftPadding}) => leftPadding || 0}rem;
    padding-right: ${({rightPadding}) => rightPadding || 0}rem;
    text-align: ${({align}) => align || 'left'};
    font-family: ${({fontFamily}) => fontFamily && fontFamily};
    cursor: ${({cursor}) => cursor || 'auto'};
    word-wrap: break-word;
    transition: all 0.2s;

    &:hover {
        color: ${({color, hoverColor}) => hoverColor || color};
    }
`
export const ScreenTitle = styled.h4<StyleProps>`
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : 'auto'};
    font-size: ${({textSize}) => textSize || 1.4}rem;
    color: ${({color}) => color || '#000000'};
    font-weight: ${({fontWeight}) => fontWeight || 400};
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    padding-top: ${({topPadding}) => topPadding || 0}rem;
    padding-bottom: ${({bottomPadding}) => bottomPadding || 0}rem;
    padding-left: ${({leftPadding}) => leftPadding || 0}rem;
    padding-right: ${({rightPadding}) => rightPadding || 0}rem;
    text-align: ${({align}) => align || 'left'};
    font-family: ${({fontFamily}) => fontFamily && fontFamily}
`
export const AppLink = styled.a<StyleProps>`
    color: ${({color}) => color || '#000000'};
    text-decoration: ${({decoration}) => decoration || 'underline'};
    font-size: ${({textSize}) => textSize || 1.4}rem;
    font-weight: ${({fontWeight}) => fontWeight || 400};
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin || 0}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    padding-top: ${({topPadding}) => topPadding || 0}rem;
    padding-bottom: ${({bottomPadding}) => bottomPadding || 0}rem;
    padding-left: ${({leftPadding}) => leftPadding || 0}rem;
    padding-right: ${({rightPadding}) => rightPadding || 0}rem;
    text-align: ${({align}) => align || 'left'};
    border-bottom: ${({hasBottomBorder, color}) => hasBottomBorder ? `1px solid ${color || '#6DE7B4'}` : 'none'};
    outline: none;
    cursor: pointer;
    transition: all .2s;
    font-family: ${({fontFamily}) => fontFamily && fontFamily};

    &:hover, &:visited {
        outline: none;
        color: ${({color, hoverColor}) => hoverColor || color};
    }

    &:hover {
        color: ${({color, hoverColor}) => hoverColor || color};
        border-bottom: ${({hasBottomBorder, hoverColor, color}) => hasBottomBorder ? `1px solid ${hoverColor || color}` : 'none'};
        text-decoration: ${({decoration}) => decoration || 'underline'};
        outline: none
    }
`
export const AppLabel = styled.label<StyleProps>`
    color: ${({color}) => color || '#000000'};
    text-decoration: ${({decoration}) => decoration || 'none'};
    font-size: ${({textSize}) => textSize || 1.4}rem;
    font-weight: ${({fontWeight}) => fontWeight || 400};
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    text-align: ${({align}) => align || 'left'};
    font-family: ${({fontFamily}) => fontFamily && fontFamily};
    outline: none;
    cursor: pointer;
    transition: all .2s;

    &:hover, &:visited {
        outline: none;
    }

    &:hover {
        color: ${({color, hoverColor}) => hoverColor || color};
    }
`
export const Icon = styled.img<StyleProps>`
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    width: ${({width}) => `${width}rem` || 'auto'};
    min-width: ${({minWidth}) => `${minWidth}%` || 'auto'};
    max-width: 100%;
    height: 100%;

    @media (max-width: 600px) {
        transform: ${({noResize}) => noResize ? 'scale(1)' : 'scale(0.85)'}
    }
`
export const Circle = styled.div<StyleProps>`
    width: ${({size}) => size || 2}rem;
    height: ${({size}) => size || 2}rem;
    border-radius: ${({radius}) => radius || 50}%;
    background: ${({bgColor}) => bgColor};
    border: ${({borderWidth}) => borderWidth || 1}px solid ${({borderColor}) => borderColor || 'transparent'};
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    display: grid;
    place-items: center;
    transition: all .2s;
    overflow: ${({overflow}) => overflow || 'auto'};
    position: relative;
` 
export const RoundImageContainer = styled.div<StyleProps>`
    width: ${({size}) => size || 2}rem;
    height: ${({size}) => size || 2}rem;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({bgColor}) => bgColor || 'transparent'};
    border: 1px solid ${({borderColor}) => borderColor || 'transparent'};
    margin-top: ${({topMargin}) => topMargin || 0}rem;
    margin-bottom: ${({bottomMargin}) => bottomMargin}rem;
    margin-left: ${({leftMargin}) => leftMargin || 0}rem;
    margin-right: ${({rightMargin}) => rightMargin || 0}rem;
    position: relative;

    img {
        min-width: ${({isMaxWidth}) => isMaxWidth ? '100%' : 'auto'};
        max-width: ${({isMaxWidth}) => isMaxWidth ? '100%' : 'auto'};
    }
`
export const AbsoluteContainer = styled.div<StyleProps>`
    position: absolute;
    top: ${({top, tSizeUnit}) => tSizeUnit && top ? `${top}${tSizeUnit}` : top ? `${top}rem` : 'none'};
    right: ${({right, rSizeUnit}) => rSizeUnit && right ? `${right}${rSizeUnit}` : right ? `${right}rem` : 'none'};
    left: ${({left, lSizeUnit}) => lSizeUnit && left ? `${left}${lSizeUnit}` : left ? `${left}rem` : 'none'};
    bottom: ${({bottom, bSizeUnit}) => bSizeUnit && bottom ? `${bottom}${bSizeUnit}` : bottom ? `${bottom}rem` : 'none'};
    background: ${({bgColor}) => bgColor || 'transparent'};
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : 'auto'};
    height: ${({height}) => height === 'full' ? '100%' : height ? `${height}rem`: 'auto'};
    border-radius: ${({radius}) => radius || 0}rem;
    z-index: ${({zIndex}) => zIndex || 1};
    transition: all 0.2s;
`
export const FixedContainer = styled.div<StyleProps>`
    position: fixed;
    top: ${({top, tSizeUnit}) => tSizeUnit && top ? `${top}${tSizeUnit}` : top ? `${top}rem` : 'none'};
    right: ${({right, rSizeUnit}) => rSizeUnit && right ? `${right}${rSizeUnit}` : right ? `${right}rem` : 'none'};
    left: ${({left, lSizeUnit}) => lSizeUnit && left ? `${left}${lSizeUnit}` : left ? `${left}rem` : 'none'};
    bottom: ${({bottom, bSizeUnit}) => bSizeUnit && bottom ? `${bottom}${bSizeUnit}` : bottom ? `${bottom}rem` : 'none'};
    background: ${({bgColor}) => bgColor || 'transparent'};
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : 'auto'};
    height: ${({height}) => height === 'full' ? '100%' : height ? `${height}rem`: 'auto'};
    border-radius: ${({radius}) => radius || 0}rem;
    z-index: ${({zIndex}) => zIndex || 1};
    transition: all 0.2s;
    padding-top: ${({topPadding}) => topPadding || 0}rem;
    padding-bottom: ${({bottomPadding}) => bottomPadding || 0}rem;
    padding-left: ${({leftPadding}) => leftPadding || 0}rem;
    padding-right: ${({rightPadding}) => rightPadding || 0}rem;
`