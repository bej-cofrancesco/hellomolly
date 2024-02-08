export interface ButtonComponentProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonComponentVariant;
  size?: ButtonComponentSize;
}

export type ButtonComponentVariant = "primary" | "inverse";
export type ButtonComponentSize = "sm" | "md" | "lg";

export interface Json {
  header: HeaderProps;
}

export interface HeaderProps {
  logo: string;
  navigation: string[]
  login: string;
}

export interface Item {
  image: string;
  title: string;
  price: string;
  rating: string;
}