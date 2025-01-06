import React from 'react';
import { CiCircleCheck } from 'react-icons/ci';

export default function ProductCard({
    image,
    title,
    rating,
    price,
    oldPrice,
    features,
}) {
    return (
        <div className="flex justify-center items-center mt-52 mb-12 relative transform transition-transform hover:translate-y-[-10px]">
            {/* Product Image */}
            <div className="absolute top-[-150px] z-10">
                <img
                    className="w-[234px] h-[260px] shrink-0 border rounded-[150px] border-solid border-[#EACB30] object-cover"
                    src={image}
                    alt={title}
                />
            </div>
            {/* Content */}
            <div className="w-[300px] pt-20 bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden relative z-0">
                {/* Content */}
                <div className="p-5">
                    {/* Top Section */}
                    <div className="flex items-center justify-between">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            />
                        </svg>

                        <div className="flex items-center">
                            <svg
                                aria-hidden="true"
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <span className="text-gray-700 font-semibold text-sm ml-2">
                                {rating}
                            </span>
                        </div>
                    </div>

                    {/* Title */}
                    <h5 className="text-2xl font-bold text-neutral-700 mt-3 truncate">{title}</h5>

                    {/* Features List */}
                    <ul className="mt-3 space-y-2 w-full">
                        {features.map((feature, index) => (
                            <li
                                key={index}
                                className="flex items-center text-gray-700 whitespace-nowrap"
                            >
                                <CiCircleCheck className="text-green-500 mr-2 text-xl shrink-0" />
                                <span className="truncate">{feature}</span>
                            </li>
                        ))}
                    </ul>


                    {/* Price & Button */}
                    <div className="flex items-center justify-between mt-5">
                        <div>
                            <span className="text-2xl font-bold text-gray-900">{price}</span>
                            <span className="text-sm text-gray-500 line-through ml-2">
                                {oldPrice}
                            </span>
                        </div>
                        <button className="flex items-center bg-yellow-400 hover:bg-yellow-500 text-white font-medium text-sm px-4 py-2 rounded-md">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
