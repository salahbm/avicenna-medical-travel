import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Error Page",
  description: "This is Error page for Avicenna Medical Travel",
  // other metadata
};

const ErrorPage = () => {
  return (
    <html>
      <body>
        <main className="grid min-h-screen place-items-center ">
          <Image
            src="/images/shape/404.svg"
            alt="404"
            className="object-contain"
            width={400}
            height={400}
            priority
          />

          <Link
            href="/"
            className=" group relative inline-block text-sm font-medium text-blue-500 focus:outline-none focus:ring active:text-orange-500"
          >
            <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-blue-500 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

            <span className="relative block border border-current bg-white px-8 py-3">
              Go Home
            </span>
          </Link>
        </main>
      </body>
    </html>
  );
};

export default ErrorPage;
