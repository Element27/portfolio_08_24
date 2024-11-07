'use client'
import Image from 'next/image'
import React from 'react'
import { SendIcon } from '../SendIcon'
import { ColorBars, GradientTextWrapper } from '../icons'
import { motion } from "framer-motion";
import { AnimateSection } from '../AnimateSection'
import { slideInUp } from '@/constants/animations'

export default function HeroSection() {
  return (
    <>
      <section className="h-[50vh] w-screen flex items-center relative">
        <div className='absolute z-10 left-1/2 transform -translate-x-1/2'>
          <motion.div
            initial={{ y: 0, x: 0 }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <Image
              src={"/image.png"}
              alt="image"
              height={416}
              width={416}
              className="relative"
            />
          </motion.div>
        </div>

        <div className="h-full bg-tr w-full"></div>
        <div className="h-full bg-tl w-full"></div>
        <div className="absolute -bottom-6 left-10 ">
          <SendIcon />
        </div>
      </section>

      {/* <AnimateSection animation={slideInUp} delay={0.5}> */}
      <section className="h-[50vh] w-screen flex items-center relative  flex-col gap-4 justify-center text-center">
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", }}
        >
          <p className="font-monts font-medium text-base lg:text-2xl text-white">
            Hi, I am
          </p>
          <GradientTextWrapper>
            <h1 className="text-4xl lg:text-7xl">Akinbo O. Daniel</h1>
          </GradientTextWrapper>
          <div className="font-monts font-medium text-base text-[#9F9E9E] w-fit ">
            {/* <div className="flex h-1 w-full bg-white">
              <div className="bg-primary h-full w-full" />
              <div className="bg-secondary h-full w-full" />
            </div> */}
            <ColorBars height={"4px"} />
            <p className="font-monts font-medium text-base lg:text-2xl text-white mx-4">
              Frontend Developer
            </p>
          </div>

          <div className="flex items-center justify-center gap-6">
            <Image
              src={"/mdi_github.png"}
              alt="github"
              height={73}
              width={73}
              className="size-10 lg:size-14"
            />
            <Image
              src={"/bi_linkedin.png"}
              alt="linkedin"
              height={53}
              width={53}
              className="size-10 lg:size-14"
            />
          </div>
        </motion.div>
      </section>
      {/* </AnimateSection> */}
      <ColorBars height="6px" />
    </>
  )
}
