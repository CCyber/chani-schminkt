'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-rose-100 via-white to-white text-center px-6 py-16 overflow-hidden">
      {/* Textbereich */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Kunst, die berührt
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-700">
          Ich erschaffe Werke voller Seele – entdecke meine Welt.
        </p>
        <Link
          href="/galerie"
          className="mt-6 inline-block bg-rose-500 hover:bg-rose-600 text-white font-medium py-3 px-6 rounded-xl transition shadow-lg"
        >
          Zur Galerie
        </Link>
      </div>

      {/* Hintergrundbild (optional) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Mauke Artwork"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
