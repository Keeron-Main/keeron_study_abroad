import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const HomeFaq = () => {
  // const List = ({ text }) => (
  //   <p className="text-body-color mb-5 flex items-center text-lg font-medium">
  //     <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
  //       {checkIcon}
  //     </span>
  //     {text}
  //   </p>
  // );
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Frequently Asked Questions (FAQ)"
          paragraph=""
          mb="44px"
          width="100%"
        />

        <div className="-mx-4 flex flex-wrap items-center">
          {/* <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div> */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="">
              <div className="mb-9">

                {/* <p className="text-body-color mb-5 font-bold flex items-center text-lg font-medium">
                  <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
                    {checkIcon}
                  </span>
                  Tailored SOPs highlighting your goals and achievements
                </p> */}
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Q: Which countries can I apply to through Keeron?
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  A: USA, UK, Canada, Australia, Germany, France, Malaysia, and New Zealand.
                </p>
              </div>
              <div className="mb-7">
                {/* <p className="text-body-color mb-5 font-bold flex items-center text-lg font-medium">
                  <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
                    {checkIcon}
                  </span>
                  Professionally guided Recommendation Letters from teachers/employers
                </p> */}
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Q: What documents are usually required for applications?
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  A: Academic transcripts, passport, English proficiency scores (IELTS/TOEFL), Statement of Purpose, and recommendation letters.
                </p>
              </div>
              <div className="mb-7">
                {/* <p className="text-body-color mb-5 font-bold flex items-center text-lg font-medium">
                  <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
                    {checkIcon}
                  </span>
                  Editing & review to match university expectations
                </p> */}
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Q: Can I get a scholarship through Keeron?
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  A: Yes. We guide you through merit-based, need-based, and country/university-specific scholarships.
                </p>
              </div>

              <div className="mb-7">
                <h3 className="mb-4 text-xl font-bold text-black  sm:text-2xl lg:text-xl xl:text-2xl">
                  Q: Does Keeron charge for counselling?
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  A: No. Our counselling and application support are 100% free for students.
                </p>
              </div>

              <div className="mb-7">
                <h3 className="mb-4 text-xl font-bold text-black  sm:text-2xl lg:text-xl xl:text-2xl">
                  Q: How long does the process take?
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  A: On average, 3–6 months depending on the country, university, and intake.
                </p>
              </div>

              <div className="mb-7">
                <h3 className="mb-4 text-xl font-bold text-black  sm:text-2xl lg:text-xl xl:text-2xl">
                  Q: Can Keeron help with accommodation and pre-departure support?
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  A: Yes. We assist with accommodation, health insurance, travel, and pre-departure guidance.
                </p>
              </div>

              <div className="mb-7">
                <h3 className="mb-4 text-xl font-bold text-black  sm:text-2xl lg:text-xl xl:text-2xl">
                  Q: How do I start with Keeron Study Abroad?
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  A: Simply book a free counselling session through our website or call 01322890096.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
