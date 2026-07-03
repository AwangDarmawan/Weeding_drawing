import PropTypes from "prop-types";

export default function RsvpCard({ item, aosDelay = 0 }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="
        flex
        flex-col
        gap-4

        h-full

        rounded-2xl
        border-2
        border-[#8A1C14]/20

        bg-white

        p-4
        sm:p-5
        md:p-6

        shadow-[8px_8px_0_rgba(138,28,20,0.08)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-[10px_10px_0_rgba(138,28,20,0.12)]
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h3
          className="
            flex-1

            font-feltpen
            text-[#8A1C14]

            text-lg
            sm:text-xl

            break-words
          "
        >
          {item.nama}
        </h3>

        <span
          className={`
            shrink-0

            rounded-full

            px-3
            py-1

            text-[11px]
            sm:text-xs

            font-semibold

            ${
              item.kehadiran === "Ya"
                ? "bg-green-100 text-green-700"
                : item.kehadiran === "Mungkin"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }
          `}
        >
          {item.kehadiran}
        </span>
      </div>

      {/* Pesan */}
      <p
        className="
          w-full

          break-words
          break-all
          whitespace-pre-wrap

          text-sm
          sm:text-[15px]
          md:text-base

          leading-7
          text-gray-700
        "
      >
        {item.pesan}
      </p>

      
    </div>
  );
}

RsvpCard.propTypes = {
  item: PropTypes.shape({
    nama: PropTypes.string.isRequired,
    pesan: PropTypes.string,
    kehadiran: PropTypes.string.isRequired,
  }).isRequired,
  aosDelay: PropTypes.number,
};