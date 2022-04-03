import { useState, useEffect } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import AsideButton from "./AsideButton";
import Logo from "./Logo";

const SmallScreenAside = ({ asideOpen, setAsideOpen }) => {
    const [openSubscriptions, setOpenSubscriptions] = useState(false);
    const [render, setRender] = useState(asideOpen);
    useEffect(() => {
        asideOpen && setRender(true);
    }, [asideOpen]);

    const onAnimationEnd = () => {
        !asideOpen && setRender(false);
    };

    const subscriptions = [
        "Judith Ross",
        "Richard Ward",
        "Nicholas Parker",
        "Martha Rivera",
        "Christina Gray",
        "Jean Lewis",
        "Kevin Wilson",
        "Helen Clark",
        "Donna Hernandez",
        "Wanda Watson",
        "Bruce Evans",
        "Patrick Torres",
        "Albert Reed",
        "Thomas Morgan",
        "Emily Lopez",
        "Justin Henderson",
        "Steve Adams",
        "Frank Simmons",
        "David Brown",
        "Bobby Mitchell",
        "Todd Perez",
        "Carl King",
        "Tina Robinson",
        "Fred Baker",
        "Joseph Griffin"
    ];
    return (
        render && (
            <>
                <aside
                    className={`bg-menu w-60 h-screen flex flex-col py-2 absolute z-20 ${
                        asideOpen ? "animate-aside-slide-in" : "animate-aside-slide-out"
                    } `}
                    onAnimationEnd={onAnimationEnd}>
                    <Logo asideOpen={asideOpen} setAsideOpen={setAsideOpen} />
                    <Scrollbars
                        className="group"
                        renderThumbVertical={() => <div className=" bg-neutral-400 rounded-full opacity-0 group-hover:opacity-100"></div>}>
                        <div className="py-2 flex flex-col pr-3 my-1">
                            <AsideButton src="/icons/home.svg" label="Home" asideOpen={asideOpen} />
                            <AsideButton src="/icons/compass.svg" label="Explore" asideOpen={asideOpen} />
                            <AsideButton src="/icons/shorts.svg" label="Shorts" asideOpen={asideOpen} />
                            <AsideButton src="/icons/subscriptions.svg" label="Subscriptions" asideOpen={asideOpen} />
                            <hr className="border-neutral-700 my-3" />
                            <AsideButton src="/icons/library.svg" label="Library" asideOpen={asideOpen} />
                            <AsideButton src="/icons/history.svg" label="History" asideOpen={asideOpen} />
                            <AsideButton src="/icons/your-videos.svg" label="Your Videos" asideOpen={asideOpen} />
                            <AsideButton src="/icons/watch-later.svg" label="Watch Later" asideOpen={asideOpen} />
                            <AsideButton src="/icons/like.svg" label="Liked Videos" asideOpen={asideOpen} />
                            <AsideButton src="/icons/favorites.svg" label="Favorites" asideOpen={asideOpen} />
                            <hr className="border-neutral-700 my-3" />
                            <p className="w-full px-4 pt-1 pb-2 text-neutral-400">SUBSCRIPTIONS</p>
                            {subscriptions.map((sub, index) => {
                                return openSubscriptions ? (
                                    <AsideButton
                                        key={index}
                                        src={`https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`}
                                        label={sub.name}
                                        avatar={true}
                                        asideOpen={asideOpen}
                                    />
                                ) : (
                                    index < 8 && (
                                        <AsideButton
                                            key={index}
                                            src={`https://picsum.photos/48?random=${Math.floor(Math.random() * 1000)}`}
                                            label={sub}
                                            avatar={true}
                                            asideOpen={asideOpen}
                                        />
                                    )
                                );
                            })}
                            {openSubscriptions ? (
                                <AsideButton
                                    src="/icons/up.svg"
                                    label="Show less"
                                    onClick={() => setOpenSubscriptions(false)}
                                    asideOpen={asideOpen}
                                />
                            ) : (
                                <AsideButton
                                    src="/icons/down.svg"
                                    label={`Show ${subscriptions.length - 8} more`}
                                    onClick={() => setOpenSubscriptions(true)}
                                    asideOpen={asideOpen}
                                />
                            )}
                            <hr className="border-neutral-700 my-3" />
                            <p className="w-full px-4 pt-1 pb-2 text-neutral-400">MORE FROM YOUTUBE</p>
                            <AsideButton src="/icons/youtube.svg" label="YouTube Premium" asideOpen={asideOpen} />
                            <AsideButton src="/icons/movies.svg" label="Movies" asideOpen={asideOpen} />
                            <AsideButton src="/icons/gaming.svg" label="Gaming" asideOpen={asideOpen} />
                            <AsideButton src="/icons/live.svg" label="Live" asideOpen={asideOpen} />
                            <AsideButton src="/icons/sports.svg" label="Sports" asideOpen={asideOpen} />
                            <hr className="border-neutral-700 my-3" />
                            <AsideButton src="/icons/settings.svg" label="Settings" asideOpen={asideOpen} />
                            <AsideButton src="/icons/report-history.svg" label="Report history" asideOpen={asideOpen} />
                            <AsideButton src="/icons/help.svg" label="Help" asideOpen={asideOpen} />
                            <AsideButton src="/icons/feedback.svg" label="Send Feedback" asideOpen={asideOpen} />
                            <hr className="border-neutral-700 my-3" />
                            <div className="px-5 text-neutral-400 text-xs font-semibold ml-1">
                                <div className="flex flex-wrap justify-left gap-x-3 py-2 mr-5">
                                    <a href="/">About</a>
                                    <a href="/">Press</a>
                                    <a href="/">Copyright</a>
                                    <a href="/">Contact us</a>
                                    <a href="/">Creators</a>
                                    <a href="/">Advertise</a>
                                    <a href="/">Developers</a>
                                </div>
                                <div className="flex flex-wrap justify-left gap-x-3 py-2 mr-2">
                                    <a href="/">Terms</a>
                                    <a href="/">Privacy</a>
                                    <a href="/">Policy &amp; Safety</a>
                                    <a href="/">How YouTube works</a>
                                    <a href="/">Test new features</a>
                                </div>
                                <div className="flex justify-left py-2 text-xs font-light">© 2022 Makary Pagacz</div>
                            </div>
                        </div>
                    </Scrollbars>
                </aside>
                <div className="absolute w-screen h-screen opacity-60 bg-black z-10"></div>
            </>
        )
    );
};

export default SmallScreenAside;
