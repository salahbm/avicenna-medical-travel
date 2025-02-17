import { Pathnames } from "next-intl/routing";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

export const defaultLocale = "ru" as const;
export const locales = ["en", "ru", "uz"] as string[];

export const pathnames = {
  "/": "/",
  "/pathnames": {
    en: "/pathnames",
    ru: "/pfadnamen",
    uz: "/pathnames",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = "never";

export type AppPathnames = keyof typeof pathnames;
