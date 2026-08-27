import {
  getAllProducts,
  getAvailableProducts,
  getFeaturedProducts,
  getProductBySlug,
  getAllProductSlugs,
  getProductsByType,
  getProductTypeLabel,
  products,
} from "@/features/products/data/catalog";
import type { DigitalProduct } from "@/types/product";

export const books = products;

/** Ebooks only */
export function getAllBooks(): DigitalProduct[] {
  return getProductsByType("ebook");
}

/** Any catalog product (ebooks, clipart, templates, kids) */
export function getBookBySlug(slug: string): DigitalProduct | undefined {
  return getProductBySlug(slug);
}

export function getFeaturedBook(): DigitalProduct {
  return (
    getFeaturedProducts().find((p) => p.type === "ebook") ??
    getAllBooks()[0]
  );
}

export function getAllBookSlugs(): string[] {
  return getAllProductSlugs();
}

export {
  getAllProducts,
  getAvailableProducts,
  getFeaturedProducts,
  getProductBySlug,
  getAllProductSlugs,
  getProductsByType,
  getProductTypeLabel,
};
