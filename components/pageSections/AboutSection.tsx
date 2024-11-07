import React from 'react'
import { SendIcon } from '../SendIcon'

export default function AboutSection() {
  return (
    <section className="w-screen min-h-screen flex items-center justify-center relative my-2">
      <div className="w-11/12 lg:w-8/12 mx-auto flex flex-col relative">
        {/* <GradientTextWrapper> */}
        {/* <div className="flex "> */}
        <h3 className="text-2xl lg:text-4xl font-magic font-bold gradient-text w-fit relative mb-4 lg:mb-8">
          About
        </h3>
        {/* </div> */}
        {/* </GradientTextWrapper> */}

        <div className="thin-border-bg w-full  mx-auto min-h-48 rounded-tl-[10rem] p-1 rounded-br-[10rem] overflow-hidden flex items-center justify-center ">
          {/* <div className="w-fit h-fit relative"> */}
          <div className="bg-[#404040] h-full w-full rounded-tl-[10rem] rounded-br-[10rem] p-10 relative">
            <p className="font-monts p-2 md:p-4 text-center font-medium lg:font-semibold text-[#e4e4e4]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Eveniet asperiores repellat iure earum quaerat, hic obcaecati
              amet suscipit minus sit illum ut nemo rerum placeat temporibus,
              possimus similique quas non voluptas corporis. In exercitationem
              libero laboriosam consequatur molestiae architecto temporibus
              rerum iusto eius amet at eligendi sint quod rem, odio
              repudiandae inventore vel. Officiis tenetur perspiciatis eos
              obcaecati veniam deserunt facere commodi laudantium aliquam odio
              odit, cupiditate quod praesentium? Deserunt sed doloribus
              doloremque exercitationem asperiores. Itaque minus iste
              repudiandae sint ad ratione quas, mollitia sunt dicta eius
              aliquam molestias fugit laudantium excepturi facere totam quis
              saepe inventore quam laborum atque nisi quod, adipisci minima?
              Eum rerum, fugit iste debitis exercitationem fugiat iure hic
              sequi vitae minima voluptatem ducimus delectus nostrum
              repudiandae illo sed eveniet. Itaque distinctio ipsum
              repudiandae eum deserunt, dolor minus explicabo dolore
              perferendis officia ducimus eos, quaerat rem? Consequatur,
              veritatis aut?
              <br />
              <br />
              Facilis non id inventore minima, eos nam alias, dignissimos
              error odio incidunt voluptates voluptatibus eius molestiae ipsum
              unde odit deserunt, culpa recusandae. Debitis perspiciatis
              maiores inventore laborum incidunt rem saepe fugit veritatis
              unde ex adipisci architecto aliquam laudantium, eum molestias,
              nihil autem minima nobis non at necessitatibus ratione? Fugit
              possimus, perferendis tenetur facilis praesentium accusantium
              quisquam quasi molestiae reiciendis quas vitae pariatur
              exercitationem cumque modi quia deserunt blanditiis nemo
              consequuntur! Doloribus, aperiam sunt iure omnis nostrum eius
              assumenda magni magnam inventore, totam delectus esse sed
              repudiandae fuga ab officiis, odio soluta voluptatum natus
              minus! Animi at, quidem doloremque obcaecati iusto sit
              consequuntur quae. Excepturi inventore nihil quod.
            </p>
          </div>
          <div className="absolute lg:-bottom-5 lg:-left-5 -bottom-5 -left-5 ">
            <SendIcon />
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}
