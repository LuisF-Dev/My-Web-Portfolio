import clsx from "clsx";
import Technology from "./technology";
import { gradient } from "@/app/ClassesTailwind";
import { jetbrains } from "@/fonts";

function Technologies() {
    return (
        <>
            <div
                className={clsx(
                    "p-4 rounded-md w-40 text-black text-center text-2xl",
                    gradient,
                    jetbrains.className
                )}
            >
                Skills
            </div>
            <div className="lg:p-5 sm:p-3 text-sm lg:text-base grid grid-flow-col grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 bg-jsDark xl:mx-80 rounded-md text-black my-10 lg:mx-70">
                <Technology label="JavaScript" />
                <Technology label="TypeScript" />
                <Technology label="NextJs" /> <Technology label="NodeJs" />{" "}
                <Technology label="React" /> <Technology label="ExpressJs" />{" "}
                <Technology label="Python" /> <Technology label="HTML" />
            </div>
        </>
    );
}

export default Technologies;
