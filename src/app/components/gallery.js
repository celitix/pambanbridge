"use client"
import { useState } from 'react';
import Image from 'next/image';
import { IoClose } from "react-icons/io5";


export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      url: '/assets/hero2.jpg',
      alt: 'Jawai Bandh'
    },
    {
      id: 2,
      url: '/assets/gallery2.jpg',
      alt: 'Jawai Bandh'
    },
    {
      id: 3,
      url: '/assets/gallery3.jpg',
      alt: 'Jawai Bandh'
    },
    {
      id: 4,
      url: '/assets/gallery4.jpg',
      alt: 'Jawai Bandh'
    },
    {
      id: 5,
      url: '/assets/gallery5.jpg',
      alt: 'Jawai Bandh'
    },
    {
      id: 6,
      url: '/assets/gallery6.jpg',
      alt: 'Jawai Bandh'
    },
    {
        id: 7,
        url: '/assets/gallery7.jpg',
        alt: 'Jawai Bandh'
    },
    {
        id: 8,
        url: '/assets/gallery8.jpg',
        alt: 'Jawai Bandh'
    },
    {
        id: 9,
        url: '/assets/gallery9.jpg',
        alt: 'Jawai Bandh' 
    },
    {
        id: 10,
        url: '/assets/gallery10.jpg',
        alt: 'Jawai Bandh' 
    },
    {
        id: 11,
        url: '/assets/gallery11.jpg',
        alt: 'Jawai Bandh' 
    },
    {
        id: 12,
        url: '/assets/gallery12.jpg',
        alt: 'Jawai Bandh' 
    },
    
  ];

  const openImage = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
{/* heading */}
<h2 className="text-3xl md:text-4xl font-bold text-teal-600 my-16 text-center">Image Gallery</h2>
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-64"
              onClick={() => openImage(image)}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox/Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 animate-fadeIn"
          onClick={closeImage}
        >
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-200 group"
            aria-label="Close preview"
          >
            <IoClose className="w-6 h-6 sm:w-8 sm:h-8 text-white hover:text-red-600 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <div
            className="relative w-full h-full max-w-6xl max-h-[85vh] animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.url}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}