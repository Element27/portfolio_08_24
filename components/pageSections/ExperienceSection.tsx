import React from 'react'
import { SendIcon } from '../SendIcon'

export default function ExperienceSection() {
  return (
    <section>
      <div className="w-11/12 lg:w-10/12 mx-auto flex items-center justify-between relative mt-10 mb-16">
        <h3 className="text-2xl lg:text-4xl font-magic font-bold gradient-text w-fit">
          Work Experience
        </h3>
        <SendIcon />
      </div>

      <ExperienceComponent />
      <ExperienceComponent />
      <ExperienceComponent />
    </section>
  )
}


const ExperienceComponent = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto flex relative my-10 gap-4 border-l-[3px] border-l-[#D9D9D9] pl-8 py-5">

      <div className=' w-5 h-5 thin-border-bg rounded-full z-10 absolute top-[-10px] left-[-11px]' />

      <div className='flex flex-col w-11/12 text-white font-monts'>
        <div className='w-full flex justify-between text-white'>
          <div className='w-full'>
            <h3 className="text-2xl lg:text-3xl  font-bold font-monts ">
              Frontend Developer
            </h3>
          </div>
          <div className='w-full text-center flex items-center justify-center'>
            <p className="text-base lg:text-lg font-monts mr-10">2024 - Present</p>
          </div>
        </div>
        <div className='mt-10 w-10/12 mr-0 ml-auto text-justify'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur exercitationem tempore facilis? Quo, eaque. Laboriosam consectetur magnam corrupti deserunt reiciendis dignissimos voluptatum sunt perspiciatis ipsam aspernatur aut, fugiat distinctio id velit illo pariatur eligendi temporibus obcaecati doloribus, animi unde magni assumenda minus? Nemo iure sit inventore accusantium porro possimus ipsum autem cumque blanditiis similique reiciendis sint quaerat expedita, quod aliquid dolor quam odit. Consectetur amet ex aspernatur eum rem enim quasi delectus illo sequi iure odio doloribus natus similique dolorem quidem nostrum tenetur quam, in quos sint soluta. Dolorum a hic eveniet nemo necessitatibus earum, impedit quaerat recusandae quidem perferendis.</p>
        </div>
      </div>
    </div>
  )
}