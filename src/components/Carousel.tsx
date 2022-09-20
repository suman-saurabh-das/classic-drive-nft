import React from 'react'
import 'tw-elements';

export default function Carousel() {
    return (
        <main id='carousel' className='bg-black text-white'>
            <section className='pt-14 w-full m-auto'>
                <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
                    <div className="carousel-inner relative w-full m-auto overflow-hidden bg-gold_100">
                        <div className="carousel-item active relative float-left w-full px-4 sm:px-6 md:px-12 xl:px-24 2xl:px-36">
                            <div className='md:inline-block w-full lg:w-1/2 py-8 md:pr-12'>
                                <h1 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gold_700'>Rypnite</h1>
                                <p className='py-6 text-gold_600'>Sensored armored machina manufactured for pure comfort and zero duress. With a GPS controlled steering to automated and voice recognize programs as part of it's makeup, Sommers makes living peaceful and easier. When the going gets tough, hop on a Sommer and the tough unload a massive barrage of awesomeness - do not tread softly as you only live once.</p>
                                <button className='bg-gold_600 hover:bg-gold_800 hover:cursor-pointer duration-300 p-3 rounded-lg text-sm font-semibold float-right'>Explore More</button>
                            </div>
                            <img
                                src="https://drive.google.com/uc?export=view&id=1LiPkVHSUcOQ6GU4yvgHInk1sNUMipgP3"
                                className="md:inline-block w-full sm:w-1/3 float-right"
                                alt="Wild Landscape"
                            />
                        </div>
                        <div className="carousel-item relative float-left w-full px-4 sm:px-6 md:px-12 xl:px-24 2xl:px-36">
                            <div className='md:inline-block w-full lg:w-1/2 py-8 md:pr-12'>
                                <h1 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gold_700'>Roic</h1>
                                <p className='py-6 text-gold_600'>Sensored armored machina manufactured for pure comfort and zero duress. With a GPS controlled steering to automated and voice recognize programs as part of it's makeup, Sommers makes living peaceful and easier. When the going gets tough, hop on a Sommer and the tough unload a massive barrage of awesomeness - do not tread softly as you only live once.</p>
                                <button className='bg-gold_600 hover:bg-gold_800 hover:cursor-pointer duration-300 p-3 rounded-lg text-sm font-semibold float-right'>Explore More</button>
                            </div>
                            <img
                                src="https://drive.google.com/uc?export=view&id=10lfk5N749OrPJQ-k5TZ5wVfFylqMjF5C"
                                className="md:inline-block w-full sm:w-1/3 float-right"
                                alt="Camera"
                            />
                        </div>
                        <div className="carousel-item relative float-left w-full px-4 sm:px-6 md:px-12 xl:px-24 2xl:px-36">
                            <div className='md:inline-block w-full lg:w-1/2 py-8 md:pr-12'>
                                <h1 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gold_700'>Sommers</h1>
                                <p className='py-6 text-gold_600'>Sensored armored machina manufactured for pure comfort and zero duress. With a GPS controlled steering to automated and voice recognize programs as part of it's makeup, Sommers makes living peaceful and easier. When the going gets tough, hop on a Sommer and the tough unload a massive barrage of awesomeness - do not tread softly as you only live once.</p>
                                <button className='bg-gold_600 hover:bg-gold_800 hover:cursor-pointer duration-300 p-3 rounded-lg text-sm font-semibold float-right'>Explore More</button>
                            </div>
                            <img
                                src="https://drive.google.com/uc?export=view&id=1DFvIx0yjy6vld12Vv7QCZPPfQc5B0N09"
                                className="md:inline-block w-full sm:w-1/3 float-right"
                                alt="Exotic Fruits"
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </main>
    )
}
