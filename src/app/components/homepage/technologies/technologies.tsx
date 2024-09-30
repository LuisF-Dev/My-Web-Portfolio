"use client";

import clsx from "clsx";
import Technology from "./technology";
import { gradient } from "@/app/ClassesTailwind";
import { jetbrains } from "@/fonts";
import {
    faGithub,
    faJs,
    faNodeJs,
    faPython,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faN } from "@fortawesome/free-solid-svg-icons";

function Technologies() {
    return (
        <div className="flex flex-col my-24 items-center justify-center">
            <div
                className={clsx(
                    "p-4 rounded-md w-40 text-black text-center text-2xl",
                    gradient,
                    jetbrains.className
                )}
            >
                Skills
            </div>
            <div className="lg:p-5 sm:p-3 text-sm lg:text-base grid grid-flow-col grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 bg-jsDark xl:mx-70 rounded-md text-black my-10 lg:mx-70">
                <Technology
                    label="JavaScript"
                    icon={faJs}
                    className={"bg-black text-jsYellow"}
                />
                <Technology
                    label="TypeScript"
                    icon={faJs}
                    className="text-blue-400 bg-white"
                />
                <Technology
                    label="NextJs"
                    icon={faN}
                    className="text-white rounded-full bg-black p-1"
                />{" "}
                <Technology label="NodeJs" icon={faNodeJs} />{" "}
                <Technology
                    label="React"
                    icon={faReact}
                    className="text-blue-500"
                />{" "}
                <Technology label="ExpressJs" icon={faJs} className="bgcolo" />{" "}
                <Technology label="Python" icon={faPython} />{" "}
                <Technology label="Git and Github" icon={faGithub} />
            </div>
        </div>
    );
}

export default Technologies;
