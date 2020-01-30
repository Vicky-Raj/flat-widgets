"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importStar(require("styled-components"));
const react_1 = __importDefault(require("react"));
const Ripple_1 = __importDefault(require("../Ripple"));
const Button = styled_components_1.default.button `
font-weight:500;
cursor:pointer;
outline:none;
border:none;
position:relative;
overflow:hidden;
letter-spacing:1.3px;
border-radius:3px;
transition:all 0.2s ease-out;
font-size:${props => {
    if (props.buttonSize === "small")
        return "0.7rem";
    if (props.buttonSize === "medium")
        return "0.8rem";
    if (props.buttonSize === "large")
        return "1rem";
    if (typeof props.buttonSize === "number")
        return `${0.8 * props.buttonSize}rem`;
    return "0.8rem";
}};
padding:${props => {
    if (props.buttonSize === "small")
        return "0.5rem 1rem";
    if (props.buttonSize === "medium")
        return "0.7rem 1.2rem";
    if (props.buttonSize === "large")
        return "1rem 1.5rem";
    if (typeof props.buttonSize === "number")
        return `${0.7 * props.buttonSize}rem ${1.2 * props.buttonSize}rem`;
    return "0.7rem 1.2rem";
}};
color:${props => props.textColor ? props.textColor : "#fff"};
background:${props => props.buttonColor ? props.buttonColor : "dodgerblue"};
${props => {
    if (props.buttonShape === "round")
        return styled_components_1.css `
    border-radius:100px;
    `;
}}
${props => {
    if (props.buttonVarinat === "outline")
        return styled_components_1.css `
    border: 2px solid ${props.buttonColor ? props.buttonColor : "dodgerblue"};
    color:${props.buttonColor ? props.buttonColor : "dodgerblue"};
    background:transparent;
    :hover{
        color:#fff;
        background:${props.buttonColor ? props.buttonColor : "dodgerblue"};
    }
    `;
}}
${props => {
    if (props.elevation && typeof props.elevation === "number")
        return styled_components_1.css `
    box-shadow:0px 
    ${5 * props.elevation}px 
    ${10 * props.elevation}px 
    ${props.elevationColor ? props.elevationColor : "rgba(0,0,0,0.4)"}; 
    `;
}}
${props => {
    if (!props.feedBack || props.feedBack !== "ripple")
        return styled_components_1.css `
    :hover{
        filter:brightness(85%);
    }
    :active{
        filter:brightness(70%)
    }
    `;
    else
        return styled_components_1.css `
    :hover{
        filter:brightness(90%);
    }
    `;
}}
`;
exports.default = (props) => {
    if (props.feedBack && props.feedBack === "ripple") {
        const RippleButton = Ripple_1.default(Button);
        return (react_1.default.createElement(RippleButton, Object.assign({}, props)));
    }
    return (react_1.default.createElement(Button, Object.assign({}, props), props.children));
};
//# sourceMappingURL=index.js.map