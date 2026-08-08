import Logo from "~/assests/adexhub-logo.png";
import { LayoutGrid, History, Wallet, LogOut, Sun, Moon } from "lucide-react";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";

export default function Sidebar() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
        document.documentElement.classList.add("dark");
        } else {
        document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);
    return (
        <div className="hidden lg:flex flex-col h-screen w-64 fixed left-0 top-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-slate-800 p-4">
        
            {/* Logo Section */}
            <div className="flex items-center space-x-2 px-2 mb-8">
                <a href="/dashboard" className="flex items-center gap-2">
                    <img src={Logo} alt="Logo" className="w-13 h-13 object-contain" />
                    <h1 className="uppercase font-bold text-2xl text-slate-800 dark:text-white">
                        Adex<span className="text-emerald-500">hub</span>
                    </h1>
                </a>
            </div>

            {/* Navigation */}
            <nav className="flex-1 flex flex-col space-y-2">

                <NavLink to="/dashboard" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500 text-white shadow-lg">
                    <LayoutGrid size={20} />
                    <span className="font-medium">Dashboard</span>
                </NavLink>

                <NavLink to="/dashboard/PinPortal" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
                    <History size={20} />
                    <span>Pin Portal</span>
                </NavLink>

                <NavLink to="/dashboard/Pricing" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
                    <Wallet size={20} />
                    <span>Pricing</span>
                </NavLink>

                <NavLink to="/login" className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-950">
                    <LogOut size={20} />
                    <span>Logout</span>
                </NavLink>
            </nav>

            {/* Theme Toggle */}
            <div className="py-6 border-t border-gray-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                    {/* Dark Mode */}
                    <button onClick={() => setDarkMode(true)} className={`flex items-center gap-2 text-sm font-medium cursor-pointer px-3 py-1.5 rounded-lg ${darkMode ? "bg-slate-800 text-white" : "text-slate-400"}`}>
                        <Moon size={16} />
                        <span>Dark Mode</span>
                    </button>

                    {/* Light Mode */}
                    <button onClick={() => setDarkMode(false)} className={`flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-lg text-sm font-semibold ${!darkMode ? "bg-emerald-50 text-[#1ebb70]" : "bg-emerald-500 text-white"}`}>
                        <Sun size={16} />
                        <span>Light</span>
                    </button>
                </div>
            </div>
        </div>
    );
}