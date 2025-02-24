"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(""); // переменная для ошибки

  const toggleChat = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(""); // если ошибка есть, очищаем ее
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(""); // очищаем ошибку перед отправкой
    setSuccess(false);

    try {
      const res = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Ошибка отправки!");
      setSuccess(true);
      setFormData({ name: "", phone: "", message: "" });
      setTimeout(() => setIsOpen(false), 2000);
    } catch (err) {
      setError("Ошибка отправки! Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2 bg-blue-600 text-white px-3 py-1 rounded-lg shadow-lg text-sm"
        >
          Напишіть нам
        </motion.div>
      )}
      <button
        onClick={toggleChat}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
      >
        <MessageSquare size={24} />
      </button>
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white shadow-xl rounded-lg p-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            Чат з нами
          </h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Ваше ім'я"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mb-2"
            />
            <textarea
              name="message"
              placeholder="Ваше повідомлення"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mb-2"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              {loading ? "Отправка..." : "Відправити"}
            </button>
            {success && (
              <p className="text-green-500 mt-2">Повідомлення відправлено</p>
            )}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>
      )}
    </div>
  );
}
