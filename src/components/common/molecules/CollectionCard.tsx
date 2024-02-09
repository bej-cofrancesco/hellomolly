import { CollectionCardProps, } from "@/types/types";
import Image from "next/image";

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <a href={collection.heading} className="flex flex-col gap-[25px] justify-start items-center w-full">
      <picture className="relative w-full">
        <Image 
          src={collection.image} 
          alt={collection.heading} 
          width={430} 
          height={566} 
          className="rounded-sm w-full"
        />
      </picture>
      <div className="flex flex-col gap-[5px] items-center max-w-[430px]">
        <span className="text-center font-popsemi text-body4">
          {collection.heading}
        </span>
        <p className="font-popmed text-center text-body2 text-Light">
          {collection.description}
        </p>
      </div>
    </a>
  )
}