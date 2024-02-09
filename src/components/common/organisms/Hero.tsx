import { HeroComponentProps } from "@/types/types"
import { PropsWithChildren } from "react";

export default function Hero({ children }: HeroComponentProps) {
  return (
    <section className="bg-primaryLight flex flex-col items-center gap-32 w-full wrapper overflow-hidden">
      {children}
    </section>
  )
}

function Content({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col w-full justify-between gap-20 xl:flex-row inner">
      {children}
    </div>
  )
}

Hero.Content = Content;