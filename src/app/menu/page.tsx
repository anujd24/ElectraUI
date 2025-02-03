import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="relative w-full h-1/3 md:h-1/2 group overflow-hidden"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${category.img})` }}
          ></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition duration-300"></div>

          {/* Content on Top */}
          <div className="relative z-10 text-white w-1/2 p-8">
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm my-8">{category.desc}</p>
            <button className="hidden 2xl:block bg-white text-black py-2 px-4 rounded-md">
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
