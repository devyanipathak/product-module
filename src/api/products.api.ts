import apiClient from "./client";
import { Product, ProductsResponse } from "../types/product.types";

export const fetchProducts = async (
  limit = 10,
  skip = 0
): Promise<Product[]> => {
  const response = await apiClient.get<ProductsResponse>(
    `/products?limit=${limit}&skip=${skip}`
  );
  return response.data.products;
};

export const fetchProductById = async (
  productId: number
): Promise<Product> => {
  const response = await apiClient.get<Product>(`/products/${productId}`);
  return response.data;
};
