
import WorkList from "@/components/WorkList"
import Brand from "@/components/Brand"
import Hero from "@/components/Hero"
import StatList from "@/components/StatList"
import Featured from "@/components/Featured"


export default function Home() {
  return (
    <main className="bg-primary"> 

    <Hero/>
    <Brand/>   
    <WorkList/>
    <StatList/>
    <Featured/>

   
    </main>
  )
}
