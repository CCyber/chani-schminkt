'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/kunstwerke/bild1.jpg',
  '/kunstwerke/bild2.jpg',
  '/kunstwerke/bild3.jpg',
  '/kunstwerke/bild4.jpg',
  '/kunstwerke/bild5.jpg',
  '/kunstwerke/bild6.jpg',
];

export default function Galerie() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setActiveImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveImage(null);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Galerie</h2>
        <p className="text-gray-600 mb-12">Einblicke in Maukes kreative Werke</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => openModal(src)}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <Image
                src={src}
                alt={`Kunstwerk ${i + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </button>
          ))}
        </div>

        {isOpen && activeImage && (
          <div
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          >
            <div
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-3xl font-bold z-10"
              >
                &times;
              </button>
              <Image
                src={activeImage}
                alt="Großansicht"
                width={1200}
                height={800}
                className="rounded-lg shadow-lg object-contain w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
