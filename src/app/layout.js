"use client";
import "./globals.css";
import "./styles/pages.css";
import { ThemeProvider } from "./providers/ThemeContext";

// export const metadata = {
//   title: "Camilo Cifuentes",
//   description: "Portafolio y tienda de Camilo Cifuentes",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

