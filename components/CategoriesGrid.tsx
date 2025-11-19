export default function CategoriesGrid() {
  return (
    <section className="px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Shop by Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {['Men', 'Women', 'Kids', 'Accessories'].map((category) => (
          <div key={category} className="bg-white shadow p-4 text-center">
            <img src={`/${category.toLowerCase()}.jpg`} alt={category} className="w-full h-32 object-cover mb-4" />
            <h3 className="font-bold">{category}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
