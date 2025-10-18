import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);
const HomeSOP = () => {
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
          title="Statement of Purpose (SOP) & Recommendation Letters"
          paragraph="We help you craft compelling documents that stand out"
          mb="44px"
        />
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/StatementofPurposeSOP&RecommendationLetters.webp"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/StatementofPurposeSOP&RecommendationLetters.webp"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">

                <p className="text-body-color mb-5 font-bold flex items-center text-lg font-medium">
                  <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
                    {checkIcon}
                  </span>
                  Tailored SOPs highlighting your goals and achievements
                </p>
                {/* <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
                    {checkIcon}
                  </span>
                  Tailored SOPs highlighting your goals and achievements
                </h3> */}
                {/* <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Get expert advice on country, course & scholarships
                </p> */}
              </div>
              <div className="mb-7">
                <p className="text-body-color mb-5 font-bold flex items-center text-lg font-medium">
                  <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
                    {checkIcon}
                  </span>
                  Professionally guided Recommendation Letters from teachers/employers
                </p>
                {/* <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Professionally guided Recommendation Letters from teachers/employers
                </h3> */}
                {/* <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We prepare & submit your application to universities
                </p> */}
              </div>
              <div className="mb-7">
                <p className="text-body-color mb-5 font-bold flex items-center text-lg font-medium">
                  <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
                    {checkIcon}
                  </span>
                  Editing & review to match university expectations
                </p>
                {/* <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Editing & review to match university expectations
                </h3> */}
                {/* <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Full guidance on visa documents & interview prep
                </p> */}
              </div>

              {/* <div className="mb-7">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Departure
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Support with travel, health insurance & money transfer
                </p>
              </div>

              <div className="mb-7">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Post
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  arrival Support – Stay connected with alumni & Keeron global community
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSOP;
