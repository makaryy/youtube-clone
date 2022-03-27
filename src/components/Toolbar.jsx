import { useState } from "react";
import ToolbarButton from "./ToolbarButton";
// import searchIcon from "../../public/icons/search.svg";

const Toolbar = () => {
    const [search, setSearch] = useState("");
    const [showIcon, setShowIcon] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
        setSearch("");
    };

    return (
        <div className="py-1 bg-menu flex flex-row w-full h-fit justify-between items-center border-b border-neutral-700 max-h-min">
            <div className="flex px-4 py-2 lg:opacity-0">
                <button className="mx-3 m-1 lg:cursor-default">
                    <img src="/icons/youtube-logo.svg" alt="" className="w-24 h-5" />
                </button>
            </div>

            <div className="flex flex-row h-10 min-w-min max-w-2xl grow">
                <form onSubmit={(e) => handleSubmit(e)} className="grow flex flex-row">
                    {!showIcon && <div className="w-6 h-6 ms-2"></div>}
                    <div className="grow bg-search-bar border-search-button border rounded-l-sm focus:outline focus:outline-1 text-white flex flex-row items-center">
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
                                    ? "bg-search-bar grow p-2 pl-0 outline-none"
                                    : "bg-search-bar grow p-2 outline-none"
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
                    <ToolbarButton src="/icons/microphone.svg" />
                </form>
            </div>
            <div className="flex justify-center items-center">
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
        </div>
    );
};

export default Toolbar;
