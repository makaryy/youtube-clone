import { useState, useEffect } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import Aside from "./components/Aside";
import CategoryBar from "./components/CategoryBar";
import Home from "./components/Home";
import Toolbar from "./components/Toolbar";

const App = () => {
    const [asideOpen, setAsideOpen] = useState(window.matchMedia("(min-width: 1328px)").matches);

    useEffect(() => {
        window
            .matchMedia("(min-width: 1328px)")
            .addEventListener("change", (e) => setAsideOpen(e.matches));
    }, []);

    return (
        <div className="font-yt min-h-screen w-screen m-0 p-0 pr-1 flex-row flex bg-bg">
            <Aside asideOpen={asideOpen} setAsideOpen={setAsideOpen} />
            <Scrollbars
                autoHeight
                autoHeightMin={"100vh"}
                // renderTrackVertical={() => <div className="bg-red-500 rounded-full"></div>}
                renderThumbVertical={() => <div className=" bg-neutral-400 rounded-full w-2"></div>}
            >
                <div className="flex flex-col grow-0 mr-3">
                    <div className="sticky top-0 flex flex-col">
                        <Toolbar asideOpen={asideOpen} />
                        <CategoryBar />
                    </div>
                    <Home />
                </div>
            </Scrollbars>
        </div>
    );
};

export default App;
