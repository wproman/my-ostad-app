

async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/TestimonialList");
    if(!res.ok){
        throw new Error("Worklist section Calling Fail");
    }
    return res.json();
}
const Testimonial = async() => {
    const data = await getData();


  return (
    <section className=" bg-white  mt-6">
    <div className="container mx-auto pt-10 pb-12 ">
    <h2 className="font-bold text-secondary">WORK LIST</h2>
    <h1 className="text-2xl font-bold mt-3">We provide the</h1>
        <div className="grid grid-cols-3">
        
                          {
                            data.map((item,i)=>{
                                return(
                                    
                                    <div key={i} className="">  
                                    <div className=" rounded-lg shadow-lg p-4">
  <div className="rounded-lg mb-3">
  <img src={item['image']}/>

  </div>
  <p className="mb-2">{item['msg']}</p>
  <p className="text-xs font-bold">{item['name']}</p>
  <p className="text-xs">{item['designation']}</p>
</div>
                                    </div>
                                )
                            })
                        }
                        
        </div>
    </div>
    </section>
  )
}

export default Testimonial