
async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/AllProject");
    if(!res.ok){
        throw new Error("Hero section Calling Fail");
    }
    return res.json();
}
const AllProjectis =async () => {
    const data = await getData();
  return (
    <div className="mb-20">
    <div className="container mx-auto pt-10 pb-12 ">
    <h2 className="font-bold text-secondary">WORK LIST</h2>
    <h1 className="text-2xl font-bold mt-3">We provide the</h1>
    </div>
    <div className="grid grid-cols-2 gap-5 container mx-auto  ">
        
                          {
                            data.map((item,i)=>{
                                return(
                                    
                                    <div key={i} className="rounded-lg shadow-lg p-5">  
                                  
                                     <img src={item["image"]} alt="h"/>
                                        <h2 className="text-2xl font-bold">{item['title']}</h2>
                                    </div>
                                )
                            })
                        }
                        
        </div>
    </div>
  )
}

export default AllProjectis