import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider, button } from "@/libraries/material-tailwind";
import { Poppins } from "next/font/google";
import Header from "@/components/header";
import { StateProvider } from "@/context/stateContext";
import reducer, { initialState } from "@/context/stateReducers";

export const metadata: Metadata = {
  title: "Chat app",
  description: "Chat app",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: any;
}>) {
  return (
    <html lang="en">
      <body className={[poppins.variable].join(" ")}>
        <StateProvider reducer={reducer} initialState={initialState}>
          {children}
        </StateProvider>
      </body>
    </html>
  );
}
