import { gradient } from "@/app/ClassesTailwind";
import { jetbrains } from "@/fonts";
import clsx from "clsx";
import Image from "next/image";

type technology = {
    label: string;
    srcImage?: string;
};

function Technology({ label, srcImage }: technology) {
    return (
        <div
            className={clsx(
                gradient,
                " rounded-md p-5 m-1 inline-block ",
                jetbrains.className
            )}
        >
            {srcImage ? <Image src={srcImage} alt="label" /> : ""}
            <h1>{label}</h1>
        </div>
    );
}

export default Technology;
