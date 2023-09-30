
async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/BrandList");
    if(!res.ok){
        throw new Error("Hero section Calling Fail");
    }
    return res.json();
}
const Brand = async() => {
    const data = await getData();
  return (
    
  <div className="bg-white py-10">
     <div className="container mx-auto flex justify-center items-center">
      {
                data.map((item,i)=>{
                  return(
                      <div key={i} className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2">
                          <div>
                              <img className="mx-auto h-8" src={item['image']} alt=""/>
                          </div>
                      </div>
                  )
                })
            }
   </div>
  </div>

  )
}

export default Brand;