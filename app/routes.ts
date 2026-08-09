import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/landing/route.tsx"), 
  route("login", "routes/auth/SignIn.tsx"),
  route("signup", "routes/auth/SignUp.tsx"),
  route("forgotpassword", "routes/auth/ForgotPassword.tsx"),
  route("OTP", "routes/auth/OTP.tsx"),

  // ✅ Dashboard layout with children
  route("dashboard", "routes/dashboard/route.tsx", [
    index("routes/dashboard/index.tsx"), 
    route("PinPortal", "routes/dashboard/Pin_Portal.tsx"),
    route("Pricing", "routes/dashboard/Pricing.tsx"),
  ]),
] satisfies RouteConfig;