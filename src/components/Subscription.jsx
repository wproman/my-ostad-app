import React from 'react'

const Subscription = () => {
  return (
    <section className='mb-20 flex justify-center items-center text-center'>
       <div>
       <h2 className="font-bold uppercase text-secondary mb-8">subscribe</h2>
        <h1 className='text-3xl font-semibold leading-normal mb-4 capitalize'>Subscribe to get <br/> the latest news about us</h1>
        <p className='text-xs mb-8'>Please drop your email below to get daily update about what we do</p>
        

        
        {/* <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200" placeholder="you@example.com" required/>
        <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">Subscribe</button>
      */}

      <div className="mb-4 relative">

        <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200" placeholder="Enter your email address" required />
        <button type="submit" className="absolute top-30px right-0 bg-[#F55F1D] text-white py-2 px-4 rounded-r-lg hover:bg-blue-600 transition duration-300 ease-in-out">Subscribe</button>
      </div>



       </div>
    </section>
  )
}

export default Subscription