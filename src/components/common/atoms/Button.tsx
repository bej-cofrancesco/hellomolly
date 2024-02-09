import { ButtonComponentProps } from "@/types/types";

export default function Button({variant, size, shadow, className, children, ...props}: ButtonComponentProps) {
  const variantStyles = () => {
    switch (variant) {
      case "inverse":
        return "border-2 border-primary text-primary bg-transparent"
      case "primary": 
        return "bg-primary text-white shadow-button"
      default:
        return ""
    }
  }

  const getSize = () => {
    switch (size) {
      case "sm":
        return "h-[52px] w-[142px]"
      case "md":
        return "h-[65px] w-[224px]"
      case "lg": 
        return "h-[74px] w-[258px]"
      default:
        return ""
    }
  }

  const getShadow = () => {
    switch (shadow) { 
      case "primary":
        return "shadow-buttonPrimary"
      case "secondary": 
        return "shadow-buttonSecondary"
      default:
        return ""
    }
  }

  return (
    <button className={`${className} ${variantStyles()} ${getSize()} ${getShadow()} rounded-sm flex justify-center items-center
    `} {...props}>
      {children}
    </button>
  )
}