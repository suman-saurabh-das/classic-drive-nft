import React from 'react'

export default function Showcase() {
  return (
    <main id='showcase'>
      <section className='bg-black text-white'>
        <h1 className='px-4 sm:px-6 md:px-10 pt-20 text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gold_500'>Showcase</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6'>
            <div><img className='w-full' src="https://classicdrive.xyz/static/media/blue.01e7ba4c216566d1802f1b2ba884f284.svg" alt="" /></div>
            <div><img className='w-full' src="https://classicdrive.xyz/static/media/car-img-3.2c5c7890243a5878cde4b54c27ef886e.svg" alt="" /></div>
            <div><img className='w-full' src="https://classicdrive.xyz/static/media/yellow.27f87ea1bbe22a82b2ef851fa9b8d89d.svg" alt="" /></div>
            <div><img className='w-full' src="https://classicdrive.xyz/static/media/red.223d05eaa7852418fdf1f7f195e3c246.svg" alt="" /></div>
            <div><img className='w-full' src="https://classicdrive.xyz/static/media/car-img-4.a0fb8cb1d7bffe7b9149.png" alt="" /></div>
            <div><img className='w-full' src="https://classicdrive.xyz/static/media/red.223d05eaa7852418fdf1f7f195e3c246.svg" alt="" /></div>
            <div><img className='w-full' src="https://classicdrive.xyz/static/media/blue.01e7ba4c216566d1802f1b2ba884f284.svg" alt="" /></div>
            <div><img className='w-full' src="https://classicdrive.xyz/static/media/car-img-5.75c776edd760555fbf16c560d1bd2c2d.svg" alt="" /></div>
        </div>
      </section>
    </main>
  )
}
