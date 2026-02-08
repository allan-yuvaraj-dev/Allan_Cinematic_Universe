import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./routes/router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

const customTheme = {
  baseTheme: "dark", 
  variables: {
    colorPrimary: "#8b5cf6", // purple
    colorPrimaryText: "#ffffff",
    fontFamily: "Inter, sans-serif",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={customTheme} 
      afterSignInUrl={import.meta.env.VITE_CLERK_AFTER_SIGN_IN_URL}
      afterSignUpUrl={import.meta.env.VITE_CLERK_AFTER_SIGN_UP_URL}
      afterSignOutUrl={import.meta.env.VITE_CLERK_AFTER_SIGN_OUT_URL}
      signUpUrl={null}
    >
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </ClerkProvider>
  </React.StrictMode>,
);
