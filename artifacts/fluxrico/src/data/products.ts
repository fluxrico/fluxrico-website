export interface Product {
  id: string;
  title: string;
  price: number;
  itemCount: string;
  formats: string;
  tagline: string;
  description: string;
  // ⚠️ بدّل هاد الروابط بروابط التحميل الحقيقية ديالك (Google Drive, Dropbox...)
  downloadUrl: string;
}

export const products: Product[] = [
  {
    id: 'ecommerce-shopping-icons',
    title: 'E-commerce & Shopping Icon Pack',
    price: 19,
    itemCount: '120 icons',
    formats: 'SVG / PNG / Figma',
    tagline: 'Collection 001 — Available now',
    description:
      'The essentials, redrawn. 120 minimalist icons for the moments that make an online store feel easy to use — from first click to front door.',
    downloadUrl: 'https://drive.google.com/REPLACE-WITH-YOUR-LINK-1',
  },
  {
    id: 'finance-business-icons',
    title: 'Finance & Business Icon Pack',
    price: 19,
    itemCount: '100 icons',
    formats: 'SVG / PNG / Figma',
    tagline: 'Collection 002 — Available now',
    description:
      'A clean, confident icon set for everything money-related — invoices, growth charts, wallets, and the everyday language of business.',
    downloadUrl: 'https://drive.google.com/REPLACE-WITH-YOUR-LINK-2',
  },
];

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}
