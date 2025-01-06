import React from 'react'
import NavBar from './shared/NavBar';
import HeroSection from './Landing/HeroSection';
import AboutSection from './Landing/AboutSection';
import InfoSection from './Landing/InfoSection';
import SeasonalDish from './Landing/SeasonalDish';
import { AccordionSection } from './Landing/Accordion';
import Gallery from './Landing/Gallery';
import Footer from './shared/Footer';
import ProductCard from './Landing/ProductCard';
import BlogSection from './Landing/BlogSection';
import MouseMoveEffect from './shared/MouseEffect';
import ProductList from './Landing/ProductSection';
import BookTable from './Landing/BookTable';
import BackToHomeButton from './shared/BackToHome';

function LandingPage() {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <div className="bg-neutral-100 h-14"></div>
            <AboutSection />
            <div className="bg-neutral-100 h-14"></div>
            <InfoSection />
            <ProductList />
            <SeasonalDish />
            <BookTable />
            <div className="bg-neutral-100 h-14"></div>
            <Gallery />
            <BlogSection />
            <div className="bg-neutral-100 h-14"></div>
            <AccordionSection />
            <Footer />

            <BackToHomeButton />
        </div>
    )
}

export default LandingPage;