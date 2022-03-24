import React from "react";

const Toolbar = () => {
    return (
        <div className="">
            <div className="p-4 bg-menu w-60 flex">
                <button className="mx-2 m-1 h-5 w-5">
                    <img src="/icons/menu.svg" className="w-5 h-5" alt="" />
                </button>
                <button className=" mx-3">
                    <img src="/icons/youtube-logo.svg" alt="" className="w-24 h-5" />
                </button>
            </div>
        </div>
    );
};

export default Toolbar;
