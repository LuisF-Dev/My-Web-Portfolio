"use client";

import { jetbrains, playpen_Sans } from "@/fonts";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { gradient_text } from "../ClassesTailwind";
import { useRouter } from "next/navigation";
import Name from "../components/contact/Name";
import Reason from "../components/contact/Reason";

import Message from "../components/contact/Message";

import ReCAPTCHA from "react-google-recaptcha";
import { AnimatePresence, motion } from "framer-motion";
import { ThreeDots } from "react-loader-spinner";

interface formFields {
    name: string;
    reason: string;
    message: string;
}

const ContactForm = () => {
    const [formFields, setFormFields] = useState<formFields>({
        name: "",
        reason: "",
        message: "",
    });
    const [isSend, setIsSend] = useState<string | undefined>(undefined);
    const [isSending, setIsSending] = useState(false);
    const [wasResolved, setWasResolved] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const router = useRouter();
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [isSend]);

    return (
        <>
            <form
                className="max-w-2xl w-4/5 md:w-2/4 lg:w-1/3 mx-auto p-6 my-6 bg-gray-900 rounded-lg shadow-lg"
                onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSending(true);
                    if (wasResolved) {
                        const res = await fetch(
                            "https://luisf-dev.vercel.app/api/contactme",
                            {
                                method: "POST",
                                body: JSON.stringify(formFields),
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
                <Name
                    onChange={(e) =>
                        setFormFields({ ...formFields, name: e.target.value })
                    }
                    name={formFields.name}
                />
                <Reason
                    reason={formFields.reason}
                    onChange={(e) =>
                        setFormFields({ ...formFields, reason: e.target.value })
                    }
                />
                <Message
                    message={formFields.message}
                    onChange={(e) =>
                        setFormFields({
                            ...formFields,
                            message: e.target.value,
                        })
                    }
                />
                <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                    theme="dark"
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
                        "w-full bg-yellow-500 text-black font-bold py-2 px-4 rounded-md mt-3 hover:bg-zinc-800 hover:text-white transition hover:to-transparent hover:from-transparent disabled:to-transparent disabled:from-transparent disabled:bg-gray-500 disabled:text-gray-700 flex flex-row items-center"
                    )}
                    disabled={isSending}
                >
                    <p className="mr-60">Send Message </p>
                    <ThreeDots
                        visible={isSending}
                        height="35"
                        width="35"
                        color="#ffd600"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
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
