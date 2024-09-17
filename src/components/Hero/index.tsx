import Image from "next/image";

const Hero = () => {
  const LOGO = (
    <div className="rounded-full bg-slate-50">
      <Image
        src="/images/logo/logo-lg.png"
        alt="logo"
        width={256}
        height={256}
      />
    </div>
  );
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 ">
              <div className="mx-auto flex max-w-[800px] flex-row items-center gap-4 text-left">
                <div>
                  <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    Veritate Research Journal
                  </h1>
                  <p className="text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
                {LOGO}
              </div>
            </div>
          </div>
        </div>

        <div
          className="
          absolute inset-0 bottom-0 left-0 right-0 top-0 z-[-1]
          bg-cover
          bg-center
          dark:hidden
        "
          style={{
            backgroundImage: "url('/images/hero/hero-bg-light.jpg')",
          }}
        ></div>

        <div
          className="
          absolute inset-0 bottom-0 left-0 right-0 top-0 z-[-1]
          hidden
          bg-cover
          bg-center dark:block
        "
          style={{
            backgroundImage: "url('/images/hero/hero-bg-dark.jpg')",
          }}
        ></div>
      </section>
    </>
  );
};

export default Hero;
