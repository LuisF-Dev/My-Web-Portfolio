import { jetbrains } from "@/fonts";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

type technology = {
    label: string;
    icon: IconProp;
    className?: string;
    onClick?: () => void;
};

function Skill({ label, icon, className }: technology) {
    return (
        <div
            className={clsx(
                " rounded-md py-5 px-8 md:p-3 m-3 flex flex-row items-center bg-yellow-500  text-center",
                jetbrains.className,
                "flex flex-row items-center hover:bg-yellow-400 transition p-2 rounded-md"
            )}
        >
            {" "}
            <FontAwesomeIcon
                icon={icon}
                className={clsx("h-10 w-10 mr-3", className)}
            />
            <h1>{label}</h1>
        </div>
    );
}

export default Skill;
