import { FaHeart } from "react-icons/fa";

export default function DividerLove() {
  return (
    <div
      data-aos="zoom-in"
      className="
        flex
        items-center
        justify-center

        w-full

        gap-4
      "
    >
      {/* Garis kiri */}
      <div
        className="
          h-[2px]
          flex-1
          max-w-[120px]

          bg-gradient-to-r
          from-transparent
          via-[#8A1C14]
          to-[#8A1C14]
        "
      />

      {/* Love */}
      <div
        className="
          flex
          items-center
          justify-center

          w-12
          h-12

          rounded-full

          border-2
          border-[#8A1C14]

          bg-[#F6F3EF]

          shadow-md
        "
      >
        <FaHeart
          className="
            text-[#8A1C14]

            text-lg

            animate-heartbeat
          "
        />
      </div>

      {/* Garis kanan */}
      <div
        className="
          h-[2px]
          flex-1
          max-w-[120px]

          bg-gradient-to-l
          from-transparent
          via-[#8A1C14]
          to-[#8A1C14]
        "
      />
    </div>
  );
}