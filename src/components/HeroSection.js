import React from 'react'

export default function HeroSection({titale}) {
    return (
        <>
            {/* breadcrumb-area */}
            <section className="breadcrumb-area breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-content">
                                <h2 className="title">{titale}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* breadcrumb-area-end */}


        </>
    )
}
