import React from 'react'
export default function FeatureRightSide({person}:any) {
    return (
        <>
            {person?.map((item: any, index: number) => (
                <li key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md mb-4 hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300 ease-in-out">
                    <img className="w-14 h-14 rounded-full border-2 border-gray-300 dark:border-gray-600" src={item.imageLink} alt={`${item.name} profile`} />
                    <p className="text-lg mt-[-20px] ml-5 font-semibold text-gray-900 dark:text-gray-100 truncate">
                        {item.name}
                    </p>
                    <div className="ml-4 flex flex-1 flex-col min-w-0">

                        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                            {item.email}
                        </p>
                    </div>
                    <div className="text-base font-medium text-gray-700 dark:text-gray-300">
                        {item.address.zipCode}
                    </div>
                </li>
            ))}
        </>
    )
}
