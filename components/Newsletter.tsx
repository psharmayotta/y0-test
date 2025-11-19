export default function Newsletter() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <p className="text-gray-600 mb-8">Get the latest updates on new products and upcoming sales</p>
        <form className="flex justify-center">
          <input type="email" placeholder="Enter your email" className="border p-2 w-2/3 rounded-l" />
          <button className="bg-blue-500 text-white p-2 rounded-r">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
