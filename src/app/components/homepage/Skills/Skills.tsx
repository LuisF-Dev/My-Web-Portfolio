"use client";

import clsx from "clsx";
import Skill from "./Skill";

import { jetbrains } from "@/fonts";
import {
    faGithub,
    faJs,
    faNodeJs,
    faPython,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faN } from "@fortawesome/free-solid-svg-icons";

function Skills() {
    return (
        <div className="flex flex-col  my-24 items-center justify-center bg-gray-900">
            <h2
                className={clsx(
                    jetbrains.className,
                    "text-4xl font-bold text-yellow-400 mt-9 mb-3  text-center"
                )}
            >
                Skills
            </h2>
            <div className="lg:p-5 sm:p-3 text-sm lg:text-base grid grid-flow-col grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2  shadow-lg xl:mx-70 rounded-md text-black my-0 lg:mx-70">
                <Skill
                    label="JavaScript"
                    icon={faJs}
                    className={"bg-black text-jsYellow"}
                />
                <Skill
                    label="TypeScript"
                    icon={faJs}
                    className="text-blue-400 bg-white"
                />
                <Skill
                    label="NextJs"
                    icon={faN}
                    className="text-white rounded-full bg-black p-1"
                />{" "}
                <Skill label="NodeJs" icon={faNodeJs} />{" "}
                <Skill label="React" icon={faReact} className="text-blue-500" />{" "}
                <Skill label="ExpressJs" icon={faJs} className="bgcolo" />{" "}
                <Skill label="Python" icon={faPython} />{" "}
                <Skill label="Git and Github" icon={faGithub} />
            </div>
        </div>
    );
}

export default Skills;
