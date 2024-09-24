import clsx from "clsx";
import ThreeSquare from "./components/homepage/ThreeSquare";
import { jetbrains, playpen_Sans } from "@/fonts";
import Description from "./components/homepage/Description";

function Homepage() {
    return (
        <div className="flex flex-col">
            {" "}
            {/* flex vertical  */}
            <div>
                <p
                    className={clsx(
                        "text-5xl font-semibold",
                        playpen_Sans.className
                    )}
                >
                    <p className="animate-bounce">👋</p> Welcome
                </p>
            </div>
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
