import { ProductCardProps } from "@/types/types";
import Image from "next/image";
import { IconStar } from "../atoms/Icons";

export default function ProductCard({ product, size }: ProductCardProps) {
  return (
    <a href={product.title} className="flex flex-col gap-[51px] justify-start items-center w-full">
      <picture className="relative w-full">
        <Image 
          src={product.image} 
          alt={product.title} 
          width={size === "lg" ? 430 : 318} 
          height={size === "lg" ? 566 : 378} 
          className="rounded-sm w-full"
        />
      </picture>
      <div className="flex flex-col gap-2 items-center">
        <span className="font-popsemi text-blackLight text-body2 max-w-[303px] text-center">
          {product.title}
        </span>
        <div className="flex justify-between items-center w-full max-w-[229px]">
          <span className="text-black font-popmed text-body2">
            {product.price}
          </span>
          <div className="border-r-[1px] border-black w-[1px] h-full"></div>
          <div className="flex gap-[9px] items-center">
            <span className="text-black font-popmed text-body2">{product.rating}</span>
            <IconStar />
          </div>
        </div>
      </div>
    </a>
  )
}