import type { Metadata } from "next";
import "../styles/globals.css";
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import dynamic from "next/dynamic";



export const metadata: Metadata = {
  title: "Agency Cameroon",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const NoSSR = dynamic(() => import('./page'), { ssr: false })
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen overflow-x-hidden",
        )}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             {children}
        
          </ThemeProvider>
          </body>
    </html>
  );
}
