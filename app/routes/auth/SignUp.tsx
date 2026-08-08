import { Eye, EyeOff, Info } from "lucide-react";
import Logo from "~/assests/adexhub-logo.png";
import baas from "lib/kroxt";
import { useState } from "react";
import { useNavigate } from "react-router";
import type { AuthSession } from "@kroxt/baas-sdk";

const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !phone || !password) return

        setIsLoading(true);

        try {
            const response: AuthSession = await baas.auth.register({
                email: email,
                password: password,
                displayName: name,
                metadata: { role: "user", phone: phone },
            })

            if (response && response.user) {
                localStorage.setItem("accessToken", response.accessToken);
                localStorage.setItem("refreshToken", response.refreshToken);
                localStorage.setItem("user", JSON.stringify(response.user));
                alert("Authentication successful! 🎉");
                navigate("/dashboard");
            } else {
                alert("Registration failed. Please check your credentials.");
            }
        } catch (err: any) {
            console.error(err);
            alert(err?.message || "An unexpected error occurred during sign-in.");
        } finally {
            setIsLoading(false);
        }

    }

    return (
        <div className="bg-gray-100 min-h-screen pt-16 pb-10 md:pt-0 flex items-start md:items-center justify-center px-3 md:px-0">
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-md">
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
                    {/* <div className="bg-emerald-50 p-4 rounded-2xl flex space-x-1">
                        <Info size={20}  className="text-[#1ebb70]" />
                        <h1 className="text-[#1ebb70] text-sm">
                            We will send a verification code to your email address!
                        </h1>
                    </div> */}

                    {/* name */}
                    <label className="text-[#374151] text-md font-medium">
                        Full Name
                    </label>
                    <input
                        type="name"
                        name="name"
                        placeholder="Full Name"
                        onChange={(e) => setName(e.target.value)}
                        className="text-[#0F172A] w-full border border-slate-300 rounded-xl p-3 leading-6 text-sm focus:border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20 outline-none mt-2" />

                    {/* email */}
                    <label className="text-[#374151] text-md font-medium">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-[#0F172A] w-full border border-slate-300 rounded-xl p-3 leading-6 text-sm focus:border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20 outline-none mt-2" />

                    {/* number */}
                    <label className="text-[#374151] text-md font-medium">
                        Phone Number
                    </label>
                    <input
                        type="number"
                        name="number"
                        placeholder="Phone Number"
                        onChange={(e) => setPhone(e.target.value)}
                        className="text-[#0F172A] w-full border border-slate-300 rounded-xl p-3 leading-6 text-sm focus:border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20 outline-none mt-2" />

                    {/* Password */}
                    <label className="text-[#374151] text-md font-medium mb-4">
                        Password
                    </label>

                    <div className="relative w-full mt-2">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                            className="text-[#0F172A] w-full border border-slate-300 rounded-xl p-3 pr-10 leading-6 text-sm focus:border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20 outline-none" />

                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    {/* Confirm Password */}
                    <label className="text-[#374151] text-md font-medium mb-4 mt-5 block">
                        Confirm Password
                    </label>

                    <div className="relative w-full mt-2">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword" value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                            className={`text-[#0F172A] w-full border rounded-xl p-3 pr-10 leading-6 text-sm outline-none transition-all ${confirmPassword && password !== confirmPassword ? "border-red-500 focus:ring-2 focus:ring-red-500/20" : confirmPassword && password === confirmPassword ? "border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20" : "border-slate-300 focus:border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20"}`} />

                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    {/* Password mismatch message */}
                    {confirmPassword && password !== confirmPassword && (
                        <p className="mt-2 text-sm text-red-500">
                            Passwords do not match
                        </p>
                    )}

                    {/* Password matched message */}
                    {confirmPassword && password === confirmPassword && (
                        <p className="mt-2 text-sm text-[#1ebb70]">
                            Passwords match
                        </p>
                    )}

                    {/* submit btn */}
                    <button disabled={isLoading} type="submit" className="w-full bg-[#1ebb70] text-white py-3 px-4 rounded-md hover:bg-[#1ebb70] focus:outline-none focus:ring-2 focus:ring-[#1ebb70] focus:ring-offset-2 mt-2">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;