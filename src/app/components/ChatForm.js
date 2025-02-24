"use client"; // Директива для клиентского компонента

import { useState } from "react";
import styles from "./chatForm.module.css"; // Импорт стилей

const ChatForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ваш код для отправки данных
    console.log({ name, message });
  };

  return (
    <div className={styles.chatFormContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше имя"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Сообщение"
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default ChatForm;
