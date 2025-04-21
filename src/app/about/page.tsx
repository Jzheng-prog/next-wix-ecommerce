import Link from "next/link";

export default function AboutPage() {
    return (
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Welcome to <span className="font-semibold">SneakerVerse</span> — your one-stop shop for quality everyday fashion. We believe shopping online should be simple, fun, and reliable.
        </p>
  
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Founded in 2025 and proudly based in the U.S/DMV, our mission is to provide high-quality products with a seamless customer experience. Whether you’re shopping for yourself or finding the perfect gift, we’re here to make it easy.
        </p>
  
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          We’re constantly updating our collections and improving the site to serve you better.
        </p>
  
        <p className="text-lg text-gray-700 leading-relaxed">
          Thanks for stopping by. We’re glad you’re here — and we can’t wait to deliver something special to your doorstep.
        </p>
        <div className="w-full items-center justify-center flex">
            <Link href={'/'} className="border bg-black text-white p-2 w-[100px] rounded-md items-center justify-center flex">Shop</Link>
        </div>
      </main>
    );
  }
  