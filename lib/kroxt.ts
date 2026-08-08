import Kroxt from "@kroxt/baas-sdk";

const getEnv = (key: string): string | undefined => {
  if (typeof process !== "undefined" && process.env) {
    return process.env[key];
  }
  return (import.meta.env as any)[key];
};

const isDev = (): boolean => {
  if (typeof process !== "undefined" && process.env) {
    return process.env.NODE_ENV === "development";
  }
  return (import.meta.env as any).DEV;
};

export const baas = new Kroxt({
  projectId: getEnv("VITE_KROXT_PROJECT_ID") || "6a770f0a1efead4124b885fa",
  apiKey: getEnv("VITE_KROXT_API_KEY") || "pk_dev_2391ae688f25fab6526d77bcf2165c5ffebcabf9fce16db7",
  debug: isDev(),
});

export default baas;