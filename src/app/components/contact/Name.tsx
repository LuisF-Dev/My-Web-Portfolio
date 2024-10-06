import { jetbrains } from "@/fonts";
import clsx from "clsx";
import React from "react";

type onchange = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
};

function Name({ name, onChange }: onchange) {
    return (
        <div className="mb-4">
            <label
                className={clsx(
                    jetbrains.className,
                    "block text-white  text-sm font-bold mb-2"
                )}
                htmlFor="recipient"
            >
                Name
            </label>
            <input
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={onChange}
                className="w-full px-3 py-2 outline-none border border-transparent text-white bg-black  focus:border-yellow-500 transition-all duration-150 rounded-md"
                required
            />
        </div>
    );
}

export default Name;
