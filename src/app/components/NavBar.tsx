import { jetbrains } from "@/fonts";
import clsx from "clsx";
import Link from "next/link";

function Navbar() {
    return (
        <div className="bg-jsDark py-4 flex flex-row items-center  justify-end">
            <Link href={"/about"}>
                <button
                    className={clsx(
                        jetbrains.className,
                        "bg-jsYellow rounded-md p-4 text-black hover:bg-jsGray transition hover:text-white mx-4 text-base"
                    )}
                >
                    About me
                </button>
            </Link>
            <Link href={"/projects"}>
                <button
                    className={clsx(
                        jetbrains.className,
                        "bg-jsYellow rounded-md p-4 text-black hover:bg-jsGray transition hover:text-white mx-4 text-base"
                    )}
                >
                    Projects
                </button>
            </Link>
            <Link href={"/technologies"}>
                <button
                    className={clsx(
                        jetbrains.className,
                        "bg-jsYellow rounded-md p-4 text-black hover:bg-jsGray transition hover:text-white mx-4 text-base"
                    )}
                >
                    Technologies
                </button>
            </Link>
            <Link href={"/"}>
                <button
                    className={clsx(
                        jetbrains.className,
                        "bg-jsYellow rounded-md p-4 text-black hover:bg-jsGray transition hover:text-white mx-4 text-base"
                    )}
                >
                    Homepage
                </button>
            </Link>
        </div>
    );
}

export default Navbar;
