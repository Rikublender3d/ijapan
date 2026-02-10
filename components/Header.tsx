"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href*="#"]');
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href.includes("#")) {
          const hash = href.split("#")[1];
          if (hash) {
            // Check if we're on the same page
            const currentPath = window.location.pathname;
            const linkPath = href.split("#")[0] || "/";

            if (
              currentPath === linkPath ||
              (linkPath === "/" && currentPath === "/")
            ) {
              e.preventDefault();
              setTimeout(() => {
                const targetElement = document.querySelector(`#${hash}`);
                if (targetElement) {
                  const offsetTop =
                    (targetElement as HTMLElement).offsetTop - 80;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  });
                }
              }, 100);
            }
            setIsMenuOpen(false);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <header className="bg-white fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5">
        <nav className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/icons.png"
              alt="iJAPAN合同会社"
              width={140}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>
          <ul
            className={`nav-menu md:flex md:gap-8 list-none absolute md:relative top-full md:top-auto left-0 md:left-auto right-0 md:right-auto bg-white md:bg-transparent flex-col md:flex-row p-5 md:p-0 shadow-lg md:shadow-none ${isMenuOpen ? "flex" : "hidden"}`}
          >
            <li>
              <Link
                href="/#home"
                className="text-gray-700 font-medium hover:opacity-70 transition-colors duration-300 block py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                ホーム
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-700 font-medium hover:opacity-70 transition-colors duration-300 block py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                会社概要
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-gray-700 font-medium hover:opacity-70 transition-colors duration-300 block py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                事業内容
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-gray-700 font-medium hover:opacity-70 transition-colors duration-300 block py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                製品情報
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              className="hidden md:inline-block bg-[#2563EB] text-white px-6 py-2 rounded-full font-semibold hover:opacity-70 transition-colors duration-300"
            >
              お問い合わせ
            </Link>
            <button className="md:hidden">
              <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
