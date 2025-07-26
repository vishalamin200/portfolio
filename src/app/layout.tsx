import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const spaceGrotext = Space_Grotesk({
  subsets:['latin-ext'],
  weight:["300","400","500","600","700"],
  display:'swap',
  variable:"--font-space-grotext"
})

const jetBrainsMono = JetBrains_Mono({
  subsets:['greek'],
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono",  
  display: "swap",
})



export const metadata: Metadata = {
  title: "Vishal-Amin",
  description: "Portfolio website of vishal amin",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body
        className={`${spaceGrotext.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Toaster position="top-right"/>
        {children}
      </body>
    </html>
  );
}
