export async function POST(req) {
  try {
    const { name, phone, message } = await req.json();

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return Response.json({ error: "Нет API-ключа" }, { status: 500 });
    }

    const text = `📩 Новая заявка:\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n📝 Сообщение: ${message}`;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: "HTML",
      }),
    });

    if (!res.ok) {
      return Response.json(
        { error: "Ошибка отправки в Telegram" },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
