import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
 } from "@clerk/clerk-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nemo",
  description: "learn with us",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
