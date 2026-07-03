import DiscoBall from "./DiscoBall";
import CalendarCard from "./CalenderCard";

export default function SaveDate() {
  return (
    <section className="w-full  py-16 px-5">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="grid grid-cols-2 items-center gap-1 md:grid-cols-2">

          <div className="flex justify-center">
            <DiscoBall />
          </div>

          <div className="text-center md:text-left rotate-[5deg] font-black">
            <h2
            data-aos="fade-right"
    data-aos-delay="0"
              className="
              font-feltpen
              text-[#8A1C14]
              uppercase
              leading-none
              tracking-[0.18em]
              text-4xl
              sm:text-6xl
              md:text-7xl
            "
            >
              SAVE
            </h2>

            <h2
             data-aos="fade-right"
    data-aos-delay="600"
              className="
              font-feltpen
              text-[#8A1C14]
              uppercase
              leading-none
              tracking-[0.18em]
              text-4xl
              sm:text-6xl
              md:text-7xl
            "
            >
              THE
            </h2>

            <h2
            data-aos="fade-right"
    data-aos-delay="1200"
              className="
              font-feltpen
              text-[#8A1C14]
              uppercase
              leading-none
              tracking-[0.18em]
              text-4xl
              sm:text-6xl
              md:text-7xl
            "
            >
              DATE!
            </h2>
          </div>

        </div>

        {/* Kalender */}

        {/* <div className="mt-16 "> */}
          <CalendarCard />
        {/* </div> */}

      </div>
    </section>
  );
}