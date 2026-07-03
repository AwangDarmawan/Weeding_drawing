import CountDown from "./CountDown";
import PhotoStrip from "./PhotoStrip";

export default function BigDay() {
  return (
    <section className=" px-5 py-16 overflow-hidden">
       <h2
              className="
                font-feltpen
                text-[#8A1C14]
                font-black
                text-center
                leading-none

                 text-4xl
              sm:text-5xl

                tracking-[0.12em]
              "
            >
              OUR BIG DAY
            </h2>
      <div
        className="
          mx-auto
          max-w-6xl

          grid
          grid-cols-2

          items-center
          gap-6

          sm:gap-8
          md:gap-10
          lg:gap-16
        "
      >
        
        {/* LEFT */}
        <div
          className="
            flex-1
            w-full
            max-w-xl
          "
        >
          {/* Title */}
          <div
            data-aos="fade-right"
            className="space-y-1"
          >
           

            {/* <h2
              className="
                font-feltpen
                text-[#8A1C14]
                font-black

                leading-none

                text-md
               sm:text-md
                lg:text-4xl

                tracking-[0.12em]
              "
            >
              AWAITS
            </h2> */}
          </div>

          {/* Countdown */}
          {/* <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-10"
          >
            <CountDown />
          </div> */}

          {/* Bottom */}
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="mt-20"
          >
            <h3
              className="
                font-feltpen
                text-[#8A1C14]

                leading-none

                font-black

                 text-md
               sm:text-md
                lg:text-4xl
                 md:text-4xl

                tracking-[0.12em]
                text-center
              "
            >
              See You On
            </h3>

            <h3
              className="
                mt-2

                font-feltpen
                text-[#8A1C14]

                leading-none

                font-black
                 text-md
               sm:text-md
                lg:text-4xl
                   md:text-4xl

                tracking-[0.12em]
                text-center
              "
            >
              6.6.26
            </h3>
          <div className=" 
    flex
    items-center
    justify-center
my-6
    gap-4
    sm:gap-3
    md:gap-4
    lg:gap-5

    flex-wrap">
            <h2
              className="
               

                font-feltpen

                text-[#8A1C14]

                text-3xl
                sm:text-md
                lg:text-4xl
                   md:text-4xl

               mx-10
              "
            >
              Dinda
            </h2>
             <h2
              className="
                

                font-feltpen

                text-[#8A1C14]

                text-5xl
                sm:text-md
                lg:text-4xl
                   md:text-4xl

               
              "
            >
            + 
            </h2>
             <h2
              className="
                

                font-feltpen

                text-[#8A1C14]

                text-3xl
                sm:text-md
                lg:text-4xl
                   md:text-4xl

               
              "
            >
              Aditya
            </h2>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div
          
          className="
            flex
            justify-center
            w-full
            lg:w-auto
            rotate-[-7]
          "
        >
          <PhotoStrip />
        </div>
      </div>
    </section>
  );
}