import Link from "next/link";
import Image from "next/image";
import Rimg from "public/images/hero/hero-1.webp";
import Limg from "public/images/hero/hero-2.webp";
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Study Abroad with Keeron – Your Journey, Our Guidance
                </h1>
                <p className="mb-12 text-base leading-relaxed! text-body-color sm:text-lg md:text-xl">
                  Backed by The Daily Star and powered by Keeron’s 60,000+ learners, we help you achieve your dream of studying in the USA, UK, Canada, Australia, Germany, France, Malaysia, and New Zealand.

                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Book a Free Counselling Session
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <div className="relative w-full h-[400px]">
            <Image src={Rimg} alt={""} />
          </div>
        </div>

        <div className="absolute left-0 z-[-1] opacity-30 lg:opacity-100">
          <div className="relative w-full h-[400px]">
            <Image src={Limg} alt={""} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
