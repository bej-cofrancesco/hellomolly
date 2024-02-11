import Image from "next/image";
import Heading from "../atoms/Heading";
import { ExclusiveOfferProps } from "@/types/types";
import Button from "../atoms/Button";

export default function ExclusiveOffer({ image, heading, description, cta, children}: ExclusiveOfferProps) {
  return (
    <div className="bg-primaryLight rounded-sm flex px-10 flex-col gap-y-8 gap-x-6 md:gap-x-[52px] lg:flex-row lg:gap-x-[104px] flex-wrap">
      <picture className="shrink-0">
        <Image src={image} alt={heading} width={522} height={596} className="object-cover h-full"/>
      </picture>
      <div className="flex flex-col gap-10 py-[75px] max-w-[589px]">
        <div className="flex flex-col gap-5">
          <Heading as="h3" className="font-robslab text-bold text-h5">{heading}</Heading>
          <p className="font-popmed text-body2 text-primary leading-[167%] text-wrap">{description}</p>
        </div>
        {children}
        <Button size="lg" variant="primary" shadow="secondary">
          {cta}
        </Button>
      </div>
    </div>
  )
}
