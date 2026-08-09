import { useState, useEffect } from "react";
import baas from "lib/kroxt";
import { ArrowDownRight, ChevronRight, CircleArrowRight, Info, X } from "lucide-react";
import type { KroxtUser, AuthSession } from "@kroxt/baas-sdk";

export default function Hero() {
    const [fundWalletOpen, setFundWalletOpen] = useState(false);
    const [withdrawOpen, setWithdrawOpen] = useState(false);
    const [user, setUser] = useState<KroxtUser | null>(null);

    interface ApiResponse<T> {
        success: boolean;
        message: string;
        data: T;
    }

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // 1. Fetch and cast the envelope
                const response: KroxtUser | null = await baas.auth.me();
                console.log("Full SDK Response Envelope:", response);
                // 2. Access the data directly and update the state
                if (response) {
                    setUser(response);
                }
            } catch (err) {
                console.error("Failed to fetch user:", err);
            }
        };
        fetchUser();
    }, []);

    return (
        <section className="relative lg:left-64 lg:w-[calc(100%-16rem)] w-full px-5 pt-24 py-2">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl text-[#212529] dark:text-white leading-relaxed">
                    Hi, {user?.displayName || "User"}
                    <span className="wave">👋</span>
                </h1>
                <p className="text-[#0F172A] dark:text-[#b3b3b3] text-sm md:text-md">
                    We are simply the best...
                </p>
            </div>

            <div className="mt-6">
                <div className="bg-emerald-50 dark:bg-slate-800 py-3 px-5 rounded-lg border border-[#b6effb] dark:border-slate-800 flex items-start space-x-2">
                    <div className="pt-0.5">
                        <Info className="text-emerald-600" size={18} />
                    </div>
                    <div className="items-center text-emerald-600 font-medium text-sm">
                        {/* <CircleExclamtionPoint /> */}
                        Hello team, we are always here to help you! ||<a href="#" className="text-[#1ebb70] underline ps-2">Join Our Whatsapp</a>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5 items-center pt-6">
                    <div className="h-full w-full shadow-lg bg-[hsl(220_60%_12%)] dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-800 dashboardcard" style={{ backgroundPosition: "center", backgroundSize: "cover" }}>
                        <div className="flex justify-between items-center p-5">
                            <div className="space-y-4">
                                <h4 className="text-[#B3B3B3] text-lg font-bold">
                                    Wallet Balance
                                </h4>
                                <p className="text-white text-2xl md:text-3xl font-extrabold">
                                    #2,000,000.00
                                </p>
                                <button className="flex items-center gap-1 text-md text-[#1ebb70] cursor-pointer" onClick={() => setFundWalletOpen(true)}>
                                    <ArrowDownRight />
                                    Fund Wallet
                                </button>
                            </div>
                            <div onClick={() => setFundWalletOpen(true)}>
                                <ChevronRight className="text-[#1ebb70] cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    {/* Fund Wallet Off-Canvas */}
                    <div className="fixed inset-0 z-50 pointer-events-none">

                        {/* Overlay */}
                        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${fundWalletOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setFundWalletOpen(false)} />

                        {/* Panel */}
                        <div className={`fixed bg-white dark:bg-gray-900 shadow-xl p-4 z-50 w-full h-[75%] bottom-0 md:top-0 md:right-0 md:h-full md:w-96 transform transition-transform duration-500 ease-out ${fundWalletOpen ? "translate-y-0 md:translate-y-0 md:translate-x-0" : "translate-y-full md:translate-y-0 md:translate-x-full"}`}>

                            {/* Header */}
                            <div className="flex items-center justify-between pointer-events-auto">
                                <h1 className="text-[#1ebb70] text-2xl font-semibold">Fund Wallet</h1>
                                <button className="cursor-pointer" onClick={() => setFundWalletOpen(false)}>
                                    <X className="w-7 h-7 dark:text-white" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="mt-10 space-y-6">
                                <div className="border border-gray-300 dark:border-slate-800 px-3 py-6 rounded-lg">
                                    <div className="grid grid-cols-3 gap-2 items-center">
                                        <button className="bg-emerald-50 dark:bg-slate-800 pointer-events-auto text-[#1ebb70] rounded-lg p-1">Monnify</button>
                                        <button className="text-[#1ebb70] pointer-events-auto">Payvessel</button>
                                        <button className="text-[#1ebb70] pointer-events-auto">Paystack</button>
                                        <button className="text-[#1ebb70] pointer-events-auto">Transfer</button>
                                    </div>
                                    <div className="bg-emerald-50 dark:bg-slate-800 py-3 px-3 rounded-lg mt-3 border border-[#b6effb] dark:border-slate-800">
                                        <p className="text-[#1ebb70] text-md">
                                            This method allows you to automatically fund your wallet. This is recommended! Stamp duty charge is ₦20
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* second grid */}
                    <div className="h-full w-full shadow-lg bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800  dashboardcard" style={{ backgroundPosition: "center", backgroundSize: "cover" }}>
                        <div className="flex justify-between items-center p-5">
                            <div className="space-y-4">
                                <h4 className="text-[#6c757d] dark:text-[#B3B3B3] text-lg font-bold">
                                    Commission
                                </h4>
                                <p className="text-[#212529] dark:text-white text-2xl md:text-3xl font-bold">
                                    #100,000.00
                                </p>
                                <button className="dark:text-[#1ebb70] cursor-pointer flex items-center gap-1 text-md text-[hsl(220_60%_12%)]" onClick={() => setWithdrawOpen(true)}>
                                    <CircleArrowRight />
                                    Withdraw
                                </button>
                            </div>
                            <div onClick={() => setWithdrawOpen(true)}>
                                <ChevronRight className="dark:text-[#1ebb70] cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    {/* Fund Wallet Off-Canvas */}
                    <div className="fixed inset-0 z-50 pointer-events-none">

                        {/* Overlay */}
                        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${withdrawOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setWithdrawOpen(false)} />

                        {/* Panel */}
                        <div className={`fixed bg-white dark:bg-gray-900 shadow-xl p-4 z-50 w-full h-[75%] bottom-0 md:top-0 md:right-0 md:h-full md:w-96
                            transform transition-transform duration-500 ease-out ${withdrawOpen ? "translate-y-0 md:translate-y-0 md:translate-x-0" : "translate-y-full md:translate-y-0 md:translate-x-full"}`}>

                            {/* Header */}
                            <div className="flex items-center justify-between pointer-events-auto">
                                <h1 className="text-[#1ebb70] text-2xl font-semibold">Withdraw</h1>
                                <button className="cursor-pointer" onClick={() => setWithdrawOpen(false)}>
                                    <X className="w-7 h-7 dark:text-white" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="mt-10 space-y-6">
                                <div className="border border-gray-300 dark:border-slate-800 px-3 py-6 rounded-lg">
                                    <div className="bg-emerald-50 dark:bg-slate-800 py-3 px-3 rounded-lg mt-3 border border-[#b6effb] dark:border-slate-800">
                                        <p className="text-[#1ebb70] text-md">
                                            This method allows you to automatically fund your wallet. This is recommended! Stamp duty charge is ₦20
                                        </p>
                                    </div>
                                    <div className="mt-5">
                                        <p className="text-md dark:text-[#B3B3B3] font-light pt-2 ps-1">Enter Amount</p>
                                        <form className="py-1 pointer-events-auto">
                                            <input type="number" className="border border-gray-300 dark:border-slate-800 w-full rounded-xl py-3 px-3" />
                                        </form>
                                    </div>
                                    <button className="bg-[#1ebb70] text-white w-full text-center py-3 uppercase text-md rounded-xl mt-5 cursor-pointer">
                                        Withdraw
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}