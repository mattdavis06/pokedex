import { Suspense } from "react";
import Header from "./components/Header";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeTogglerBtn from "./components/ThemeTogglerBtn";
import "./globals.css";

type ThemeType = "light" | "dark";

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
          <Suspense fallback={"Loading..."}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
