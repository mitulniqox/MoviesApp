import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { addRemoveWatchList } from './MoviesList'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'

export default function WatchList() {

    const [watchList, setWatchList] = useState(localStorage.getItem('watch-list') ? localStorage.getItem('watch-list') : '[]')

    return (
        <div>
            <Header />
            <main>
                <HeroSection titale={'Watch List'} />
                <section className="movie-area movie-bg">
                    <div className='container'>
                        <div className="row tr-movie-active">
                            {
                                watchList && JSON.parse(watchList).length ? watchList && JSON.parse(watchList).map((i, index) =>
                                    <div key={index} className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
                                        <div className="movie-item movie-item-three mb-50">
                                            <div className="movie-poster mmm" style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_face${i.poster_path})` }}>
                                                <ul className="overlay-btn">
                                                    <li><Link to={`/movies-details/${i.id}`} className="btn">Details</Link></li>
                                                </ul>
                                            </div>
                                            <div className="movie-content">
                                                <div className="top">
                                                    <h5 className="title"><Link to={`/movies-details/${i.id}`}>{i.original_title}</Link></h5>
                                                    <span className="date">{i.release_date}</span>
                                                </div>
                                                <div className="bottom">
                                                    <ul>
                                                        <li><span className="quality">{i.original_language}</span></li>
                                                        <li><span className="quality pointer" onClick={() => {
                                                            addRemoveWatchList(i, setWatchList)
                                                        }}>
                                                            Remove Watchlist</span></li>
                                                        <li>
                                                            <span className="rating"><i className="fas fa-thumbs-up" /> {i.vote_count}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                    :
                                    <div className='col-lg-12 text-center'>
                                        <h1>Data Not Found</h1>
                                    </div>
                            }
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
