"use client";

import { useState } from "react";

export default function FloatingContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Ошибка отправки!");

      setSuccess(true);
      setFormData({ name: "", phone: "", message: "" });
    } catch (err) {
      console.error("Ошибка запроса:", err);
      setError("Ошибка отправки! Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-sm sm:w-80">
      {isOpen ? (
        <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200 backdrop-blur-lg animate-fade-in transition-all duration-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Зв&apos;язатися з нами
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-xl transition-transform duration-200 hover:scale-110"
            >
              ×
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Ім'я, Прізвище, По батькові (необов'язково)"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Номер телефону *"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Ваше повідомлення"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-800 bg-opacity-90 text-white py-3 rounded-xl transition-transform duration-200 hover:scale-105"
            >
              {loading ? "Відправка..." : "Відправити"}
            </button>
            {success && (
              <p className="text-green-600 text-sm mt-2">Заявку надіслано!</p>
            )}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        </div>
      ) : (
        <>
          {/* Кнопка без текста на всех устройствах */}
          <div className="flex flex-col items-center absolute right-4 bottom-4 z-50">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-green-600 hover:bg-green-700 text-white rounded-full p-6 shadow-xl transition-transform duration-300 ease-in-out hover:scale-110 motion-safe:animate-bounce"
              aria-label="Відкрити форму"
            >
              💬
            </button>
          </div>
        </>
      )}
    </div>
  );
}
