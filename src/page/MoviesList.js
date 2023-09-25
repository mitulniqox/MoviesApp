import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Pagination from '../components/Pagination';
import { useSelector } from 'react-redux';

export const addRemoveWatchList = (movie, setWatchList) => {


    const list = localStorage.getItem('watch-list');

    if (list) {
        console.log(list)
        const findMovie = JSON.parse(list).find(e => e.id == movie.id);

        if (findMovie) {
            let watchList = [...JSON.parse(list)];
            const index = watchList.findIndex(e => e.id == movie.id);
            watchList.splice(index, 1);
            localStorage.setItem('watch-list', JSON.stringify(watchList));
            if (setWatchList) {
                setWatchList(JSON.stringify(watchList))
            }
        } else {
            localStorage.setItem('watch-list', JSON.stringify([...JSON.parse(list), movie]));
            if (setWatchList) {
                setWatchList(JSON.stringify([...JSON.parse(list), movie]))
            }
        }
    } else {
        localStorage.setItem('watch-list', JSON.stringify([movie]));
        if (setWatchList) {
            setWatchList(JSON.stringify([movie]))
        }
    }
}


function MovieList() {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    const { onePageData } = useSelector(state => state.pagination)
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const filteredData = onePageData.filter((item) =>
        item.original_title.toLowerCase().includes(search.toLowerCase())
    );




    return (
        <>
            <Header />
            <main className='overflow-hidden'>
                <HeroSection titale={'All Movies List'} />
                <section className="movie-area movie-bg">
                    <div className='container'>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title mb-50">
                                    <h1 className="title">All Movies List</h1>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className="footer-search">
                                    <form action="#">
                                        <input type="text" placeholder="Find Favorite Movie" onChange={(e) => setSearch(e.target.value)} />
                                        <button><i className="fas fa-search"></i></button>
                                    </form>
                                </div>
                                {/* <input className='form-control' type='text' /> */}
                            </div>
                        </div>
                        <div className="row tr-movie-active">
                            {filteredData.length ? filteredData.map((i, index) => (
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
                                                        addRemoveWatchList(i)
                                                    }}>
                                                        Add Watchlist</span></li>
                                                    <li><span className="rating"><i className="fas fa-thumbs-up" /> {i.vote_count}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                                :
                                <div className='col-lg-12 text-center'>
                                    <h1>Data Not Found</h1>
                                </div>
                            }
                            <div className='col-lg-12'>
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default MovieList;
