"use client";

import NextImage from "next/image";
import { Tab } from "@headlessui/react";
import { useState } from "react";

import { Image } from "@/types";

import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});

  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-4">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-xl overflow-hidden bg-muted">
              {!loaded[image.id] && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
              )}
              <NextImage
                fill
                src={image.url}
                alt="Product image"
                className={`object-cover object-center transition-opacity duration-500 ${loaded[image.id] ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setLoaded((prev) => ({ ...prev, [image.id]: true }))}
                priority={images.indexOf(image) === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-border rounded-xl pointer-events-none" />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
