
async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/FeaturedProject");
    if(!res.ok){
        throw new Error("Hero section Calling Fail");
    }
    return res.json();
}

const Featured =async () => {
    const data = await getData();
  return (
    <section className=" bg-primary mt-6">
    <div className="container mx-auto pt-10 pb-12 ">
    <h2 className="font-bold text-secondary">Featured Project</h2>
    <h1 className="text-2xl font-bold mt-3">We provide the Perfect Solution to your business growth</h1>
    <div className="mt-7 flex flex-wrap justify-between items-center">
  
    
        <div className="w-1/2 p-2">
          
          <img className="w-full" src={data[0]['image']} alt='{}' />
          {/* <h2 className="mt-4">App Design {data[0]['created_at']}</h2>
          <h2 className="text-3xl font-bold">{data[0]["remark"]}</h2> */}
        </div>
        <div className="w-1/2 p-2">
    {/* Content for the second column */}
    <div className="flex flex-col">
      {/* First Row */}
      <div className="flex">
        <div className="w-1/2 p-2">
          <img className="w-full" src={data[1]['image']} alt={`Image 2`} />
      
        </div>
        <div className="w-1/2 p-2">
          <img className="w-full" src={data[2]['image']} alt={`Image 3`} />
        </div>
      </div>
      {/* Second Row */}
      <div className="flex">
        <div className="w-1/2 p-2">
          <img className="w-full" src={data[3]['image']} alt={`Image 4`} />
        </div>
        <div className="w-1/2 p-2">
          <img className="w-full" src={data[4]['image']} alt={`Image 5`} />
        </div>
      </div>
    </div>
  </div>
        
    
  
</div>

    </div>
    </section>
  )
}

export default Featured;


