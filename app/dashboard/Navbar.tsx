import { useEffect, useState } from "react";
import {  LayoutGrid, History, Wallet, User, Home, Sun, Moon, } from "lucide-react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import Logo from "~/assests/adexhub-logo.png";
import { NavLink } from "react-router";
import baas from "lib/kroxt";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
        document.documentElement.classList.add("dark");
        } else {
        document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    const logout = async () => {
        await baas.auth.logout();
    }
    
    return (
        <section className="fixed top-0 lg:left-64 lg:w-[calc(100%-16rem)] w-full bg-white dark:bg-gray-900 px-3 py-3 md:py-4 md:px-6 z-40 flex items-center transition-colors border-b border-gray-300 dark:border-slate-800 shadow-md">
            <div className="flex justify-between items-center w-full">
                <div className="hidden lg:block">
                    <NavLink to="/dashboard">
                        <h3>
                            <span className="text-[#0F172A] dark:text-white font-bold text-2xl tracking-tight">Dashboard</span>
                        </h3>
                    </NavLink>
                </div>
                <div className="flex lg:hidden items-center space-x-1">
                    <div>
                        <NavLink to="#home">
                            <img src={Logo} alt="Logo" className="w-12 h-12" />
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="#home">
                            <h1 className="uppercase font-bold text-xl text-[#151c2b] dark:text-white">Adex<span className="text-[#1ebb70]">hub</span></h1>
                        </NavLink>
                    </div>
                </div>

                <div className="hidden lg:flex space-x-5">
                    <NavLink to="/dashboard" className="flex items-center gap-1 text-sm text-[#6a7181] dark:text-slate-300 hover:text-[#1ebb70]">
                        <Home size={20} className="font-light" /> Home
                    </NavLink>
                    <NavLink to="/dashboard/PinPortal" className="flex items-center gap-1 text-sm text-[#6a7181] dark:text-slate-300 hover:text-[#1ebb70]">
                        <History size={20} className="font-light" /> Pin Portal
                    </NavLink>
                    <NavLink to="/dashboard/Pricing" className="flex items-center gap-1 text-sm text-[#6a7181] dark:text-slate-300 hover:text-[#1ebb70]">
                        <Wallet size={20} className="font-light" /> Pricing
                    </NavLink>
                    <NavLink onClick={logout} to="/login" className="flex items-center gap-1 text-sm hover:text-red-500 text-[#6a7181] dark:text-red-500">
                        <User size={20} className="font-light" /> Log Out
                    </NavLink>
                </div>

                {/* Menu Toggle Button */}
                <div className="lg:hidden">
                    <button onClick={() => setOpen(!open)} className="relative z-50 p-2 text-xl transition-all duration-300 cursor-pointer me-2">
                        {open ? (
                            <HiX className="text-slate-800 dark:text-white" /> 
                        ) : (
                            <FaBars className="text-slate-800 dark:text-white" />
                        )}
                    </button>
                </div>
            </div>

            {open && (
                <div className="lg:hidden absolute top-13 left-0 w-full bg-[#ffffff] dark:bg-gray-900 backdrop-blur-lg animate-in slide-in-from-top duration-300 z-30 shadow-md">
                    <div className="px-4 md:px-9 py-8 space-y-6">
                        <NavLink to="/dashboard" className="flex items-center gap-1 text-sm font-semibold text-[#6a7181] hover:text-[#1ebb70]" onClick={() => setOpen(false)}>
                            <LayoutGrid size={20} className="font-light" /> Home
                        </NavLink>
                        <NavLink to="/dashboard/PinPortal" className="flex items-center gap-1 text-sm font-semibold text-[#6a7181] hover:text-[#1ebb70]" onClick={() => setOpen(false)}>
                            <History size={20} className="font-light" /> Pin Portal
                        </NavLink>
                        <NavLink to="/dashboard/Pricing" className="flex items-center gap-1 text-sm font-semibold text-[#6a7181] hover:text-[#1ebb70]" onClick={() => setOpen(false)}>
                            <Wallet size={20} className="font-light" /> Pricing
                        </NavLink>
                        <NavLink to="/login" className="flex items-center gap-1 text-sm font-semibold text-[#6a7181] hover:text-red-500" onClick={() => setOpen(false)}>
                            <User size={20} className="font-light" /> Log Out
                        </NavLink>

                        {/* Bottom Section: Theme Toggle */}
                        <div>
                            <div className="flex items-center space-x-7">
                                {/* Dark Mode */}
                                <button onClick={() => setDarkMode(true)} className={`flex items-center gap-2 text-sm font-semibold cursor-pointer py-1.5 px-2.5 md:px-0 rounded-lg ${darkMode ? "bg-slate-800 text-white" : "text-[#6a7181]"}`}>
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
                </div>
            )}    
        </section>
    )
}