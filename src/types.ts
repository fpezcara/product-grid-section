interface Category {
  category_id: string;
  name: string;
  created_at: string;
}

interface Collection {
  collection_id: string;
  name: string;
  description: string;
  image_url: string;
}

export interface Image {
  color: string;
  image_url: string;
}

interface Inventory {
  sku: string;
  color: string;
  size?: string;
  list_price: number;
  sale_price: number;
  discount?: number;
  discount_percentage: number;
  sold: number;
  stock: number;
}

export interface PriceRange {
  highest: number;
  lowest: number;
}

interface LatestArrivalsPagination {
  has_more: boolean;
  page: number;
  per_page: number;
  total: number;
}

export interface LatestArrivalsData {
  category: Category;
  collection: Collection;
  colors: Array<string>;
  created_at: string;
  description: string;
  images: Array<Image>;
  inventory: Array<Inventory>;
  name: string;
  priceRange: PriceRange;
  product_id: string;
  rating: number;
  reviews: number;
  sizes: Array<string>;
  sold: number;
}

export interface LatestArrivals {
  data: Array<LatestArrivalsData>;
  pagination: LatestArrivalsPagination;
}
