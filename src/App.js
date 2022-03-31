import { useState, useEffect } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import Aside from "./components/Aside";
import CategoryBar from "./components/CategoryBar";
import Home from "./components/Home";
import SmallScreenAside from "./components/SmallScreenAside";
import Toolbar from "./components/Toolbar";

const App = () => {
    const [asideOpen, setAsideOpen] = useState(window.matchMedia("(min-width: 1328px)").matches);
    const [smallScreen, setSmallScreen] = useState(
        window.matchMedia("(max-width: 1328px)").matches
    );

    useEffect(() => {
        window
            .matchMedia("(min-width: 1328px)")
            .addEventListener("change", (e) => setAsideOpen(e.matches));
        window
            .matchMedia("(max-width: 1328px)")
            .addEventListener("change", (e) => setSmallScreen(e.matches));
    }, []);

    return (
        <div className="font-yt min-h-screen w-screen m-0 p-0 pr-1 flex-row flex bg-bg">
            {smallScreen ? (
                <>
                    <SmallScreenAside asideOpen={asideOpen} setAsideOpen={setAsideOpen} />
                    <Aside asideOpen={false} setAsideOpen={setAsideOpen} />
                </>
            ) : (
                <Aside asideOpen={asideOpen} setAsideOpen={setAsideOpen} />
            )}
            <Scrollbars
                autoHeight
                autoHeightMin={"100vh"}
                renderThumbVertical={() => <div className=" bg-neutral-400 rounded-full w-2"></div>}
            >
                <div className="flex flex-col grow-0 mr-3">
                    <div className="sticky top-0 flex flex-col">
                        <Toolbar asideOpen={smallScreen ? false : asideOpen} />
                        <CategoryBar />
                    </div>
                    <Home />
                </div>
            </Scrollbars>
        </div>
    );
};

export default App;
