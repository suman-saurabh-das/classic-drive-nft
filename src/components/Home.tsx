import React from 'react'

export default function Home() {
  return (
    <main>
        <section className='bg-black z-20 text-white pl-4 sm:pl-6 md:pl-10 py-10 sm:py-0'>
            <div className='relative'>
                <h1 className='text-3xl xl:text-6xl font-bold py-6'>Classic drive <span className='text-gold_100'>NFT</span></h1>
                <p className='pb-3 md:w-1/2 text-md'>Unique 1 of 1 Digital Exquisite collectible vehicles designed with precision, beauty and luxury.</p>
                <p className='pb-3 md:w-1/2 text-md'>From super fast cars to luxurious modern toys built to experience the maximum comfort there is to be enjoyed. All Exquisite cars are represented within our gorgeous looking collection.</p>
                <div className='pt-6'>
                    <a href='https://discord.gg/77RgBU6wzS' target="_blank" rel='noreferrer' className='bg-gold_600 hover:bg-gold_800 hover:cursor-pointer duration-300 p-3 rounded-lg text-sm font-semibold'><i className="fa-brands fa-discord"></i>&emsp;Join the Community</a>
                </div>
                <div className='relative right-10'>
                    <img className='md:h-[350px] xl:h-[450px] 2xl:h-[650px]' src="https://classicdrive.xyz/static/media/fire.6ca6e93afc2471d3d2dfac4fbaaf0a95.svg" alt="" />
                </div>
            </div>
        </section>
    </main>
  )
}
