import Logo from "~/assests/adexhub-logo.png";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function OTP() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (value: string, index: number) => {
        // Only allow numbers
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        // Move to the next input
        if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`)?.focus();
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        // Move backwards when pressing backspace
        if (e.key === "Backspace" && !otp[index] && index > 0) {
        document.getElementById(`otp-${index - 1}`)?.focus();
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const code = otp.join("");

        if (code.length !== 6) return;

        setIsLoading(true);

        try {
        // Add your OTP verification API here
        console.log("OTP:", code);

        // Example:
        // await baas.auth.verifyOtp({ otp: code });

        alert("OTP verified successfully! 🎉");

        navigate("/dashboard");
        } catch (err: any) {
            console.error(err);
            alert(err?.message || "Invalid OTP. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const isComplete = otp.every((digit) => digit !== "");

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-3 md:px-0">
        <form onSubmit={handleSubmit} className="w-full max-w-md rounded-lg bg-white p-6 shadow-md md:p-8">
            {/* Logo */}
            <div className="flex items-center justify-center space-x-1">
                <div>
                    <a href="/">
                        <img src={Logo} alt="Logo" className="h-13 w-13"/>
                    </a>
                </div>

                <div>
                    <a href="/">
                        <h1 className="text-2xl font-bold uppercase text-[#151c2b]">
                            Adex<span className="text-[#1ebb70]">hub</span>
                        </h1>
                    </a>
                </div>
            </div>

            {/* Heading */}
            <div className="mt-1 text-center">
                <h2 className="text-xl font-semibold text-[#151c2b]">
                    Verify Your Email
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                    We've sent a 6-digit verification code to your email address.
                </p>
            </div>

            {/* OTP Inputs */}
            <div className="mt-5 flex justify-center gap-2 sm:gap-3">
                {otp.map((digit, index) => (
                    <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="h-12 w-11 rounded-xl border border-slate-300 bg-white text-center text-lg font-semibold text-[#151c2b] outline-none transition-all duration-200 focus:border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20 sm:h-14 sm:w-12"
                    />
                ))}
            </div>

            {/* Resend */}
            <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                    Didn't receive the code?
                    <button type="button" className="ml-2 font-medium text-[#1ebb70] transition hover:text-[#1bb86c]">
                        Resend OTP
                    </button>
                </p>
            </div>

            {/* Verify Button */}
            <button type="submit" disabled={isLoading || !isComplete}
            className={`mt-6 w-full rounded-md px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1ebb70] focus:ring-offset-2 ${
                isLoading || !isComplete
                ? "cursor-not-allowed bg-[#1ebb70]/50"
                : "cursor-pointer bg-[#1ebb70] hover:bg-[#1bb86c] hover:shadow-md hover:scale-[1.01]"
            }`}>
                {isLoading ? "Verifying..." : "Verify OTP"}
            </button>

            {/* Back to login */}
            <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                    Remember your password?
                    <a href="/login" className="ml-2 font-medium text-[#1ebb70]">
                        Sign In
                    </a>
                </p>
            </div>
        </form>
    </div>
  );
}