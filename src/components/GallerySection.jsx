import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  { src: '/placeholder.svg', alt: 'Dog 1' },
  { src: '/placeholder.svg', alt: 'Dog 2' },
  { src: '/placeholder.svg', alt: 'Dog 3' },
  { src: '/placeholder.svg', alt: 'Dog 4' },
  { src: '/placeholder.svg', alt: 'Dog 5' },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
        <Carousel className="w-full max-w-xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default GallerySection;