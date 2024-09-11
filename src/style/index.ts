import styled from 'styled-components'
import { StyleProps } from '../model'

export const Button = styled.button<StyleProps>`
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}px` : '200px'};
    height: ${({height}) => height || 45}px;
    background: ${({$bgColor}) => $bgColor || '#0D968F'};
    border-radius: ${({radius}) => radius || 8}px;
    outline: none;
    border: none;
    border: ${({$borderColor}) => $borderColor ? `1px solid ${$borderColor}` : 'none'};
    transition: all .2s;
    font-size: ${({$titleSize}) => $titleSize || 14}px;
    color: ${({color}) => color || '#ffffff'};
    font-weight: ${({fontWeight}) => fontWeight || 700};
    margin-right: ${({$rightMargin}) => $rightMargin || 0}px;
    margin-left: ${({$leftMargin}) => $leftMargin || 0}px;
    margin-top: ${({$topMargin}) => $topMargin || '0'}px;
    margin-bottom: ${({$bottomMargin}) => $bottomMargin || '0'}px;
    padding: 0 ${({padding}) => padding || 0}px;
    padding-top: ${({topPadding}) => topPadding || 0}px;
    padding-bottom: ${({bottomPadding}) => bottomPadding || 0}px;
    padding-left: ${({leftPadding, padding}) => leftPadding ? leftPadding : padding ? padding : 0}px;
    padding-right: ${({rightPadding, padding}) => rightPadding ? rightPadding : padding ? padding : 0}px;
    box-shadow: ${({shadow}) => shadow || '0px 1px 2px rgba(16, 24, 40, 0.05)'};

    &:hover, &:focus {
        background: ${({$hoverBgColor, $bgColor}) => $hoverBgColor || $bgColor};
        color: ${({$hoverColor, color}) => $hoverColor ? $hoverColor : color ? color : '#00071F'};
        outline: none
    }
`

export const CustomContainer = styled.div<StyleProps>`
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}px` : '100%'};
    height: ${({height, hUnit}) => hUnit && height ? `${height}${hUnit}` : height ? `${height}px` : 'auto'};
    margin-top: ${({$topMargin}) => $topMargin || 0}px;
    margin-bottom: ${({$bottomMargin}) => $bottomMargin}px;
    margin-left: ${({$leftMargin}) => $leftMargin || 0}px;
    margin-right: ${({$rightMargin}) => $rightMargin || 0}px;
    padding-top: ${({topPadding, padding}) => topPadding || padding || 0}px;
    padding-bottom: ${({bottomPadding, padding}) => bottomPadding || padding || 0}px;
    padding-left: ${({leftPadding, padding}) => leftPadding || padding || 0}px;
    padding-right: ${({rightPadding, padding}) => rightPadding || padding || 0}px;
    background-color: ${({$bgColor}) => $bgColor || 'transparent'};
    border-radius: ${({radius, customRadius}) => customRadius ? customRadius : radius ? `${radius}px` : '0px'};
    border: ${({$borderColor}) => $borderColor ? `1px solid ${$borderColor}` : 'none'};
    overflow: ${({overflow}) => overflow || 'hidden'};
    position: relative;
    box-shadow: ${({shadow}) => shadow || 'none'};
    min-height: ${({minHeight, mnHUnit}) => mnHUnit && minHeight ? `${minHeight}${mnHUnit}` : minHeight ? `${minHeight}px` : 'none'};
    max-height: ${({maxHeight, mxHUnit}) => mxHUnit && maxHeight ? `${maxHeight}${mxHUnit}` : maxHeight ? `${maxHeight}px` : 'none'};
    min-width: ${({minWidth, mnWUnit}) => mnWUnit && minWidth ? `${minWidth}${mnWUnit}` : minWidth ? `${minWidth}px` : 'none'};
    max-width: ${({maxWidth, mxWUnit}) => mxWUnit && maxWidth ? `${maxWidth}${mxWUnit}` : maxWidth ? `${maxWidth}px` : 'none'};
    transition: all 0.2s;
    box-sizing: border-box;
    
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none
    }
`
export const FlexRow = styled.div<StyleProps>`
    display: flex;
    flex-direction: row;
    justify-content: ${({$justifyContent}) => $justifyContent || 'flex-start'};
    align-items: ${({$alignItems}) => $alignItems || 'center'};
    gap: ${({gap, sizeUnit}) => sizeUnit && gap ? `${gap}${sizeUnit}` : gap ? `${gap}px` : '0'};
    flex-wrap: ${({wrap}) => wrap || 'nowrap'};
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}px` : '100%'};
    height: ${({height, hUnit}) => hUnit && height ? `${height}${hUnit}` : height ? `${height}px` : 'auto'};
    margin-top: ${({$topMargin}) => $topMargin || 0}px;
    margin-bottom: ${({$bottomMargin}) => $bottomMargin}px;
    margin-left: ${({$leftMargin}) => $leftMargin || 0}px;
    margin-right: ${({$rightMargin}) => $rightMargin || 0}px;
    padding-top: ${({topPadding, padding}) => topPadding || padding || 0}px;
    padding-bottom: ${({bottomPadding, padding}) => bottomPadding || padding || 0}px;
    padding-left: ${({leftPadding, padding}) => leftPadding || padding || 0}px;
    padding-right: ${({rightPadding, padding}) => rightPadding || padding || 0}px;
    background-color: ${({$bgColor}) => $bgColor || 'transparent'};
    border-radius: ${({radius}) => radius || 0}px;
    border: 1px solid ${({$borderColor}) => $borderColor || 'transparent'};
    box-shadow: ${({shadow}) => shadow || 'none'};
    min-height: ${({minHeight, mnHUnit}) => mnHUnit && minHeight ? `${minHeight}${mnHUnit}` : minHeight ? `${minHeight}px` : 'none'};
    max-height: ${({maxHeight, mxHUnit}) => mxHUnit && maxHeight ? `${maxHeight}${mxHUnit}` : maxHeight ? `${maxHeight}px` : 'none'};
    min-width: ${({minWidth, mnWUnit}) => mnWUnit && minWidth ? `${minWidth}${mnWUnit}` : minWidth ? `${minWidth}px` : 'none'};
    max-width: ${({maxWidth, mxWUnit}) => mxWUnit && maxWidth ? `${maxWidth}${mxWUnit}` : maxWidth ? `${maxWidth}px` : 'none'};
    z-index: ${({zIndex}) => zIndex || 1};
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
`
export const AppText = styled.p<StyleProps>`
    font-size: ${({textSize}) => textSize || 14}px;
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : 'auto'};
    color: ${({color}) => color || '#000000'};
    font-weight: ${({fontWeight}) => fontWeight || 400};
    margin-top: ${({$topMargin}) => $topMargin || 0}px;
    margin-bottom: ${({$bottomMargin}) => $bottomMargin || 0}px;
    margin-left: ${({$leftMargin}) => $leftMargin || 0}px;
    margin-right: ${({$rightMargin}) => $rightMargin || 0}px;
    padding-top: ${({topPadding}) => topPadding || 0}px;
    padding-bottom: ${({bottomPadding}) => bottomPadding || 0}px;
    padding-left: ${({leftPadding}) => leftPadding || 0}px;
    padding-right: ${({rightPadding}) => rightPadding || 0}px;
    text-align: ${({align}) => align || 'left'};
    font-family: ${({fontFamily}) => fontFamily && fontFamily};
    word-wrap: break-word;
    cursor: ${({cursor}) => cursor || 'auto'};
    overflow-wrap: ${({textWrap}) => textWrap || 'anywhere'};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

    &:hover {
        color: ${({color, $hoverColor}) => $hoverColor || color};
    }
`
export const AppSpan = styled.span<StyleProps>`
    width: ${({width, sizeUnit}) => sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : 'auto'};
    font-size: ${({textSize}) => textSize || 14}px;
    color: ${({color}) => color || '#000000'};
    font-weight: ${({fontWeight}) => fontWeight || 400};
    margin-top: ${({$topMargin}) => $topMargin || 0}px;
    margin-bottom: ${({$bottomMargin}) => $bottomMargin || 0}px;
    margin-left: ${({$leftMargin}) => $leftMargin || 0}px;
    margin-right: ${({$rightMargin}) => $rightMargin || 0}px;
    padding-top: ${({topPadding}) => topPadding || 0}px;
    padding-bottom: ${({bottomPadding}) => bottomPadding || 0}px;
    padding-left: ${({leftPadding}) => leftPadding || 0}px;
    padding-right: ${({rightPadding}) => rightPadding || 0}px;
    text-align: ${({align}) => align || 'left'};
    font-family: ${({fontFamily}) => fontFamily && fontFamily};
    cursor: ${({cursor}) => cursor || 'auto'};
    word-wrap: break-word;
    transition: all 0.2s;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

    &:hover {
        color: ${({color, $hoverColor}) => $hoverColor || color};
    }
`
export const Circle = styled.div<StyleProps>`
    width: ${({size}) => size || 20}px;
    height: ${({size}) => size || 20}px;
    border-radius: ${({radius}) => radius || 50}%;
    background: ${({$bgColor}) => $bgColor};
    border: ${({$borderWidth}) => $borderWidth || 1}px solid ${({$borderColor}) => $borderColor || 'transparent'};
    margin-top: ${({$topMargin}) => $topMargin || 0}px;
    margin-bottom: ${({$bottomMargin}) => $bottomMargin}px;
    margin-left: ${({$leftMargin}) => $leftMargin || 0}px;
    margin-right: ${({$rightMargin}) => $rightMargin || 0}px;
    display: grid;
    place-items: center;
    transition: all .2s;
    box-sizing: border-box;
    overflow: ${({overflow}) => overflow || 'auto'};
    position: relative;

    svg {
        font-size: 25px;
        color: #15B79E
    }

    @media (max-width: 360px) {
        width: 35px;
        height: 35px;
        overflow: hidden;

        svg {
            font-size: 18px;
        }
    }
` 