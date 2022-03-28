import { useState } from "react";

const ToolbarButton = ({ src, style }) => {
    const [animate, setAnimate] = useState(false);
    return (
        <button
            className={
                animate
                    ? "mx-2 m-1 rounded-full w-8 h-8 flex justify-center items-center animate-button-click"
                    : "mx-2 m-1 rounded-full w-8 h-8 flex justify-center items-center"
            }
            onClick={() => {
                setAnimate(true);
            }}
            onAnimationEnd={() => setAnimate(false)}
            style={style}
        >
            <img src={src} alt="" className="w-6 h-6" />
        </button>
    );
};

export default ToolbarButton;
