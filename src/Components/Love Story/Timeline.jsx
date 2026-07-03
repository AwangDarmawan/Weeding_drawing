import { FaHeart } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Timeline({
  title,
  content,
//   delay,
}) {
  return (
    <div
      data-aos="fade-up"
    //   data-aos-delay={delay}
      className="relative flex gap-5"
    >
      {/* Icon */}
      <div
        className="
          relative
          z-10
          mt-1

          flex
          h-7
          w-7
          items-center
          justify-center

          rounded-full
          bg-[#F6F3EF]
        "
      >
        <FaHeart
          className="
            text-[#8A1C14]
            text-lg
            animate-pulse
          "
        />
      </div>

      {/* Content */}
      <div data-aos="fade-down"
           data-aos-delay="600" className="flex-1">

        <h3
           
          className="
            font-feltpen
            text-[#8A1C14]
            text-2xl
            mb-2
            font-black
          "
        >
          {title}
        </h3>

        <p
          className="
            font-feltpen
            text-black

            leading-8

            text-md
            sm:text-lg
            italic
            font-black
          "
        >
          {content}
        </p>

      </div>
    </div>
  );
}

Timeline.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
//   delay: PropTypes.number,
};