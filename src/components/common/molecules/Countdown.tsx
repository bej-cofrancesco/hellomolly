import { CountdownCardProps, CountdownProps } from "@/types/types";


export default function Countdown({ children }: CountdownProps) {
  return (
    <div className="flex gap-[35px] justify-start items-center">
      {children}
    </div>
  )
}

export function Card({ value, label }: CountdownCardProps) {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-sm text-primary py-4 px-[30px] w-[100px] h-[100px]">
      <span className="text-h7 font-popsemi">{value}</span>
      <span className="text-base font-popmed">{label}</span>
    </div>
  )
}

Countdown.Card = Card