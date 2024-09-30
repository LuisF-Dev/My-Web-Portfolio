"use client";

import { gradient } from "@/app/ClassesTailwind";
import { jetbrains } from "@/fonts";
import clsx from "clsx";

function AboutMe() {
    return (
        <div className="flex items-center flex-col mt-16 basis-52 justify-center">
            <h2
                className={clsx(
                    "text-2xl p-5 rounded-md font-bold text-black mb-6 ",
                    gradient,
                    jetbrains.className
                )}
            >
                About Me
            </h2>
            <section className="p-6 flex flex-col w-1/2 rounded-md bg-jsDark text-gray-900 ">
                <p
                    className={clsx(
                        jetbrains.className,
                        "mb-2 text-white rounded-md p-1 text-lg"
                    )}
                >
                    I am a self-taught web developer with over two years of
                    experience creating websites and web applications. Although
                    I haven&apos;t pursued a formal degree yet, I am passionate
                    about learning and have been actively expanding my skills
                    through various online courses.
                </p>
                <p
                    className={clsx(
                        jetbrains.className,
                        "mb-2 text-white  rounded-md p-1 text-lg"
                    )}
                >
                    My expertise lies in React, Next.js, ExpressJs and tailwind
                    and I enjoy crafting responsive and dynamic websites.
                    I&apos;m always looking for new challenges and opportunities
                    to grow as a developer, with plans to continue my education
                    in software engineering.
                </p>
            </section>
        </div>
    );
}

export default AboutMe;
