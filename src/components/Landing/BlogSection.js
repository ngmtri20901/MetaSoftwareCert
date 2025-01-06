import React from 'react';
import { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import Blog1 from "../../images/Blog1.png"
import Blog2 from "../../images/Blog2.png"
import Blog3 from "../../images/Blog3.png"
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";


const blogItems = [
    {
        imageUrl: Blog1,
        author: "Lionel Messi",
        category: "Food",
        date: "05/01/2024",
        title: "The Art of Seasonal Dining for Every Occasion",
        description: "Seasonal dining is more than just a trend—it's a celebration of nature’s bounty, a way to connect with the rhythms of the year, and a chance to indulge in the freshest flavors available."
    },
    {
        imageUrl: Blog2,
        author: "Ronaldo De Lima",
        category: "How to eat",
        date: "04/01/2024",
        title: "A Fresh Bite: Healthy Bowls for Every Season",
        description: "Eating fresh, vibrant meals is one of the best ways to nourish both body and soul. This season, we're celebrating healthy bowls that combine colorful vegetables, ....."
    },
    {
        imageUrl: Blog3,
        author: "Luis Figo",
        category: "Green",
        date: "03/01/2024",
        title: "The Ultimate Fruit Smoothie Bowls",
        description: "Nothing says 'refreshing' quite like a fruit-packed smoothie bowl, bursting with vibrant colors and tropical flavors. Whether you're starting your day with a burst of energy or..."
    }
]

export default function BlogSection() {
    const [displayBlog, setDisplayBlog] = useState(blogItems);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 640) {
                setDisplayBlog(blogItems.slice(0, 1));
            } else {
                setDisplayBlog(blogItems);
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <div className="flex flex-col items-center justify-center gap-8 p-10 bg-neutral-100">
            {/* Title */}
            <div className="text-center">
                <h2 className="text-4xl font-light text-gray-500 font-sacramento">Where Every Dish Tells a Story</h2>
                <h1 className="text-4xl font-bold text-yellow-400">Blogs & News</h1>
            </div>



            {/* Blog Cards */}
            <div className="flex flex-wrap gap-8 justify-center items-center">

                <a href="#" className="hidden sm:flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 inline">
                    <GrLinkPrevious />
                </a>

                {/* For smaller screens, display both previous and next buttons */}
                <div className="flex sm:hidden items-center justify-center gap-4">
                    <a href="#" className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                        <GrLinkPrevious />
                    </a>

                    <a href="#" className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                        <GrLinkNext />
                    </a>
                </div>

                {displayBlog.map((item, index) => (
                    <BlogCard
                        key={index}
                        title={item.title}
                        author={item.author}
                        category={item.category}
                        date={item.date}
                        imageUrl={item.imageUrl}
                        description={item.description}
                    />
                ))}

                <a
                    href="#"
                    className="hidden sm:flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                    <GrLinkNext />
                </a>
            </div>

        </div>

    );
}

