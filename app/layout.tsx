import type { Metadata } from "next";
import "./globals.css";
import UrlBar from "@/components/UrlBar";
import TabBar from "@/components/TabBar";

export const metadata: Metadata = {
  title: "Daniel George Portfolio",
  description: "Welcome to my portfolio website showcasing my work and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <main className="h-screen flex flex-col">
          {/* Tab Bar - 5% */}
          <div className="w-full">
            <TabBar />
          </div>
          
          {/* URL Bar - 10% */}
          <div className=" w-full">
            <UrlBar />
          </div>
          
          {/* Content Area - 85% */}
          <div className="flex-1 w-full min-h-0 overflow-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
