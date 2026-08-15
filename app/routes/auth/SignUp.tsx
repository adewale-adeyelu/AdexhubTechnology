import { Check, Eye, EyeOff } from "lucide-react";
import Logo from "~/assests/adexhub-logo.png";
import baas from "lib/kroxt";
import { useState } from "react";
import { useNavigate } from "react-router";
import type { AuthSession } from "@kroxt/baas-sdk";

const SignUp = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [checked, setChecked] = useState(false);

    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        phone?: string;
        password?: string;
        confirmPassword?: string;
        terms?: string;
    }>({});

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // --------------------------------
        // 1. VALIDATE FIRST
        // --------------------------------

        const newErrors: typeof errors = {};

        if (!name.trim()) {
            newErrors.name = "Please enter your full name";
        }

        if (!email.trim()) {
            newErrors.email = "Please enter your email address";
        }

        if (!phone.trim()) {
            newErrors.phone = "Please enter your phone number";
        }

        // Password validation
        if (!password) {
            newErrors.password = "Please enter a password";
        } else if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        } else if (!/[A-Z]/.test(password)) {
            newErrors.password =
                "Password must contain at least one uppercase letter";
        } else if (!/[a-z]/.test(password)) {
            newErrors.password =
                "Password must contain at least one lowercase letter";
        } else if (!/[0-9]/.test(password)) {
            newErrors.password =
                "Password must contain at least one number";
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            newErrors.password =
                "Password must contain at least one special character";
        }

        // Confirm password
        if (!confirmPassword) {
            newErrors.confirmPassword =
                "Please confirm your password";
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword =
                "Passwords do not match";
        }

        // Terms
        if (!checked) {
            newErrors.terms = "Please agree to the Terms and Conditions";
        }

        // --------------------------------
        // 2. SHOW ERRORS IMMEDIATELY
        // --------------------------------
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) {
            return;
        }

        // --------------------------------
        // 3. ONLY NOW SHOW LOADING
        // --------------------------------
        setIsLoading(true);
        try {
            const response: AuthSession =
                await baas.auth.register({
                    email,
                    password,
                    displayName: name,
                    metadata: {
                        role: "user",
                        phone,
                    },
                });

            if (response?.user) {
                localStorage.setItem(
                    "accessToken",
                    response.accessToken
                );

                localStorage.setItem(
                    "refreshToken",
                    response.refreshToken
                );

                localStorage.setItem(
                    "user",
                    JSON.stringify(response.user)
                );

                navigate("/dashboard");
            } else {
                alert("Registration failed. Please try again.");
            }

        } catch (err: any) {
            console.error(err);

            alert(
                err?.message ||
                "An unexpected error occurred during registration."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen pt-16 pb-10 md:pt-0 flex items-start md:items-center justify-center px-3 md:px-0">
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
                    <h2 className="text-xl font-semibold text-[#151c2b]">
                        Welcome to Adexhub
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                        Create your account and get started <br />
                        with Adexhub today.
                    </p>
                </div>

                <div className="space-y-5 mt-4">

                    {/* Full Name */}
                    <div>
                        <label className="text-[#374151] text-md font-medium">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`text-[#0F172A] w-full border rounded-xl p-3 leading-6 text-sm outline-none mt-2 ${
                                errors.name
                                    ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                                    : "border-slate-300 focus:border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20"
                            }`}
                        />

                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

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
                            onChange={(e) => setEmail(e.target.value)}
                            className={`text-[#0F172A] w-full border rounded-xl p-3 leading-6 text-sm outline-none mt-2 ${
                                errors.email
                                    ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                                    : "border-slate-300 focus:border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20"
                            }`}
                        />

                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="text-[#374151] text-md font-medium">
                            Phone Number
                        </label>

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={`text-[#0F172A] w-full border rounded-xl p-3 leading-6 text-sm outline-none mt-2 ${
                                errors.phone
                                    ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                                    : "border-slate-300 focus:border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20"
                            }`}
                        />

                        {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-[#374151] text-md font-medium">
                            Password
                        </label>

                        <div className="relative w-full mt-2">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={password}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setPassword(value);

                                    setErrors((prev) => ({
                                        ...prev,
                                        password: !value ? "Please enter a password" : value.length < 8 ? "Password must be at least 8 characters" : undefined,

                                        confirmPassword:
                                            confirmPassword && value !== confirmPassword
                                                ? "Passwords do not match"
                                                : confirmPassword && value === confirmPassword
                                                ? undefined
                                                : prev.confirmPassword,
                                    }));
                                }}
                                placeholder="Enter Password"
                                className={`text-[#0F172A] w-full border rounded-xl p-3 pr-10 leading-6 text-sm outline-none ${
                                    errors.password
                                        ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                                        : "border-slate-300 focus:border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20"
                                }`}
                            />
                            <button type="button" onClick={() => setShowPassword(!showPassword) } className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" >
                                {showPassword ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>
                        </div>

                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="text-[#374151] text-md font-medium">
                            Confirm Password
                        </label>

                        <div className="relative w-full mt-2">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setConfirmPassword(value);

                                    setErrors((prev) => ({
                                        ...prev,
                                        confirmPassword: !value
                                            ? "Please confirm your password"
                                            : password !== value
                                            ? "Passwords do not match"
                                            : undefined,
                                    }));
                                }}
                                placeholder="Confirm Password"
                                className={`text-[#0F172A] w-full border rounded-xl p-3 pr-10 leading-6 text-sm outline-none ${
                                    errors.confirmPassword
                                        ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                                        : confirmPassword && password === confirmPassword
                                        ? "border-[#1ebb70]"
                                        : "border-slate-300"
                                }`}
                            />

                            <button type="button" onClick={() => setShowConfirmPassword( !showConfirmPassword )} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                {showConfirmPassword ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>
                        </div>

                        {errors.confirmPassword ? (
                            <p className="mt-2 text-sm text-red-500">
                                {errors.confirmPassword}
                            </p>
                        ) : (
                            confirmPassword &&
                            password === confirmPassword && (
                                <p className="mt-2 text-sm text-[#1ebb70]">
                                    Passwords match
                                </p>
                            )
                        )}
                    </div>

                    {/* Terms */}
                    <div>
                        <div className="flex items-center">
                            <div onClick={() =>  setChecked(!checked) }
                                className={`h-4 w-4 flex items-center justify-center rounded border cursor-pointer transition ${
                                    checked
                                        ? "bg-[#1ebb70] border-[#1ebb70]"
                                        : "border-slate-300 border-2"
                                }`}>
                                {checked && (
                                    <Check size={16} className="text-white" />
                                )}
                            </div>

                            <span onClick={() => setChecked(!checked) } className="ml-2 text-sm text-gray-700 cursor-pointer" >
                                I agree to Adexhub's{" "}
                                <a href="/terms" className="text-[#1ebb70] hover:underline"
                                    onClick={(e) =>
                                        e.stopPropagation()
                                    }>
                                    Terms and Conditions
                                </a>
                            </span>
                        </div>

                        {errors.terms && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.terms}
                            </p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="w-full bg-[#1ebb70] text-white py-3 px-4 rounded-md hover:bg-[#1ebb70] focus:outline-none focus:ring-2 focus:ring-[#1ebb70] cursor-pointer focus:ring-offset-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed">
                        {isLoading ? "Creating Account..." : "Sign Up"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;