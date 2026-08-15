import Logo from "~/assests/adexhub-logo.png";
import { useState } from "react";
import { Check, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router";
import baas from "lib/kroxt";
import type { AuthSession } from "@kroxt/baas-sdk";

export default function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      return;
    }

    setIsLoading(true);

    try {
      const response: AuthSession = await baas.auth.login({ email, password, });

      if (response?.user) {
        // Save authentication details
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

        alert("Login successful! 🎉");

        navigate("/dashboard");
      } else {
        alert(
          "Authentication failed. Please check your credentials."
        );
      }
    } catch (err: any) {
        console.error(err);
        alert(
          err?.message || "An unexpected error occurred during login."
        );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-3 md:px-0">
      <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-md" >
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
            Sign In to Continue
          </p>
        </div>

        <div className="space-y-5 mt-6">
          {/* Email */}
          <div>
            <label className="text-[#374151] text-md font-medium">
              Email
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

          {/* Password */}
          <div>
            <label className="text-[#374151] text-md font-medium">
              Password
            </label>

            <div className="relative w-full mt-2">
              <input
                type={ showPassword ? "text" : "password" }
                name="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="text-[#0F172A] w-full border border-slate-300 rounded-xl p-3 pr-10 leading-6 text-sm focus:border-[#1ebb70] focus:ring-2 focus:ring-[#1ebb70]/20 outline-none"
              />

              <button type="button" onClick={() => setShowPassword( !showPassword ) } className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Remember me / Forgot password */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div onClick={() => setChecked(!checked)}
                className={`h-4 w-4 flex items-center justify-center rounded border cursor-pointer transition ${
                  checked
                    ? "bg-[#1ebb70] border-[#1ebb70]"
                    : "border-slate-300 border-2"
                }`}>
                {checked && (
                  <Check size={16} className="text-white" />
                )}
              </div>

              <span onClick={() => setChecked(!checked)} className="ml-2 text-sm text-gray-700 cursor-pointer">
                Remember me
              </span>
            </div>

            <a className="text-sm text-[#1ebb70]" href="/forgotpassword">
              Forgot your password?
            </a>
          </div>

          {/* Login button */}
          <button type="submit" disabled={ isLoading || !email.trim() || !password.trim() }
            className={ `w-full text-white py-3 px-4 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1ebb70] focus:ring-offset-2 ${ isLoading || !email.trim() || !password.trim() ? "bg-[#1ebb70]/50 cursor-not-allowed" : "bg-[#1ebb70] cursor-pointer hover:bg-[#1bb86c] hover:shadow-md" }` } >
            {isLoading ? "Signing in..." : "Login"}
          </button>

          {/* Sign up */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?
              <a className="text-[#1ebb70] font-medium ms-2" href="/signup" >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}