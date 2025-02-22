"use client"

import { Send, Send2 } from "iconsax-react";

const FormTemplate = ({ config }: any) => {
    return (
        <>
            <form className="p-4 min-w-72 max-w-80 rounded-md border shadow-[0_1px_8px_1px_#8080801f]" action="">
                <div>
                    <div className="text-center mb-4">
                        <h3 className="text-[24px] font-semibold">{config?.title}</h3>
                        <p className="text-[14px]">{config?.description}</p>
                    </div>
                    <div>
                        {config?.name_active && (
                            <>
                                <div className="mb-2 mt-2">
                                    <label className="block text-sm font-medium text-zinc-700">
                                        Name:{" "}
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            name="inputPlaceholder"
                                            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder={config?.name_placeholder}
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                        {
                            config?.email_active && (
                                <>
                                    <div className="mb-2 mt-2">
                                        <label className="block text-sm font-medium text-zinc-700">
                                            Email:{" "}
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                name="inputPlaceholder"
                                                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                                placeholder={config?.email_placeholder}
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </>
                            )
                        }

                        {config?.phone_active && (
                            <>
                                <div className="mb-2 mt-2">
                                    <label className="block text-sm font-medium text-zinc-700">
                                        Phone Number:{" "}
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            name="inputPlaceholder"
                                            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder={config?.phone_placeholder}
                                            type="tel"
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="mt-4">
                        <button
                            disabled
                            className="rounded-md w-full bg-blue-600 px-4 py-2 text-sm text-white gap-1 flex items-center justify-center"
                        >
                            <Send />
                            Send
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center bg-slate-100 rounded-lg mt-5">
                    <div className="flex items-center justify-center gap-3 px-4 pb-3 pt-3">
                        <p className="grow text-nowrap text-center text-xs ">
                            Created by
                            <a
                                target="_blank"
                                className="mr-1 font-semibold text-[#1277fd]"
                                href="/"
                            >
                                chatsys.co
                            </a>
                        </p>
                    </div>
                </div>
            </form>
        </>
    )
};

export default FormTemplate;
