import { jetbrains } from "@/fonts";
import clsx from "clsx";
import React from "react";

type Message = {
    message: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};
function Message({ message, onChange }: Message) {
    return (
        <div className="mb-4">
            <label
                className={clsx(
                    jetbrains.className,
                    "block text-white text-sm font-bold mb-2"
                )}
                htmlFor="message"
            >
                Message
            </label>
            <textarea
                id="message"
                placeholder="Write your message here..."
                value={message}
                onChange={onChange}
                className="w-full px-3 py-2 border text-black border-gray-300 rounded-md"
                rows={5}
                required
            ></textarea>
        </div>
    );
}

export default Message;
