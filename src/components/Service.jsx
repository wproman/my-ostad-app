
async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/AllService");
    if(!res.ok){
        throw new Error("Hero section Calling Fail");
    }
    return res.json();
}
const Service =async () => {
    const data = await getData();
  return (
    <div className="mb-20">
    <div className="container mx-auto pt-10 pb-12 ">
    <h2 className="font-bold text-secondary">{data[0]['tag']}</h2>
    <h1 className="text-2xl font-bold mt-3">{data[0]['title']}</h1>
    </div>
    <div className="grid grid-cols-2 gap-5 container mx-auto  ">
        
                          {
                            data.map((item,i)=>{
                                return(
                                    
                                    <div key={i} className="rounded-lg shadow-lg p-5">  
                                  
                                     <img src={item["image1"]} alt="h"/>
                                        <h2 className="text-2xl font-bold">{item['title']}</h2>
                                        <p>{item['des']}</p>
                                    </div>
                                )
                            })
                        }
                        
        </div>
    </div>
  )
}

export default Service;