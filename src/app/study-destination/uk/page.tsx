import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "UK - Study Destination | Keeron",
    description: "UK - Study Destination | Keeron",
    // other metadata
};

const UkPage = () => {
    return (
        <>
            <section className="pt-[150px] pb-[120px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                <h2 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight ">
                                    United Kingdom (UK)
                                </h2>
                                <div>
                                    <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Why study in the UK?
                                    </p>
                                    <div className="mb-10 w-full overflow-hidden rounded-sm">
                                        <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                                            <Image
                                                src="/images/StudyDestination/UK.webp"
                                                alt="image"
                                                fill
                                                className="object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                    <p className="text-body-color mb-8 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Study in the UK if you want a compact, world-class education that quickly moves you toward your career. UK degrees are internationally recognised, often shorter than elsewhere (many master’s courses are one year), and delivered by institutions that lead in research, professional training and industry links. You’ll study alongside students from around the world and graduate with qualifications that employers respect everywhere.
                                    </p>
                                    {/* <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Semper auctor neque vitae tempus quam pellentesque nec.
                                        <span className="text-primary underline ">
                                            Amet dictum sit amet justo
                                        </span>
                                        donec enim diam. Varius sit amet mattis vulputate enim nulla
                                        aliquet porttitor. Odio pellentesque diam volutpat commodo
                                        sed.
                                    </p> */}
                                    <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight ">
                                        Career opportunities after graduation
                                    </h3>
                                    <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Studying in the UK is built around employability. After graduation, eligible international students can apply for the Graduate Route to remain in the UK and work — up to 2 years after an undergraduate or master’s degree, and 3 years for doctoral graduates. During your studies, you can work part-time (usually up to 20 hours/week during term time) and access campus careers services, internships, and employer fairs that connect you directly with leading companies. These pathways help turn study into real work experience, professional networks, and longer-term visa sponsorship or global career options.
                                    </p>

                                    <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight ">
                                        Scholarships & funding options
                                    </h3>
                                    <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        The UK offers a range of funding possibilities for international students:
                                    </p>

                                    <ul className="text-body-color mb-10 list-inside list-disc">
                                        <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                                            Government & national scholarships — highly competitive, fully funded programs such as Chevening and Commonwealth Scholarships for eligible candidates.
                                        </li>
                                        <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                                            University scholarships and bursaries — merit-based and need-based awards from individual institutions (many universities publish dedicated international funding pages).
                                        </li>
                                        <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                                            Assistantships & departmental funding — especially at postgraduate level, where research or teaching assistant roles can reduce fees and provide stipends.
                                        </li>
                                        <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                                            External grants, loans, and country scholarships — a mix of private and public sources, depending on your eligibility.
                                        </li>
                                    </ul>
                                    <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Keeron helps you identify the best matches, prepare scholarship essays, and submit strong, timely applications.
                                    </p>





                                    <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight ">
                                        Living & lifestyle details — what to expect
                                    </h3>
                                    <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Life in the UK varies by location: a small university town will feel very different from central London. Expect vibrant campus communities, strong student support (health, counselling, careers), and easy access to cultural life across music, food, arts, and sport. Practical highlights:
                                    </p>
                                    <ul className="text-body-color mb-10 list-inside list-disc">
                                        <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                                            Costs: Living costs depend on the city — London is the most expensive (significantly higher rents), while many regional towns are much more affordable. Use a location-specific budget when planning.
                                        </li>
                                        <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                                            Accommodation: Options include halls of residence (good for first-year social life), private student housing, and shared flats. Early applications improve your chances of preferred rooms.
                                        </li>
                                        <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                                            Healthcare & insurance: International students pay the Immigration Health Surcharge as part of the visa and then can access NHS services; universities also offer on-campus health and wellbeing support.
                                        </li>
                                        <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                                            Transport & student discounts: Excellent public transport links (trains, buses, local metros) and a wide range of student discounts make travel and daily life easier.
                                        </li>
                                        <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                                            Work-life balance: Expect a mix of campus societies, volunteering, part-time work, and local exploration — a rich environment to build friendships and real-world skills.
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

export default UkPage;
