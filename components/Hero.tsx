export default function Hero() {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('/hero-image.jpg')` }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to Fashion Hub</h1>
          <p className="mt-4">Exclusive Sale - Up to 70% Off!</p>
        </div>
      </div>
    </section>
  );
}
