import { FaHeart } from "react-icons/fa";
import { GiLaurelCrown } from "react-icons/gi";

export default function DividerLove() {
  return (
    <div
      data-aos="zoom-in"
      className="
        flex
        items-center
        justify-center
        gap-3
        sm:gap-5
      "
    >
      {/* Garis kiri */}
      <div
        className="
          flex
          items-center
          gap-2
          w-16
          sm:w-24
          md:w-32
        "
      >
        <span className="h-[2px] flex-1 bg-[#8A1C14]/70 rounded-full" />

        <GiLaurelCrown
          className="
            text-[#8A1C14]
            text-lg
            rotate-180
          "
        />
      </div>

      {/* Love */}
      <div
        className="
          flex
          items-center
          justify-center

          w-12
          h-12

          sm:w-14
          sm:h-14

          rounded-full

          border-2
          border-[#8A1C14]

          bg-[#F6F3EF]

          shadow-lg

          animate-pulse
        "
      >
        <FaHeart
          className="
            text-[#8A1C14]
            text-lg
            sm:text-xl
          "
        />
      </div>

      {/* Garis kanan */}
      <div
        className="
          flex
          items-center
          gap-2
          w-16
          sm:w-24
          md:w-32
        "
      >
        <GiLaurelCrown
          className="
            text-[#8A1C14]
            text-lg
          "
        />

        <span className="h-[2px] flex-1 bg-[#8A1C14]/70 rounded-full" />
      </div>
    </div>
  );
}