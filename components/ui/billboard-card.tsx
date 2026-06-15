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
      className={`relative bg-[#F0F0F0] rounded-2xl overflow-hidden group cursor-pointer ${className}`}
    >
      {/* Full-card image */}
      <Image
        src={data.imageUrl}
        alt={data.label}
        fill
        className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
      />

      {/* Label overlay */}
      <h3 className="relative text-xl sm:text-2xl font-bold text-gray-900 p-5 sm:p-6 z-10">
        {data.label}
      </h3>
    </Link>
  );
};

export default BillboardCard;
