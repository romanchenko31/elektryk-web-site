"use client";

import { useState } from "react";
import ServiceCard from "./components/ServiceCard"; // путь должен быть относительно текущего файла
import ContactForm from "./components/ContactForm"; // Подключаем форму

export default function Services() {
  const [selectedService, setSelectedService] = useState("diagnostics");

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  return (
    <section className="container mx-auto p-6">
      <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Викликати електрика додому в Дніпрі
        </h1>
        <p className="text-lg">
          Шукаєте професійного електрика в Дніпрі? Наші фахівці виконають
          якісний електромонтаж, ремонт і обслуговування електромереж.
        </p>
        <p className="text-lg mt-2">
          Виклик електрика додому допоможе швидко вирішити проблеми з
          електропостачанням, уникнути аварійних ситуацій і зробити вашу
          електромережу безпечною.
        </p>
        <div className="mt-4 text-left">
          <h2 className="text-xl font-semibold">
            Коли потрібен виклик електрика?
          </h2>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>✅ Перепади напруги</li>
            <li>✅ Іскріння розеток або вимикачів</li>
            <li>✅ Вибиває автомат або УЗО</li>
            <li>✅ Потрібен монтаж чи заміна електропроводки</li>
            <li>✅ Встановлення світильників, розеток, автоматів</li>
          </ul>
        </div>
        <p className="mt-4 text-lg font-semibold">
          Не чекайте повного виходу з ладу – викличте електрика зараз за
          номером:
        </p>
        <a
          href="tel:+380501336304"
          className="text-blue-500 hover:text-blue-600 text-2xl font-bold transition"
        >
          +380501336304
        </a>
      </div>

      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Наші послуги
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          title="Електромонтаж"
          description="Ми надаємо послуги якісного електромонтажу."
          icon="/images/electrician1.png"
        />
        <ServiceCard
          title="Ремонт"
          description="Швидкий та ефективний ремонт електрообладнання."
          icon="/images/electrician2.png"
        />
        <ServiceCard
          title="Обслуговування"
          description="Регулярне технічне обслуговування електромереж."
          icon="/images/electrician3.png"
        />
      </div>

      <div className="text-center mt-12">
        <h3 className="text-3xl font-semibold mb-6 text-gray-700">
          Додаткові послуги
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button
            className={`px-8 py-4 rounded-lg shadow-lg transition text-lg font-medium ${
              selectedService === "diagnostics"
                ? "bg-gray-900 text-white"
                : "bg-gray-700 text-white hover:bg-gray-800"
            }`}
            onClick={() => handleSelectService("diagnostics")}
          >
            Діагностика
          </button>
          <button
            className={`px-8 py-4 rounded-lg shadow-lg transition text-lg font-medium ${
              selectedService === "installation"
                ? "bg-gray-900 text-white"
                : "bg-gray-700 text-white hover:bg-gray-800"
            }`}
            onClick={() => handleSelectService("installation")}
          >
            Електромонтаж
          </button>
        </div>
        {selectedService === "diagnostics" && (
          <div className="mt-8 p-6 bg-gray-100 bg-opacity-40 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold text-gray-800">
              Діагностика електромереж
            </h4>
            <p className="text-gray-600 mt-2">
              Наші електрики проводять детальну діагностику електромереж для
              виявлення несправностей. Ми аналізуємо аварійні ситуації,
              виконуємо вимірювання напруги, перевіряємо з&apos;єднання та
              усуваємо ризики перегріву або короткого замикання.
            </p>
          </div>
        )}
        {selectedService === "installation" && (
          <div className="mt-8 p-6 bg-gray-100 bg-opacity-40 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold text-gray-800">
              Електромонтаж
            </h4>
            <p className="text-gray-600 mt-2">
              Виконуємо електромонтажні роботи для квартир, будинків, офісів та
              промислових об&apos;єктів. Наші спеціалісти встановлюють
              електропроводку, щитові системи, розетки, освітлення та
              підключають дизельні генератори для безперебійного
              електроживлення.
            </p>
          </div>
        )}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-semibold mb-6 text-gray-700">
            Залишити заявку на виклик електрика
          </h3>
          <p className="text-lg text-gray-600 mb-4">
            Наш майстер зв&aposяжеться з вами протягом 5-10 хвилин для уточнення
            деталей замовлення.
          </p>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
