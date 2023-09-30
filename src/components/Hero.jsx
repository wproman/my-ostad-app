import Link from "next/link";

async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/HeroList");
    if(!res.ok){
        throw new Error("Hero section Calling Fail");
    }
    return res.json();
}
const Hero = async() => {
    const data = await getData();
  return (
    <>
    <section className=" mb-8 container ml-auto mr-auto pt-20 flex gap-5 justify-center items-center">
        <textside className="p-5">
                <h1 className="text-5xl font-extrabold leading-loose">{data['title']}</h1>
                <p className="mt-5">{data["description"]}</p>
                <Link className='inline-block mt-20  py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition duration-200'
                href=''>Get Started</Link>
                
        </textside>
        <imageside className="grid grid-cols-12 gap-8">
        <img className="h-80 w-full mx-auto object-cover rounded-lg col-span-8"
              src={data['image1']} alt=""/>
              <img className="h-80 w-full object-cover rounded-lg col-span-4"
              src={data['image2']} alt=""/>
              <img className="h-60 w-full mx-auto object-cover rounded-lg col-span-4"
              src={data['image3']} alt=""/>
              <img className="h-60 w-full mx-auto object-cover rounded-lg col-span-8"
              src={data['image4']} alt=""/>
        </imageside>
        
    </section>

    </>
    

  )
}

export default Hero