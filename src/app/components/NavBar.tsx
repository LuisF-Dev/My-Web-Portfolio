import { jetbrains } from "@/fonts";
import clsx from "clsx";
import Link from "next/link";
import { styleButton } from "../ClassesTailwind";
import Image from "next/image";
import myImage from "../images/traducir.png";

function Navbar() {
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
            <div>
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
            <div>
                <Image
                    src={myImage}
                    alt="traducir, translate"
                    width={48}
                    height={48}
                />
            </div>
        </div>
    );
}

export default Navbar;
