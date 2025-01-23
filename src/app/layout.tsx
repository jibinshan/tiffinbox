import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Tiffin Box",
  description: "lorem",
  icons: [{ rel: "icon", url: "/images/logo.png" }],
};

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});
const monteserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-monteserrat",
  weight: ["400", "500", "600", "700", "800"],
})
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen bg-[#070707] font-jakarta text-[#FBEAD2] antialiased",
          jakartaSans.variable,
          monteserrat.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
