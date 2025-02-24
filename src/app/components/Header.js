"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="bg-gray-800 bg-opacity-90 p-4 text-white fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold font-roboto">
            Електрик Дніпро
          </Link>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
          <nav
            className={`absolute top-[60px] left-0 w-full bg-gray-800 md:static md:flex md:items-center md:space-x-6 md:bg-transparent p-4 transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <Link
              href="/services"
              className="block md:inline py-2 px-4 hover:bg-gray-700"
              onClick={closeMenu}
            >
              Послуги
            </Link>
            <Link
              href="/about"
              className="block md:inline py-2 px-4 hover:bg-gray-700"
              onClick={closeMenu}
            >
              Про нас
            </Link>
            <Link
              href="/blog"
              className="block md:inline py-2 px-4 hover:bg-gray-700"
              onClick={closeMenu}
            >
              Блог
            </Link>
            <Link
              href="/contact"
              className="block md:inline py-2 px-4 hover:bg-gray-700"
              onClick={closeMenu}
            >
              Контакт
            </Link>
            <div className="block md:hidden mt-4 text-center">
              <span className="block text-sm">Наші телефони:</span>
              <a
                href="tel:+380501336304"
                className="text-lg font-bold text-white hover:underline"
                onClick={closeMenu}
              >
                +380501336304
              </a>
            </div>
          </nav>
          <div className="hidden md:block ml-auto pr-6 text-right">
            <span className="block text-sm">Наші телефони:</span>
            <a
              href="tel:+380501336304"
              className="text-lg font-bold text-white hover:underline"
            >
              +380501336304
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
