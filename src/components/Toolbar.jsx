import { useState } from "react";
import ToolbarButton from "./ToolbarButton";

const Toolbar = ({ asideOpen }) => {
    const [search, setSearch] = useState("");
    const [showIcon, setShowIcon] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
        setSearch("");
    };

    return (
        <div className="py-1 bg-menu flex flex-row w-full h-fit items-center border-b border-neutral-700 max-h-min opacity-[.98]">
            {asideOpen ? (
                <div
                    className="
            grow flex"
                ></div>
            ) : (
                <div className={`flex grow mr-8 py-2 ${asideOpen && "opacity-0"}`}>
                    <button className={`my-1 ${asideOpen && "cursor-default"}`}>
                        <img src="/icons/youtube-logo.svg" alt="" className="w-24 h-6" />
                    </button>
                </div>
            )}
            {/* <div className="flex justify-between items-center grow ml-8"> */}
            <div className="flex flex-row h-10 min-w-min max-w-2xl grow-4">
                <form onSubmit={(e) => handleSubmit(e)} className="grow flex flex-row">
                    {!showIcon && <div className="w-6 h-6 mx-2"></div>}
                    <div className="grow bg-search-bar border-search-button border rounded-l-sm text-white flex flex-row items-center">
                        {showIcon && (
                            <img src="/icons/search.svg" alt="" className="w-5 h-5 mx-2" />
                        )}
                        <input
                            type="text"
                            name="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search"
                            className={
                                showIcon
                                    ? "bg-search-bar grow px-2 outline-none"
                                    : "bg-search-bar grow px-2 outline-none"
                            }
                            onFocus={() => setShowIcon(true)}
                            onBlur={() => setShowIcon(false)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="rounded-r-sm w-16 flex justify-center items-center bg-search-button"
                    >
                        <img src="/icons/search.svg" alt="" />
                    </button>
                    <ToolbarButton
                        src="/icons/microphone.svg"
                        style={{ backgroundColor: "rgb(18,18,18)" }}
                    />
                </form>
            </div>
            <div className="flex justify-end items-center grow">
                <ToolbarButton src="/icons/new-video.svg" alt="" className="w-6 h-6" />
                <ToolbarButton src="/icons/more-apps.svg" alt="" className="w-6 h-6" />
                <ToolbarButton src="/icons/bell.svg" alt="" className="w-6 h-6" />
                <button className="px-4 py-2">
                    <img
                        src={`https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`}
                        alt=""
                        className="w-8 h-8 mx-2 rounded-full"
                    />
                </button>
            </div>
            {/* </div> */}
        </div>
    );
};

export default Toolbar;
