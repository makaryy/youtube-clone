import React from "react";
import Aside from "./components/Aside";
import CategoryBar from "./components/CategoryBar";
import Toolbar from "./components/Toolbar";

const App = () => {
    return (
        <div className="font-yt min-h-screen w-screen m-0 p-0 flex-row flex bg-bg">
            <Aside />
            <div className="flex flex-col grow-0 overflow-hidden">
                <Toolbar />
                <CategoryBar />
            </div>
        </div>
    );
};

export default App;
