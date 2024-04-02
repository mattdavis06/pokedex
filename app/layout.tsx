"use client";
import { Suspense, useState, useEffect } from "react";
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
  // Init theme state from LS or default to "light"
  const [theme, setTheme] = useState<ThemeType>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      return (storedTheme && (storedTheme as ThemeType)) || "light";
    }
    return "light"; // Fallback if LS is not available
  });

  // Update LS when theme changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

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
