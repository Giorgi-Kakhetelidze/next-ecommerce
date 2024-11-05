"use client";

import Image from "next/image";
import React, { useState } from "react";
import tshirt1 from "../../public/images/product-1.jpg";
import tshirt2 from "../../public/images/tshirt2.jpg";

function ProductImages() {
  const images = [
    {
      id: 1,
      url: tshirt1,
    },
    {
      id: 2,
      url: tshirt1,
    },
    {
      id: 3,
      url: tshirt1,
    },
    {
      id: 4,
      url: tshirt1,
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt="Product 1"
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
