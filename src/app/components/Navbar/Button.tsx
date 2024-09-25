"use client";

import { styleButton } from "@/app/ClassesTailwind";
import { jetbrains } from "@/fonts";
import clsx from "clsx";
type props = {
    onClick: () => void;
    children: React.ReactNode;
};

function ButtonNavbar({ onClick, children }: props) {
    return (
        <button
            className={clsx(jetbrains.className, styleButton, "inline-block")}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default ButtonNavbar;
