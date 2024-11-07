import React from 'react'
import HeadingComp from '../HeadingComp'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { div } from 'framer-motion/client'
export default function TestimonialSection() {
  return (
    <section>
      <HeadingComp title='Testimonial' />

      <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-6 w-full lg:w-9/12 mx-auto'>
        <TestimonialSectionCard />
        <TestimonialSectionCard />
        <TestimonialSectionCard />
        <TestimonialSectionCard />
      </div>
    </section>
  )
}


const TestimonialSectionCard = () => {

  {/* <Image src={"/assets/iron_man.png"} alt="image" height={372} width={338} /> */ }

  return (

    <div className=' mx-auto w-full lg:w-[238px] font-monts hover:shadow-sm shadow-black p-3 rounded-sm'>
      <h4 className='text-xl font-semibold text-gray-300'>Name Name</h4>
      <div className='my-2 thin-border-bg p-1.5 rounded-tl-3xl rounded-tr-[50%] overflow-hidden rounded-br-3xl rounded-bl-xl w-full h-[204px]'>
        <div className='thin-border-bg rounded-tl-3xl rounded-tr-[50%] rounded-br-3xl rounded-bl-xl bg-slate-800  bg-cover bg-center w-full h-full' style={{ backgroundImage: "url(/assets/dp.jpg)" }} />
      </div>

      <p className='text-gray-300 text-justify font-semibold text-sm'>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.`}</p>

    </div>


  )
}