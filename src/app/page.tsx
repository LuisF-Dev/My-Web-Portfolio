import clsx from "clsx";
import ThreeSquare from "./components/homepage/ThreeSquare";
import { jetbrains } from "@/fonts";
import Description from "./components/homepage/Description";

function Homepage() {
    return (
        <div className="flex flex-col">
            {" "}
            {/* flex vertical  */}
            <Description />
            <ThreeSquare
                className={clsx(
                    "bg-jsGray rounded-md p-5 m-5",
                    jetbrains.className
                )}
            />
        </div>
    );
}

export default Homepage;
