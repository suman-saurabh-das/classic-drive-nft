import React from 'react'

export default function Footer() {
    return (
        <main>
            <footer className='bg-black text-white py-10 px-8 sm:px-12 md:px-20'>
                <div className='text-gold_100 flex justify-center space-x-20 text-4xl pb-12'>
                    <a href="https://twitter.com/ClassicDriveNFT" target="_blank" rel='noreferrer'><i className="fa-brands fa-twitter hover:scale-125 hover:text-gold_500 hover:cursor-pointer duration-300"></i></a>
                    <a href="https://discord.gg/77RgBU6wzS" target="_blank" rel='noreferrer'><i className="fa-brands fa-discord hover:scale-125 hover:text-gold_500 hover:cursor-pointer duration-300"></i></a>
                </div>
                <div className='text-gold_500 justify-center items-center space-y-5 md:justify-between flex flex-col md:flex-row text-2xl font-semibold'>
                    <span>Provable fairness</span>
                    <span>Terms & conditions</span>
                </div>
            </footer>
        </main>
    )
}