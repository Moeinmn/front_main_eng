const FreePricingMobile = () => {
    return(
        <>
        <div className="flex w-full flex-row items-center justify-between px-2">
                                <div className="flex flex-col items-start justify-center">
                                    <span className="text-xl font-semibold pricing-header">
                                        $0
                                    </span>
                                    <span className="text-sm text-zinc-400">
                                        Forever
                                    </span>
                                </div>
                                <a href="/dashboard?next=/settings/plans">
                                    <button className="bg-white-gradient shadow-button hover:shadow-button-hover hover:bg-white-gradient-hover active:bg-white-gradient-hover disabled:hover:shadow-button disabled:hover:bg-white-gradient inline-flex h-12 w-1/2 items-center justify-center whitespace-nowrap rounded-xl border px-4 py-3 text-base font-medium text-zinc-950 transition-all duration-100 ease-in-out hover:border-zinc-500 active:border-zinc-400 active:opacity-70 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-zinc-200 disabled:hover:text-zinc-950">
                                        Subscribe
                                    </button>
                                </a>
                            </div>
                            <div
                                data-orientation="horizontal"
                                role="none"
                                className="-mx-8 h-0.5 w-full min-w-[calc(100%+4rem)] shrink-0 bg-zinc-200 drop-shadow-lg dark:bg-zinc-500"
                            ></div>
                            <div className="flex flex-col gap-4">
                                <div className="flex w-full flex-col">
                                <span className="text-xl font-semibold pricing-header">
                                            تنظیمات
                                        </span>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                        پیام و پاسخ
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            20
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                        دستیار هوش مصنوعی
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            1
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                        ذخیره کلمات / دستیار
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            400,000
                                        </span>
                                    </div>
                                    {/* <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            Team members
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            1
                                        </span>
                                    </div> */}
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                        استفاده در وبسایت
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col">
                                    <span className="text-xl font-semibold pricing-header">
                                    آموزش
                                    </span>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                        لینک ها                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                        ۱۰ لینک
                                        </span>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col">
                                    <span className="text-xl font-semibold pricing-header">
                                    فعالیت
                                    </span>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                        تاریخچه چت                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                        فرم اطلاعات (به زودی)                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                        آنالیز                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col">
                                    <span className="text-xl font-semibold pricing-header">
                                    یکپارچه‌سازی‌ها و API
                                    </span>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                        دسترسی به API (به زودی)                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    {/* <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            Zapier
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>*/}
                                    
                                </div>
                                <div className="flex w-full flex-col">
                                    <span className="text-xl font-semibold pricing-header">
                                    مدل هوش مصنوعی
                                    </span>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            GPT-3.5
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                        GPT-4o (پیشرفته‌ترین و کارآمدترین مدل)
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#30a46c"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-check size-5"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            GPT-4-Turbo
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                            GPT-4
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col">
                                    <span className="text-xl font-semibold pricing-header">
                                    برندسازی
                                    </span>

                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                        حذف لوگوی همیارچت                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                        دامنه یا لوگوی سفارشی شما                                                      </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex w-full flex-col">
                                    <span className="text-xl font-semibold pricing-header">
                                    پشتیبانی
                                    </span>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                        پشتیبانی ۲۴/۷      
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start gap-2">
                                        <span className="w-3/4 border-b border-b-zinc-200/50 py-5 text-sm font-medium text-zinc-900">
                                        مشاوره اختصاصی
                                        </span>
                                        <span className="flex h-16 w-1/4 items-center justify-end border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-x size-5"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
        </>
    )
}


export default FreePricingMobile