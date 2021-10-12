export type ProductImage = {
  url: string;
  alt?: string;
};

export type ProductVariant = {
  id: string | number;
  options: ProductOption[];
  availableForSale?: boolean;
};

export type ProductPrice = {
  value: number;
  currencyCode?: "USD" | "EUR" | "ARS" | string;
  retailPrice?: number;
  salePrice?: number;
  listPrice?: number;
  extendedSalePrice?: number;
  extendedListPrice?: number;
};

export type ProductOptionValues = {
  label: string
  hexColors?: string[]
}

export type ProductOption = {
  __typename?: "MultipleChoiceOption";
  id: string;
  displayName: string;
  values: ProductOptionValues[];
};

export type Product = {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
};


export type SearchProductsBody = {
  search?: string;
  categoryId?: string | number;
  brandId?: string | number;
  sort?: string;
  locale?: string;
};
