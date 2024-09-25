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
                " rounded-md py-5 px-8 md:p-5 m-2  inline-block text-center",
                jetbrains.className
            )}
        >
            {srcImage ? <Image src={srcImage} alt="label" /> : ""}
            <h1>{label}</h1>
        </div>
    );
}

export default Technology;
