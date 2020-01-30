import styled,{css} from "styled-components";
import React from "react";
import withRipple from "../Ripple";

interface ButtonTypes{
    buttonVarinat: "normal" | "outline",
    buttonShape: "normal" | "round",
    buttonSize: "small" | "medium" | "large" | number,
    textColor:string,
    buttonColor:string,
    onClick:(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>void,
    children:React.ReactNode,
    elevation:number,
    elevationColor:string,
    feedBack:"normal" | "ripple"
    feedBackColor:string
}

const Button = styled.button<ButtonTypes>`
font-weight:500;
cursor:pointer;
outline:none;
border:none;
position:relative;
overflow:hidden;
letter-spacing:1.3px;
border-radius:3px;
transition:all 0.2s ease-out;
font-size:${props=>{
    if(props.buttonSize === "small") return "0.7rem";
    if(props.buttonSize === "medium") return "0.8rem";
    if(props.buttonSize === "large") return "1rem";
    if(typeof props.buttonSize === "number") return `${0.8 * props.buttonSize}rem`;
    return "0.8rem";
}};
padding:${props=>{
    if(props.buttonSize === "small") return "0.5rem 1rem";
    if(props.buttonSize === "medium") return "0.7rem 1.2rem";
    if(props.buttonSize === "large") return "1rem 1.5rem";
    if(typeof props.buttonSize === "number") return `${0.7 * props.buttonSize}rem ${1.2 * props.buttonSize}rem`;
    return "0.7rem 1.2rem";
}};
color:${props=>props.textColor ? props.textColor : "#fff"};
background:${props=>props.buttonColor ? props.buttonColor : "dodgerblue"};
${props=>{
    if(props.buttonShape === "round")
    return css`
    border-radius:100px;
    `
}}
${props=>{
    if(props.buttonVarinat === "outline")
    return css`
    border: 2px solid ${props.buttonColor ? props.buttonColor : "dodgerblue"};
    color:${props.buttonColor ? props.buttonColor : "dodgerblue"};
    background:transparent;
    :hover{
        color:#fff;
        background:${props.buttonColor ? props.buttonColor : "dodgerblue"};
    }
    `
}}
${props=>{
    if(props.elevation && typeof props.elevation === "number")
    return css`
    box-shadow:0px 
    ${5 * props.elevation}px 
    ${10 * props.elevation}px 
    ${props.elevationColor ? props.elevationColor : "rgba(0,0,0,0.4)"}; 
    `
}}
${props=>{
    if(!props.feedBack ||  props.feedBack !== "ripple")
    return css`
    :hover{
        filter:brightness(85%);
    }
    :active{
        filter:brightness(70%)
    }
    `
    else
    return css`
    :hover{
        filter:brightness(90%);
    }
    `
}}
`
export default (props:ButtonTypes)=>{
    if(props.feedBack && props.feedBack === "ripple"){
        const RippleButton = withRipple(Button);
        return (
            <RippleButton {...props} />
        );
    }
    return (
    <Button {...props}>
        {props.children}
    </Button>
    );
}