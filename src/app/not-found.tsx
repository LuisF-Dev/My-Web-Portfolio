import clsx from "clsx";
import Link from "next/link";
import { gradient } from "./ClassesTailwind";
import { jetbrains } from "@/fonts";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center  m-auto">
            <div className="bg-slate-700 p-5 rounded-md my-9">
                <h2 className="text-3xl text m-2">404 Not Found</h2>
                <p className="m-2 ">This page hasn&apos;t been found</p>

                <Link href="/">
                    <div
                        className={clsx(
                            "p-3 rounded-md text-black font-bold text-lg",
                            gradient,
                            jetbrains.className
                        )}
                    >
                        Return Home
                    </div>
                </Link>
            </div>
        </div>
    );
}
