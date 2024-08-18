import {
  ColorBars,
  GradientTextWrapper,
  MdiGithub,
  MdiLinkedin,
} from "@/components/icons";
import { GithubIcon, LinkedInIcon, SendIcon } from "@/components/SendIcon";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-screen main-bg">
      {/* */}
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
      {/*  */}
      <section className="h-[50vh] w-screen flex items-center relative">
        <Image
          src={"/image.png"}
          alt="image"
          height={416}
          width={416}
          className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />

        <div className="h-full bg-tr w-full"></div>
        <div className="h-full bg-tl w-full"></div>
        <div className="absolute -bottom-6 left-10 ">
          <SendIcon />
        </div>
      </section>

      <section className="h-[50vh] w-screen flex items-center relative  flex-col gap-4 justify-center text-center">
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
      </section>
      <ColorBars height="6px" />

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

      <ColorBars height="6px" />

      <section>
        <div className="w-11/12 lg:w-10/12 mx-auto flex items-center justify-between relative my-10">
          <h3 className="text-2xl lg:text-4xl font-magic font-bold gradient-text w-fit">
            Portfolio
          </h3>
          <SendIcon />
        </div>

        <div className="w-11/12 lg:w-10/12 mx-auto flex items-center justify-between relative my-10">
          <div></div>
        </div>
      </section>
    </main>
  );
}
