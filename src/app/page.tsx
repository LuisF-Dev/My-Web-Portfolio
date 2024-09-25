import clsx from "clsx";

import { playpen_Sans } from "@/fonts";
import Description from "./components/homepage/Description";
import Technologies from "./components/homepage/technologies/technologies";

function Homepage() {
    return (
        <div className="flex flex-col justify-center">
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
            <Technologies />
        </div>
    );
}

export default Homepage;
