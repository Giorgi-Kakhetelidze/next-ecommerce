  "use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CartModal from "./CartModal";

function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  const isLoggedIn = false;

  const handleProfile = () => {
    // if(!isLoggedIn) {
    //   router.push('/login')
    // }
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        alt="profile"
        src="/profile.png"
        width={27}
        height={27}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-5 rounded-md top-12 left-0 text-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 bg-white">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        alt="bell"
        src="/notification.png"
        width={25}
        height={25}
        className="cursor-pointer"
      />
          
      <div className="relative cursor-pointer" onClick={() => setIsCartOpen((prev) => !prev)}>
        <Image
          alt="cart"
          src="/cart.png"
          width={25}
          height={25}
          className="cursor-pointer"
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-red flex items-center justify-center rounded-full text-white text-sm">2</div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
}

export default NavIcons;
