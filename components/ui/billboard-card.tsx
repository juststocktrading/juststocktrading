import Image from "next/image";
import Link from "next/link";
import { Billboard } from "@/types";

interface BillboardCardProps {
  data: Billboard;
  className?: string;
}

const BillboardCard: React.FC<BillboardCardProps> = ({ data, className = "" }) => {
  return (
    <Link
      href={`/category/${data.id}`}
      className={`relative flex flex-col justify-between bg-[#F0F0F0] rounded-2xl overflow-hidden group cursor-pointer ${className}`}
    >
      {/* Label at top-left */}
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 p-5 sm:p-6 z-10">
        {data.label}
      </h3>

      {/* Image at the bottom */}
      <div className="relative w-full flex-grow min-h-[180px]">
        <Image
          src={data.imageUrl}
          alt={data.label}
          fill
          className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </Link>
  );
};

export default BillboardCard;
