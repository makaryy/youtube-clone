import React from "react";

const CategoryButton = ({ name }) => {
    return (
        <button className="h-8 w-fit rounded-full bg-search-button border border-active hover:bg-active p-2 mx-2 my-1 flex items-center justify-center">
            {name}
        </button>
    );
};

export default CategoryButton;
