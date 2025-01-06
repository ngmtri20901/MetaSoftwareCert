import React from 'react'
import LogoFooter from "../../images/Logo-Green-horizon.png"
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";




const h2Class = "mb-6 text-2xl font-semibold text-white dark:text-white text-center"
const textStyle = "mb-4 text-center text-neutral-300"

export default function Footer() {
    return (
        <div >
            <footer class="shadow pt-28 bg-[#f5f5f5]">

                <footer className="bg-[#283430] py-4 hidden md:block">
                    <div className="container mx-auto flex items-center px-4">
                        {/* Follow Us Section */}
                        <div className="flex justify-start items-center space-x-4 flex-1 ml-48">
                            <span className="text-white font-medium">FOLLOW US:</span>
                            <FaFacebook className="text-white hover:text-neutral-500" />
                            <AiFillInstagram className="text-white hover:text-neutral-500" />
                            <FaTiktok className="text-white hover:text-neutral-500" />
                        </div>

                        {/* Logo Section */}
                        <div className="flex justify-center items-center flex-none">
                            <img
                                src={LogoFooter}
                                alt="Little Lemon Logo"
                                className="h-14"
                            />
                        </div>

                        {/* Email Subscription Section */}
                        <div className="flex items-center space-x-2 flex-1 justify-end mr-48">
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                            <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                                Submit
                            </button>
                        </div>
                    </div>
                </footer>


                <div class="container mx-auto">
                    <div class="w-1/2 border-t border-neutral-400"></div>
                </div>



                <footer class="bg-[#283430] dark:bg-gray-900">
                    <div class="mx-auto w-full max-w-screen-xl">
                        <div class="gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 flex justify-center items-center">
                            <div class="w-1/3 border-r border-gray-500">
                                <h2 class={h2Class}>Address</h2>
                                <p class={textStyle}>1013 Pham Van Dong Avenue, <br></br>
                                    Thu Duc Dist., HCMC</p>
                            </div>
                            <div class="w-1/3 border-r border-gray-500">
                                <h2 class={h2Class}>Quick Links</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium grid grid-cols-2">
                                    <li class={textStyle}>
                                        <a href="#" class="hover:underline">Menu</a>
                                    </li>
                                    <li class={textStyle}>
                                        <a href="#" class="hover:underline">Reservation</a>
                                    </li>
                                    <li class={textStyle}>
                                        <a href="#" class="hover:underline">FAQs</a>
                                    </li>
                                    <li class={textStyle}>
                                        <a href="#" class="hover:underline">Blog</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-1/3">
                                <h2 class={h2Class}>Contact</h2>
                                <ul class={textStyle}>
                                    <li class={textStyle}>
                                        <a href="#" class="hover:underline">hello@littlelemon.com</a>
                                    </li>
                                    <li class="{textStyle}">
                                        <a href="#" class="hover:underline">(+84) 357 428 628</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>

                <footer class="">
                    <div class="p-2 bg-[#1f2725] flex justify-center items-center text-center">
                        <span class="text-center text-sm text-neutral-400 sm:text-center dark:text-gray-400">
                            @2024 Little Lemon Restaurant. All right reserved.
                        </span>
                    </div>
                </footer>

            </footer>
        </div>
    )
}
