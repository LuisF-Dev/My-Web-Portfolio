import clsx from "clsx";
import ThreeSquare from "./components/homepage/ThreeSquare";
import { jetbrains, playpen_Sans } from "@/fonts";
import Description from "./components/homepage/Description";

function Homepage() {
    return (
        <div className="flex flex-col">
            {" "}
            {/* flex vertical  */}
            <div className="mx-8 mt-10  ">
                <p
                    className={clsx(
                        "text-5xl font-semibold flex items-center",
                        playpen_Sans.className
                    )}
                >
                    <div className="animate-bounce  inline-block h-14 w-14 text-5xl">
                        👋
                    </div>{" "}
                    <p className="px-2">Welcome</p>
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
