import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Image } from "@/types";

interface GalleryTabProps {
  image: Image;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-lg bg-muted overflow-hidden">
      {({ selected }) => (
        <div className="relative w-full h-full">
          <NextImage
            fill
            src={image.url}
            alt=""
            className="object-cover object-center"
            sizes="120px"
          />
          <span
            className={cn(
              "absolute inset-0 rounded-lg ring-2 ring-offset-2 transition-colors",
              selected ? "ring-primary ring-offset-background" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
