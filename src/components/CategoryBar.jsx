import { useRef, useState } from "react";
import CategoryButton from "./CategoryButton";
import useDraggableScroll from "use-draggable-scroll";

const CategoryBar = () => {
    const scrollRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const isScrolledRight = ({ scrollLeft }) => {
        return scrollLeft > 10;
    };
    const isScrolledLeft = ({ scrollLeft, scrollWidth }) => {
        return !(scrollWidth - (scrollLeft + scrollRef.current.clientWidth) < 10);
    };

    const { onMouseDown } = useDraggableScroll(scrollRef);

    const arr = Array(30).fill("haha");
    return (
        <div className="p-2 max-w-full bg-menu flex flex-row h-fit items-center border-b border-neutral-700 max-h-min text-white opacity-[.98] highlight-none">
            {showLeftArrow && (
                <button
                    className="xl:w-28 lg:w-28 md:w-32 sm:w-64 py-3 h-full bg-menu shadow-right relative xl:left-5 xl:-mx-5 lg:left-4 lg:-mx-4 md:left-3 md:-mx-3 flex justify-center items-center"
                    onClick={() => {
                        scrollRef.current.scrollLeft -= 200;
                    }}
                >
                    <img src="/icons/left.svg" alt="" className="w-4 h-4" />
                </button>
            )}
            <div
                ref={scrollRef}
                className="overflow-x-scroll scrollbar-hide scroll-smooth flex"
                onScroll={(e) => {
                    isScrolledLeft(e.currentTarget)
                        ? setShowRightArrow(true)
                        : setShowRightArrow(false);
                    isScrolledRight(e.currentTarget)
                        ? setShowLeftArrow(true)
                        : setShowLeftArrow(false);
                }}
                onMouseDown={onMouseDown}
            >
                {arr.map((a, i) => {
                    return <CategoryButton key={i} name={`${i}${i}${i}${i}`} />;
                })}
            </div>
            {showRightArrow && (
                <button
                    className="xl:w-28 lg:w-28 md:w-32 sm:w-64 py-3 h-full bg-menu shadow-left relative xl:right-5 xl:-mx-5 lg:right-4 lg:-mx-4 md:rigth-3 md:-mx-3 flex justify-center items-center"
                    onClick={() => {
                        scrollRef.current.scrollLeft += 200;
                    }}
                >
                    <img src="/icons/right.svg" alt="" className="w-4 h-4" />
                </button>
            )}
        </div>
    );
};

export default CategoryBar;
