import { gradient_text } from "@/app/ClassesTailwind";
import { jetbrains, playpen_Sans } from "@/fonts";
import clsx from "clsx";

import Image from "next/image";

function Description() {
    return (
        <div className="flex flex-row mx-5 p-4 m-3 mb-5">
            <div
                className={clsx(
                    jetbrains.className,
                    "font-bold flex flex-row items-center justify-center p-3 "
                )}
            >
                <p className="text-5xl text-gray-300 ">
                    I&apos;m&nbsp;
                    <span
                        className={clsx(
                            playpen_Sans.className,
                            "font-bold bg-clip-text",
                            gradient_text
                        )}
                    >
                        Luis Fajardo
                    </span>
                    . A fullstack developer, i can&nbsp;
                    <span
                        className={clsx(
                            playpen_Sans.className,
                            "font-bold  ",
                            gradient_text
                        )}
                    >
                        improve
                    </span>{" "}
                    and{" "}
                    <span
                        className={clsx(
                            playpen_Sans.className,
                            "font-bold ",
                            gradient_text
                        )}
                    >
                        grow
                    </span>{" "}
                    their web pages
                </p>
            </div>{" "}
            <div>
                <Image
                    src="https://www.optimaley.com/wp-content/uploads/2014/09/foto-perfil-generica.jpg"
                    alt="Foto Programador"
                    width={611}
                    height={610}
                />
            </div>
        </div>
    );
}

export default Description;
