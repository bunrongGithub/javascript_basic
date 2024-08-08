'use client'
import Link from 'next/link';
import React, { useState } from 'react'
export default function Categories() {
    const [activeIndex,setActiveIndex] = useState<number | null>(0)
    const tabProducts = [
        {
            name: "All",
            icon: <i className="fa-sharp fa-solid fa-border-all"></i>
        },
        {
            name: "Smart Phone",
            icon: <i className="fa-regular fa-mobile"></i>
        },
        {
            name: "Apple Watch",
            icon: <i className="fa-solid fa-watch"></i>
        },
        {
            name: "Wireless Mouse",
            icon: <i className="fa-light fa-computer-mouse-scrollwheel"></i>
        },
        {
            name: "Coffee Maker",
            icon: <i className="fa-duotone fa-solid fa-mug-saucer"></i>
        },
        {
            name: "TV",
            icon: <i className="fa-regular fa-tv-music"></i>
        },
        {
            name: "Camera",
            icon: <i className="fa-light fa-camera"></i>
        }
    ];
    return (
        <div className="border-b w-full border-gray-200  dark:border-gray-400 mt-14 text-center">
            <ul className="flex flex-wrap w-auto items-center justify-center m-auto -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                {
                    tabProducts.map((item, index) => (
                        <li key={index} className="me-2">
                            <Link 
                                onClick={() =>setActiveIndex(index)}
                                href="#" 
                                className={ activeIndex === index ? 'text-gray-700' : `inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-700 hover:border-blue-500 group transition-all`}
                            >
                                {item.icon}&nbsp;{item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
