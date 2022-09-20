import React from 'react'

export default function Showcase() {
  return (
    <main id='showcase'>
      <section className='bg-black text-white'>
        <h1 className='px-4 sm:px-6 md:px-10 pt-20 text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gold_500'>Showcase</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6'>
            <div><img className='w-full' src="https://drive.google.com/uc?export=view&id=1F90SmOpZuXAaiFFaY70q6Zgme0YLsfqq" alt="" /></div>
            <div><img className='w-full' src="https://drive.google.com/uc?export=view&id=1WmD88VqOeXPZ7dYGqofPaOjUG8ceeiYm" alt="" /></div>
            <div><img className='w-full' src="https://drive.google.com/uc?export=view&id=1vyUmOjAyJz7_DEc-KY6-caYwCaIPi1h2" alt="" /></div>
            <div><img className='w-full' src="https://drive.google.com/uc?export=view&id=1SJ1XfRHcyZkTpKFV6Zx3454OQ686LraO" alt="" /></div>
            <div><img className='w-full' src="https://drive.google.com/uc?export=view&id=1LiPkVHSUcOQ6GU4yvgHInk1sNUMipgP3" alt="" /></div>
            <div><img className='w-full' src="https://drive.google.com/uc?export=view&id=1lSz00QOOgQXg1KAxUtdYdT65m6ZHzXhU" alt="" /></div>
            <div><img className='w-full' src="https://drive.google.com/uc?export=view&id=10lfk5N749OrPJQ-k5TZ5wVfFylqMjF5C" alt="" /></div>
            <div><img className='w-full' src="https://drive.google.com/uc?export=view&id=1DFvIx0yjy6vld12Vv7QCZPPfQc5B0N09" alt="" /></div>
        </div>
      </section>
    </main>
  )
}