import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/landing/route.tsx"), 
  route("login", "routes/auth/SignIn.tsx"),
  route("signup", "routes/auth/SignUp.tsx"),
  route("forgotpassword", "routes/auth/ForgotPassword.tsx"),
] satisfies RouteConfig;