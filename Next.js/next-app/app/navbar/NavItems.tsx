import React, { useState } from 'react';
import { navbars } from './navItem';
import Link from 'next/link';

export const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      {navbars.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={`${
            activeIndex === index ? 'text-blue-800 text-sm font-semibold leading-6 ' : item.class
          }`}
          onClick={() => setActiveIndex(index)}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};
