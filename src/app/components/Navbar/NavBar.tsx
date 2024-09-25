"use client";

import { jetbrains } from "@/fonts";
import clsx from "clsx";

import Image from "next/image";
import translate from "@/public/images/traducir.png";

import menuDesplegable from "@/public/images/menu-desplegable.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ButtonNavbar from "./Button";

function Navbar() {
    const router = useRouter();
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
                <ButtonNavbar onClick={() => router.push("/")}>
                    Homepage
                </ButtonNavbar>

                <ButtonNavbar onClick={() => router.push("/projects")}>
                    Projects
                </ButtonNavbar>
                <ButtonNavbar onClick={() => router.push("/...")}>
                    Github
                </ButtonNavbar>

                <ButtonNavbar onClick={() => router.push("/about")}>
                    About me
                </ButtonNavbar>
            </div>
            <div className="hidden lg:block">
                <Image
                    src={translate}
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
                className="cursor-pointer lg:hidden z-20"
                onClick={() => {
                    setIsClosed(isClosed ? false : true);
                }}
            />
            {isClosed ? (
                ""
            ) : (
                <div className="grid grid-flow-row grid-cols-1 grid-rows-4 absolute bg-jsDark lg:hidden w-full z-10 top-20 pb-4">
                    <ButtonNavbar onClick={() => router.push("/")}>
                        Homepage
                    </ButtonNavbar>

                    <ButtonNavbar onClick={() => router.push("/projects")}>
                        Projects
                    </ButtonNavbar>
                    <ButtonNavbar onClick={() => router.push("/...")}>
                        Github
                    </ButtonNavbar>

                    <ButtonNavbar onClick={() => router.push("/about")}>
                        About me
                    </ButtonNavbar>
                </div>
            )}
        </div>
    );
}

export default Navbar;
