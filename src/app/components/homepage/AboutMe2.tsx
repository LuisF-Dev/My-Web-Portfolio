import { jetbrains } from "@/fonts";
import clsx from "clsx";
import Link from "next/link";

function AboutMe2() {
    return (
        <section
            id="about"
            className="bg-gray-900 text-gray-300 py-8 rounded-md "
        >
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center">
                    About Me
                </h2>
                <p
                    className={clsx(
                        jetbrains.className,
                        "text-center text-lg leading-relaxed  max-w-3xl mx-auto"
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
                        "text-lg text-center leading-relaxed  max-w-3xl mx-auto my-4"
                    )}
                >
                    My expertise lies in React, Next.js, ExpressJs and tailwind
                    and I enjoy crafting responsive and dynamic websites.
                    I&apos;m always looking for new challenges and opportunities
                    to grow as a developer, with plans to continue my education
                    in software engineering.
                </p>
                <div className="mt-8 text-center">
                    <Link
                        href={"/contact"}
                        className="bg-yellow-400 text-gray-900 px-6 py-3
                        rounded-full shadow-md hover:bg-yellow-300 transition
                        duration-300"
                    >
                        Let&apos;s Work Together
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default AboutMe2;
