/* eslint-disable no-undef */
/* eslint-disable camelcase */
import { ThemeProvider } from "@/context/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import React from "react";
import "../styles/prism.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Forum",
  description: "Supercharge Your Code: Collaborative Q&A for Developers.",
  icons: {
    icon: "/assets/images/logos.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
