import React from 'react'
import Banner from '../componants/header/home/banner'
import Product from '../componants/header/home/product'

function Home() {
  return (
    <div>
      <Banner/>
      <div className='w-full -mt-10 lgl:-mt-36 py-10'>
      <Product/>
      </div>
    </div>
  )
}

export default Home
