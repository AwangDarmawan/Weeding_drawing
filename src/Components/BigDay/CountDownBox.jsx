import PropTypes from "prop-types";

export default function CountDownBox({ value, label }) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
      "
    >
      <div
        className="
          min-w-[30px]
          sm:min-w-[80px]

        

         

          

        
        "
      >
        <p
          className="
            text-center

            font-feltpen
            text-[#8A1C14]

            text-3xl
            sm:text-4xl

            font-black
          "
        >
          {value}
        </p>
      </div>

      <p
        className="
          
          uppercase

          tracking-widest

          text-xs
          sm:text-xs

          text-[#8A1C14]

          font-semibold
        "
      >
        {label}
      </p>
    </div>
  );
}

CountDownBox.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};