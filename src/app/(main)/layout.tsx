import type { Metadata } from "next";
import "../globals.css";
import NavBar from "@/components/NavBar";
export const metadata: Metadata = {
  title: "Maciejówka",
  description: "Tradycja ,pasji i miłość do koni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
    >
      <body className="min-h-full flex flex-col">
        <NavBar/>
        {children}</body>
    </html>
  );
}
