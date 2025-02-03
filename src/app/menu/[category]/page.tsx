import { laptops } from "@/data";
import { Phones } from "@/data";
import { TV } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const categoryData: Record<string, typeof laptops | typeof Phones | typeof TV> = {
  laptops,
  phones: Phones,
  tv: TV,
};

// Define correct type for props
interface CategoryPageProps {
  params: { category: string }; 
}

// Ensure function is marked as an async component
const CategoryPage = ({ params }: CategoryPageProps) => {
  const { category } = params;
  const products = categoryData[category.toLowerCase()] || [];

  return (
    <div className="flex flex-wrap text-gray-600">
      {products.length > 0 ? (
        products.map((item) => (
          <Link
            className="w-full h-[60vh] border-r-2 border-b-2 border-gray-600 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50"
            href={`/product/${item.id}`}
            key={item.id}
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative h-[80%]">
                <Image src={item.img} alt={item.title} fill className="object-contain" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex items-center justify-between font-bold">
              <h1 className="text-2xl uppercase p-2">{item.title}</h1>
              <h2 className="group-hover:hidden text-xl">₹{item.price}</h2>
              <button className="hidden group-hover:block uppercase bg-gray-600 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </Link>
        ))
      ) : (
        <div className="w-full text-center text-xl font-bold text-red-600">
          No products found in this category.
        </div>
      )}
    </div>
  );
};

export default CategoryPage;

// Ensure correct type for dynamic segments
export async function generateStaticParams(): Promise<{ category: string }[]> {
  return [
    { category: "laptops" },
    { category: "phones" },
    { category: "tv" },
  ];
}
