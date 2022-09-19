import React, { useEffect } from 'react'

export default function Navbar() {
    useEffect(() => {
        const primaryNav = document.querySelector('#primary-navigation');
        const navToggle = document.querySelector('#mobile-nav-toggle');
        let visibility = primaryNav?.getAttribute('data-visible');

        function openSideMenu() {
            visibility = 'true';
            primaryNav?.classList.remove('translate-x-full');
            primaryNav?.classList.add('translate-x-0');
            document.body.style.overflow = "hidden";
        }
        function closeSideMenu() {
            visibility = 'false';
            primaryNav?.classList.remove('translate-x-0');
            primaryNav?.classList.add('translate-x-full');
            document.body.style.overflow = "auto";
        }

        navToggle?.addEventListener('click', () => {

            if (visibility === 'false') {
                openSideMenu();
            }
            else {
                closeSideMenu();
            }
            // console.log(visibility);
        })

        const listItemArray = document.querySelectorAll('.list-item');
        for (let i = 0; i < listItemArray.length; i++) {
            listItemArray[i].addEventListener('click', closeSideMenu)
        }
    }, []);

    return (
        <header id='home' className='bg-black text-white font-Poppins md:pl-10'>
            <button id='mobile-nav-toggle' className='absolute z-50 text-gold_600 text-2xl aspect-square w-10 top-4 right-4 sm:hidden'>
                <i className="fa-solid fa-bars"></i>
            </button>
            <nav className='relative z-40 pr-10'>
                <ul id='primary-navigation' className='bg-black md:bg-transparent fixed flex flex-col sm:flex-row h-full sm:justify-center md:justify-end pl-8 sm:pl-0 pt-32 sm:py-10 -right-1/3 space-y-10 sm:space-y-0 sm:space-x-16 sm:static text-xl sm:text-base translate-x-full sm:translate-x-0 transition-all duration-500 w-full z-40' data-visible='false'>
                    <li className='list-item hover:text-gold_600 duration-700'>
                        <a href="#home">Home</a>
                    </li>
                    <li className='list-item hover:text-gold_600 duration-700'>
                        <a href="#carousel">About</a>
                    </li>
                    <li className='list-item hover:text-gold_600 duration-700'>
                        <a href="#roadmap">Roadmap</a>
                    </li>
                    <li className='list-item sm:hidden hover:text-gold_600 duration-700'>
                        <a href="https://twitter.com/ClassicDriveNFT" target="_blank" rel='noreferrer'><i className="fa-brands fa-twitter"></i></a>&emsp;
                        <a href="https://discord.gg/77RgBU6wzS" target="_blank" rel='noreferrer'><i className="fa-brands fa-discord"></i></a>
                    </li>
                </ul>
            </nav>

            {/* Circle Backgrounds */}
            <div className='relative overflow-x-clip z-0'>
            <div className='h-[1000px] w-[1000px] border-[1.5px] border-dotted border-gold_500 rounded-full absolute -top-[20rem] -right-[32rem]'>
                <div className='h-[800px] w-[800px] border-[1.5px] border-dotted border-gold_500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='h-[600px] w-[600px] border-[1.5px] border-dotted border-gold_500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <div className='h-[400px] w-[400px] border-[1.5px] border-dotted border-gold_500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <div className='h-[200px] w-[200px] border-[1.5px] border-dotted border-gold_500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </header>
    )
}
