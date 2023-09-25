import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AllMovies from '../components/AllMovies'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <HeroSection titale={'Your Movies, Together at Last'} />
                <AllMovies />
            </main>
            <Footer />
        </div>
    )
}
