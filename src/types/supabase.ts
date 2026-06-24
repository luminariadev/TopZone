// src/types/supabase.ts
// TypeScript types generated from Supabase schema
// These types mirror the database tables for type-safe queries

export interface DbProduct {
  id: string;
  name: string;
  slug: string;
  type: 'game' | 'gear';
  description: string;
  category: string;
  img: string;
  badge: string;
  tag: string;
  color: string;
  currency: string;
  price: number;
  created_at: string;
}

export interface DbProductPackage {
  id: string;
  product_id: string;
  label: string;
  price: number;
}

export interface DbGearSpec {
  id: string;
  product_id: string;
  label: string;
  value: string;
}

export interface DbOrder {
  id: string;
  user_id: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  total: number;
  created_at: string;
  updated_at: string;
}

export interface DbOrderItem {
  id: string;
  order_id: string;
  product_id: string | null;
  product_name: string;
  product_price: number;
  quantity: number;
  type: 'game' | 'gear';
  created_at: string;
}

export interface DbVoucher {
  id: string;
  code: string;
  description: string;
  discount_type: 'percentage' | 'fixed';
  discount_value: number;
  min_purchase: number;
  max_discount: number | null;
  usage_limit: number | null;
  used_count: number;
  user_limit: number;
  valid_from: string;
  valid_until: string | null;
  is_active: boolean;
}

export interface DbVoucherUsage {
  id: string;
  voucher_id: string;
  user_id: string;
  order_id: string | null;
  created_at: string;
}

export interface DbReview {
  id: string;
  product_id: string;
  user_id: string;
  order_id: string | null;
  rating: number;
  title: string;
  comment: string;
  is_verified: boolean;
  is_approved: boolean;
  helpful_count: number;
  created_at: string;
}

export interface DbReviewVote {
  id: string;
  review_id: string;
  user_id: string;
  vote_type: 'helpful' | 'not_helpful';
  created_at: string;
}

export interface DbUserProfile {
  id: string;
  auth_id: string;
  email: string;
  full_name: string;
  phone: string;
  avatar_url: string;
  date_of_birth: string | null;
  is_active: boolean;
  is_verified: boolean;
  created_at: string;
  updated_at: string;
}

export interface DbAdminUser {
  id: string;
  email: string;
  full_name: string;
  role: 'super_admin' | 'admin' | 'staff';
  is_active: boolean;
  last_login: string | null;
  created_at: string;
}

// Table name type for type-safe supabase.from() calls
export type TableName =
  | 'products'
  | 'product_packages'
  | 'gear_specs'
  | 'orders'
  | 'order_items'
  | 'vouchers'
  | 'voucher_usages'
  | 'reviews'
  | 'review_votes'
  | 'user_profiles'
  | 'admin_users';

// Table type mapping for generic helpers
export interface TableTypeMap {
  products: DbProduct;
  product_packages: DbProductPackage;
  gear_specs: DbGearSpec;
  orders: DbOrder;
  order_items: DbOrderItem;
  vouchers: DbVoucher;
  voucher_usages: DbVoucherUsage;
  reviews: DbReview;
  review_votes: DbReviewVote;
  user_profiles: DbUserProfile;
  admin_users: DbAdminUser;
}
