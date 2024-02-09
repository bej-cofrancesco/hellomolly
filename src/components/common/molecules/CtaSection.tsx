import { CtaSectionProps } from "@/types/types";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";


export default function CtaSection({ heading, description, cta }: CtaSectionProps) {
  return (
    <div className="flex flex-col w-full xl:max-w-[649px] shrink-0">
      <Heading as="h1" className="font-rufinabold text-primary text-h2 pb-[27px]">
        {heading}
      </Heading>
      <p className="font-popmed text-secondaryLight w-full text-body3 pb-[54px] xl:max-w-[565px]">
        {description}
      </p>
      <Button size="lg" variant="primary" shadow="primary">
        {cta}
      </Button>
    </div>
  )
}