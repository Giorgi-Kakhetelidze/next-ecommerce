import React from 'react'
import Image from "next/image";
import Link from "next/link";

import product5 from "../../public/images/product-5.jpg";
import product6 from "../../public/images/product-6.jpg";
import product7 from "../../public/images/product-7.jpg";
import product8 from "../../public/images/product-8.jpg";



function NewProducts() {
    return (
        <div className="mt-12 flex gap-8 gap-y-16 flex-wrap justify-between">
          <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
            <div className="relative w-full h-80">
              <Image
                src={product5}
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
                src={product6}
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
                src={product7}
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
                src={product8}
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

export default NewProducts