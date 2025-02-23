"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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
    <form
      onSubmit={handleSubmit}
      className="mt-6 p-6 bg-white shadow-lg rounded-lg"
    >
      <h4 className="text-2xl font-semibold text-gray-800  mb-4">
        Залишити заявку
      </h4>
      <input
        type="text"
        name="name"
        placeholder="Ваше ім'я"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded mb-3"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Телефон"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded mb-3"
      />
      <textarea
        name="message"
        placeholder="Ваше повідомлення"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded mb-3"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gray-800 bg-opacity-90 text-white p-2 rounded"
      >
        {loading ? "Відправка..." : "Відправити"}
      </button>
      {success && (
        <p className="text-green-500 mt-2">Повідомлення відправлено!</p>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}
