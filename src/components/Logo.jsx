import { useState } from "react";

const Logo = ({ asideOpen, setAsideOpen }) => {
    const [animate, setAnimate] = useState(false);
    return asideOpen ? (
        <div className="bg-menu w-60 flex items-center px-4 pb-2 pt-1 max-h-11">
            <button
                className={
                    animate
                        ? "mx-1 h-8 w-8 rounded-full flex justify-center items-center animate-button-click"
                        : "mx-1 h-8 w-8 flex justify-center items-center"
                }
                onClick={() => setAnimate(true)}
                onAnimationEnd={() => {
                    setAnimate(false);
                    setAsideOpen(!asideOpen);
                }}
            >
                <img src="/icons/menu.svg" className="w-6 h-6" alt="" />
            </button>

            <button className="mx-4">
                <img src="/icons/youtube-logo.svg" alt="" className="w-24 h-6" />
            </button>
        </div>
    ) : (
        <div className="bg-menu flex justify-center items-center px-4 pb-2 pt-1 overflow-x-visible">
            <button
                className={
                    animate
                        ? "mx-1  h-8 w-8 rounded-full flex justify-center items-center animate-button-click"
                        : "mx-1  h-8 w-8 flex justify-center items-center"
                }
                onClick={() => setAnimate(true)}
                onAnimationEnd={() => {
                    setAnimate(false);
                    setAsideOpen(!asideOpen);
                }}
            >
                <img src="/icons/menu.svg" className="w-6 h-6" alt="" />
            </button>
        </div>
    );
};

export default Logo;
