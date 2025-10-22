import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ApolloWrapper } from "../components/apollo-wrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umbraco Headless",
  description: "Learning umbraco headless",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
   >
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
