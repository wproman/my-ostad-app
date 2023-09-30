
import Link from "next/link"
import Hero from "./Hero"
import Brand from "./Brand"
import Logo from "./Logo"
import WorkList from "./WorkList"


const CustomLink =({href, title, className})=>{
    return(
        <Link href={href} className={`${className}`}>
            {title}
                   </Link>
    )
}


const NavBar = () => {
  return (
    <header className="bg-primary" >

      
<section className="pt-8  container ml-auto mr-auto  flex   items-center justify-between ">
    <Logo/>
    <nav className="font-semibold">
        <CustomLink  href="/" title ="Home" className="mr-4"/> 
        <CustomLink href="/Team" title = "Team" className="mx-4"/>
        <CustomLink href="/Service" title ="Service" className="mx-4"/>
        <CustomLink href="/Projects" title = "Projects" className="mx-4"/>
        <CustomLink href="/Testimonials" title = "Testimonials" className="ml-4"/>
    </nav>
    <nav className="flex justify-center items-center">
        <button className="mr-4 border border-secondary rounded-lg py-4 px-6 hover:bg-secondary">Login</button>
        <button className="mx-4 bg-secondary p-4 text-white border rounded-lg hover:bg-primary hover:text-black hover: border-secondary">Register</button>
    </nav>
    </section>
          
        
           
   </header>
  )
}

export default NavBar