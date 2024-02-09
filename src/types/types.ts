import React from "react";

export interface ButtonComponentProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonComponentVariant;
  size?: ButtonComponentSize;
  shadow?: ButtonComponentShadow;
}

export type ButtonComponentVariant = "primary" | "inverse";
export type ButtonComponentShadow = "primary" | "secondary";
export type ButtonComponentSize = "sm" | "md" | "lg";

export interface Json {
  header: HeaderComponentProps;
  hero: HeroJson;
  best_selling: TitleAndCtaJson;
  our_products: TitleWithProductsJson;
  exclusive_offer: ExclusiveOfferJson;
  collections_list: CollectionsListJson;
}

export interface TitleProps {
  heading: string;
  description: string;
}
export interface TitleWithProductsJson extends TitleProps {
  products: Product[];
}

export interface CtaSectionProps extends TitleProps {
  cta: string;
}

export interface TitleAndCtaJson extends TitleWithProductsJson {
  cta: string;
}

export interface CollectionsListJson extends TitleProps {
  collections: Collection[];
}

export interface CollectionCardProps {
  collection: Collection;
}

export interface CollectionsListProps {
  collections: Collection[];
}
export interface Collection extends TitleProps {
  image: string;
}

export interface ExclusiveOfferProps extends TitleProps {
  image: string;
  cta: string;
  children: React.ReactNode;
}

export interface HeaderComponentProps {
  logo: string;
  navigation: string[]
  login: string;
}

export interface ExclusiveOfferJson extends CtaSectionProps {
  countdowns: CountdownCardProps[];
  image: string;
}

export interface HeroJson extends CtaSectionProps {
  image: string;
}
export type Size = "sm" | "lg";
export interface ProductCardProps {
  product: Product;
  size: Size;
}

export interface CollectionListProps {
  products: Product[];
  cta?: string;
  size: Size
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

export interface CountdownProps {
  children: React.ReactNode
}

export interface CountdownCardProps {
  value: number;
  label: string;
}