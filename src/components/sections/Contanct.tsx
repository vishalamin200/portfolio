'use client'

import clsx from "clsx";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import RevealOnScroll from "../RevealOnScroll";

interface FormType {
    name: string,
    email: string,
    message: string,
    [key: string]: unknown
}

export const Contact = () => {

    const { handleSubmit, register, reset, formState: { errors, isSubmitting } } = useForm<FormType>()

    const onSubmit = async (data: FormType) => {

        if (!data) return

        try {

            const toastId = toast.loading("Sending your message...")

            await emailjs.send(
                process.env.NEXT_PUBLIC_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
                data,
                process.env.NEXT_PUBLIC_PUBLIC_KEY
            )
            toast.dismiss(toastId)
            toast.success("Message sent successfully")
            reset()

        } catch (error) {
            console.log("emailJs error : ", (error as Error)?.message)
            toast.error("Oops! Something went wrong. Please try again.")
            reset()
        }

    };

    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20 w-full"
        >

            <RevealOnScroll>
                <div className="px-4 w-full min-w-[400px] md:w-[600px] sm:w-11/12 p-6">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Get In Touch
                    </h2>
                    <form noValidate className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
                        <div className="relative">
                            <input
                                type="text"

                                {...register("name",
                                    {
                                        required: "Name is required",
                                        maxLength: {
                                            value: 50,
                                            message: "Name is too long"
                                        }
                                    }
                                )}


                                className={clsx("w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5",
                                    errors?.name ? "focus:border-red-500" : "focus:border-blue-500"
                                )}
                                placeholder="Name..."

                            />
                            <div className="min-h-4 text-red-500 flex justify-end w-full mt-1 text-xs">{(typeof errors?.name?.message) === "string" && <span>{errors?.name?.message}</span>}
                            </div>
                        </div>

                        <div className="relative">
                            <input
                                type="email"

                                {...register("email",
                                    {
                                        required: "Email is required",
                                        pattern: {
                                            value: emailRegex,
                                            message: "Please enter valid email"
                                        }
                                    }
                                )}

                                className={clsx(
                                    "w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none  focus:bg-blue-500/5",
                                    errors?.email ? "focus:border-red-500" : "focus:border-blue-500"

                                )}

                                placeholder="example@gmail.com"

                            />
                            <div className="min-h-4 text-red-500 flex justify-end text-xs">{(typeof errors?.email?.message) === "string" && <span>{errors?.email?.message}</span>}
                            </div>
                        </div>

                        <div className="relative">
                            <textarea
                                id="message"
                                rows={5}

                                {...register("message",
                                    {
                                        required: "Message is required",
                                        maxLength: {
                                            value: 1000,
                                            message: "Message is too long"
                                        }
                                    }
                                )}

                                className={clsx("w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5",
                                    errors?.message ? "focus:border-red-500" : "focus:border-blue-500"
                                )}
                                placeholder="Your Message..."

                            />
                            <div className="min-h-4 text-red-500 flex justify-end text-xs">{(typeof errors?.message?.message) === "string" && <span>{errors?.message?.message}</span>}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={clsx("w-full  text-white py-3 px-6 mt-3 rounded font-medium transition relative overflow-hidden active:scale-98 ", isSubmitting ? "bg-blue-500/20 cursor-not-allowed" : "bg-blue-500 cursor-pointer")}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};