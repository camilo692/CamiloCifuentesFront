"use client";
import "../styles/globals.css";
import { useEffect } from "react";
import { Montserrat, Open_Sans, Roboto } from 'next/font/google';

import { Lexend } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Providers from "./providers/Providers";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={`${montserrat.className} ${openSans.className} ${roboto.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

