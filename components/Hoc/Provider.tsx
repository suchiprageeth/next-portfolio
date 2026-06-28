import { ThemeProvider } from "next-themes";
import React, { type ReactNode } from "react";
import ResponsiveNav from "../Home/Navbar/ResponsiveNav";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system">
      <ResponsiveNav />
      {children}
    </ThemeProvider>
  );
};

export default Provider;
