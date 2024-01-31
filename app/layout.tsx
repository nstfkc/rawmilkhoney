import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {
  title: "Raw milk & honey",
  description: "Design and development partner for your startup 🤝",
};

const Logo = () => {
  return (
    <div className="">
      <p className="font-bold text-lg leading-tight">
        Raw milk
        <br />& honey
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-200 py-16">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <div>
            <Logo />
          </div>
          <div>
            <a href="" className="">
              <div className="bg-stone-200 text-stone-700 rounded-lg p-4 max-w-fit">
                Start a project
              </div>
            </a>
          </div>
          <div className="py-16">
            <nav className="flex justify-between items-center text-stone-200">
              <div className="items-center gap-8 hidden md:flex">
                <Link className={linkClass} href="/affiliate">
                  Affiliate
                </Link>
                <Link className={linkClass} href="/blog">
                  Blog
                </Link>
                <Link className={linkClass} href="/contact">
                  Contact
                </Link>
              </div>
            </nav>
          </div>
          <div>
            <span className="text-xs tracking-wide">
              ©2024 All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const linkClass = "font-medium text-sm hover:text-stone-900 hover:underline";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={GeistMono.style} className="text-stone-700 bg-stone-50">
        <div className="py-3 bg-stone-900 text-stone-200 text-center text-sm tracking-wide">
          Launch deal 📢 - 100% money back guarantee for the first month. One
          spot left 👉{" "}
          <a href="#" className="underline">
            Book a call
          </a>
        </div>
        <header className="container max-w-5xl mx-auto py-4 px-4 lg:px-0">
          <nav className="flex justify-between items-center">
            <Logo />
            <div className="items-center gap-8 hidden md:flex">
              <Link className={linkClass} href="/affiliate">
                Affiliate
              </Link>
              <Link className={linkClass} href="/blog">
                Blog
              </Link>
              <Link className={linkClass} href="/contact">
                Contact
              </Link>
            </div>
          </nav>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
