import { ButtonComponentProps } from "@/types/types";

export default function Button({variant, size, className, children, ...props}: ButtonComponentProps) {

  const variantStyles = () => {
    switch (variant) {
      case "inverse":
        return "border-2 border-primary text-primary bg-white"
      default: 
        return "bg-primary text-white"
    }
  }

  const getSize = () => {
    switch (size) {
      case "sm":
        return "h-[52px] w-[142px]"
      case "md":
        return "h-[65px] w-[224px]"
      default: 
        return "h-[74px] w-[258px]"
    }
  }

  return (
    <button className={`${variantStyles()} ${getSize()} rounded-[3px] flex justify-center items-center`} {...props}>
      {children}
    </button>
  )
}