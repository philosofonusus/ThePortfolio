import Typed from "typed.js/src/typed";

export const TypedConf = (str, el) => {
    function type( strings ) {
        return new Typed(el, {
            stringsElement: str,
            typeSpeed: 100,
            backSpeed: 20,
            loop: true,
            loopCount: Infinity
        });
    }
    return {type}
}