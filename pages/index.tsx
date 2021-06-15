import Head from "next/head";
import { H1, H3 } from "../components/custom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  overflow-hidden ">
      <header
        className="flex flex-col items-center justify-center flex-1 w-full text-center bg-hero-background bg-top md:bg-contain bg-no-repeat bg-cover z-40 relative "
        style={{ clipPath: "polygon(0 0, 0 100%, 100% 85%, 100% 0)" }}
      >
        <H1 externalClasses="animate-moveInRight bg-gradient-to-br from-yellow-600  to-transparent p-2 text-white ">
          EMRE MUTLU
        </H1>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full ">
          <H3 externalClasses="animate-moveInLeft bg-gradient-to-tl from-yellow-500 to-transparent p-2 text-white ">
            TailwindCSS Developer with React & NextJS
          </H3>
        </div>
      </header>
      <div className="bg-hero-filler h-screen w-full z-0 absolute " />
    </div>
  );
}
