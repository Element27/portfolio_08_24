import React from 'react'
import { GradientTextWrapper } from '../icons'

export default function NavSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-8/12 mx-auto py-8 lg:py-6">
      <GradientTextWrapper>
        <h1 className="text-4xl">AOD</h1>
      </GradientTextWrapper>

      <ul className="font-monts flex items-center justify-between w-full lg:w-1/3 font-medium text-base text-[#9F9E9E] px-4 my-2">
        <li className="cursor-pointer hover:text-white duration-500">Home</li>
        <li className="cursor-pointer hover:text-white duration-500">
          Portfolio
        </li>
        <li className="cursor-pointer hover:text-white duration-500">
          My Skills
        </li>
        <li className="cursor-pointer hover:text-white duration-500">
          Contact Me
        </li>
      </ul>
    </section>
  )
}
