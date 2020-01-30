import React,{useEffect,useRef} from "react";
import styled from "styled-components";
import "../../../css/ripple.css"

export default (Element:React.ComponentType)=>{
    return (props:any)=>{
        const ref = useRef<HTMLElement|null>(null);
        useEffect(()=>{
            if(ref && ref.current){
                const element = ref.current;
                element.addEventListener("click",event=>{
                    let rippleElement:any = document.querySelector("span.ripple");
                    if(!rippleElement){
                        rippleElement = document.createElement("span");
                    }
                    element.appendChild(rippleElement);
                    const max = Math.max(element.offsetWidth,element.offsetHeight);
                    rippleElement.style.width = rippleElement.style.height = max + "px";
                    const rect = element.getBoundingClientRect();
                    rippleElement.style.left = event.clientX - rect.left - (max/2) + "px";
                    rippleElement.style.top = event.clientY - rect.top - (max/2) + "px";                      
                    rippleElement.classList.add("ripple");

                })
            }
        },[])
        return(
            <Element ref={ref}  {...props}>
                {props.children}
            </Element>
        );
    }
}