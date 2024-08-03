import { Inter } from "next/font/google";
import "../../globals.css";
import RootProvider from "../../context/root-provider";
import TranslationsProvider from "../../context/TranslationsProvider";
import { unstable_setRequestLocale } from "next-intl/server";
const inter = Inter({ subsets: ["latin"] });

// Can be imported from a shared config
const locales = ["en", "ru", "uz"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={` dark:bg-black ${inter.className}`}>
        <TranslationsProvider>
          <RootProvider>{children}</RootProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
