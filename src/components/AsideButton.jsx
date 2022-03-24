import React from "react";

const AsideButton = ({ src, label, avatar, onClick }) => {
    return (
        <button
            className="flex flex-row items-center active:animate-button-click w-full px-4 py-2 hover:bg-menu-active"
            onClick={() => onClick()}
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
