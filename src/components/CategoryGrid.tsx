import categoryMen from "@/assets/category-men.png";
import categoryWomen from "@/assets/category-women.png";
import categoryAll from "@/assets/category-all.png"
import Link from "next/link";
import Image from 'next/image'
const categories = [
  {
    id: 1,
    title: "Men's Clothing",
    image: categoryMen,
  },
  {
    id: 2,
    title: "Women's Clothing",
    image: categoryWomen,
  },
  {
    id: 3,
    title: "View All Products",
    image: categoryAll,
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
            <Link
    key={category.id}
    href="/products"
    className="group relative h-64 overflow-hidden cursor-pointer block"
  >
          <div
            key={category.id}
            className="group relative h-64 overflow-hidden cursor-pointer"
          >
            
            <Image
              src={category.image}
              alt={category.title}
              fill
              
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-display text-2xl md:text-3xl text-white font-bold tracking-wide text-center px-4">
                {category.title}
              </h3>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default CategoryGrid;