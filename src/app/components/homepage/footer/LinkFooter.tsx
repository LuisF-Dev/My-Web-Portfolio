import { gradient } from "@/app/ClassesTailwind";
import { jetbrains } from "@/fonts";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

type technology = {
    label: string;
    icon: IconProp;
    className?: string;
    containerClassName?: string;
    href: Url;
};

function LinkFooter({
    label,
    icon,
    className,
    containerClassName,
    href,
}: technology) {
    return (
        <div>
            {
                <Link href={href} target="_blank">
                    <div
                        className={clsx(
                            !containerClassName ? gradient : containerClassName,
                            !containerClassName
                                ? " rounded-md py-5 px-8 md:p-5 m-2 flex flex-row items-center  text-center"
                                : containerClassName,
                            jetbrains.className,
                            "flex flex-row items-center hover:bg-gray-700 transition  p-2 rounded-md"
                        )}
                    >
                        {" "}
                        <FontAwesomeIcon
                            icon={icon}
                            className={clsx("h-10 w-10 mr-3", className)}
                        />
                        <h1>{label}</h1>
                    </div>
                </Link>
            }
        </div>
    );
}

export default LinkFooter;
