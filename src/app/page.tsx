import clsx from "clsx";

import { playpen_Sans } from "@/fonts";
import Description from "./components/homepage/Description";
import Technologies from "./components/homepage/technologies/technologies";
import AboutMe from "./components/homepage/AboutMe";

function Homepage() {
    return (
        <div className="flex flex-col justify-center items-center">
            {" "}
            {/* flex vertical  */}
            <div className="mx-8 mt-10  ">
                <div className="flex flex-row">
                    <div className="animate-bounce  inline-block h-14 w-14 text-5xl">
                        👋
                    </div>{" "}
                    <p
                        className={clsx(
                            "px-2 text-4xl ",
                            playpen_Sans.className
                        )}
                    >
                        Welcome
                    </p>
                </div>
            </div>
            <Description />
            <AboutMe />
            <Technologies />
        </div>
    );
}

export default Homepage;
