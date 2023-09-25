import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LatestMovies from '../components/LatestMovies';

export default function MoviesDetails({ }) {

    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const apiKey = '26eb8fe0ea17478b691097b4e10c4ac9';

    useEffect(() => {
        const apiUrl = `https://api.themoviedb.org/3/movie/${id}`;

        axios
            .get(apiUrl, {
                params: {
                    api_key: apiKey,
                },
            })
            .then((response) => {
                setMovie(response.data);
            })
            .catch((error) => {
                console.error('Error fetching movie details:', error);
            });
    }, [id]);

    console.log(movie, 'hihi');


    return (
        <>
            <Header />

            <main>

                <div>
                    <section className="movie-details-area">
                        <div className="container">
                            <div className="row align-items-center justify-content-center position-relative">
                                <div className="col-xl-3 col-lg-4">
                                    <div className="movie-details-img" style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path})` }}>
                                        <a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video"><img src="/assets/img/images/play_icon.png" alt="" /></a>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-8">
                                    <div className="movie-details-content">
                                        <h2>{movie.original_title}</h2>
                                        <div className="banner-meta">
                                            <ul>
                                                <li className="quality">
                                                    <span>Rating: {movie.vote_average}</span>
                                                    <span>{movie.original_language}</span>
                                                </li>
                                                <li className="category">
                                                    {movie.genres &&
                                                        movie.genres.map((i, index) =>
                                                            <a href="#">{i.name}</a>
                                                        )}
                                                </li>
                                                <li className="release-time">
                                                    <span><i className="far fa-calendar-alt" /> {movie.release_date
                                                    }</span>
                                                    <span><i className="far fa-clock" /> {movie.runtime} min</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>{movie.overview}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    <LatestMovies />
                </div>
            </main>

            <Footer />

        </>
    )
}
