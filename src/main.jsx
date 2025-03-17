import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { WagmiProvider } from "wagmi";
import { config } from "./config/walletConnection/wagmi.config.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "./contexts/appContext";

let queryClient;

const getQueryClient = () => {
  if (!queryClient) {
    queryClient = new QueryClient();
  }

  return queryClient;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={getQueryClient()}>
        <Theme>
          <AppProvider>
            <App />
          </AppProvider>
        </Theme>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>
);
