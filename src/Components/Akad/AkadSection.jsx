import { HandHeart } from "lucide-react";
import { FaLocationArrow, FaLocationDot } from "react-icons/fa6";
import { GiCandleFlame } from "react-icons/gi";
// import CandleIcon from "./CandleIcon";
// import HandsIcon from "./HandsIcon";

export default function AkadSection() {
  return (
    <section className="bg-[#F6F3EF] px-5 py-16">
      <div className="mx-auto max-w-md">

        {/* Candle */}
        <div
          data-aos="fade-down"
          className="flex justify-center"
        >
         <GiCandleFlame className="text-[#8A1C14] text-6xl" />
        </div>

        {/* AKAD */}
        <div
       
          className="mt-8 text-center"
        >
          <h2
             data-aos="fade-up"
          data-aos-delay="1300"
            className="
              font-feltpen
              text-[#8A1C14]
              text-4xl
              sm:text-5xl
              font-black
              tracking-[0.15em]
            "
          >
            Akad
          </h2>

          <div
            className="
              mt-5
              space-y-2
              text-black
              font-feltpen
              text-xl
              sm:text-2xl
              leading-relaxed
              font-semibold
            "
          >
            <p   data-aos="zoom-in-right"
          data-aos-delay="1500">Sabtu, 14 Agustus 2026</p>
            <p data-aos="zoom-in-right"
          data-aos-delay="2000">16.00 WIB</p>
            <p data-aos="zoom-in-right"
          data-aos-delay="2500">KUA Mampang Prapatan</p>
          </div>
        </div>
            <div
          data-aos="zoom-in"
          data-aos-delay="1200"
          className="mt-16 flex justify-center"
        >
       <HandHeart
  size={100}
  strokeWidth={1.5}
  className="text-[#8A1C14] animate-pulse"
/>
        </div>

        {/* RESEPSI */}
        <div
         
          className="mt-10 text-center"
        >
          <h2
           data-aos="fade-up"
          data-aos-delay="1200"
            className="
               italic   font-feltpen
              text-[#8A1C14]
              text-4xl
              sm:text-5xl
              font-black
              tracking-[0.15em]
            "
          >
            Resepsi
          </h2>

          <div
            className="
              mt-5
              space-y-2
              text-black
              font-feltpen
              text-lg
              sm:text-2xl
              leading-relaxed
              font-black
              py-2
            "
          >
            <p data-aos="zoom-in-right"
          data-aos-delay="1800">Sabtu, 17 Agustus 2026</p>
            <p data-aos="zoom-in-right"
          data-aos-delay="2000">19.00 WIB - selesai</p>

            <div className="pt-4">
              <h2      data-aos="fade-up"
          data-aos-delay="1200" className="font-black text-3xl  italic   font-feltpen text-[#8A1C14] py-3">
                Kota Anggeles City
              </h2>

              <p data-aos="zoom-in-right"
          data-aos-delay="1800" className="mt-2">
                Jl. LA Anggeles No.76,
              </p>

              <p data-aos="zoom-in-right"
          data-aos-delay="2000">
                RT.4/RW.11,
              </p>

              <p data-aos="zoom-in-right"
          data-aos-delay="2300">
                Bangka,
                Kec. Miami,
              </p>

              <p data-aos="zoom-in-right"
          data-aos-delay="2500">
                Kota Los Anggeles
              </p>
            </div>
          </div>

          {/* Button */}
          <button className=" mt-3  inline-flex italic font-black
    items-center
    justify-center
    gap-2
    bg-[#8A1C14]
    text-white
    px-6
    py-3
    rounded-xl
    font-feltpen
    text-lg">
  <FaLocationArrow/>
  Lihat Lokasi
</button>
        </div>

        {/* Hands */}
    

      </div>
    </section>
  );
}