"use client"
import { ArrowRight } from "iconsax-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import UserAccount from "./components/account"

const HeaderPanel = () => {
    const pathname = usePathname()
    const router = useRouter()

    const useBackPanel = pathname.includes("panel")

    return (
        <>
            <nav
                className={`fixed top-0 z-20 w-full border-b border-gray-200 bg-white`}
            >
                <div className=" flex w-full flex-wrap items-center justify-between p-4">
                    <div className="flex items-center justify-center">
                        {useBackPanel && (
                            <div className="flex">
                                <button
                                    onClick={() => {
                                        router.push("/mybots")
                                    }}
                                >
                                    <ArrowRight />
                                </button>
                            </div>
                        )}
                        <Link href={"/"}>
                            <Image
                                src="/logo.svg"
                                height="60"
                                width="60"
                                alt="Logo"
                                className="mr-5"
                            />
                        </Link>

                        <Link href={"/"}>
                            <span className={`mr-2 text-2xl font-bold `}>
                                هوشینو
                            </span>
                        </Link>
                    </div>

                    <div className="flex gap-4 space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                        <UserAccount />
                    </div>
                </div>
            </nav>
        </>
    )
}
export default HeaderPanel