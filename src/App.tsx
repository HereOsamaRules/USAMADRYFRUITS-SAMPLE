import React from "react";

const featuredProducts = [
  {
    name: "Almonds",
    img: "https://ugc.same-assets.com/Eu9V9wY9mNEVC1r0KS7h4ylmr9e_WKwD.jpeg",
    desc: "Crunchy, wholesome California almonds rich in nutrients."
  },
  {
    name: "Cashews",
    img: "https://ugc.same-assets.com/Eu9V9wY9mNEVC1r0KS7h4ylmr9e_WKwD.jpeg",
    desc: "Creamy, naturally sweet cashews—perfect as a snack or in recipes."
  },
  {
    name: "Pistachios",
    img: "https://ugc.same-assets.com/Eu9V9wY9mNEVC1r0KS7h4ylmr9e_WKwD.jpeg",
    desc: "Fresh, premium pistachios packed with flavor and goodness."
  },
  {
    name: "Walnuts",
    img: "https://ugc.same-assets.com/Eu9V9wY9mNEVC1r0KS7h4ylmr9e_WKwD.jpeg",
    desc: "Delicious walnuts—perfect for heart health and recipes."
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-yellow-50 to-green-50 font-sans">
      {/* Hero Section */}
      <header className="text-center py-14 bg-gradient-to-r from-green-100 via-yellow-100 to-yellow-200">
        <h1 className="text-5xl font-bold text-green-800 drop-shadow">USAMA FRUITS</h1>
        <p className="text-xl mt-4 text-green-700">The Freshest Dry Fruits, Delivered to You!</p>
        <a href="#contact" className="mt-8 inline-block px-8 py-3 rounded-md bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">Contact Us</a>
      </header>

      {/* About Section */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-brown-800 mb-2">About Us</h2>
        <p className="text-gray-700 text-lg">
          At USAMA FRUITS, we are dedicated to sourcing, packaging, and delivering the highest quality dry fruits. Our products are naturally fresh, hand-picked, and packed with essential nutrients. Enjoy healthy snacking with our almonds, cashews, pistachios, walnuts, and more!
        </p>
      </section>

      {/* Products Section */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-green-800 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.name} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <img
                src={product.img}
                alt={product.name}
                className="w-28 h-28 object-contain my-2"
                loading="lazy"
              />
              <h3 className="font-semibold text-lg mt-2 text-brown-900">{product.name}</h3>
              <p className="text-gray-600 text-center text-sm mt-1">{product.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Why Choose USAMA FRUITS?</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-green-900">
          <li className="flex items-start gap-2"><span className="font-bold text-green-600">✓</span> 100% natural and fresh dry fruits</li>
          <li className="flex items-start gap-2"><span className="font-bold text-green-600">✓</span> Wide variety & premium quality</li>
          <li className="flex items-start gap-2"><span className="font-bold text-green-600">✓</span> Excellent Packaging</li>
          <li className="flex items-start gap-2"><span className="font-bold text-green-600">✓</span> Fast and reliable delivery</li>
        </ul>
      </section>

      {/* Contact Form */}
      <section id="contact" className="max-w-2xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Contact Us</h2>
        <form className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="border rounded p-3 focus:ring-2 focus:ring-green-300" required />
          <input type="email" placeholder="Your Email" className="border rounded p-3 focus:ring-2 focus:ring-green-300" required />
          <textarea placeholder="Your Message" className="border rounded p-3 focus:ring-2 focus:ring-green-300" rows={4} required></textarea>
          <button className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 py-6">
        &copy; {new Date().getFullYear()} USAMA FRUITS. All rights reserved.
      </footer>
    </div>
  );
}
