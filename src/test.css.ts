import {createThemeContract, createVar, style, styleVariants} from "@vanilla-extract/css";

export const dynamicVar = createVar();

export const dynamicStyle = style({
    color: dynamicVar,
    transition: '0.4s all'
})