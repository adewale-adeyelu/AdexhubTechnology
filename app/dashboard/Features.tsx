import { Code, Flashlight, Phone, Smartphone, Tags, Ticket, Tv, Wallet, Wifi, X, Zap } from "lucide-react";
import { useState, useRef } from "react";
import { NavLink } from "react-router";

const Feature = () => {
    const [offcanvasMenuIsOpen, setOffcanvasMenuIsOpen] = useState(false);
    const [airtimeoffcanvasMenuIsOpen, setAirtimeOffcanvasMenuIsOpen] = useState(false);
    const [lightoffcanvasMenuIsOpen, setLightOffcanvasMenuIsOpen] = useState(false);
    const [tvoffcanvasMenuIsOpen, setTvOffcanvasMenuIsOpen] = useState(false);
    const [fundoffcanvasMenuIsOpen, setFundOffcanvasMenuIsOpen] = useState(false);
    const [devoffcanvasMenuIsOpen, setDevOffcanvasMenuIsOpen] = useState(false);
    const [value, setValue] = useState("");
    const [value1, setValue1] = useState("");
    const [data, setData] = useState("");
    const [airtime, setAirtime] = useState("");
    const [tv, setTv] = useState("");
    const distributionRef = useRef(null);
    return (  
        <section className="relative lg:left-64 lg:w-[calc(100%-16rem)] w-full pt-7 px-5 pb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {/* 1st button */}
                <button className="shadow-lg p-5 rounded-lg bg-white dark:bg-gray-800 cursor-pointer border border-gray-100 dark:border-slate-900" onClick={() => setOffcanvasMenuIsOpen(true)}>
                    <div className="flex items-center space-x-2">
                        <div className="bg-blue-600 p-2 rounded-full">
                            <Wifi className="text-white" size={18}/>
                        </div>
                        <p className="text-[#212529] dark:text-white text-sm font-semibold">
                            Buy Data
                        </p>
                    </div>
                </button>
                {/* data Off-Canvas */}
                <div className="fixed inset-0 z-50 pointer-events-none">
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${offcanvasMenuIsOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setOffcanvasMenuIsOpen(false)}/>

                    {/* Panel */}
                    <div className={`fixed bg-white dark:bg-gray-900 shadow-xl z-50 w-full h-[80%] bottom-0 md:top-0 md:right-0 md:h-full md:w-96
                        transform transition-transform duration-500 ease-out ${offcanvasMenuIsOpen ? "translate-y-0 md:translate-y-0 md:translate-x-0" : "translate-y-full md:translate-y-0 md:translate-x-full"}`}>

                        <div className="md:w-96 w-auto h-full py-5 px-4">
                            <div className="flex items-center justify-between mt-1 pointer-events-auto">
                                <h1 className="text-[#1ebb70] text-2xl font-semibold">
                                    Buy Data
                                </h1>
                                <button className="absolute top-7 right-5 cursor-pointer" onClick={() => setOffcanvasMenuIsOpen(false)}>
                                    <X className="w-7 h-6 dark:text-white" />
                                </button>
                            </div>
                            
                            <div className="mt-10 flex flex-col space-y-10">
                                <div className="border border-gray-300 dark:border-slate-800 py-6 px-3">
                                    
                                    <p className="text-md font-light pt-2 ps-1 dark:text-[#b3b3b3]">
                                        Phone Number
                                    </p>
                                    <form className="py-1 pointer-events-auto">
                                        <input type="number" className="border border-gray-300 dark:text-white dark:border-slate-800  w-full rounded-xl py-3 px-3"  />
                                    </form>
                                
                                    <p className="text-md font-light pt-2 ps-1 dark:text-[#b3b3b3]">
                                        Network
                                    </p>
                                    <form className="py-1 pointer-events-auto">
                                        <div className="relative">
                                            <input className="border border-gray-300 dark:border-slate-800 dark:text-white w-full rounded-xl py-3 px-3" placeholder="..." value={data} readOnly />

                                            <select ref={distributionRef} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer focus:outline-none appearance-none px-2 dark:bg-gray-900" onChange={(e) => setData(e.target.options[e.target.selectedIndex].text)}>
                                                <option className="dark:text-[#b3b3b3]" value="....">....</option>
                                                <option className="dark:text-[#b3b3b3]" value="Airtel">Airtel</option>
                                                <option className="dark:text-[#b3b3b3]" value="MTN">MTN</option>
                                                <option className="dark:text-[#b3b3b3]" value="GLO">GLO</option>
                                                <option className="dark:text-[#b3b3b3]" value="9Mobile">9Mobile</option>
                                            </select>
                                        </div>
                                    </form>
                                
                                    <p className="text-md font-light pt-2 ps-1 dark:text-[#b3b3b3]">
                                        Data Type
                                    </p>
                                    <form className="py-1 pointer-events-auto">
                                        <input className="border border-gray-300 dark:border-slate-800 dark:text-white w-full rounded-xl py-3 px-3"  />
                                    </form>
                                    
                                    <p className="text-md font-light pt-2 ps-1 dark:text-[#b3b3b3]">
                                        Data Rate
                                    </p>
                                    <form className="py-1 pointer-events-auto">
                                        <input className="border border-gray-300 dark:border-slate-800 dark:text-white w-full rounded-xl py-3 px-3"  />
                                    </form>
                                    <button className="bg-[#1ebb70] text-white w-full text-center py-3 uppercase text-md rounded-xl mt-5 cursor-pointer">
                                        Buy Data
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2nd button */}
                <button className="shadow-lg p-5 rounded-lg bg-white dark:bg-gray-800 cursor-pointer border border-gray-100 dark:border-slate-900" onClick={() => setAirtimeOffcanvasMenuIsOpen(true)}>
                    <div className="flex space-x-2 items-center">
                        <div className="bg-green-600 p-2 rounded-full">
                            <Smartphone className="text-white" size={18}/>
                        </div>
                        <p className="text-[#212529] dark:text-white text-nowrap text-sm font-semibold">
                            Buy Airtime
                        </p>
                    </div>
                </button>
                {/* airtime Off-Canvas */}
                <div className="fixed inset-0 z-50 pointer-events-none">
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${airtimeoffcanvasMenuIsOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setAirtimeOffcanvasMenuIsOpen(false)}/>

                    {/* Panel */}
                    <div className={`fixed bg-white dark:bg-gray-900 shadow-xl z-50 w-full h-[80%] bottom-0 md:top-0 md:right-0 md:h-full md:w-96
                        transform transition-transform duration-500 ease-out ${airtimeoffcanvasMenuIsOpen ? "translate-y-0 md:translate-y-0 md:translate-x-0" : "translate-y-full md:translate-y-0 md:translate-x-full"}`}>

                        {/* Right Panel */}
                        <div className="md:w-96 w-auto h-full py-5 px-4">
                            <div className="flex items-center justify-between mt-1 pointer-events-auto">
                                <h1 className="text-[#1ebb70] text-2xl font-semibold">
                                    Buy Airtime
                                </h1>
                                <button className="absolute top-7 right-5 cursor-pointer" onClick={() => setAirtimeOffcanvasMenuIsOpen(false)}>
                                    <X className="w-7 h-6 dark:text-white" />
                                </button>
                            </div>
                            
                            <div className="mt-10 space-y-10">
                                <div className="border border-gray-300 dark:border-slate-800 py-6 px-3">
                                    {/* 1st input */}
                                    <p className="text-md font-light pt-2 ps-1 dark:text-[#b3b3b3]">
                                        Phone Number
                                    </p>
                                    <form className="py-1 pointer-events-auto">
                                        <input type="number" className="border border-gray-300 dark:text-white dark:border-slate-800 w-full rounded-xl py-3 px-3"  />
                                    </form>
                                    {/* 2nd input */}
                                    <p className="text-md font-light pt-2 ps-1 dark:text-[#b3b3b3]">
                                        Network
                                    </p>
                                    <form className="py-1 pointer-events-auto">
                                        <div className="relative">
                                            <input className="border border-gray-300 dark:text-white dark:border-slate-800 w-full rounded-xl py-3 px-3" placeholder="..." value={airtime} readOnly />

                                            <select ref={distributionRef} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer focus:outline-none appearance-none px-2 dark:bg-gray-900" onChange={(e) => setAirtime(e.target.options[e.target.selectedIndex].text)}>
                                                <option className="dark:text-[#b3b3b3]" value="....">....</option>
                                                <option className="dark:text-[#b3b3b3]" value="Airtel">Airtel</option>
                                                <option className="dark:text-[#b3b3b3]" value="MTN">MTN</option>
                                                <option className="dark:text-[#b3b3b3]" value="GLO">GLO</option>
                                                <option className="dark:text-[#b3b3b3]" value="9Mobile">9Mobile</option>
                                            </select>
                                        </div>
                                    </form>
                                    {/* 3rd input */}
                                    <p className="text-md font-light pt-2 ps-1 dark:text-[#b3b3b3]">
                                        Airtime Amount
                                    </p>
                                    <form className="py-1 pointer-events-auto">
                                        <input type="number" className="border border-gray-300 dark:text-white dark:border-slate-800 w-full rounded-xl py-3 px-3"  />
                                    </form>
                                    <button className="bg-[#1ebb70] text-white w-full text-center py-3 uppercase text-md rounded-xl mt-5 cursor-pointer">
                                        Buy Airtime
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3rd button */}
                <NavLink to="/dashboard/PinPortal" className="shadow-lg p-5 rounded-lg bg-white dark:bg-slate-800 cursor-pointer border border-gray-100 dark:border-slate-800">
                    <div className="flex space-x-2 items-center">
                        <div className="bg-yellow-600 p-2 rounded-full">
                            <Ticket className="text-white" size={18}/>
                        </div>
                        <p className="text-[#212529] dark:text-white text-sm font-semibold">
                            Data Pins
                        </p>
                    </div>
                </NavLink>
               
                {/* 4th button */}
                <button className="shadow-lg p-5 rounded-lg bg-white dark:bg-gray-800 cursor-pointer border border-gray-100 dark:border-slate-900" onClick={() => setLightOffcanvasMenuIsOpen(true)}>
                    <div className="flex space-x-2 items-center">
                        <div className="bg-red-600 p-2 rounded-full">
                            <Zap className="text-white" size={18}/>
                        </div>
                        <p className="text-[#212529] dark:text-white text-sm font-semibold">
                            Electricity
                        </p>
                    </div>
                </button>
                {/* light Off-Canvas */}
                <div className="fixed inset-0 z-50 pointer-events-none">
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${lightoffcanvasMenuIsOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setLightOffcanvasMenuIsOpen(false)}/>

                    {/* Panel */}
                    <div className={`fixed bg-white dark:bg-gray-900 shadow-xl z-50 w-full h-[75%] bottom-0 md:top-0 md:right-0 md:h-full md:w-96
                        transform transition-transform duration-500 ease-out ${lightoffcanvasMenuIsOpen ? "translate-y-0 md:translate-y-0 md:translate-x-0" : "translate-y-full md:translate-y-0 md:translate-x-full"}`}>

                         {/* Right Panel */}
                        <div className="md:w-96 w-auto h-full py-5 px-4">
                            <div className="flex items-center justify-between mt-1 pointer-events-auto">
                                <h1 className="text-[#1ebb70] text-2xl font-semibold">
                                    Electricity
                                </h1>
                                <button className="absolute top-7 right-5 cursor-pointer" onClick={() => setLightOffcanvasMenuIsOpen(false)}>
                                    <X className="w-7 h-6 dark:text-white" />
                                </button>
                            </div>
                            
                            <div className="mt-6 space-y-10">
                                <div className="border border-gray-300 dark:border-slate-800 py-6 px-3">
                                    {/* 1st input */}
                                    <p className="text-md font-light pt-1 ps-1 dark:text-[#b3b3b3]">
                                        Card Number
                                    </p>
                                    <form className="py-1 pointer-events-auto">
                                        <input type="number" className="border border-gray-300 dark:text-white dark:border-slate-800 w-full rounded-xl py-3 px-3"  />
                                    </form>
                                    {/* 2nd input */}
                                    <p className="text-md font-light pt-2 ps-1 dark:text-[#b3b3b3]">
                                        Distribution
                                    </p>
                                    <form className="py-1 pointer-events-auto">
                                        <div className="relative">
                                            <input className="border border-gray-300 dark:text-white dark:border-slate-800 w-full rounded-xl py-3 px-3" placeholder="..." value={value} readOnly />

                                            <select ref={distributionRef} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer focus:outline-none appearance-none px-2 dark:bg-gray-900" onChange={(e) => setValue(e.target.options[e.target.selectedIndex].text)}>
                                                <option className="dark:text-[#b3b3b3]" value="....">....</option>
                                                <option className="dark:text-[#b3b3b3]" value="abuja-electric">Abuja Electricity (AEDC)</option>
                                                <option className="dark:text-[#b3b3b3]" value="benin-electric">Benin Electricity (BEDC)</option>
                                                <option className="dark:text-[#b3b3b3]" value="eko-electric">Eko Electricity (EKEDC)</option>
                                                <option className="dark:text-[#b3b3b3]" value="enugu-electric">Enugu Electricity (EEDC)</option>
                                                <option className="dark:text-[#b3b3b3]" value="ibadan-electric">Ibadan Electricity (IBEDC)</option>
                                                <option className="dark:text-[#b3b3b3]" value="ikeja-electric">Ikeja Electricity (IKEDC)</option>
                                                <option className="dark:text-[#b3b3b3]" value="jos-electric">Jos Electricity (JEDC)</option>
                                                <option className="dark:text-[#b3b3b3]" value="kaduna-electric">Kaduna Electricity (KAEDC)</option>
                                                <option className="dark:text-[#b3b3b3]" value="kano-electric">Kano Electricity (KEDCO)</option>
                                                <option className="dark:text-[#b3b3b3]" value="port-harcourt-electric">Port Harcourt Electricity (PHED)</option>
                                                <option className="dark:text-[#b3b3b3]" value="yola-electric">Yola Electricity (YEDC)</option>
                                            </select>
                                        </div>
                                    </form>
                                    {/* 3rd input */}
                                    <p className="text-md font-light pt-2 ps-1 dark:text-[#b3b3b3]">
                                        Type
                                    </p>
                                    <form className="py-1 pointer-events-auto">
                                        <div className="relative">
                                            <input className="border border-gray-300 dark:text-white dark:border-slate-800 w-full rounded-xl py-3 px-3" placeholder="..." value={value1} readOnly />

                                            <select ref={distributionRef} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer focus:outline-none appearance-none px-2 dark:bg-gray-900" onChange={(e) => setValue1(e.target.options[e.target.selectedIndex].text)}>
                                                <option className="dark:text-[#b3b3b3]" value="....">....</option>
                                                <option className="dark:text-[#b3b3b3]" value="">Prepaid</option>
                                                <option className="dark:text-[#b3b3b3]" value="">Postpaid</option>
                                            </select>
                                        </div>
                                    </form>
                                    {/* 4th input */}
                                    <p className="text-md font-light pt-2 ps-1 dark:text-[#b3b3b3]">
                                        Amount
                                    </p>
                                    <form className="py-1 pointer-events-auto">
                                        <input className="border border-gray-300 dark:text-white dark:border-slate-800 w-full rounded-xl py-2 px-3"  />
                                    </form>
                                    <button className="bg-[#1ebb70] text-white w-full text-center py-3 uppercase text-md rounded-xl mt-5 cursor-pointer">
                                        Pay Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5th button */}
                <button className="shadow-lg p-5 rounded-lg bg-white dark:bg-gray-800 cursor-pointer border border-gray-100 dark:border-slate-900" onClick={() => setTvOffcanvasMenuIsOpen(true)}>
                    <div className="flex space-x-2 items-center">
                        <div className="bg-blue-500 p-2 rounded-full">
                            <Tv className="text-white" size={18}/>
                        </div>
                        <p className="text-[#212529] dark:text-white text-sm font-semibold">
                            TV Sub
                        </p>
                    </div>
                </button>
                {/* tv Off-Canvas */}
                <div className="fixed inset-0 z-50 pointer-events-none">
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${tvoffcanvasMenuIsOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setTvOffcanvasMenuIsOpen(false)}/>

                    {/* Panel */}
                    <div className={`fixed bg-white dark:bg-gray-900 shadow-xl z-50 w-full h-[75%] bottom-0 md:top-0 md:right-0 md:h-full md:w-96
                        transform transition-transform duration-500 ease-out ${tvoffcanvasMenuIsOpen ? "translate-y-0 md:translate-y-0 md:translate-x-0" : "translate-y-full md:translate-y-0 md:translate-x-full"}`}>

                        {/* Right Panel */}
                        <div className="md:w-96 w-auto h-full py-7 px-4">
                            <div className="flex items-center justify-between mt-1 pointer-events-auto">
                                <h1 className="text-[#1ebb70] text-2xl font-semibold">
                                    Tv Sub
                                </h1>
                                <button className="absolute top-7 right-5 cursor-pointer" onClick={() => setTvOffcanvasMenuIsOpen(false)}>
                                    <X className="w-7 h-6 dark:text-white" />
                                </button>
                            </div>
                            
                            <div className="mt-10 space-y-10">
                                <div className="border border-gray-300 dark:border-slate-800 py-6 px-3">
                                    {/* 1st input */}
                                    <p className="text-md font-light pt-2 ps-1 dark:text-[#b3b3b3]">
                                        Card Number
                                    </p>
                                    <form className="py-1 pointer-events-auto">
                                        <input type="number" className="border border-gray-300 dark:text-white dark:border-slate-800 w-full rounded-xl py-3 px-3"  />
                                    </form>
                                    {/* 2nd input */}
                                    <p className="text-md font-light pt-2 ps-1 dark:text-[#b3b3b3]">
                                        TV Provides
                                    </p>
                                    <form className="py-1 pointer-events-auto">
                                        <div className="relative">
                                            <input className="border border-gray-300 dark:text-white dark:border-slate-800 w-full rounded-xl py-3 px-3" placeholder="..." value={tv} readOnly />

                                            <select ref={distributionRef} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer focus:outline-none appearance-none px-2 dark:bg-gray-900" onChange={(e) => setTv(e.target.options[e.target.selectedIndex].text)}>
                                                <option className="dark:text-[#b3b3b3]" value="....">....</option>
                                                <option className="dark:text-[#b3b3b3]" value="Airtel">DSTV</option>
                                                <option className="dark:text-[#b3b3b3]" value="MTN">GOTV</option>
                                                <option className="dark:text-[#b3b3b3]" value="GLO">STARTIMES</option>
                                            </select>
                                        </div>
                                    </form>
                                    {/* 3rd input */}
                                    <p className="text-md font-light pt-2 ps-1 dark:text-[#b3b3b3]">
                                        Choose A plan
                                    </p>
                                    <form className="py-1 pointer-events-auto">
                                        <input className="border border-gray-300 dark:text-white dark:border-slate-800 w-full rounded-xl py-3 px-3"  />
                                    </form>
                                    <button className="bg-[#1ebb70] text-white w-full text-center py-3 uppercase text-md rounded-xl mt-5 cursor-pointer">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                {/* 6th button */}
                <button className="shadow-lg p-5 rounded-lg bg-white dark:bg-gray-800 cursor-pointer border border-gray-100 dark:border-slate-900" onClick={() => setFundOffcanvasMenuIsOpen(true)}>
                    <div className="flex space-x-2 items-center">
                        <div className="bg-black p-2 rounded-full">
                            <Wallet className="text-white" size={18}/>
                        </div>
                        <p className="text-[#212529] dark:text-white text-sm text-nowrap font-semibold">
                            Fund Wallet
                        </p>
                    </div>
                </button>
                {/* funds Off-Canvas */}
                <div className="fixed inset-0 z-50 pointer-events-none">
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${fundoffcanvasMenuIsOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setFundOffcanvasMenuIsOpen(false)}/>

                    {/* Panel */}
                    <div className={`fixed bg-white dark:bg-gray-900 shadow-xl z-50 w-full h-[75%] bottom-0 md:top-0 md:right-0 md:h-full md:w-96
                        transform transition-transform duration-500 ease-out ${fundoffcanvasMenuIsOpen ? "translate-y-0 md:translate-y-0 md:translate-x-0" : "translate-y-full md:translate-y-0 md:translate-x-full"}`}>

                        {/* Right Panel */}
                        <div className="md:w-96 w-auto h-full py-5 px-4">
                            <div className="flex items-center justify-between mt-1 pointer-events-auto">
                                <h1 className="text-[#1ebb70] text-2xl font-semibold">
                                    Fund Wallet
                                </h1>
                                <button className="absolute top-7 right-5 cursor-pointer" onClick={() => setFundOffcanvasMenuIsOpen(false)}>
                                    <X className="w-7 h-6 dark:text-white" />
                                </button>
                            </div>
                            
                            <div className="mt-12 space-y-10">
                                <div className="border border-gray-300 dark:border-slate-800 px-3 py-6">
                                    <div className="grid grid-cols-3 gap-1 items-center">
                                        <button className="bg-emerald-50 dark:bg-slate-800 text-lg cursor-pointer pointer-events-auto text-[#1ebb70] rounded-lg p-1">
                                            Monnify
                                        </button>
                                        <button className="text-[#1ebb70] text-lg cursor-pointer pointer-events-auto">
                                            Payvessel
                                        </button>
                                        <button className="text-[#1ebb70] text-lg cursor-pointer pointer-events-auto">
                                            Paystack
                                        </button>
                                        <button className="text-[#1ebb70] text-lg cursor-pointer pointer-events-auto">
                                            Transfer
                                        </button>
                                    </div>
                                    <div className="bg-emerald-50 dark:bg-slate-800 py-3 px-3 rounded-lg mt-3 border border-[#b6effb] dark:border-slate-800">
                                        <div className="flex items-center">
                                            {/* <CircleExclamtionPoint /> */}
                                            <p className="text-[#1ebb70] text-md">
                                                This method allows you to automatically fund your wallet. This is recommended! Stamp duty charge is ₦20
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 7th */}
                <NavLink to="/dashboard/pricing" className="shadow-lg p-5 rounded-lg bg-white dark:bg-slate-800 cursor-pointer border border-gray-100 dark:border-slate-800">
                    <div className="flex space-x-2 items-center">
                        <div className="bg-gray-600 p-2 rounded-full">
                            <Tags className="text-white" size={18}/>
                        </div>
                        <p className="text-[#212529] dark:text-white text-sm font-semibold">
                            Pricing
                        </p>
                    </div>
                </NavLink>

                {/* 8th button */}
                <button className="shadow-lg p-5 rounded-lg bg-white dark:bg-gray-800 cursor-pointer border border-gray-100 dark:border-slate-900" onClick={() => setDevOffcanvasMenuIsOpen(true)}>
                    <div className="flex space-x-2 items-center">
                        <div className="bg-blue-600 p-2 rounded-full">
                            <Code className="text-white" size={18}/>
                        </div>
                        <p className="text-[#212529] dark:text-white text-sm font-semibold">
                            Developer
                        </p>
                    </div>
                </button>
                {/* funds Off-Canvas */}
                <div className="fixed inset-0 z-50 pointer-events-none">
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${devoffcanvasMenuIsOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setDevOffcanvasMenuIsOpen(false)}/>

                    {/* Panel */}
                    <div className={`fixed bg-white dark:bg-gray-900 shadow-xl z-50 w-full h-[75%] bottom-0 md:top-0 md:right-0 md:h-full md:w-96
                        transform transition-transform duration-500 ease-out ${devoffcanvasMenuIsOpen ? "translate-y-0 md:translate-y-0 md:translate-x-0" : "translate-y-full md:translate-y-0 md:translate-x-full"}`}>

                        {/* Right Panel */}
                        <div className="md:w-96 w-auto h-full py-5 px-4">
                            <div className="flex items-center justify-between mt-1 pointer-events-auto">
                                <h1 className="text-[#1ebb70] text-2xl font-semibold">
                                    Developer
                                </h1>
                                <button className="absolute top-7 right-5 cursor-pointer" onClick={() => setDevOffcanvasMenuIsOpen(false)}>
                                    <X className="w-7 h-6 dark:text-white" />
                                </button>
                            </div>
                            
                            <div className="mt-12 space-y-6">
                                <div className="bg-emerald-50 dark:bg-slate-800 py-3 px-3 rounded-lg mt-3 border border-[#b6effb] dark:border-slate-800">
                                    <div className="flex items-center">
                                        {/* <CircleExclamtionPoint /> */}
                                        <p className="text-[#1ebb70] text-md">
                                            Want to consume Dailybest API in your website or mobile app?
                                        </p>
                                    </div>
                                </div>
                                <button className="bg-[#1ebb70] text-white w-full text-center py-3 uppercase text-md rounded-xl cursor-pointer">
                                    Get New API Key
                                </button>
                                <p className="text-center pt-2 text-lg dark:text-white">
                                    Go To <a href="" className="text-[#1ebb70] underline">documentation</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Feature;