import Logo from "~/assests/adexhub-logo.png";
import { useState } from "react";

export default function ForgotPassword() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email.trim()) {
            return;
        }

        setIsLoading(true);

        try {
            // Password reset logic will go here
            console.log("Reset password for:", email);

            // Temporary simulation
            await new Promise((resolve) => setTimeout(resolve, 1000));

            alert("Password reset instructions have been sent to your email.");
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen pt-24 md:pt-0 flex items-start md:items-center justify-center px-3 md:px-0">
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-md">
                {/* Logo */}
                <div className="flex justify-center items-center space-x-1">
                    <div>
                        <a href="#home">
                            <img src={Logo} alt="Logo" className="w-13 h-13" />
                        </a>
                    </div>

                    <div>
                        <a href="#home">
                            <h1 className="uppercase font-bold text-2xl text-[#151c2b]">
                                Adex
                                <span className="text-[#1ebb70]">
                                    hub
                                </span>
                            </h1>
                        </a>
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center">
                    <p className="text-gray-600">
                        Reset Password
                    </p>
                </div>

                <div className="space-y-5 mt-3">
                    {/* Email */}
                    <div>
                        <label className="text-[#374151] text-md font-medium">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            className="text-[#0F172A] w-full border border-slate-300 rounded-xl p-3 leading-6 text-sm focus:border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20 outline-none mt-2"
                        />
                    </div>

                    {/* Submit button */}
                    <button
                        disabled={isLoading || !email.trim()}
                        type="submit"
                        className={`w-full text-white py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1ebb70] focus:ring-offset-2 mt-2 transition-all ${
                            isLoading || !email.trim()
                                ? "bg-[#1ebb70]/50 cursor-not-allowed"
                                : "bg-[#1ebb70] hover:bg-[#1bb86c] cursor-pointer"
                        }`}>
                        {isLoading ? "Sending..." : "Reset Password"}
                    </button>

                    {/* Account */}
                    <div className="text-center">
                        <p className="text-sm text-gray-600">
                            Are You Done?
                            <a className="text-[#1ebb70] font-medium ms-2" href="/signup">
                                Sign Up
                            </a>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}