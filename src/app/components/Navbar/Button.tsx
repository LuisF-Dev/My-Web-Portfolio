"use client";

import { styleButton } from "@/app/ClassesTailwind";
import { jetbrains } from "@/fonts";
import clsx from "clsx";
type props = {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
};

function ButtonNavbar({ onClick, className, children }: props) {
    return (
        <button
            className={clsx(
                jetbrains.className,
                styleButton,
                "inline-block",
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default ButtonNavbar;
