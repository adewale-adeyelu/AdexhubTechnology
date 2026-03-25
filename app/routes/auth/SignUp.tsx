import { Info } from "lucide-react";
import Logo from "~/assests/adexhub-logo.png";

const SignUp = () => {
    return (  
        <div className="bg-gray-100 min-h-screen pt-24 md:pt-0 flex items-start md:items-center justify-center px-3 md:px-0">
            <form className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="flex justify-center items-center space-x-1 mb-2">
                    <div>
                        <a href="#home">
                        <img src={Logo} alt="Logo" className="w-13 h-13" />
                        </a>
                    </div>
                    <div>
                        <a href="#home">
                        <h1 className="uppercase font-bold text-2xl text-[#151c2b]">Adex<span className="text-[#1ebb70]">hub</span></h1>
                        </a>
                    </div>
                </div>

                <div className="space-y-5">
                    <div className="bg-emerald-50 p-4 rounded-2xl flex space-x-1">
                        <Info size={20}  className="text-[#1ebb70]" />
                        <h1 className="text-[#1ebb70] text-sm">
                            We will send a verification code to your email address!
                        </h1>
                    </div>
                    {/* email */}
                    <label className="text-[#374151] text-md font-medium">
                        Email Address
                    </label>
                    <input type="email" name="email" placeholder="Enter Email" className="text-[#0F172A] w-full border border-slate-300 rounded-xl p-3 leading-6 text-sm focus:border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20 outline-none mt-2" />

                    {/* submit btn */}
                    <button type="submit" className="w-full bg-[#1ebb70] text-white py-3 px-4 rounded-md hover:bg-[#1ebb70] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-2">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
}
 
export default SignUp;