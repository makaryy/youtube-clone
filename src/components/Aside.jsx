import { useState, useEffect } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import AsideButton from "./AsideButton";

const Aside = () => {
    const [open, setOpen] = useState(true);

    const [openSubscriptions, setOpenSubscriptions] = useState(false);

    const subscriptions = [
        {
            name: "Judith Ross",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Richard Ward",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Nicholas Parker",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Martha Rivera",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Christina Gray",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Jean Lewis",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Kevin Wilson",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Helen Clark",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Donna Hernandez",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Wanda Watson",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Bruce Evans",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Patrick Torres",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Albert Reed",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Thomas Morgan",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Emily Lopez",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Justin Henderson",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Steve Adams",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Frank Simmons",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "David Brown",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Bobby Mitchell",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Todd Perez",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Carl King",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Tina Robinson",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Fred Baker",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
            name: "Joseph Griffin",
            avatar: `https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`,
        },
    ];
    return open ? (
        <aside className=" bg-menu w-60 h-screen flex flex-col py-2">
            <div className="bg-menu w-60 flex px-4 py-2 max-h-11">
                <button className="mx-2 m-1 h-5 w-5">
                    <img src="/icons/menu.svg" className="w-5 h-5" alt="" />
                </button>
                <button className=" mx-3">
                    <img src="/icons/youtube-logo.svg" alt="" className="w-24 h-5" />
                </button>
            </div>
            <Scrollbars
                className="group"
                renderThumbVertical={() => (
                    <div className=" bg-neutral-400 rounded-full opacity-0 group-hover:opacity-100"></div>
                )}
            >
                <div className="py-2 flex flex-col pr-3">
                    <AsideButton src="/icons/home.svg" label="Home" />
                    <AsideButton src="/icons/compass.svg" label="Explore" />
                    <AsideButton src="/icons/shorts.svg" label="Shorts" />
                    <AsideButton src="/icons/subscriptions.svg" label="Subscriptions" />
                    <hr className="border-neutral-700 my-3 mr-3" />
                    <AsideButton src="/icons/library.svg" label="Library" />
                    <AsideButton src="/icons/history.svg" label="History" />
                    <AsideButton src="/icons/your-videos.svg" label="Your Videos" />
                    <AsideButton src="/icons/watch-later.svg" label="Watch Later" />
                    <AsideButton src="/icons/like.svg" label="Liked Videos" />
                    <AsideButton src="/icons/favorites.svg" label="Favorites" />
                    <hr className="border-neutral-700 my-3 mr-3" />
                    <p className="w-full px-4 pt-1 pb-2 text-neutral-400">SUBSCRIPTIONS</p>
                    {subscriptions.map((sub, index) => {
                        return openSubscriptions ? (
                            <AsideButton
                                key={index}
                                src={sub.avatar}
                                label={sub.name}
                                avatar={true}
                            />
                        ) : (
                            index < 8 && (
                                <AsideButton src={sub.avatar} label={sub.name} avatar={true} />
                            )
                        );
                    })}
                    {openSubscriptions ? (
                        <AsideButton
                            src="/icons/up.svg"
                            label="Show less"
                            onClick={() => setOpenSubscriptions(false)}
                        />
                    ) : (
                        <AsideButton
                            src="/icons/down.svg"
                            label={`Show ${subscriptions.length - 8} more`}
                            onClick={() => setOpenSubscriptions(true)}
                        />
                    )}
                    <hr className="border-neutral-700 my-3 mr-3" />
                    <p className="w-full px-4 pt-1 pb-2 text-neutral-400">MORE FROM YOUTUBE</p>
                    <AsideButton src="/icons/youtube.svg" label="YouTube Premium" />
                    <AsideButton src="/icons/movies.svg" label="Movies" />
                    <AsideButton src="/icons/gaming.svg" label="Gaming" />
                    <AsideButton src="/icons/live.svg" label="Live" />
                    <AsideButton src="/icons/sports.svg" label="Sports" />
                    <hr className="border-neutral-700 my-3 mr-3" />
                    <AsideButton src="/icons/settings.svg" label="Settings" />
                    <AsideButton src="/icons/report-history.svg" label="Report history" />
                    <AsideButton src="/icons/help.svg" label="Help" />
                    <AsideButton src="/icons/feedback.svg" label="Send Feedback" />
                    <hr className="border-neutral-700 my-3 mr-3" />
                    <div className="px-5 text-neutral-400 text-xs font-semibold ml-1">
                        <div className="flex flex-wrap justify-left gap-x-3 py-2 mr-5">
                            <a href="">About</a>
                            <a href="">Press</a>
                            <a href="">Copyright</a>
                            <a href="">Contact us</a>
                            <a href="">Creators</a>
                            <a href="">Advertise</a>
                            <a href="">Developers</a>
                        </div>
                        <div className="flex flex-wrap justify-left gap-x-3 py-2 mr-5">
                            <a href="">Terms</a>
                            <a href="">Privacy</a>
                            <a href="">Policy &amp; Safety</a>
                            <a href="">How YouTube works</a>
                            <a href="">Test new features</a>
                        </div>
                        <div className="flex justify-left py-2 text-xs font-light">
                            © 2022 Makary Pagacz
                        </div>
                    </div>
                </div>
            </Scrollbars>
        </aside>
    ) : (
        <div></div>
    );
};

export default Aside;
