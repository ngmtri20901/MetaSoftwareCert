import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import HeroPasta from "../../images/pasta-2.png"
import HeroLeaf from "../../images/hero-leaf.png"

function HeroSection() {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-16 mx-auto gap-8 lg:grid-cols-12 lg:py-20">
                    {/* Left Content */}
                    <header className="lg:col-span-7 flex flex-col justify-center">
                        <h3 className="text-neutral-600 font-sacramento text-[54px] font-extralight leading-[120%] py-7">
                            Crafted with Passion, Served with Love
                        </h3>
                        <h1 className="text-4xl font-extrabold tracking-tight leading-tight text-yellow-400 dark:text-white md:text-5xl xl:text-6xl">
                            Delight in Every Bite
                        </h1>
                        <p className="mt-4 text-lg font-light text-gray-600 dark:text-gray-400 md:text-xl">
                            Indulge in our creamy fettuccine pasta with tender grilled chicken, crafted to satisfy every craving.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-4">
                            <a
                                href="#"
                                className="inline-flex gap-2 items-center px-5 py-3 text-base font-medium text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-600
                                sm:px-4 sm:py-2 sm:text-sm 
                                md:px-6 md:py-3 md:text-base 
                                lg:px-8 lg:py-4 lg:text-lg"
                            >
                                Reserve Now
                                <FaArrowRight />
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center px-5 py-3 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                View Menu
                            </a>
                        </div>
                    </header>
                    {/* Right Image */}
                    {/*    <div className='justify-center lg:justify-end grid-cols-2 grid-flow-col'> */}
                    {/* MIddle Image */}
                    <div className="hidden absolute top-48 right-10 md:flex md:col-span-5 items-center justify-center ">
                        <div
                            className="hidden lg:block w-[1050px] h-[581.943px] scale-50 object-contain rotate-[14.661deg] shrink-0 bg-cover bg-bottom"
                            style={{
                                backgroundImage: `url(${HeroLeaf})`,
                                backgroundPosition: '50% 50%',
                                backgroundRepeat: 'no-repeat',
                            }}
                        ></div>
                    </div>
                    <div className="hidden lg:block lg:col-span-5 animate-slowspin">
                        <img
                            src={HeroPasta}
                            alt="Delicious plate of pasta with grilled chicken"
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
                {/*     </div> */}
            </section>
        </div>
    )
}

export default HeroSection;
