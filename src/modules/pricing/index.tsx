//https://tailgrids.com/components/pricing-tables
//https://tailgrids.com/pricing
import "./style.css"
import PricingCard from "./PricingCard"
import MobilePricingFeatures from "./components/Mobile/Table"
import Link from "next/link"

// const pricingTiers = [{
//     name: "Basic",
//     monthlyPrice: "Free forever",
//     yearlyPrice: "Contact us",
//     features: {
//         تنظیمات: {
//           پیام_و_پاسخ: true,
//           دستیار_هوش_مصنوعی: true,
//           ذخیره_کلمات_دستیار: true,
//           استفاده_در_وبسایت: true
//         }
//       }
// }]

const CheckIcon = ()=><svg
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

const CrossIcon=()=><svg
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

const Pricing = () => {
    return (
        <section className="relative bg-white pb-12 pt-10 lg:pb-[90px]">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                            <span className="text-primary mb-2 block text-lg font-semibold">
                                جدول قیمت‌گذاری
                            </span>
                            <h2 className="text-dark mb-3 text-3xl font-bold leading-[1.208] sm:text-4xl md:text-[40px] ">
                                قیمت
                                <span
                                    style={{
                                        textShadow:
                                            "0 3px 8px rgba(77, 243, 255, 0.22)",
                                        backgroundImage:
                                            "linear-gradient(360deg, #5154ff, #559fff)",
                                        backgroundClip: "text",
                                        fontWeight: 700,
                                        position: "relative",
                                        color: "transparent",
                                    }}
                                >
                                    &nbsp;جدیدترین&nbsp;
                                </span>
                                سرویس‌ها
                            </h2>
                            <p className="text-body-color dark:text-dark-6 text-base">
                                اطلاعات ارائه‌شده شامل جزئیات مربوط به هر سرویس
                                و هزینه‌های مرتبط با آن می‌باشد تا بتوانید
                                بهترین تصمیم را برای نیازهای خود بگیرید.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center">
                    <div className="mx-4 flex flex-wrap">
                        <PricingCard
                            order={0}
                            type="پایه"
                            price="رایگان"
                            subscription=" برای همیشه "
                            description="مناسب برای کسب‌وکارهای کوچک و کاربران تازه‌کار با نیازهای ساده."
                            //beforeListText={"&nbsp;"}
                            buttonText="شروع کنید"
                            active={false}
                            //use full for N count of users
                        >
                            <List>دسترسی به مدل‌های زبانی سریع</List>
                            <List>۱۰۰ پیام ماهانه</List>
                            <List>۱ دستیار هوش مصنوعی</List>
                            <List>محدود به ۱۰ لینک برای آموزش</List>
                            <List>۴۰۰,۰۰۰ ذخیره کاراکتر / دستیار</List>
                            <List>شخصی‌سازی رابط کاربری</List>
                            <List>استفاده در وبسایت</List>
                            <List>مشاهده تاریخچه چت</List>
                            <List>پشتیبانی ۲۴/۷</List>
                        </PricingCard>
                        <PricingCard
                            order={0}
                            type="استاندارد"
                            price="۴۹۹"
                            subscription="هزار تومان/ ماهانه"
                            description="مناسب برای کسب‌وکارهای متوسط و کاربران با نیازهای پیشرفته"
                            buttonText="انتخاب طرح استاندارد"
                            beforeListText={"همه موارد در رایگان، به علاوه..."}
                            active={false}
                        >
                            <List>۱٬۲۰۰ پیام ماهانه</List>
                            <List>۳ دستیار هوش مصنوعی</List>
                            <List>لینک‌های نامحدود</List>
                            <List> ۱۱٬۰۰۰٬۰۰۰ ذخیره کاراکتر / دستیار</List>
                            <List>پشتیبانی ۲۴/۷</List>
                        </PricingCard>
                        <PricingCard
                            order={4}
                            type="حرفه‌ای"
                            price="۱٬۶۹۹"
                            subscription="هزار تومان/ ماهانه"
                            description="مناسب برای کسب‌وکارها و سازمان‌های بزرگ با نیاز به سفارشی‌سازی و تحلیل‌های دقیق."
                            buttonText="انتخاب طرح حرفه‌ای"
                            beforeListText={
                                "همه موارد در استاندارد، به علاوه..."
                            }
                            active={true}
                        >
                            <List>۴٬۲۰۰ پیام ماهانه</List>
                            <List>۵ دستیار هوش مصنوعی</List>
                            <List>ذخیره کاراکتر و آپلود فایل نامحدود😍</List>
                            <List>درج دامنه یا لوگوی سفارشی شما</List>
                            <List>مشاوره اختصاصی</List>
                        </PricingCard>
                        <PricingCard
                            order={0}
                            type="سازمانی"
                            price="تماس بگیرید"
                            // subscription="ماهانه"
                            description="مناسب برای سازمان‌های بزرگ با نیازهای پیچیده، راه‌حل‌های سفارشی، و پشتیبانی اختصاصی."
                            buttonText="انتخاب طرح سازمانی"
                            beforeListText={"همه موارد در حرفه‌ای، به علاوه..."}
                            active={false}
                        >
                            <List>دسترسی به مدل‌های زبانی پیشرفته</List>

                            <List>پیام‌های نامحدود</List>
                            <List>دستیارهای هوش مصنوعی نامحدود  </List>
                            <List>درج دامنه یا لوگوی سفارشی شما</List>
                            <List>حذف برند همیارچت</List>
                            <List>مشاوره اختصاصی</List>
                        </PricingCard>
                    </div>
                </div>

                <div className="relative mt-14 w-full">
                    <section className="hidden overflow-x-clip md:block">
                        <div className="sticky top-[-1px] z-10 h-0 opacity-0"></div>
                        <header
                            style={{
                                zIndex: 20,
                            }}
                            className="sticky inset-x-0 top-[68px]  bg-white"
                        >
                            <div className="bg-white py-4">
                                <div className="grid grid-cols-9 gap-4 bg-white">
                                    <div className="col-span-2 flex flex-col items-start justify-end gap-3 xl:col-span-2">
                                        <h3 className="ml-1 text-xs font-medium text-zinc-600">
                                            مقایسه تعرفه ها
                                        </h3>
                                        <div className="flex h-auto max-w-fit flex-row gap-1 rounded-full bg-zinc-100 p-1">
                                            <button className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-white px-4 py-1 text-xs font-medium text-zinc-950 transition-colors duration-300 ease-in-out hover:bg-white hover:text-zinc-900 hover:opacity-85 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:text-zinc-600 disabled:opacity-80 lg:px-5 xl:px-7 dark:hover:bg-zinc-800 dark:hover:text-zinc-50">
                                                ماهانه
                                            </button>
                                            {/* <button className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-zinc-100 px-4 py-1 text-xs font-medium text-zinc-500 transition-colors duration-300 ease-in-out hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:text-zinc-600 disabled:opacity-80 lg:px-5 xl:px-7 dark:hover:bg-zinc-800 dark:hover:text-zinc-50">
                                                سالانه{" "}
                                            </button> */}
                                        </div>
                                    </div>
                                    <div className="col-span-7 grid grid-cols-4 gap-4 focus-visible:outline-none focus-visible:ring-0 data-[state=inactive]:hidden">
                                        <div className="flex flex-col items-center justify-center gap-2 rounded-xl px-3 py-2 xl:px-6">
                                            <span className="text-2xl font-medium ">
                                                پایه
                                            </span>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-medium text-zinc-600">
                                                    رایگان برای همیشه
                                                </span>
                                            </div>
                                            <Link href={`/auth/login`}>
                                                <button
                                                    className="
                                                bg-white-gradient shadow-button 
                                                hover:shadow-button-hover 
                                                hover:bg-white-gradient-hover
                                                 active:bg-white-gradient-hover 
                                                 disabled:hover:shadow-button 
                                                 disabled:hover:bg-white-gradient
                                                  inline-flex h-auto w-full items-center
                                                  justify-center whitespace-nowrap 
                                                  rounded-xl border px-4 py-2 
                                                  text-sm font-medium text-zinc-950 transition-all duration-100 ease-in-out hover:border-zinc-500 active:border-zinc-400 active:opacity-70 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-zinc-200 disabled:hover:text-zinc-950"
                                                >
                                                    شروع کنید
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="flex flex-col items-center justify-center gap-2 rounded-xl px-3 py-2 xl:px-6">
                                            <span className="text-2xl font-medium ">
                                                استاندارد
                                            </span>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-medium text-zinc-600">
                                                    ۴۹۹ هزار تومان / ماهانه
                                                </span>
                                            </div>
                                            <a href="/dashboard?next=/settings/plans">
                                                <button className="bg-white-gradient shadow-button hover:shadow-button-hover hover:bg-white-gradient-hover active:bg-white-gradient-hover disabled:hover:shadow-button disabled:hover:bg-white-gradient inline-flex h-auto w-full items-center justify-center whitespace-nowrap rounded-xl border px-4 py-2 text-sm font-medium text-zinc-950 transition-all duration-100 ease-in-out hover:border-zinc-500 active:border-zinc-400 active:opacity-70 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-zinc-200 disabled:hover:text-zinc-950">
                                                    تماس بگیرید
                                                </button>
                                            </a>
                                        </div>
                                        <div className="flex flex-col items-center justify-center gap-2 rounded-xl bg-zinc-50 px-3 py-2 xl:px-6">
                                            <span className="pricing-header text-2xl font-medium">
                                                حرفه‌ای
                                            </span>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-medium text-zinc-600">
                                                ۱٬۶۹۹ هزار تومان / ماهانه
                                                </span>
                                            </div>
                                            <a href="/dashboard?next=/settings/plans">
                                                <button className="bg-white-gradient shadow-button hover:shadow-button-hover hover:bg-white-gradient-hover active:bg-white-gradient-hover disabled:hover:shadow-button disabled:hover:bg-white-gradient inline-flex h-auto w-full items-center justify-center whitespace-nowrap rounded-xl border bg-blue-700 px-4 py-2 text-sm font-medium text-white transition-all duration-100 ease-in-out hover:border-zinc-500 active:border-zinc-400 active:opacity-70 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-zinc-200 disabled:hover:text-zinc-950">
                                                    تماس بگیرید
                                                </button>
                                            </a>
                                        </div>
                                        <div className="flex flex-col items-center justify-center gap-2 rounded-xl px-3 py-2 xl:px-6">
                                            <span className="pricing-header text-2xl font-medium">
                                                سازمانی
                                            </span>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-medium text-zinc-600">
                                                    تماس بگیرید
                                                </span>
                                            </div>
                                            <a href="/dashboard?next=/settings/plans">
                                                <button className="bg-white-gradient shadow-button hover:shadow-button-hover hover:bg-white-gradient-hover active:bg-white-gradient-hover disabled:hover:shadow-button disabled:hover:bg-white-gradient inline-flex h-auto w-full items-center justify-center whitespace-nowrap rounded-xl border px-4 py-2 text-sm font-medium text-zinc-950 transition-all duration-100 ease-in-out hover:border-zinc-500 active:border-zinc-400 active:opacity-70 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-zinc-200 disabled:hover:text-zinc-950">
                                                    تماس بگیرید
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span
                                aria-hidden="true"
                                className="block h-[1px] w-full scale-x-100 bg-zinc-200 opacity-100 transition-all duration-300 ease-in-out"
                            ></span>
                        </header>
                        <div className="mt-5 grid grid-cols-9 gap-4 bg-white">
                            <div
                                id="col-main"
                                className="col-span-2 flex flex-col items-start gap-6"
                            >
                                <div className="relative flex w-full flex-col">
                                    <span className="sticky top-[217px] flex h-16 w-dvw items-center border-b border-b-zinc-200 bg-white text-xl font-semibold ">
                                        <span className="pricing-header">
                                            تنظیمات
                                        </span>
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                    پیام ماهانه                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        دستیار هوش مصنوعی
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        ذخیره کاراکتر / دستیار
                                    </span>
                                    {/* <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        Team members
                                    </span> */}
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        استفاده در وبسایت
                                    </span>
                                </div>
                                <div className="relative flex w-full flex-col">
                                    <span className="sticky top-[217px] flex h-16 w-dvw items-center border-b border-b-zinc-200 bg-white text-xl font-semibold ">
                                        <span className="pricing-header">
                                            آموزش
                                        </span>
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        لینک ها
                                    </span>
                                </div>
                                <div className="relative flex w-full flex-col">
                                    <span className="sticky top-[217px] flex h-16 w-dvw items-center border-b border-b-zinc-200 bg-white text-xl font-semibold ">
                                        <span className="pricing-header">
                                            فعالیت
                                        </span>
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        تاریخچه چت
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        فرم اطلاعات (به زودی)
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        آنالیز
                                    </span>
                                </div>
                                <div className="relative flex w-full flex-col">
                                    <span className="sticky top-[217px] flex h-16 w-dvw items-center border-b border-b-zinc-200 bg-white text-xl font-semibold ">
                                        <span className="pricing-header">
                                            یکپارچه‌سازی‌ها و API
                                        </span>
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        دسترسی به API (به زودی)
                                    </span>
                                    {/* <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        Zapier
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        Slack
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        WhatsApp
                                    </span>
                                    <span className="flzex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        Messenger (Coming soon)
                                    </span> */}
                                </div>
                                <div className="relative flex w-full flex-col">
                                    <span className="sticky top-[217px] flex h-16 w-dvw items-center border-b border-b-zinc-200 bg-white text-xl font-semibold ">
                                        <span className="pricing-header">
                                            مدل هوش مصنوعی
                                        </span>
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        GPT-3.5
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        GPT-4o (پیشرفته‌ترین و کارآمدترین مدل)
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        GPT-4-Turbo
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        GPT-4
                                    </span>
                                </div>
                                <div className="relative flex w-full flex-col">
                                    <span className="sticky top-[217px] flex h-16 w-dvw items-center border-b border-b-zinc-200 bg-white text-xl font-semibold ">
                                        <span className="pricing-header">
                                            برندسازی
                                        </span>
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        حذف لوگوی همیارچت
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        دامنه یا لوگوی سفارشی شما
                                    </span>
                                </div>
                                <div className="relative flex w-full flex-col">
                                    <span className="sticky top-[217px] flex h-16 w-dvw items-center border-b border-b-zinc-200 bg-white text-xl font-semibold ">
                                        <span className="pricing-header">
                                            پشتیبانی
                                        </span>
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        پشتیبانی ۲۴/۷
                                    </span>
                                    <span className="flex h-16 w-full items-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-900">
                                        مشاوره اختصاصی
                                    </span>
                                </div>
                            </div>
                            <div className="col-span-7 grid grid-cols-4 gap-4 focus-visible:outline-none focus-visible:ring-0 data-[state=inactive]:hidden">
                                <div
                                    id="col0"
                                    className="flex w-full flex-col gap-6"
                                >
                                    <div
                                        id="col0-row0"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                        ۱۰۰
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            1
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            400,000
                                        </span>
                                        {/* <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            1
                                        </span> */}
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                    </div>
                                    <div
                                        id="col0-row1"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            ۱۰ لینک
                                        </span>
                                    </div>
                                    <div
                                        id="col0-row2"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <CrossIcon/>
                                        </span>
                                    </div>
                                    <div
                                        id="col0-row3"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <CrossIcon/>
                                        </span>
                                        {/* <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <CrossIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <CrossIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <CrossIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <CrossIcon/>
                                        </span> */}
                                    </div>
                                    <div
                                        id="col0-row4"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <CrossIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <CrossIcon/>
                                        </span>
                                    </div>
                                    <div
                                        id="col0-row5"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <CrossIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <CrossIcon/>
                                        </span>
                                    </div>
                                    <div
                                        id="col0-row6"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <CrossIcon/>
                                        </span>
                                    </div>
                                </div>
                                <div
                                    id="col1"
                                    className="flex w-full flex-col gap-6"
                                >
                                    <div
                                        id="col1-row0"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                        ۱٬۲۰۰
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                        ۳
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            11,000,000
                                        </span>
                                        {/* <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            1
                                        </span> */}
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                    </div>
                                    <div
                                        id="col1-row1"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            نامحدود
                                        </span>
                                    </div>
                                    <div
                                        id="col1-row2"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                    </div>
                                    <div
                                        id="col1-row3"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                    </div>
                                    <div
                                        id="col1-row4"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <CrossIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <CrossIcon/>
                                        </span>
                                    </div>
                                    <div
                                        id="col1-row5"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <CrossIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <CrossIcon/>
                                        </span>
                                    </div>
                                    <div
                                        id="col1-row6"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/20">
                                            <CrossIcon/>
                                        </span>
                                    </div>
                                </div>
                                <div
                                    id="col2"
                                    className="flex w-full flex-col gap-6"
                                >
                                    <div
                                        id="col2-row0"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/90">
                                        ۴٬۲۰۰
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/90">
                                            5
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/90">
                                            نامحدود
                                        </span>
                                        {/* <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/90">
                                            3
                                        </span> */}
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                    </div>
                                    <div
                                        id="col2-row1"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/90">
                                            نامحدود
                                        </span>
                                    </div>
                                    <div
                                        id="col2-row2"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                    </div>
                                    <div
                                        id="col2-row3"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                    </div>
                                    <div
                                        id="col2-row4"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                    </div>
                                    <div
                                        id="col2-row5"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/20">
                                        <CrossIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/20">
                                            <CheckIcon/>
                                        </span>
                                    </div>
                                    <div
                                        id="col2-row6"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/20">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 bg-zinc-50 text-sm font-medium text-zinc-500/20">
                                            <CheckIcon/>
                                        </span>
                                    </div>
                                </div>
                                <div
                                    id="col3"
                                    className="flex w-full flex-col gap-6"
                                >
                                    <div
                                        id="col3-row0"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                        نامحدود
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                        نامحدود
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            نامحدود
                                        </span>
                                        {/* <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            5
                                        </span> */}
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                    </div>
                                    <div
                                        id="col3-row1"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-500/90">
                                            نامحدود
                                        </span>
                                    </div>
                                    <div
                                        id="col3-row2"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                    </div>
                                    <div
                                        id="col3-row3"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                    </div>
                                    <div
                                        id="col3-row4"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                    </div>
                                    <div
                                        id="col3-row5"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                    </div>
                                    <div
                                        id="col3-row6"
                                        className="mt-16 flex w-full flex-col"
                                    >
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                        <span className="flex h-16 w-full items-center justify-center border-b border-b-zinc-200/50 text-sm font-medium text-zinc-950">
                                            <CheckIcon/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <MobilePricingFeatures />
                </div>
            </div>
        </section>
    )
}

export default Pricing

const List = ({ children }: any) => {
    return (
        <p className="text-body-color dark:text-dark-6 text-base">{children}</p>
    )
}
