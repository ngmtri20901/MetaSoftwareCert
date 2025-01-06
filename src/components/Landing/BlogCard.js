import React from 'react'
import VectorBlog from "../../images/VectorBlog.png"

export default function BlogCard({ title, author, category, date, imageUrl, description }) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 transform transition-transform hover:translate-y-[-10px]">
            <a href="#">
                <img className="rounded-t-lg" src={imageUrl} alt={title} />
            </a>
            <ul className="flex px-5 gap-3 pt-3 pb-0 text-sm text-neutral-500">
                <li className="flex items-center">
                    <span className="text-yellow-300 mr-2 text-3xl">•</span>
                    <span>{author}</span>
                </li>
                <li className="flex items-center">
                    <span className="text-yellow-300 mr-2 text-3xl">•</span>
                    <span>{category}</span>
                </li>
                <li className="flex items-center">
                    <span className="text-yellow-300 mr-2 text-3xl">•</span>
                    <span>{date}</span>
                </li>
            </ul>
            <div className="p-5 pt-2">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight hover:underline text-neutral-700 dark:text-white">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-neutral-500 dark:text-gray-400">{description}</p>
                <a href="#" className="flex justify-center items-center px-3 py-2 text-md font-bold text-center text-yellow-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <figure className="ml-2">
                        <img src={VectorBlog} alt="Vector Blog" className="w-4 h-4" />
                    </figure>
                </a>
            </div>
        </div>
    );
}