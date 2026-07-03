import PropTypes from "prop-types";
import {
  FaUsers,
  FaCheckCircle,
  FaQuestionCircle,
  FaTimesCircle,
} from "react-icons/fa";

export default function RsvpStats({ datas }) {
  const hadir = datas.filter(
    (item) => item.kehadiran === "Ya"
  ).length;

  const mungkin = datas.filter(
    (item) => item.kehadiran === "Mungkin"
  ).length;

  const tidak = datas.filter(
    (item) => item.kehadiran === "Tidak"
  ).length;

  const total = datas.length;

  const stats = [
    {
      title: "Total",
      value: total,
      icon: <FaUsers />,
      color: "text-[#8A1C14]",
      bg: "bg-[#FDF5F2]",
    },
    {
      title: "Hadir",
      value: hadir,
      icon: <FaCheckCircle />,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Mungkin",
      value: mungkin,
      icon: <FaQuestionCircle />,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
    },
    {
      title: "Tidak",
      value: tidak,
      icon: <FaTimesCircle />,
      color: "text-red-600",
      bg: "bg-red-50",
    },
  ];

  return (
    <div
      className="
        mt-10

        grid
        grid-cols-2
        lg:grid-cols-4

        gap-4
      "
    >
      {stats.map((item, index) => (
        <div
          key={index}
          data-aos="zoom-in"
          data-aos-delay={index * 100}
          className={`
            ${item.bg}

            rounded-2xl

            border
            border-[#8A1C14]/10

            p-5

            text-center

            shadow-sm

            transition-all
            duration-300

            hover:-translate-y-1
            hover:shadow-lg
          `}
        >
          <div
            className={`
              mx-auto

              flex
              h-12
              w-12

              items-center
              justify-center

              rounded-full

              bg-white

              text-xl

              ${item.color}
            `}
          >
            {item.icon}
          </div>

          <h3
            className="
              mt-4

              text-3xl

              font-bold

              text-[#8A1C14]
            "
          >
            {item.value}
          </h3>

          <p
            className="
              mt-1

              font-feltpen

              text-lg

              text-gray-600
            "
          >
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}

RsvpStats.propTypes = {
  datas: PropTypes.array.isRequired,
};