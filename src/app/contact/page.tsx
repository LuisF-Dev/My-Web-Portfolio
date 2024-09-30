"use client";

import { jetbrains, playpen_Sans } from "@/fonts";
import clsx from "clsx";
import { useState } from "react";
import { gradient, gradient_text } from "../ClassesTailwind";
import { useRouter } from "next/navigation";

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
                    try {
                        await fetch("http://localhost:3000/api/contactme", {
                            method: "POST",
                            body: JSON.stringify({ name, reason, message }),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });
                        await setIsSend("success");
                        await setTimeout(() => router.push("/"), 4000);
                    } catch (err) {
                        console.log(err);
                        setIsSend("error");
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
                <div className="mb-4">
                    <label
                        className={clsx(
                            jetbrains.className,
                            "block text-white text-sm font-bold mb-2"
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
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border text-black border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        className={clsx(
                            jetbrains.className,
                            "block text-white text-sm font-bold mb-2"
                        )}
                        htmlFor="reason"
                    >
                        Reason
                    </label>
                    <select
                        id="reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 text-black rounded-md"
                        required
                    >
                        <option value="">Select a reason</option>
                        <option value="Portfolio Feedback ">
                            Portfolio Feedback{" "}
                        </option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Job Opportunity">Job Opportunity</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

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
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3 py-2 border text-black border-gray-300 rounded-md"
                        rows={5}
                        required
                    ></textarea>
                </div>

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
