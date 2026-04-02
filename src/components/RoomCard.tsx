import Image from "next/image";

interface RoomCardProps {
  title: string;
  price: string;
  image: string;
  availableRooms: number;
  rating: number;
  reviewsCount: number;
}

export default function RoomCard({
  title,
  price,
  image,
  availableRooms,
  rating,
  reviewsCount,
}: RoomCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded-lg overflow-hidden transition-all group hover:shadow-ambient">
      <div className="relative h-[200px] md:h-[280px] rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <span
            className="material-symbols-outlined text-yellow-500 text-xs"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <span className="text-xs font-bold text-on-surface">
            {rating} ({reviewsCount})
          </span>
        </div>
      </div>
      <div className="pt-4 space-y-2 px-1">
        <div className="flex justify-between items-start">
          <h4 className="text-lg md:text-xl font-bold tracking-tight text-on-surface">
            {title}
          </h4>
          <p className="text-primary font-black text-lg">
            {price}
            <span className="text-xs font-normal text-secondary">/night</span>
          </p>
        </div>
        <p className="text-secondary text-sm flex items-center gap-1 font-medium">
          <span className="material-symbols-outlined text-sm">
            event_available
          </span>
          {availableRooms} rooms available
        </p>
      </div>
    </div>
  );
}
