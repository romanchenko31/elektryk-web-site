export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="text-center mb-4">
        <img src={icon} alt={title} className="w-16 h-16 mx-auto" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
