

async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/WorkList");
    if(!res.ok){
        throw new Error("Worklist section Calling Fail");
    }
    return res.json();
}
const WorkList = async() => {
    const data = await getData();

  return (
    <section className=" bg-white  mt-6">
    <div className="container mx-auto pt-10 pb-12 ">
    <h2 className="font-bold text-secondary">WORK LIST</h2>
    <h1 className="text-2xl font-bold mt-3">We provide the</h1>
        <div className="flex justify-between items-center mt-8 p-5 gap-32">
        
                          {
                            data.map((item,i)=>{
                                return(
                                    
                                    <div key={i} className="">  
                                    <div class="bg-primary p-6 inline-block rounded-lg mb-3">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
</div>

                       
                                        <h2 className="text-2xl font-bold">{item['title']}</h2>
                                        <p>{item['des']}</p>
                                        <button className="flex gap-2 mt-10 ml-8">Learn More <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                         <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                        </button>
                                    </div>
                                )
                            })
                        }
                        
        </div>
    </div>
    </section>
  )
}

export default WorkList