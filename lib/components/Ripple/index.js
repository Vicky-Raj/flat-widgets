"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("../../../css/ripple.css");
exports.default = (Element) => {
    return (props) => {
        const ref = react_1.useRef(null);
        react_1.useEffect(() => {
            if (ref && ref.current) {
                const element = ref.current;
                element.addEventListener("click", event => {
                    let rippleElement = document.querySelector("span.ripple");
                    if (!rippleElement) {
                        rippleElement = document.createElement("span");
                    }
                    element.appendChild(rippleElement);
                    const max = Math.max(element.offsetWidth, element.offsetHeight);
                    rippleElement.style.width = rippleElement.style.height = max + "px";
                    const rect = element.getBoundingClientRect();
                    rippleElement.style.left = event.clientX - rect.left - (max / 2) + "px";
                    rippleElement.style.top = event.clientY - rect.top - (max / 2) + "px";
                    rippleElement.classList.add("ripple");
                });
            }
        }, []);
        return (react_1.default.createElement(Element, Object.assign({ ref: ref }, props), props.children));
    };
};
//# sourceMappingURL=index.js.map