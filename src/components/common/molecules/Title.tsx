import { TitleProps } from "@/types/types";
import Heading from "../atoms/Heading";

export default function Title({ heading, description }: TitleProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-[21px]">
      <Heading as="h3" className="font-robslab text-h3 text-primary text-center">
        {heading}
      </Heading>
      <p className="font-popmed text-body2 text-primary text-center">
        {description}
      </p>
    </div>
  )
}