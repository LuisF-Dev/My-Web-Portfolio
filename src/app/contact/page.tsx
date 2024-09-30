"use client";

import { jetbrains, playpen_Sans } from "@/fonts";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { gradient, gradient_text } from "../ClassesTailwind";
import { useRouter } from "next/navigation";
import Name from "../components/contact/Name";
import Reason from "../components/contact/Reason";

import Message from "../components/contact/Message";

import ReCAPTCHA from "react-google-recaptcha";
import { AnimatePresence, motion } from "framer-motion";

const ContactForm = () => {
    const [name, setName] = useState<string>("");
    const [reason, setReason] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [isSend, setIsSend] = useState<string | undefined>(undefined);
    const [isSending, setIsSending] = useState(false);
    const [wasResolved, setWasResolved] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const router = useRouter();
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [isSend]);
    {
    }
    return (
        <>
            <form
                className="max-w-2xl w-4/5 md:w-2/4 lg:w-1/3 mx-auto p-6 my-6 bg-jsGray rounded-lg shadow-lg"
                onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSending(true);
                    if (wasResolved) {
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
                    } else {
                        setIsSending(false);
                        setShowAlert(true);
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
                <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                    onChange={() => {
                        setWasResolved(true);
                        setShowAlert(false);
                    }}
                />{" "}
                <AnimatePresence>
                    {showAlert ? (
                        <motion.div
                            className={clsx(
                                "font-semibold",
                                jetbrains.className
                            )}
                            initial={{ opacity: 0, y: "-100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: "-100%" }}
                        >
                            Resuelve el captcha por favor
                        </motion.div>
                    ) : (
                        ""
                    )}
                </AnimatePresence>
                <button
                    type="submit"
                    className={clsx(
                        gradient,
                        "w-full  text-black font-bold py-2 px-4 rounded-md mt-3 hover:bg-zinc-800 hover:text-white transition hover:to-transparent hover:from-transparent disabled:to-transparent disabled:from-transparent disabled:bg-gray-500 disabled:text-gray-700"
                    )}
                    disabled={isSending}
                >
                    Send Message
                </button>
            </form>
            <AnimatePresence>
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
                    <motion.div
                        ref={ref}
                        className={clsx(
                            jetbrains.className,
                            "text-center text-3xl my-10"
                        )}
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 1 }}
                    >
                        The message has been sent successfully
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ContactForm;
