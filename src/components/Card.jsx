import { useEffect } from "react";

const Card = ({ thumbnailUrl, title, creator, views, uploadedAt }) => {
    useEffect(() => {
        console.log();
    }, []);
    return (
        <div className="h-fit flex flex-col mb-4 cursor-pointer">
            <img src={thumbnailUrl} alt="" className="w-full max-h-44 object-cover mb-1" />
            <div className="flex flex-row justify-between">
                <div className="flex flex-row items-start">
                    <button className=" mt-2 mr-2 min-w-fit">
                        <img
                            src={`https://picsum.photos/32?random=${Math.floor(
                                Math.random() * 1000
                            )}`}
                            alt=""
                            className="w-8 h-8 rounded-full"
                        />
                    </button>

                    <div>
                        <p className="font-semibold text-sm text-white pt-2 pb-1 tracking-wide">
                            {title}
                        </p>
                        <p className="font-thin text-xs text-neutral-400 py-1">
                            {creator.name} &nbsp;
                            {creator.verified ? (
                                <img src="/icons/verified.svg" alt="" className="w-3 inline" />
                            ) : (
                                ""
                            )}
                        </p>
                        <p className="font-thin text-xs text-neutral-400 ">{`${
                            views > 1100000
                                ? `${Math.floor(views / 100000) / 10}M views`
                                : views > 1000000
                                ? `${Math.floor(views / 1000000)}M views`
                                : views > 10000
                                ? `${Math.floor(views / 10000)}K views`
                                : views > 1000
                                ? `${Math.floor(views / 100) / 10}K views`
                                : `${views} views`
                        } • ${uploadedAt}`}</p>
                    </div>
                </div>
                <div className="flex min-w-fit">
                    <button className="my-1 flex items-start justify-end">
                        <img src="/icons/more.svg" alt="" className=" w-8 -mr-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
