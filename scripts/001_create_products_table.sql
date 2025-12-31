-- Create products table for both clothes and jewellery
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  price_inr INTEGER NOT NULL,
  category TEXT NOT NULL,
  product_type TEXT NOT NULL CHECK (product_type IN ('clothing', 'jewellery')),
  image_query TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read products (public shopping site)
CREATE POLICY "Allow public read access to products" 
  ON products FOR SELECT 
  USING (true);

-- Create index for faster queries by product type
CREATE INDEX IF NOT EXISTS idx_products_type ON products(product_type);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
