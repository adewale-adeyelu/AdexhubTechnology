import { ArrowDownRight, Banknote, BarChart3, ChevronRight, CircleCheck, File, FileText, Info, Printer, SquareArrowDownRight, SquareArrowOutDownRight, SquareArrowOutUpRight, Wallet, Wifi, X } from "lucide-react";
import { useState, useRef } from "react";

export default function PinPortal() {
  const [fundWalletOpen, setFundWalletOpen] = useState(false);
  const [generatePinsOpen, setGeneratePinsOpen] = useState(false);
  const [printOutOpen, setPrintOutOpen] = useState(false);
  const [printPricesOpen, setPrintPricesOpen] = useState(false);
  const [salesStatOpen, setSalesStatOpen] = useState(false);
  const distributionRef = useRef(null);
  const [data, setData] = useState("");
  const [airtime, setAirtime] = useState("");
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");

  return (
    <section className="relative lg:left-64 lg:w-[calc(100%-16rem)] w-full min-h-screen px-5 pt-24 py-2">
      
      {/* Header */}
      <div>
        <h1 className="font-bold uppercase text-2xl md:text-4xl text-[#212529] dark:text-[#b3b3b3] leading-relaxed">
          Level ~ level0
        </h1>
      </div>

      <div className="mt-3">
        {/* -------------- Info Banner -------------------- */}
        <div className="bg-emerald-50 dark:bg-slate-800 dark:border-slate-800 py-3 px-5 rounded-lg border border-[#b6effb] flex items-start space-x-2">
          <Info className="text-emerald-600" size={18} />
          <p className="text-emerald-600 font-medium text-sm">
            Hello team, we are always here to help you!
            <a href="#" className="text-[#1ebb70] underline pl-2">
              Join Our Whatsapp
            </a>
          </p>
        </div>

        {/* ------------ CARDS --------------- */}
        <div className="grid md:grid-cols-3 gap-7 items-center mt-8">
          
          {/*--------- Card 1 -------- */}
          <div className="relative flex justify-between w-full shadow-lg bg-[#0066FF] rounded-2xl border border-gray-200 dark:border-slate-800 overflow-hidden">
            
            {/* Background Icon */}
            <Wallet className="absolute text-white opacity-10" size={120} style={{ top: "10px", right: "10px" }} />

            {/* Content */}
            <div className="flex justify-between items-center w-full p-5 z-10">
              <div className="space-y-4">
                <h4 className="text-white text-lg font-bold">
                  Pin Balance
                </h4>

                <p className="text-white text-2xl font-extrabold">
                  ₦2,000.00
                </p>

                <button className="flex items-center gap-1 text-md text-white" onClick={() => setFundWalletOpen(true)}>
                  <SquareArrowOutDownRight />
                  Fund Wallet
                </button>
              </div>

              <ChevronRight className="text-white cursor-pointer" onClick={() => setFundWalletOpen(true)} />
            </div>
          </div>

          {/* Fund Pin Wallet Off-Canvas */}
          <div className="fixed inset-0 z-50 pointer-events-none">
              
            {/* Overlay */}
            <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${fundWalletOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setFundWalletOpen(false)}/>

            {/* Panel */}
            <div className={`fixed bg-white dark:bg-gray-900 shadow-xl p-4 z-50 w-full h-[75%] bottom-0 md:top-0 md:right-0 md:h-full md:w-96 transform transition-transform duration-500 ease-out ${fundWalletOpen ? "translate-y-0 md:translate-y-0 md:translate-x-0" : "translate-y-full md:translate-y-0 md:translate-x-full"}`}>

              {/* Header */}
              <div className="flex items-center justify-between pointer-events-auto">
                <h1 className="text-[#1ebb70] text-2xl font-semibold">Fund Pin Wallet</h1>
                <button className="cursor-pointer" onClick={() => setFundWalletOpen(false)}>
                    <X className="w-7 h-7 dark:text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="mt-10 space-y-6">
                <div className="border border-gray-300 dark:border-slate-800 px-3 py-6 rounded-lg">
                  <div className="bg-emerald-50 dark:bg-slate-800 dark:border-slate-800 py-3 px-3 rounded-lg mt-3 border border-[#b6effb]">
                    <p className="flex items-center text-[#1ebb70] text-md">
                      <File className="me-2" /> 
                      Main Balance
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className="text-md font-light pt-2 ps-1 dark:text-[#b3b3b3]">How Much?</p>
                    <form className="py-1 pointer-events-auto">
                      <input type="number" className="border border-gray-300 dark:text-white dark:border-slate-800 w-full rounded-xl py-3 px-3" placeholder="Enter Amount" />
                    </form>
                  </div>
                  <button className="bg-[#1ebb70] text-white w-full text-center py-3 uppercase text-md rounded-xl mt-5 cursor-pointer">
                    Fund Wallet
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* --------- Card 2 ----------- */}
          <div className="relative flex justify-between w-full shadow-lg bg-[#0D8A4E] rounded-2xl border border-gray-200 dark:border-slate-800 overflow-hidden">
              
            {/* Background Icon */}
            <FileText className="absolute text-white opacity-10" size={120} style={{ top: "10px", right: "10px" }} />

            {/* Content */}
            <div className="flex justify-between items-center w-full p-5 z-10">
              <div className="space-y-4">
                <h4 className="text-white text-lg font-bold">
                  Total Printed
                </h4>

                <p className="text-white text-2xl font-extrabold">
                  ₦2,000.00
                </p>

                <button className="flex items-center gap-1 text-md text-white">
                  <SquareArrowOutUpRight />
                  All Pins
                </button>
              </div>

              <ChevronRight className="text-white cursor-pointer" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative flex justify-between w-full shadow-lg bg-[#1C222B] rounded-2xl border border-gray-200 dark:border-slate-800 overflow-hidden">
            
            {/* Background Icon */}
            <CircleCheck className="absolute text-white opacity-10" size={120} style={{ top: "10px", right: "10px" }}/>

            {/* Content */}
            <div className="flex justify-between items-center w-full p-5 z-10">
              <div className="space-y-4">
                <h4 className="text-white text-lg font-bold">
                  Active Pins
                </h4>

                <p className="text-white text-2xl font-extrabold">
                  ₦2,000.00
                </p>

                <button className="flex items-center gap-1 text-md text-white">
                  <SquareArrowOutUpRight />
                  Not Rechargeable
                </button>
              </div>

              <ChevronRight className="text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* -------------------- FEATURES ---------------------- */}
        <div className="grid grid-cols-2 gap-5 mt-8">
          {/* ---------- 1st button ---------- */}
          <button className="shadow-lg p-5 rounded-lg bg-white dark:bg-slate-800 dark:border-slate-800 cursor-pointer border border-gray-100"onClick={() => setGeneratePinsOpen(true)}>
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-full">
                  <Wifi className="text-white" size={18}/>
              </div>
              <p className="text-[#212529] dark:text-white text-sm font-semibold">
                Generate Pins
              </p>
            </div>
          </button>

          {/* data Off-Canvas */}
          <div className="fixed inset-0 z-50 pointer-events-none">  
            {/* Overlay */}
            <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${generatePinsOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setGeneratePinsOpen(false)}/>

            {/* Panel */}
            <div className={`fixed bg-white dark:bg-gray-900 shadow-xl z-50 w-full h-[80%] bottom-0 md:top-0 md:right-0 md:h-full md:w-96 transform transition-transform duration-500 ease-out ${generatePinsOpen ? "translate-y-0 md:translate-y-0 md:translate-x-0" : "translate-y-full md:translate-y-0 md:translate-x-full"}`}>

              <div className="md:w-96 w-auto h-full py-6 px-4">
                <div className="flex items-center justify-between mt-1 pointer-events-auto">
                  <h1 className="text-[#1ebb70] text-2xl whitespace-nowrap font-semibold">
                    Generate Data Pins
                  </h1>
                  <button className="absolute top-7 right-5 cursor-pointer" onClick={() => setGeneratePinsOpen(false)}>
                    <X className="w-7 h-6 dark:text-white" />
                  </button>
                </div>
                    
                <div className="mt-5 md:mt-10 flex flex-col space-y-10">
                  <div className="border border-gray-300 dark:border-slate-800 py-7 md:py-5 px-3">            
                    <div className="bg-emerald-50 dark:bg-slate-800 dark:border-slate-800 py-3 px-5 rounded-lg border border-[#b6effb] flex items-start space-x-2">
                      {/* <Info className="text-emerald-600 mt-1" size={18} /> */}
                      <p className="text-emerald-600 font-medium text-sm">
                        <span className="text-red-500 text-lg">Important:</span> Please note that you will be charged from your pin balance for the pins when end user recharge the pin. Ensure you have enough fund in your pin wallet.
                      </p>
                    </div>
                  
                    <p className="text-md font-light pt-2 ps-1 dark:text-[#b3b3b3]">
                      Network
                    </p>

                    <form className="py-1 pointer-events-auto">
                      <div className="relative">
                        <input className="border border-gray-300 dark:text-white dark:border-slate-800 w-full rounded-xl py-3 px-3" placeholder="..." value={data} readOnly />

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
                      Data Rate
                    </p>
                    <form className="py-1 pointer-events-auto">
                      <input className="border border-gray-300 dark:border-slate-800 dark:text-white w-full rounded-xl py-3 px-3"  />
                    </form>
                        
                    <p className="text-md font-light pt-2 ps-1 dark:text-[#b3b3b3]">
                      Hom Many Pin?
                    </p>

                    <form className="py-1 pointer-events-auto">
                      <input className="border border-gray-300 dark:border-slate-800 dark:text-white w-full rounded-xl py-3 px-3"  />
                    </form>

                    <button className="bg-[#1ebb70] text-white w-full text-center py-3 uppercase text-md rounded-xl mt-5 cursor-pointer">
                      Generate Pins
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------ 2nd button ------------- */}
          <button className="shadow-lg p-5 rounded-lg bg-white dark:bg-slate-800 dark:border-slate-800 cursor-pointer border border-gray-100" onClick={() => setPrintOutOpen(true)}>
            <div className="flex space-x-2 items-center">
              <div className="bg-green-600 p-2 rounded-full">
                <Printer className="text-white" size={18}/>
              </div>
              <p className="text-[#212529] dark:text-white text-nowrap text-sm font-semibold">
                Print Out
              </p>
            </div>
          </button>

          {/* Print Out Off-Canvas */}
          <div className="fixed inset-0 z-50 pointer-events-none">
                
            {/* Overlay */}
            <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${printOutOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setPrintOutOpen(false)}/>

            {/* Panel */}
            <div className={`fixed bg-white dark:bg-gray-900 shadow-xl z-50 w-full h-[80%] bottom-0 md:top-0 md:right-0 md:h-full md:w-96 transform transition-transform duration-500 ease-out ${printOutOpen ? "translate-y-0 md:translate-y-0 md:translate-x-0" : "translate-y-full md:translate-y-0 md:translate-x-full"}`}>

              {/* Right Panel */}
              <div className="md:w-96 w-auto h-full py-5 px-4">
                <div className="flex items-center justify-between mt-1 pointer-events-auto">
                  <h1 className="text-[#1ebb70] text-2xl font-semibold">
                    Pin Print Out
                  </h1>
                  <button className="absolute top-7 right-5 cursor-pointer" onClick={() => setPrintOutOpen(false)}>
                    <X className="w-7 h-6 dark:text-white" />
                  </button>
                </div>
                <div className="border border-gray-300 dark:border-slate-800 px-3 py-6 mt-8 rounded-lg">
                  <div className="grid grid-cols-3 gap-2 items-center">
                    <button className="bg-emerald-50 dark:bg-slate-800 pointer-events-auto text-[#1ebb70] rounded-lg p-1">Print Out</button>
                    <button className="text-[#1ebb70] whitespace-nowrap pointer-events-auto">Reprint Cards</button>
                  </div>
                  <div className="bg-emerald-50 dark:bg-slate-800 dark:border-slate-800 py-3 px-3 rounded-lg mt-6 border border-[#b6effb]">
                    <p className="text-[#1ebb70] text-md">
                      Generated pins that have not been printed out will all appear here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --------------- 3rd button ----------------- */}
          <button className="shadow-lg p-5 rounded-lg bg-white dark:bg-slate-800 dark:border-slate-800 cursor-pointer border border-gray-100" onClick={() => setPrintPricesOpen(true)}>
            <div className="flex space-x-2 items-center">
              <div className="bg-yellow-600 p-2 rounded-full">
                <Banknote className="text-white" size={18}/>
              </div>
              <p className="text-[#212529] dark:text-white text-sm font-semibold">
                Data Pin Prices
              </p>
            </div>
          </button>

          {/* Pin Prices off-canvas */}
          <div className="fixed inset-0 z-50 pointer-events-none">  
            {/* Overlay */}
            <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${printPricesOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setPrintPricesOpen(false)}/>

            {/* Panel */}
            <div className={`fixed bg-white dark:bg-gray-900 shadow-xl z-50 w-full h-[80%] bottom-0 md:top-0 md:right-0 md:h-full md:w-96 transform transition-transform duration-500 ease-out ${printPricesOpen ? "translate-y-0 md:translate-y-0 md:translate-x-0" : "translate-y-full md:translate-y-0 md:translate-x-full"}`}>

              <div className="md:w-96 w-auto h-full py-5 px-4">
                <div className="flex items-center justify-between mt-1 pointer-events-auto">
                  <h1 className="text-[#1ebb70] text-2xl font-semibold">
                    Pin Prices
                  </h1>
                  <button className="absolute top-7 right-5 cursor-pointer" onClick={() => setPrintPricesOpen(false)}>
                    <X className="w-7 h-6 dark:text-white" />
                  </button>
                </div>
                    
                <div className="mt-10 flex flex-col space-y-10">
                  <div className="border border-gray-300 dark:border-slate-800  px-3 py-6">            
                    <div className="bg-emerald-50 dark:bg-slate-800 dark:border-slate-800 py-3 px-5 rounded-lg border border-[#b6effb] flex items-start space-x-2">
                      {/* <Info className="text-emerald-600 mt-1" size={18} /> */}
                      <p className="text-emerald-600 font-medium text-sm">
                        <span className="text-red-500 text-lg">Important:</span> Please note that you will be charged from your pin balance for the pins you printed when end user recharge the pin. Ensure you have enough fund in your pin wallet.
                      </p>
                    </div>

                    {/* Table */}
                    <div className="w-full max-w-md mt-7 border border-gray-300 rounded-md overflow-hidden">

                      {/* Header */}
                      <table className="w-full text-sm">
                        <thead className="bg-gray-800 text-white">
                          <tr>
                            <th className="text-left px-4 py-3 font-semibold">Data Rate</th>
                            <th className="text-left px-4 py-3 font-semibold">Price</th>
                            <th className="text-left px-4 py-3 font-semibold">Validity</th>
                          </tr>
                        </thead>

                        {/* Body */}
                        <tbody>
                          <tr className="bg-gray-200 border-t">
                            <td className="px-4 py-3">MTN1GB</td>
                            <td className="px-4 py-3">₦670</td>
                            <td className="px-4 py-3">30DAYS</td>
                          </tr>

                          <tr className="bg-gray-100 border-t">
                            <td className="px-4 py-3">MTN2GB</td>
                            <td className="px-4 py-3">₦1,100</td>
                            <td className="px-4 py-3">30DAYS</td>
                          </tr>

                          <tr className="bg-gray-200 border-t">
                            <td className="px-4 py-3">MTN5GB</td>
                            <td className="px-4 py-3">₦2,100</td>
                            <td className="px-4 py-3">30DAYS</td>
                          </tr>

                          <tr className="bg-gray-100 border-t">
                            <td className="px-4 py-3">GLO1GB</td>
                            <td className="px-4 py-3">₦760</td>
                            <td className="px-4 py-3">30DAYS</td>
                          </tr>

                          <tr className="bg-gray-200 border-t">
                            <td className="px-4 py-3">AIRTEL1GB</td>
                            <td className="px-4 py-3">₦840</td>
                            <td className="px-4 py-3">30DAYS</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          {/* ------------- 4th button --------------- */}
          <button className="shadow-lg p-5 rounded-lg bg-white dark:bg-slate-800 dark:border-slate-800 cursor-pointer border border-gray-100" onClick={() => setSalesStatOpen(true)}>
            <div className="flex space-x-2 items-center">
              <div className="bg-red-600 p-2 rounded-full">
                <BarChart3 className="text-white" size={18}/>
              </div>
              <p className="text-[#212529] dark:text-white text-sm font-semibold">
                Sales stat
              </p>
            </div>
          </button>

          {/* light Off-Canvas */}
          <div className="fixed inset-0 z-50 pointer-events-none">
                
            {/* Overlay */}
            <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${salesStatOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setSalesStatOpen(false)}/>

            {/* Panel */}
            <div className={`fixed bg-white dark:bg-gray-900 shadow-xl z-50 w-full h-[75%] bottom-0 md:top-0 md:right-0 md:h-full md:w-96 transform transition-transform duration-500 ease-out ${salesStatOpen ? "translate-y-0 md:translate-y-0 md:translate-x-0" : "translate-y-full md:translate-y-0 md:translate-x-full"}`}>

              {/* Right Panel */}
              <div className="md:w-96 w-auto h-full py-5 px-4">
                <div className="flex items-center justify-between mt-1 pointer-events-auto">
                  <h1 className="text-[#1ebb70] text-2xl font-semibold">
                    Sales
                  </h1>
                  <button className="absolute top-7 right-5 cursor-pointer" onClick={() => setSalesStatOpen(false)}>
                    <X className="w-7 h-6 dark:text-white" />
                  </button>
                </div>
                <div className="mt-4 space-y-10">
                  <div className="p-3">
                    <div className="bg-emerald-50 dark:bg-slate-800 dark:border-slate-800 py-3 px-3 rounded-lg mt-6 border border-[#b6effb]">
                      <p className="text-[#1ebb70] text-md">
                        You will be able to see your data pin sales statistics here.
                      </p>
                    </div>
                    <button className="text-slate-500 border border-gray-300 dark:border-slate-800 w-full text-center py-3 uppercase text-md rounded-xl mt-5 cursor-pointer">
                      Coming Soon
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------- SEARCH BAR --------------- */}
        <div className="pt-3 mt-7 pb-12">
          <div className="space-y-4">
            {/* Search */}
            <div className="bg-white dark:bg-gray-900 dark:border-slate-800 border border-gray-200 rounded-lg p-3 shadow-sm focus-within:border-[#1ebb70] focus-within:ring-2 focus-within:ring-[#1ebb70]/20 outline-none transition">
              <input type="text" placeholder="Search. Eg: 08161742895" className="w-full h-10 border-none outline-none rounded-xl p-3 text-sm text-gray-500 dark:text-[#b3b3b3]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}