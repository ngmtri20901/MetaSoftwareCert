import React from 'react';
import SeasonalDish from "../../images/seasonal-dish.png";
import { FaArrowRight } from "react-icons/fa";

export default function SeasonalDishSection() {
    return (
        <div>
            <section className=" dark:bg-gray-900 h-full pb-[50px]">
                <div className="gap-0.5">
                    <h4 className="text-neutral-600 font-sacramento text-[38px] font-extralight leading-[120%] py-0.5 px-20">
                        Inspired by the Nature
                    </h4>
                    <h4 className="text-yellow-400 text-[38px] font-extrabold leading-[120%] py-0.5 px-20">
                        Seasonal Inspirations
                    </h4>
                </div>

                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-12 lg:py-16 lg:grid-cols-12">
                    {/* Image Section */}
                    <div className=" lg:flex lg:col-span-5">
                        <img
                            src={SeasonalDish}
                            alt="Seasonal dish offered at Little Lemon Restaurant"
                            className=" scale-150 px-10 py-7 mt-7"
                        />
                    </div>
                    {/* Content Section */}
                    <div className="text-right place-self-center lg:col-span-7 px-36">
                        <h1 className="hidden sm:block text-4xl font-light font-sacramento text-right tracking-tight leading-tight max-w-2xl mb-4 md:text-5xl xl:text-6xl text-yellow-300 dark:text-yellow-300">
                            Summer Delight
                        </h1>
                        <p className="hidden sm:block text-gray-500 font-light text-right py-0 max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            Escape to a Mediterranean oasis with Little Lemon’s Summer Delight. Each dish is a burst of fresh, vibrant flavors inspired by the sun-drenched coasts. Savor the zest of carefully crafted ingredients that create a symphony of taste, color, and aroma                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center px-5 py-3 text-base whitespace-nowrap font-medium text-yellow-400 border border-yellow-300 rounded-lg hover:bg-yellow-300 hover:text-white ease-in-out duration-500 focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mt-16 sm:mt-4"
                            aria-label="Learn more about Little Lemon Restaurant"
                        >
                            Learn more
                            <FaArrowRight className="ml-2" />
                        </a>

                    </div>
                </div>
            </section>
        </div>
    );
}
