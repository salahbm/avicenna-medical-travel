import { Inter } from "next/font/google";
import "../../globals.css";
import RootProvider from "../../context/root-provider";
import TranslationsProvider from "../../context/TranslationsProvider";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

// Can be imported from a shared config
const locales = ["en", "ru", "uz"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export async function generateMetadata({
  params: { locale },
}: Params): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Meta" });
  const title = t("home.title", { brand: "Avicenna Medical Travel" });
  const description = t("home.description", {
    brand: "Avicenna Medical Travel",
  });

  return {
    title,
    description,
    metadataBase: new URL(`https://avicennamedical.vercel.app`),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
      },
    },
    openGraph: {
      title,
      description,
      url: `/`,
      siteName: "Avicenna Medical Travel",
      type: "website",
    },
  };
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
