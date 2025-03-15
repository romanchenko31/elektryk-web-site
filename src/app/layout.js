// app/layout.js
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { Roboto } from "next/font/google"; // Импортируем шрифт Roboto
import FloatingContactForm from "./components/FloatingContactForm";

// Подключаем шрифт Roboto с поддержкой кириллицы
const roboto = Roboto({
  weight: ["400", "500", "700"], // Выбираем нужные веса
  subsets: ["latin", "cyrillic"], // Добавляем поддержку кириллицы
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Voltage Electric</title>
        <meta
          name="description"
          content="Offering professional electrical services."
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={roboto.className}>
        {" "}
        {/* Применяем шрифт ко всему body */}
        <Header />
        <main className="mt-[80px] md:mt-[100px] p-4">{children}</main>
        <FloatingContactForm />
        <Footer />
      </body>
    </html>
  );
}
