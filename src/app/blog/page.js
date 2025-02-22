// app/blog/page.js
import Link from "next/link";

export default async function BlogList() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  // Проверяем, успешен ли ответ
  if (!res.ok) {
    // Обрабатываем ошибку, например, выводим сообщение
    console.error(`Ошибка: ${res.status} ${res.statusText}`);
    return <div>Ошибка загрузки данных</div>;
  }

  const posts = await res.json();

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mb-6">Блог</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
