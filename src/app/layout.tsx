import { Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--spaceMono",
  adjustFontFallback: false,
});

const thunder = localFont({
  src: "../../public/fonts/Thunder-MediumLC.ttf",
  variable: "--thunder",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${spaceMono.variable} ${thunder.variable}`}>
        {children}
      </body>
    </html>
  );
}
