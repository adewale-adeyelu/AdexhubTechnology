import React from "react";

const TransactionCard = () => {
    return (
        <div className="relative lg:left-64 lg:w-[calc(100%-16rem)] w-full pt-3 px-5 pb-12">
            <div className="space-y-4">
                {/* Search */}
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-slate-800 rounded-lg p-3 shadow-sm focus-within:border-[#1ebb70] focus-within:ring-2 focus-within:ring-[#1ebb70]/20 outline-none transition">
                    <input type="text" placeholder="Search. Eg: 08161742895" className="w-full h-8 border-none outline-none rounded-xl p-3 text-sm text-gray-500 dark:text-[#b3b3b3]" />
                </div>

                {/* Transaction Card */}
                <button className="w-full flex items-center justify-between bg-white dark:bg-gray-900 border border-gray-200 dark:border-slate-800 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition">

                    {/* Left */}
                    <div>
                        <p className="text-sm font-semibold text-gray-800 dark:text-[#b3b3b3] uppercase tracking-wide">
                            MONNIFY FUNDING
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            06, Mar 2026 7:30 AM
                        </p>
                    </div>

                    {/* Right */}
                    <div className="text-right">
                        <p className="text-sm font-semibold text-gray-800 dark:text-white">
                            ₦1,320
                        </p>
                        <span className="inline-block mt-1 px-2.5 py-0.5 text-[11px] font-medium text-green-600 dark:text-white bg-green-100 dark:bg-[#1ebb70] rounded-full">
                            Success
                        </span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default TransactionCard;