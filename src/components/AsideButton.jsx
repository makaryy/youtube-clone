import { useState } from "react";

const AsideButton = ({ src, label, avatar, onClick }) => {
    const [animate, setAnimate] = useState(false);
    return (
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
    );
};

export default AsideButton;
