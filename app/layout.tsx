// @ts-nocheck
import { unstable_ViewTransition as ViewTransition } from "react";
import Header from "./components/layout/Header";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import ThemeTogglerBtn from "./components/theme/ThemeTogglerBtn";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeTogglerBtn />
          <Header />
          <ViewTransition>{children}</ViewTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
