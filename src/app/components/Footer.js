export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-2 md:mb-0">
          <p className="text-sm">
            Наші телефони:
            <br />
            <a
              href="tel:+380501336304"
              className="text-blue-400 hover:underline"
            >
              +380501336304
            </a>
          </p>
        </div>
        <div>
          <p className="text-sm">
            &copy; 2025 Voltage Electric. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
