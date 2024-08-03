"use client";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import { ThemeProvider } from "next-themes";
import React from "react";
import ToasterContext from "./ToastContext";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        enableSystem={false}
        attribute="class"
        defaultTheme="light"
      >
        <Lines />
        <Header />
        <ToasterContext />
        {children}
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
};

export default RootProvider;
