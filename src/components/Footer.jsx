"use client"
import Logo from "./Logo"
import { TwitterIcon,PinterestIcon,DribbbleIcon,LinkedInIcon} from "./icons"
import { motion } from "framer-motion"
import Link from "next/link"

const Footer = () => {
  return (
   <div className="bg-black">
     <section className=" py-12 container mx-auto text-white flex items-center justify-center ">
        <div>
             <div className="ml-3">
             <Logo/>  
             </div> 
             <p className="mt-12">Some footer text about the  Agency. Just a little description to help people understand you better</p>
             <nav className=" flex items-center flex-wrap">
                <motion.a href="/" target={"_blank"} 
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-8 mr-3">
                    <TwitterIcon/>
                </motion.a>
                <motion.a href="/" target={"_blank"} 
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-8 mr-3">
                    <PinterestIcon/>
                </motion.a>
                <motion.a href="/" target={"_blank"} 
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-8 mr-3">
                    <DribbbleIcon/>
                </motion.a>
                <motion.a href="/" target={"_blank"} 
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-8 mr-3">
                    <LinkedInIcon/>
                </motion.a>
             </nav>
        </div>
        <div>
            <h1>Quick Links</h1>
            <Link href="">Service</Link>
            <Link href="">Portfolio</Link>
            <Link href="">About Us</Link>
            <Link href="">Contact Us</Link>

        </div>
        <div>
            <h2 className=""> Address</h2>
            <p>Design Agency Head Office.<br/>
Airport Road<br/>
United Arab Emirate</p>
        </div>
        
   </section>
   <div className="pb-16 container mx-auto">
        <p className="text-white ml-24">Copyright Design Agency 2022</p>
        </div>
   </div>
  )
}

export default Footer