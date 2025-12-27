import { create } from "zustand";
import { Product } from "../types/product.types";
import { fetchProducts, fetchProductById } from "../api/products.api";

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;

  loadProducts: (loadMore?: boolean) => Promise<void>;
  getProductById: (id: number) => Promise<Product | null>;
}

const PAGE_LIMIT = 10;

export const useProductsStore = create<ProductsState>((set, get) => ({
  products: [],
  loading: false,
  error: null,
  hasMore: true,

  loadProducts: async (loadMore = false) => {
    try {
      set({ loading: true, error: null });

      const skip = loadMore ? get().products.length : 0;

      const newProducts = await fetchProducts(PAGE_LIMIT, skip);

      set({
        products: loadMore
          ? [...get().products, ...newProducts]
          : newProducts,
        hasMore: newProducts.length === PAGE_LIMIT,
        loading: false,
      });
    } catch {
      set({
        error: "Unable to load data. Please check your internet connection.",
        loading: false,
      });
    }
  },

  getProductById: async (id: number) => {
    const existing = get().products.find((p) => p.id === id);

    if (existing) {
      return existing;
    }

    try {
      return await fetchProductById(id);
    } catch {
      return null;
    }
  },
}));
