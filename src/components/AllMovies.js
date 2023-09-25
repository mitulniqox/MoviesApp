import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMoviesList } from '../redux/actions/MoviesListAction';

export default function AllMovies() {

    const [movies, setMovies] = useState([]);
    const apiKey = '26eb8fe0ea17478b691097b4e10c4ac9';
    const dispatch = useDispatch();
    const { loading, data } = useSelector(state => state.MoviesList);


    useEffect(() => {
        dispatch(getMoviesList())
    }, []);



    return (
        <>
            <section className="movie-area movie-bg">
                <div className="container">
                    <div className="row align-items-end mb-60">
                        <div className="col-lg-12">
                            <div className="section-title text-center text-lg-left">
                                <span className="sub-title">ONLINE STREAMING</span>
                                <h2 className="title">New Release Movies</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row tr-movie-active">
                        {loading ?
                            <div className='col-lg-12 text-center'>
                                <h1>Loding...</h1>
                            </div>
                            :
                            data.length ? data.map((i, index) =>
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
            </section >
        </>
    )
}
