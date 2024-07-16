import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Find the cure with us 🩺
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Avicenna
                </span>
                {"   "} Medical Travel
              </h1>
              <p>
                Это туристическое агентство, которое работает в сфере
                медицинского туризма а также организовывает путешествие в
                различных странах мира уже более 10 лет. Компания содействует
                людям, нуждающимся в квалифицированной медицинской помощи по
                последним мировым технологиям. Наше агентство сотрудничает с
                различными клиниками из Индии, Израиля, Германии, Турции и
                Кореи. Люди, которые пользовались услугами компании реально
                восстановили своё здоровье и вернулись к своей прежней жизни с
                полон сил и возможностей. А путешествие ваш отдых запомнится на
                всё жизнь.
              </p>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full rounded-lg">
                  <Image
                    className="shadow-solid-l"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
