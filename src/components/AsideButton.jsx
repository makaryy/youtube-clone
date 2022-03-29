import { useState } from "react";

const AsideButton = ({ src, label, avatar, onClick, asideOpen }) => {
    const [animate, setAnimate] = useState(false);
    return asideOpen ? (
        <button
            className={
                animate
                    ? "flex flex-row items-center animate-button-click w-full px-4 py-2 hover:bg-menu-active"
                    : "flex flex-row items-center w-full px-4 py-2 hover:bg-menu-active"
            }
            onClick={() => {
                setAnimate(true);
                onClick && onClick();
            }}
            onAnimationEnd={() => setAnimate(false)}
        >
            <img
                src={src}
                alt=""
                className={avatar ? "mx-2 h-6 w-6 rounded-full" : "mx-2 h-6 w-6"}
            />
            <p className="mx-3 text-white font-normal text-sm">{label}</p>
        </button>
    ) : (
        <button
            className={
                animate
                    ? "flex flex-col items-center animate-button-click w-full py-3 mb-1 hover:bg-menu-active"
                    : "flex flex-col items-center w-full py-3 my-1 hover:bg-menu-active"
            }
            onClick={() => {
                setAnimate(true);
                onClick && onClick();
            }}
            onAnimationEnd={() => setAnimate(false)}
        >
            <img
                src={src}
                alt=""
                className={avatar ? "mx-2 h-6 w-6 rounded-full" : "mx-2 h-6 w-6"}
            />
            <p className="text-white font-extralight text-2xs m-1">{label}</p>
        </button>
    );
};

export default AsideButton;
