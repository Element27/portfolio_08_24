import React from 'react'
import { SendIcon } from '../SendIcon'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import HeadingComp from '../HeadingComp'
import Image from 'next/image'

export default function PortfolioSection() {
  return (
    <section>
      <HeadingComp title={"Portfolio"} />

      <div className="w-11/12 lg:w-10/12 mx-auto flex items-center justify-between relative my-10">
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
      </div>
    </section>
  )
}


const PortfolioCard = () => {

  return (

    <Card className="size-[90%] lg:size-[386px] hover:border-slate-300 border-slate-700  bg-[#404040] relative group overflow-hidden bg-contain bg-center bg-no-repeat duration-1000" style={{ backgroundImage: "url(/assets/Screenshot.png)" }}>
      {/* <div className=''>
        <Image src={"/assets/Screenshot.png"} alt="image" height={372} width={372} />
      </div> */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/50 transition-transform transform -translate-y-full -rotate-90 origin-top-left group-hover:rotate-0 group-hover:translate-y-0 duration-1000"
      >
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </div>
    </Card>


  )
}