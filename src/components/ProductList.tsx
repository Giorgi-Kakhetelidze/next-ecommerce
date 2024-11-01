import Image from "next/image";
import Link from "next/link";
import React from "react";
import product1 from "../../public/images/product-1.jpg";
import product2 from "../../public/images/product-2.jpg";
import product3 from "../../public/images/product-3.jpg";
import product4 from "../../public/images/product-4.jpg";
import product5 from "../../public/images/product-5.jpg";
import product6 from "../../public/images/product-6.jpg";


function ProductList() {
  return (
    <div className="mt-12 flex gap-8 gap-y-16 flex-wrap justify-between">
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
        <div className="relative w-full h-80">
          <Image
            src={product1}
            alt=""
            className="absolute object-cover rounded-md"
            sizes="25vw"
            fill
          />


        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">
          My description
        </div>
        <button className="rounded-2xl ring-1 ring-red text-red py-2 px-4 text-xs hover:bg-red hover:text-white">Add to Cart</button>
      </Link>

      
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
        <div className="relative w-full h-80">
          <Image
            src={product2}
            alt=""
            className="absolute object-cover rounded-md"
            sizes="25vw"
            fill
          />


        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">
          My description
        </div>
        <button className="rounded-2xl ring-1 ring-red text-red py-2 px-4 text-xs hover:bg-red hover:text-white">Add to Cart</button>
      </Link>

      
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
        <div className="relative w-full h-80">
          <Image
            src={product3}
            alt=""
            className="absolute object-cover rounded-md"
            sizes="25vw"
            fill
          />


        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">
          My description
        </div>
        <button className="rounded-2xl ring-1 ring-red text-red py-2 px-4 text-xs hover:bg-red hover:text-white">Add to Cart</button>
      </Link>

      
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
        <div className="relative w-full h-80">
          <Image
            src={product4}
            alt=""
            className="absolute object-cover rounded-md"
            sizes="25vw"
            fill
          />


        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">
          My description
        </div>
        <button className="rounded-2xl ring-1 ring-red text-red py-2 px-4 text-xs hover:bg-red hover:text-white">Add to Cart</button>
      </Link>
      
      


    </div>
  );
}

export default ProductList;
