import React from "react";

export interface ButtonComponentProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonComponentVariant;
  size?: ButtonComponentSize;
}

export type ButtonComponentVariant = "primary" | "inverse";
export type ButtonComponentSize = "sm" | "md" | "lg";

export interface Json {
  header: HeaderComponentProps;
  hero: HeroJson;
  best_selling: BestSellingJson;
}

export interface BestSellingJson {
  heading: string;
  description: string;
  products: Product[];
  cta: string;
}

export interface HeaderComponentProps {
  logo: string;
  navigation: string[]
  login: string;
}

export interface CtaSectionProps {
  heading: string;
  description: string;
  cta: string;
}

export interface HeroJson extends CtaSectionProps {
  image: string;
}

export interface ProductCardProps {
  product: Product;
}

export interface CollectionListProps {
  products: Product[];
  cta: string;
}

export interface Product {
  image: string;
  title: string;
  price: string;
  rating: string;
}

export interface HeroComponentProps extends React.ComponentPropsWithoutRef<'section'> {}
export interface HeadingComponentProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export interface TitleProps {
  heading: string;
  description: string;
}