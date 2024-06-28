import { Inter, Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav/Nav";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--spaceMono",
  adjustFontFallback: false,
});

const inter = Inter({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--inter",
  adjustFontFallback: false,
});

const thunder = localFont({
  src: "../../public/fonts/Thunder-SemiBoldLC.ttf",
  variable: "--thunder",
  display: "swap",
});

const tuskerGrotesk = localFont({
  src: "../../public/fonts/tuskerGrotesk.ttf",
  variable: "--tuskerGrotesk",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${spaceMono.variable} ${thunder.variable} ${tuskerGrotesk.variable}
          ${inter.variable}
          `}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
