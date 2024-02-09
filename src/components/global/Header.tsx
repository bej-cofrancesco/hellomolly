import { HeaderComponentProps } from "@/types/types";
import Button from "../common/atoms/Button";
import { IconCart } from "@/components/common/atoms/Icons"

export default function Header({ logo, navigation, login }: HeaderComponentProps) {
  return (
    <header role="banner" className="flex justify-between items-center inner w-full">
      <div className="font-elephnt text-h6 text-primary">{logo}</div>
      <nav className="hidden lg:flex">
        <ul className="flex gap-10 xl:gap-[58px]">
          {navigation.map((link: string, index) => (
            <li key={`${link}-${index}`} className="uppercase font-popmed text-body2 text-primary">
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-[57px]">
        <button aria-label="cart" className="font-size">
          <IconCart />
        </button>
        <Button variant="inverse" size="sm">
          {login}
        </Button> 
      </div>
    </header>
  )
}