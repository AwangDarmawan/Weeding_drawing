import PropTypes from "prop-types";
import {
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

export default function PersonCard({
  reverse = false,
  largePhoto,
  smallPhoto,
  name,
  nickname,
  father,
  parent,
  description,
}) {
  return (
    <div
      className={`
        flex
        flex-col
        items-center

        ${
          reverse
            ? "lg:items-end"
            : "lg:items-start"
        }
      `}
    >
      {/* ================= FOTO ================= */}

      <div className="relative">

        {/* Kertas belakang */}

        <div
          className={`
            absolute

            ${
              reverse
                ? "right-6"
                : "left-6"
            }

            top-6

            w-full
            h-full

            bg-[#EDE4DA]

            rotate-[6deg]

            rounded-md
          `}
        />

        {/* ================= FOTO BESAR ================= */}

        <div
          data-aos={
            reverse
              ? "fade-left"
              : "fade-right"
          }
          className={`
            relative

            z-10

            bg-[#8A1C14]

            p-3

            rounded-sm

            shadow-xl

            rotate-[-4deg]

            w-[220px]
            sm:w-[260px]
            md:w-[300px]
            lg:w-[320px]

            transition-all
            duration-500

            hover:rotate-0
            hover:scale-105
          `}
        >
          {/* Tape */}

          <div
            className="
              absolute

              -top-3

              left-1/2
              -translate-x-1/2

              w-24
              h-6

              bg-[#D7BE96]

              rotate-[8deg]

              opacity-80
            "
          />

          <div className="bg-white p-2">
            <img
              src={largePhoto}
              alt={name}
              className="
                aspect-[3/4]
                w-full
                object-cover
              "
            />
          </div>
        </div>

        {/* ================= FOTO KECIL ================= */}

        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className={`
            absolute

            bottom-3

            ${
              reverse
                ? "-left-14 sm:-left-20"
                : "-right-14 sm:-right-20"
            }

            z-20
          `}
        >
          <div
            className="
              relative

              bg-white

              p-2

              shadow-lg

              rotate-[8deg]

              w-24
              sm:w-28
              md:w-32

              transition-all
              duration-500

              hover:rotate-0
              hover:scale-110
            "
          >
            {/* tape */}

            <div
              className="
                absolute

                -top-2

                left-1/2
                -translate-x-1/2

                w-10
                h-4

                bg-[#D7BE96]

                rotate-[8deg]
              "
            />

            <img
              src={smallPhoto}
              alt={name}
              className="
                aspect-[3/4]
                w-full
                object-cover
              "
            />
          </div>

          {/* Arrow */}

          <div
            className={`
              mt-3

              flex

              items-center

              gap-2

              ${
                reverse
                  ? "justify-end"
                  : ""
              }
            `}
          >
            {reverse ? (
              <>
                <span
                  className="
                    font-petit
                    text-[#8A1C14]
                    text-lg
                  "
                >
                  {nickname}
                </span>

                <FaArrowLeft
                  className="
                    text-[#8A1C14]
                    animate-pulse
                  "
                />
              </>
            ) : (
              <>
                <FaArrowRight
                  className="
                    text-[#8A1C14]
                    animate-pulse
                  "
                />

                <span
                  className="
                    font-petit
                    text-[#8A1C14]
                    text-lg
                  "
                >
                  {nickname}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ================= TEXT ================= */}

      <div
        className={`
          mt-10

          max-w-sm

          ${
            reverse
              ? "lg:text-right"
              : "lg:text-left"
          }

          text-center
        `}
      >
        <h2
          data-aos="fade-up"
          className="
            font-feltpen

            text-[#8A1C14]

            text-4xl
            sm:text-5xl

            tracking-[0.08em]
          "
        >
          {name}
        </h2>

        <p
          className="
            mt-3

            font-semibold

            text-[#8A1C14]
          "
        >
          {father}
        </p>

        <p
          className="
            mt-1
            italic
            text-gray-800
          "
        >
          {parent}
        </p>

        <p
          className="
            mt-5

            leading-8

            text-gray-800
            
            text-sm
            sm:text-base
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

PersonCard.propTypes = {
  reverse: PropTypes.bool,
  largePhoto: PropTypes.string.isRequired,
  smallPhoto: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  father: PropTypes.string.isRequired,
  parent: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};