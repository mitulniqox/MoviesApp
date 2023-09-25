import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function LatestMovies() {

    const [movies, setMovies] = useState([]);
    const apiKey = '26eb8fe0ea17478b691097b4e10c4ac9';

    useEffect(() => {
        const apiUrl = 'https://api.themoviedb.org/3/discover/movie';

        axios
            .get(apiUrl, {
                params: {
                    api_key: apiKey,
                },
            })
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <>


            {/* tv-series-area */}
            <section className="tv-series-area tv-series-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-50">
                                <span className="sub-title">Best TV Series</span>
                                <h2 className="title">World Best TV Series</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row tr-movie-active">
                        {
                            movies.slice(0, 4).map((i, index) =>
                                <div key={index} className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
                                    <div className="movie-item movie-item-three mb-50">
                                        <div className="movie-poster mmm" style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_face${i.poster_path})` }}>
                                            {/* <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${i.poster_path}`} alt="" /> */}
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
                        }

                    </div>
                </div>
            </section>
            {/* tv-series-area-end */}

        </>
    )
}
