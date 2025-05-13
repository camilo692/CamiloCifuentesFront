"use client";
import "../styles/globals.css";
import { useEffect } from "react";

import { Lexend } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Providers from "./providers/Providers";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

