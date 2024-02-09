import { Collection, CollectionsListProps } from "@/types/types";
import CollectionCard from "../molecules/CollectionCard";

export default function CollectionsList({ collections }: CollectionsListProps) {
  return (
    <div className="pt-[77px] grid w-full grid-cols-1 md:grid-cols-3 gap-11">
      {collections.map((collection: Collection, index) => (
        <CollectionCard key={`${collection.heading}-${index}`} collection={collection} />
      ))}
    </div>
  )
}