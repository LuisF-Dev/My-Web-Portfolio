"use client";

import { jetbrains, playpen_Sans } from "@/fonts";
import clsx from "clsx";
import { useState } from "react";
import { gradient, gradient_text } from "../ClassesTailwind";
import { useRouter } from "next/navigation";
import Name from "../components/contact/Name";
import Reason from "../components/contact/Reason";
import Message from "../components/contact/Message";

const ContactForm = () => {
    const [name, setName] = useState<string>("");
    const [reason, setReason] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [isSend, setIsSend] = useState<string | undefined>(undefined);
    const [isSending, setIsSending] = useState(false);
    const router = useRouter();

    return (
        <>
            <form
                className="max-w-2xl w-4/5 md:w-2/4 lg:w-1/3 mx-auto p-6 my-6 bg-jsGray rounded-lg shadow-lg"
                onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSending(true);

                    const res = await fetch(
                        "http://localhost:3000/api/contactme",
                        {
                            method: "POST",
                            body: JSON.stringify({ name, reason, message }),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    );

                    if (res.ok) {
                        await setIsSend("success");
                        await setTimeout(() => router.push("/"), 4000);
                    }
                }}
            >
                <h1
                    className={clsx(
                        gradient_text,
                        "text-3xl mx-auto text-center font-semibold",
                        playpen_Sans.className
                    )}
                >
                    Contact Me
                </h1>
                <Name onChange={(e) => setName(e.target.value)} name={name} />

                <Reason
                    reason={reason}
                    onChange={(e) => setReason(e.target.value)}
                />

                <Message
                    message={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <button
                    type="submit"
                    className={clsx(
                        gradient,
                        "w-full  text-black font-bold py-2 px-4 rounded-md  hover:bg-zinc-800 hover:text-white transition hover:to-transparent hover:from-transparent disabled:to-transparent disabled:from-transparent disabled:bg-gray-500 disabled:text-gray-700"
                    )}
                    disabled={isSending}
                >
                    Send Message
                </button>
            </form>
            {!isSend ? (
                ""
            ) : isSend === "error" ? (
                <div
                    className={clsx(
                        jetbrains.className,
                        "text-center text-3xl my-10"
                    )}
                >
                    errr
                </div>
            ) : (
                <div
                    className={clsx(
                        jetbrains.className,
                        "text-center text-3xl my-10"
                    )}
                >
                    The message has been sent successfully
                </div>
            )}
        </>
    );
};

export default ContactForm;
