import { jetbrains, playpen_Sans } from "@/fonts";
import clsx from "clsx";
import Image from "next/image";

function Description() {
    return (
        <div className="flex flex-row  p-4 m-3">
            <div
                className={clsx(
                    jetbrains.className,
                    "font-bold flex flex-row items-center justify-center p-3"
                )}
            >
                <p className="text-5xl ">
                    I&apos;m&nbsp;
                    <span className={clsx(playpen_Sans.className, "font-bold")}>
                        Luis Fajardo
                    </span>
                    . A fullstack developer, i can
                    <span className={clsx(playpen_Sans.className, "font-bold")}>
                        improve
                    </span>{" "}
                    and <span>grow</span> their web pages
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
