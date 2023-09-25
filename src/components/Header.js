import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

    const [menu, setMenu] = useState(false);



    return (
        <>
            {/* header-area */}
            <header>
                <div id="sticky-header" className="menu-area transparent-header">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={() => setMenu(!menu)}><i className="fas fa-bars" /></div>
                                <div className="menu-wrap ">
                                    <nav className="menu-nav show">
                                        <div className="logo">
                                            <Link to={'/'}>
                                                MOVIES
                                            </Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex justify-content-end">
                                            <ul className="navigation">
                                                <li className="menu-item-has-children"><Link to={'/'}>Home</Link></li>
                                                <li><Link to={'/movies-list'}>All Movies</Link></li>
                                                <li><Link to={'/movies-watch-list'}>Watch List</Link></li>
                                                <li className="menu-item-has-children"><a href="#">blog</a>
                                                    <ul className="submenu">
                                                        <li><a href="#">Our Blog</a></li>
                                                        <li><a href="3">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        {menu &&
                                            <div className="navbar-wrap main-menu d-lg-flex">
                                                <ul className="navigation">
                                                    <li className="menu-item-has-children"><Link to={'/'}>Home</Link></li>
                                                    <li><Link to={'/movies-list'}>All Movies</Link></li>
                                                    <li><Link to={'/movies-watch-list'}>Watch List</Link></li>
                                                    <li className="menu-item-has-children"><a href="#">blog</a>
                                                        <ul className="submenu">
                                                            <li><a href="#">Our Blog</a></li>
                                                            <li><a href="3">Blog Details</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        }
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* header-area-end */}

        </>
    )
}
