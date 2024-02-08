import { HeaderProps } from "@/types/types";
import Button from "../common/atoms/Button";
import { IconCart } from "@/components/common/atoms/Icons"

export default function Header({ logo, navigation, login }: HeaderProps) {
  return (
    <header role="banner" className="container flex justify-between items-center mt-[54px]">
      {logo ? <div className="font-elephnt text-h6 text-primary">{logo}</div> : null}
      <nav className="hidden md:flex">
        <ul className="flex gap-[58px]">
          {navigation ? navigation.map((link: string, index) => (
            <li key={`${link}-${index}`} className="uppercase font-popmed text-body2">
              <a href="/">{link}</a>
            </li>
          )) : null}
        </ul>
      </nav>
      <div className="flex gap-[57px]">
        <button aria-label="cart" className="font-size">
          <IconCart />
        </button>
        {login 
          ? <Button variant="inverse" size="sm">
              {login}
            </Button> 
          : null
        }
      </div>
    </header>
  )
}