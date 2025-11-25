import ProductDetailClient from './ProductDetailClient';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

const getProductImages = (mainImage: string) => {
  return [mainImage, mainImage, mainImage, mainImage];
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  
  try {
    const res = await fetch(`${API_URL}/api/v1/product/${id}`, {
      cache: "no-store",
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }
    
    const data = await res.json();
    console.log("Fetched product data:", data);
    
    const product = data.product || data;
    
    if (!product || !product.title) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl text-gray-600">Product not found</p>
        </div>
      );
    }
    
    const mainImage = product.image || '';
    const productImages = product.images?.length > 0 
      ? product.images 
      : getProductImages(mainImage);
    
    return <ProductDetailClient product={product} images={productImages} />;
  } catch (error) {
    console.error("Error:", error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Failed to load product</p>
      </div>
    );
  }
}