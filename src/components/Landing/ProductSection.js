import React from "react";
import { useState, useEffect } from "react";
import Prod1 from '../../images/prod1.jpg';
import Prod2 from '../../images/prod2.jpg';
import Prod3 from '../../images/prod3.jpg';
import Prod4 from '../../images/prod4.jpg';
import ProductCard from './ProductCard';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const products = [
    {
        image: Prod1,
        title: 'Chicken Burger',
        rating: '4.5',
        price: '$2.99',
        oldPrice: '$3.50',
        features: [
            '1 large piece of chicken',
            'Crispy or grilled option available',
            'Fresh, high-quality ingredients',
        ],
    },
    {
        image: Prod2,
        title: 'Salmond Salad',
        rating: '4.8',
        price: '$3.99',
        oldPrice: '$4.50',
        features: [
            'Fresh salmon, grilled or smoked',
            'Mixed greens, lettuce, arugula,...',
            'Optional toppings',
        ],
    },
    {
        image: Prod3,
        title: 'Seafood Pizza',
        rating: '4.8',
        price: '$3.99',
        oldPrice: '$4.50',
        features: [
            'Fresh shrimp, calamari, mussels,... ',
            'Mozzarella and a blend of cheeses.',
            'Garlic, chili flakes, fresh basil.',
        ],
    },
    {
        image: Prod4,
        title: 'Grilled Salmon & Vegetables',
        rating: '4.9',
        price: '$5.99',
        oldPrice: '$8.50',
        features: [
            'Fresh grilled salmon with a crispy skin.',
            'Topped with diced zucchini, avocado, and tomato.',
            'Served on a bed of sautéed spinach.',
        ],
    }
];

export default function ProductList() {
    const [displayedProducts, setDisplayedProducts] = useState(products);

    // Update displayed products based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 640) {
                // Show only 1 product on small screens (sm breakpoint)
                setDisplayedProducts(products.slice(0, 1));
            } else {
                // Show all products on larger screens
                setDisplayedProducts(products);
            }
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Clean up event listener
        return () => window.removeEventListener("resize", handleResize);
    }, [products]);
    return (
<div className="flex flex-col gap-1 p-10">
    {/* Title */}
    <div className="text-left px-6 sm:px-5 md:px-24 relative">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-light text-gray-500 font-sacramento">
            Recommended for you
        </h2>
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-yellow-400">Best Sellers</h1>

        <div className="flex items-center space-x-2 absolute sm:right-4 right-1 top-4">
            <a
                href="#"
                className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 text-white bg-yellow-300 border border-gray-300 rounded-full hover:bg-yellow-200 hover:text-yellow-500 shadow"
            >
                <GrPrevious />
            </a>
            <a
                href="#"
                className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 text-white bg-yellow-300 border border-gray-300 rounded-full hover:bg-yellow-200 hover:text-yellow-500 shadow"
            >
                <GrNext />
            </a>
        </div>
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 justify-center items-center">
        {displayedProducts.map((product, index) => (
            <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                rating={product.rating}
                price={product.price}
                oldPrice={product.oldPrice}
                features={product.features}
            />
        ))}
    </div>
</div>

    );
}