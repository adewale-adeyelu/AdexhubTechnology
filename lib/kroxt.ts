import Kroxt from "@kroxt/baas-sdk";

export const baas = new Kroxt({
  projectId: process.env.VITE_KROXT_PROJECT_ID || "6a770f0a1efead4124b885fa",
  apiKey: process.env.VITE_KROXT_API_KEY || "pk_dev_2391ae688f25fab6526d77bcf2165c5ffebcabf9fce16db7",
  debug: process.env.NODE_ENV === "development",
});

export default baas;