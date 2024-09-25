"use client";

import { jetbrains } from "@/fonts";
import clsx from "clsx";
import Link from "next/link";
import { styleButton } from "../ClassesTailwind";
import Image from "next/image";
import myImage from "../images/traducir.png";

import menuDesplegable from "../images/menu-desplegable.png";
import { useState } from "react";

function Navbar() {
    const [isClosed, setIsClosed] = useState(true);
    return (
        <div className="bg-jsDark py-4 flex flex-row items-center justify-between ">
            <div
                className={clsx(
                    "px-3 text-3xl font-semibold   from-orange-500 to-jsYellow bg-gradient-to-b bg-clip-text text-transparent",
                    jetbrains.className
                )}
            >
                LuisF-Dev
            </div>

            <div className="hidden lg:block">
                <Link href={"/"}>
                    <button className={clsx(jetbrains.className, styleButton)}>
                        Homepage
                    </button>
                </Link>

                <Link href={"/projects"}>
                    <button className={clsx(jetbrains.className, styleButton)}>
                        Projects
                    </button>
                </Link>
                <Link href={"/technologies"}>
                    <button className={clsx(jetbrains.className, styleButton)}>
                        Technologies
                    </button>
                </Link>
                <Link href={"/about"}>
                    <button className={clsx(jetbrains.className, styleButton)}>
                        About me
                    </button>
                </Link>
            </div>
            <div className="hidden lg:block">
                <Image
                    src={myImage}
                    alt="traducir, translate"
                    width={48}
                    height={48}
                />
            </div>
            <Image
                src={menuDesplegable}
                alt="Menu, Desplegable"
                width={48}
                height={48}
                className="cursor-pointer lg:hidden"
                onClick={() => {
                    setIsClosed(isClosed ? false : true);
                }}
            />
            {isClosed ? (
                ""
            ) : (
                <div className="grid grid-flow-row grid-cols-1 grid-rows-4 absolute bg-jsDark lg:hidden w-full z-10">
                    <Link href={"/"}>
                        <button
                            className={clsx(jetbrains.className, styleButton)}
                        >
                            Homepage
                        </button>
                    </Link>

                    <Link href={"/projects"}>
                        <button
                            className={clsx(jetbrains.className, styleButton)}
                        >
                            Projects
                        </button>
                    </Link>
                    <Link href={"/technologies"}>
                        <button
                            className={clsx(jetbrains.className, styleButton)}
                        >
                            Technologies
                        </button>
                    </Link>
                    <Link href={"/about"}>
                        <button
                            className={clsx(jetbrains.className, styleButton)}
                        >
                            About me
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Navbar;
