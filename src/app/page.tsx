import clsx from "clsx";

import { playpen_Sans } from "@/fonts";
import Description from "./components/homepage/Description";
import Skills from "./components/homepage/Skills/Skills";

import AboutMe2 from "./components/homepage/AboutMe2";

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
            <AboutMe2 />
            <Skills />
        </div>
    );
}

export default Homepage;
