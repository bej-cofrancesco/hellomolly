import { CollectionListProps, Product } from "@/types/types";
import Button from "../atoms/Button";
import { IconArrow } from "../atoms/Icons/";
import ProductCard from "../molecules/ProductCard";

export default function CollectionList({ products, cta, size }: CollectionListProps) {
  const getSize = () => {
    switch (size) {
      case "sm":
        return "grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      case "lg":
        return "grid-cols-1 md:grid-cols-3 gap-11"
    }
  }

  return (
    <div className="flex flex-col gap-[37px] items-center pt-[77px] w-full auto-rows-min">
      <div className={`grid w-full ${getSize()}`}>
        {products.map((product: Product, index) => (
          <ProductCard size={size} key={`${product.title}-${index}`} product={product} />
        ))}
      </div>
      {cta ? (
        <Button className="flex gap-[18px] font-popmed text-body2" variant="inverse" size="md">
          {cta}
          <IconArrow />
        </Button>
      ) : null}
    </div>
  )
}