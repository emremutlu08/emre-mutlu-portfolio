import Head from "next/head";
import { H1, H2 } from "../components/custom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  overflow-hidden">
      <header
        className="flex flex-col items-center justify-center flex-1 w-full text-center bg-hero-background bg-top bg-contain bg-no-repeat"
        style={{ clipPath: "polygon(0 0, 0 100%, 100% 85%, 100% 0)" }}
      >
        <H1 externalClasses="animate-moveInRight">EMRE MUTLU</H1>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <H2 externalClasses="animate-moveInLeft">
            TailwindCSS Developer with React & NextJS
          </H2>
        </div>
      </header>
    </div>
  );
}
