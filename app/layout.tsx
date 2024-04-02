"use client";
import { Suspense, useState } from "react";
import { Theme } from "@radix-ui/themes";
import Header from "./components/Header";
import Loading from "./loading";
import ThemeTogglerBtn from "./components/ThemeTogglerBtn";
import "@radix-ui/themes/styles.css";
import "./globals.css";

type ThemeType = "light" | "dark";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <html lang="en">
      <body className={theme}>
        <Theme className="transition-all duration-200">
          <ThemeTogglerBtn theme={theme} toggleTheme={toggleTheme} />
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Theme>
      </body>
    </html>
  );
}
