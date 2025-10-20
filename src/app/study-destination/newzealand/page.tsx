import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "UK - Study Destination | Keeron",
    description: "UK - Study Destination | Keeron",
    // other metadata
};

const NewZealandPage = () => {
    return (
        <>
            <section className="pt-[150px] pb-[120px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                <h2 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
                                    New Zealand
                                </h2>
                                <div>
                                    <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Why study in New Zealand?
                                    </p>
                                    <div className="mb-10 w-full overflow-hidden rounded-sm">
                                        <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                                            <Image
                                                src="/images/StudyDestination/New Zealand_.webp"
                                                alt="image"
                                                fill
                                                className="object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                    <p className="text-body-color mb-8 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        New Zealand offers a unique blend of world-class education, stunning natural landscapes, and a welcoming atmosphere. All eight of the country&apos;s universities are ranked among the top 3% globally by QS World University Rankings, ensuring a high-quality academic experience.
                                        The education system emphasizes practical skills, critical thinking, and research, preparing students for successful careers. With a strong focus on innovation and sustainability, New Zealand is an ideal place for students seeking a forward-thinking education.

                                    </p>
                                    {/* <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Semper auctor neque vitae tempus quam pellentesque nec.
                                        <span className="text-primary underline dark:text-white">
                                            Amet dictum sit amet justo
                                        </span>
                                        donec enim diam. Varius sit amet mattis vulputate enim nulla
                                        aliquet porttitor. Odio pellentesque diam volutpat commodo
                                        sed.
                                    </p> */}
                                    <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                                        Career opportunities after graduation
                                    </h3>
                                    <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        New Zealand&apos;s Post Study Work Visa allows international graduates to stay and work for up to three years, depending on their qualification level and where they studied.
                                        This policy provides graduates with valuable opportunities to gain work experience and potentially transition to permanent residency.
                                        The country&apos;s strong economy and demand for skilled professionals in sectors like IT, engineering, healthcare, and agriculture further enhance career prospects for international graduates.

                                    </p>

                                    <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                                        Scholarships & funding options
                                    </h3>
                                    <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        New Zealand offers a variety of scholarships to support international students:
                                    </p>

                                    <ul className="text-body-color mb-10 list-inside list-disc">
                                        <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                                            Manaaki New Zealand Scholarships: Fully funded scholarships for students from eligible countries, covering tuition, living costs, and travel expenses.
                                        </li>
                                        <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                                            University-specific scholarships: Many institutions offer scholarships based on academic merit or financial need. For example, the University of Auckland provides scholarships up to NZD 20,000 for high-achieving international students.
                                        </li>
                                        <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                                            Government-funded scholarships: The New Zealand government offers various scholarships to attract international talent and foster global relationships.
                                        </li>

                                    </ul>





                                    <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                                        Living & lifestyle details— what to expect
                                    </h3>
                                    <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Living in New Zealand offers a balanced lifestyle with access to both urban amenities and outdoor adventures.
                                    </p>
                                    <ul className="text-body-color mb-10 list-inside list-disc">
                                        <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                                            Accommodation: Renting a room in a shared house typically costs between NZD 200–350 per week.
                                            Living expenses: Students should budget approximately NZD 20,000–27,000 per year for living costs, including food, transportation, and entertainment.
                                        </li>
                                        <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                                            Work opportunities: International students can work part-time (up to 20 hours per week) during the academic year and full-time during scheduled breaks.
                                        </li>
                                        <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                                            Cultural experiences: New Zealand boasts a rich cultural heritage, with Māori traditions influencing art, language, and festivals. The country&apos;s diverse population adds to the vibrant social fabric.
                                        </li>

                                    </ul>

                                    {/* <div className="bg-primary/10 relative z-10 mb-10 overflow-hidden rounded-md p-8 md:p-9 lg:p-8 xl:p-9">
                                        <p className="text-body-color text-center text-base font-medium italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod incididunt utionals labore et dolore magna
                                            aliqua. Quis lobortis scelerisque fermentum, The Neque ut
                                            etiam sit amet.
                                        </p>
                                        <span className="absolute top-0 left-0 z-[-1]">
                                            <svg
                                                width="132"
                                                height="109"
                                                viewBox="0 0 132 109"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    opacity="0.5"
                                                    d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                                                    fill="url(#paint0_linear_111:606)"
                                                />
                                                <path
                                                    opacity="0.5"
                                                    d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                                                    fill="url(#paint1_linear_111:606)"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_111:606"
                                                        x1="94.7523"
                                                        y1="82.0246"
                                                        x2="8.40951"
                                                        y2="52.0609"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="white" stopOpacity="0.06" />
                                                        <stop
                                                            offset="1"
                                                            stopColor="white"
                                                            stopOpacity="0"
                                                        />
                                                    </linearGradient>
                                                    <linearGradient
                                                        id="paint1_linear_111:606"
                                                        x1="90.3206"
                                                        y1="58.4236"
                                                        x2="1.16149"
                                                        y2="50.8365"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="white" stopOpacity="0.06" />
                                                        <stop
                                                            offset="1"
                                                            stopColor="white"
                                                            stopOpacity="0"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </span>
                                        <span className="absolute right-0 bottom-0 z-[-1]">
                                            <svg
                                                width="53"
                                                height="30"
                                                viewBox="0 0 53 30"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    opacity="0.8"
                                                    cx="37.5"
                                                    cy="37.5"
                                                    r="37.5"
                                                    fill="#4A6CF7"
                                                />
                                                <mask
                                                    id="mask0_111:596"
                                                    style={{ maskType: "alpha" }}
                                                    maskUnits="userSpaceOnUse"
                                                    x="0"
                                                    y="0"
                                                    width="75"
                                                    height="75"
                                                >
                                                    <circle
                                                        opacity="0.8"
                                                        cx="37.5"
                                                        cy="37.5"
                                                        r="37.5"
                                                        fill="#4A6CF7"
                                                    />
                                                </mask>
                                                <g mask="url(#mask0_111:596)">
                                                    <circle
                                                        opacity="0.8"
                                                        cx="37.5"
                                                        cy="37.5"
                                                        r="37.5"
                                                        fill="url(#paint0_radial_111:596)"
                                                    />
                                                    <g opacity="0.8" filter="url(#filter0_f_111:596)">
                                                        <circle
                                                            cx="40.8089"
                                                            cy="19.853"
                                                            r="15.4412"
                                                            fill="white"
                                                        />
                                                    </g>
                                                </g>
                                                <defs>
                                                    <filter
                                                        id="filter0_f_111:596"
                                                        x="4.36768"
                                                        y="-16.5881"
                                                        width="72.8823"
                                                        height="72.8823"
                                                        filterUnits="userSpaceOnUse"
                                                        colorInterpolationFilters="sRGB"
                                                    >
                                                        <feFlood
                                                            floodOpacity="0"
                                                            result="BackgroundImageFix"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in="SourceGraphic"
                                                            in2="BackgroundImageFix"
                                                            result="shape"
                                                        />
                                                        <feGaussianBlur
                                                            stdDeviation="10.5"
                                                            result="effect1_foregroundBlur_111:596"
                                                        />
                                                    </filter>
                                                    <radialGradient
                                                        id="paint0_radial_111:596"
                                                        cx="0"
                                                        cy="0"
                                                        r="1"
                                                        gradientUnits="userSpaceOnUse"
                                                        gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                                                    >
                                                        <stop stopOpacity="0.47" />
                                                        <stop offset="1" stopOpacity="0" />
                                                    </radialGradient>
                                                </defs>
                                            </svg>
                                        </span>
                                    </div> */}
                                    {/* <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        consectetur adipiscing elit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        mattis vulputate cupidatat.
                                    </p> */}
                                    {/* <div className="items-center justify-between sm:flex">
                                        <div className="mb-5">
                                            <h4 className="text-body-color mb-3 text-sm font-medium">
                                                Popular Tags :
                                            </h4>
                                            <div className="flex items-center">
                                                <TagButton text="Design" />
                                                <TagButton text="Development" />
                                                <TagButton text="Info" />
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <h5 className="text-body-color mb-3 text-sm font-medium sm:text-right">
                                                Share this post :
                                            </h5>
                                            <div className="flex items-center sm:justify-end">
                                                <SharePost />
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewZealandPage;
