"use client";

import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const images = Array.from({ length: 10 }, (_, i) => ({
  src: `/ecss/ecss_${i + 1}.jpg`,
  alt: `E-Commerce screenshot ${i + 1}`,
}));

export default function ImageCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);

  const openViewer = useCallback((index: number) => {
    setViewerIndex(index);
    setViewerOpen(true);
  }, []);

  return (
    <>
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((img, i) => (
            <div
              key={img.src}
              className="relative min-w-0 shrink-0 grow-0 basis-full cursor-pointer"
              onClick={() => openViewer(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {viewerOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
          onClick={() => setViewerOpen(false)}
        >
          <button
            className="absolute right-4 top-4 text-3xl"
            onClick={() => setViewerOpen(false)}
          >
            ✕
          </button>

          <button
            className="absolute left-4 text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              setViewerIndex((i) => (i === 0 ? images.length - 1 : i - 1));
            }}
          >
            ‹
          </button>

          <Image
            src={images[viewerIndex].src}
            alt={images[viewerIndex].alt}
            width={1200}
            height={800}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              setViewerIndex((i) => (i === images.length - 1 ? 0 : i + 1));
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
