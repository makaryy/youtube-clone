import React from "react";
import Aside from "./components/Aside";
import Toolbar from "./components/Toolbar";

const App = () => {
    return (
        <div className="font-yt min-h-screen m-0 p-0">
            <Toolbar />
            <div>
                <Aside />
            </div>
        </div>
    );
};

export default App;
