import { HeroComponentProps } from "@/types/types"
import { PropsWithChildren } from "react";

export default function Hero({ children }: HeroComponentProps) {
  return (
    <section className="bg-primaryLight flex flex-col gap-32 w-full wrapper overflow-hidden">
      {children}
    </section>
  )
}

function Content({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col justify-between gap-5 lg:flex-row">
      {children}
    </div>
  )
}

Hero.Content = Content;