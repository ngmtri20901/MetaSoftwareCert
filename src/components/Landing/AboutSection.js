import React from 'react'
import About1 from "../../images/Hero-About-1.png"
import About2 from "../../images/Hero-About-2.png"
import { FaArrowRight } from "react-icons/fa";


export default function AboutSection() {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900 h-full pb-[50px]">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-12 lg:py-16 lg:grid-cols-12">
                    {/* Image Section */}
                    <div className="hidden lg:flex lg:col-span-5">
                        <img src={About1} alt="About Little Lemon Restaurant 1" className="rounded-md shadow-lg" />
                        <div
                            className="flex md:hidden absolute top-[900px] left-[270px] w-[421px] h-[297px] scale-50 object-contain shrink-0 bg-cover bg-bottom rounded-[20px]"
                            style={{
                                backgroundImage: `url(${About2})`,
                                backgroundPosition: '50% 50%',
                                backgroundRepeat: 'no-repeat',
                            }}
                        ></div>
                    </div>
                    {/* Content Section */}
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h4 className="text-neutral-600 font-sacramento text-[38px] font-extralight leading-[120%] py-7">
                            Welcome to our Restaurant
                        </h4>
                        <h1 className="text-4xl font-extrabold tracking-tight leading-tight max-w-2xl mb-4 md:text-5xl xl:text-6xl text-yellow-400 dark:text-white">
                            About Little Lemon
                        </h1>
                        <p className="text-gray-500 font-light max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            At Little Lemon, we bring a zest for life to every dish. Rooted in Mediterranean-inspired flavors, we craft fresh, vibrant meals that delight your senses and create memorable dining experiences.             </p>
                        <a
                            href="#"
                            className="inline-flex items-center px-5 py-3 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-200  ease-in-out duration-500 focus:ring-4 focus:ring-gray-200 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            aria-label="Get started with our payment tools"
                        >
                            Learn more
                            <FaArrowRight className="ml-2" />
                        </a>
                    </div>
                    <div className="flex lg:hidden py-6">
                        <img src={About1} alt="About Little Lemon Restaurant 1" className="rounded-md shadow-lg" />
                    </div>
                </div>
            </section>

        </div>
    )
}
