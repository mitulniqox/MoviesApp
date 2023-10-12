import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LatestMovies from '../components/LatestMovies';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleMovies } from '../redux/actions/SingleMovieAction';

export default function MoviesDetails({ }) {

    const { id } = useParams();
    // const [movie, setMovie] = useState({});
    // const apiKey = '26eb8fe0ea17478b691097b4e10c4ac9';

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSingleMovies(id))
    }, [])

    const { data } = useSelector(state => state.SingleMovieList)

    // console.log(hhh, "mnmnmnmn")
    // useEffect(() => {
    //     const apiUrl = `https://api.themoviedb.org/3/movie/${id}`;

    //     axios
    //         .get(apiUrl, {
    //             params: {
    //                 api_key: apiKey,
    //             },
    //         })
    //         .then((response) => {
    //             setMovie(response.data);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching movie details:', error);
    //         });
    // }, [id]);

    console.log(data, 'hihi');


    return (
        <>
            <Header />

            <main>

                <div>
                    <section className="movie-details-area">
                        <div className="container">
                            <div className="row align-items-center justify-content-center position-relative">
                                <div className="col-xl-3 col-lg-4">
                                    <div className="movie-details-img" style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path})` }}>
                                        <a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video"><img src="/assets/img/images/play_icon.png" alt="" /></a>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-8">
                                    <div className="movie-details-content">
                                        <h2>{data.original_title}</h2>
                                        <div className="banner-meta">
                                            <ul>
                                                <li className="quality">
                                                    <span>Rating: {data.vote_average}</span>
                                                    <span>{data.original_language}</span>
                                                </li>
                                                <li className="category">
                                                    {data.genres &&
                                                        data.genres.map((i, index) =>
                                                            <a href="#">{i.name}</a>
                                                        )}
                                                </li>
                                                <li className="release-time">
                                                    <span><i className="far fa-calendar-alt" /> {data.release_date
                                                    }</span>
                                                    <span><i className="far fa-clock" /> {data.runtime} min</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>{data.overview}</p>
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
