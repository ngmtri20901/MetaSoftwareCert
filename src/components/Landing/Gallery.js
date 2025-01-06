import React from 'react'
import { Carousel } from "flowbite-react";
import Slide1 from "../../images/slide1.png"
import Slide2 from "../../images/slide2.jpg"
import Slide3 from "../../images/slide3.jpg"
import Slide4 from "../../images/slide4.jpg"
import Slide5 from "../../images/slide5.jpg"
import { IoCall } from "react-icons/io5";

export default function Gallery() {
    return (
        <div class="flex flex-col sm:flex-row bg-neutral-100">
            <div class="w-full md:w-2/3 p-4 ">
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-[601px]">
                    <Carousel slideInterval={2000} >
                        <img src={Slide1} alt="..." />
                        <img src={Slide2} alt="..." />
                        <img src={Slide3} alt="..." />
                        <img src={Slide4} alt="..." />
                        <img src={Slide5} alt="..." />
                    </Carousel>
                </div>
            </div>
            <div class="w-full md:w-1/3 p-4 flex justify-center items-center">
                <div class="p-6 bg-white border-2 border-yellow-400 rounded-lg shadow-lg hover:scale-105 duration-300">
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">Opening hours</h2>
                    <p class="text-gray-600 mb-4">
                        Join us at Little Lemon and indulge in delightful dining experiences all week long.
                    </p>
                    <ul class="list-disc list-inside text-gray-700 mb-4 pl-9">
                        <li>
                            <span class="font-bold">Monday - Friday:</span> <br />
                            <span>11:00 AM - 9:00 PM</span>
                        </li>
                        <li class="mt-1">
                            <span class="font-bold">Saturday - Sunday:</span> <br />
                            <span>10:00 AM - 11:00 PM</span>
                        </li>
                    </ul>
                    <p class="text-gray-600">
                        Whether it's a casual lunch or a cozy dinner, we’re here to make every meal special.
                    </p>
                    <div class="flex items-center gap-3 mt-7">
                        {/**Call */}
                        <div class="text-yellow-400">
                            <IoCall size={48} />
                        </div>
                        {/*Text */}
                        <div>
                            <p class="text-gray-800 font-bold gap-2 py-2 text-left border-b border-b-yellow-300">Call anytime</p>
                            <p class="text-gray-600 py-2">+84 2368 6571</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
