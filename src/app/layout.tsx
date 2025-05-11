import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Wrapper from "@/components/layouts/wrapper";
import { ReactLenis } from "@/lib/lenis";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Positivus",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <body className={`${spaceGrotesk.variable} antialiased`}>
          <Wrapper>{children}</Wrapper>
        </body>
      </ReactLenis>
    </html>
  );
}
