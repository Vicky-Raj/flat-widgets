import React from "react";
interface ButtonTypes {
    buttonVarinat: "normal" | "outline";
    buttonShape: "normal" | "round";
    buttonSize: "small" | "medium" | "large" | number;
    textColor: string;
    buttonColor: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children: React.ReactNode;
    elevation: number;
    elevationColor: string;
    feedBack: "normal" | "ripple";
    feedBackColor: string;
}
declare const _default: (props: ButtonTypes) => JSX.Element;
export default _default;
//# sourceMappingURL=index.d.ts.map