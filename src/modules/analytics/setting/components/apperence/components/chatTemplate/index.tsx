"use client"
import { CloseCircle, Refresh, Send } from "iconsax-react"

const ChatTemplate = ({ config }: any) => {
    return (
        <>
            <div className="flex h-[85vh] max-h-[824px] flex-auto shrink-0 flex-col overflow-hidden rounded-xl border border-zinc-200  bg-zinc-100">
                <div className="cb-light group flex h-full flex-auto shrink-0 flex-col overflow-hidden bg-white">
                    <div className="w-full px-3">
                        <div className="z-10 flex justify-between border-b py-1">
                            <div className="flex items-center justify-center gap-3">
                                <button>
                                    <CloseCircle size={32} color="#9ca3af" />
                                </button>
                                <button>
                                    <Refresh size={28} color="#9ca3af" />
                                </button>
                            </div>
                            <div className="flex items-center">
                                <h1 className="text-lg font-bold text-black ">
                                    {config.displayName}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="h-full overflow-auto">
                        <div className="relative">
                            <div className="h-full w-full overflow-y-auto">
                                <div className="px-3 pt-4">
                                    <div>
                                        {config.botMessages.map(
                                            (msg: any, index: number) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className="mr-8 flex justify-end"
                                                    >
                                                        <div className="mb-3 max-w-prose overflow-auto rounded-lg bg-[#f1f1f0] px-4 py-3 text-black">
                                                            <div className="flex flex-col items-start gap-4 break-words">
                                                                <div className=" w-full break-words text-right text-inherit ">
                                                                    <p>{msg}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            },
                                        )}
                                        <div className="ml-8 flex justify-start">
                                            <div
                                                className="mb-3 max-w-prose overflow-auto rounded-lg px-4 py-3  text-white"
                                                style={{
                                                    backgroundColor:
                                                        config.bgUserMessage,
                                                }}
                                            >
                                                <div className="flex flex-col items-start gap-4 break-words">
                                                    <div className=" w-full break-words text-right text-inherit ">
                                                        <p>سلام !</p>{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-inherit">
                        <form action="">
                            <div className="flex gap-2 overflow-x-auto p-3">
                                {config.suggestedMessages.map(
                                    (sgm: any, index: number) => {
                                        return (
                                            <button
                                                key={index}
                                                className="focus-visible:ring-ring inline-flex h-8 items-center justify-center whitespace-nowrap rounded-md bg-zinc-900 px-3 text-sm font-normal text-zinc-50 shadow-none transition-colors hover:bg-zinc-800/90 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80 group-[.cb-dark]:bg-zinc-800 group-[.cb-light]:bg-zinc-200/50 group-[.cb-dark]:text-white group-[.cb-light]:text-black group-[.cb-dark]:hover:bg-zinc-700 group-[.cb-light]:hover:bg-zinc-200 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90"
                                                type="button"
                                                aria-label="لبلب "
                                                title="لبلب "
                                            >
                                                {sgm}{" "}
                                            </button>
                                        )
                                    },
                                )}
                            </div>
                            <div className="flex border-t border-[#e4e4e7] px-4  py-3">
                                <div className="flex w-full items-center leading-none">
                                    <textarea
                                        required
                                        className="mr-3 max-h-36 w-full cursor-not-allowed resize-none bg-transparent pr-3 leading-[24px] focus:outline-none focus:ring-0 focus-visible:ring-0 group-[.cb-dark]:text-white group-[.cb-light]:text-black"
                                        disabled
                                        placeholder={config.inputPlaceholder}
                                        aria-label="Write a Message"
                                        title="Write a Message"
                                        style={{
                                            height: "24px",
                                        }}
                                    />
                                </div>
                                <div className="flex items-end leading-none">
                                    <button disabled>
                                        <Send />
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="flex items-center justify-center gap-3 px-4 pb-3 pt-1">
                                    <p className="grow text-nowrap text-center text-xs ">
                                        قدرت گرفته از
                                        <a
                                            target="_blank"
                                            className="mr-1 font-semibold text-[#1277fd]"
                                            href="/"
                                        >
                                            hamyar.chat
                                        </a>
                                    </p>
                                    <div
                                        data-orientation="vertical"
                                        role="none"
                                        className="h-4   w-[1px] shrink-0 bg-zinc-400"
                                    ></div>
                                    <div className="grow overflow-hidden text-left text-[11px] group-[.cb-dark]:text-[#b4b4b5] group-[.cb-light]:text-[#3f3f46]">
                                        <p>{config.footer}</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChatTemplate