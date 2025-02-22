export default function Contact() {
  return (
    <section className="container mx-auto p-6 md:p-10 bg-gray-100 bg-opacity-40 rounded-lg shadow-lg text-center">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">Наші контакти</h2>

      <div className="text-lg text-gray-800 mb-6">
        <p className="font-semibold">Наші телефони:</p>
        <a
          href="tel:+380501336304"
          className="block text-blue-500 hover:underline text-xl font-semibold"
        >
          +380501336304
        </a>
      </div>

      <div className="text-lg text-gray-800 mb-6">
        <p className="font-semibold">Електронна пошта:</p>
        <a
          href="mailto:voltag.dp@gmail.com"
          className="block text-blue-500 hover:underline text-xl font-semibold"
        >
          voltag.dp@gmail.com
        </a>
      </div>

      <div className="text-lg text-gray-800">
        <p className="font-semibold">Ми в соцмережах:</p>
        <div className="flex justify-center gap-4 mt-3">
          <a
            href="https://www.facebook.com/elektryk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-2xl hover:text-blue-800"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/elektryk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 text-2xl hover:text-pink-800"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/c/elektryk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 text-2xl hover:text-red-800"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
