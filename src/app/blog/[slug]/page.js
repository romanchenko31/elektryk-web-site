// app/blog/[slug]/page.js
export default async function Post({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.slug}`
  );
  if (!res.ok) {
    // Обработка ошибки, например, вывод сообщения
    console.error(`Ошибка: ${res.status} ${res.statusText}`);
    return <div>Ошибка загрузки данных</div>;
  }
  const post = await res.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </div>
  );
}
