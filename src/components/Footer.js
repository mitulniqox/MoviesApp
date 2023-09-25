import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            {/* footer-area */}
            <footer>
                <div className="footer-top-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-7">
                                <div className="quick-link-list">
                                    <ul>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Help Center</a></li>
                                        <li><a href="#">Terms of Use</a></li>
                                        <li><a href="#">Privacy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="footer-social">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest-p" /></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright-text">
                                    <p>Copyright © 2023. All Rights Reserved By <Link to={'/'}>Movies</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer-area-end */}

        </>
    )
}
