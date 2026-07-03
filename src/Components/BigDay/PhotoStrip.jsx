// import Foto1 from "../../assets/Img/Wanita.png";
// import Foto2 from "../../assets/Img/Pria.png";
// import Foto3 from "../../assets/Img/Wanita.png";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// const photos = [
//   Foto1,
//   Foto2,
//   Foto3,
// ];

// export default function PhotoStrip() {
//   return (
//      <div className="relative mt-10 flex justify-center">

//       {/* ================= FOTO KECIL KIRI ================= */}

//       <div
//         data-aos="fade-right"
//         className="
//           absolute

//           -left-[90px]
//           sm:-left-14
//           md:-left-[150px]
//           lg:-left-[170px]
// xs:top-[150px]
//           top-[100px]

//           flex
//           items-center
//           gap-2
//         "
//       >
//         <img
//           src={Foto1}
//           alt=""
//           className="
//             w-12
//             h-12
//             xs:w-8
//             xs:h-8

//             sm:w-16
//             sm:h-20

//             md:w-20
//             md:h-28

//             object-cover

//             rounded-md

//             border-2
//             border-white

//             shadow-lg

//             rotate-[-8deg]
//           "
//         />

//         <FaArrowLeft
//           className="
//             text-[#8A1C14]

//             text-xl

//             animate-pulse
//           "
//         />
//       </div>

//       {/* ================= FOTO KECIL KANAN ================= */}

//       <div
//         data-aos="fade-left"
//         className="
//           absolute

//           -right-10
//           sm:-right-14
//           md:-right-20
//           lg:-right-24

//           bottom-8

//           flex
//           items-center
//           gap-2
//         "
//       >
//         <FaArrowLeft
//           className="
//             text-[#8A1C14]

//             text-xl

//             animate-pulse
//           "
//         />

//         <img
//           src={Foto2}
//           alt=""
//           className="
//             w-12
//             h-16

//             sm:w-16
//             sm:h-20

//             md:w-20
//             md:h-28

//             object-cover

//             rounded-md

//             border-2
//             border-white

//             shadow-lg

//             rotate-[8deg]
//           "
//         />
//       </div>
//     <div
      
//       className="
//         relative
//         mt-10
//          rotate-[-6deg]

//         w-[120px]
//         sm:w-[210px]
//         md:w-[240px]
//         lg:w-[260px]

//         bg-[#8A1C14]

//         p-3
//         sm:p-4

//         shadow-[12px_12px_30px_rgba(0,0,0,0.18)]

//         transition-all
//         duration-500

//         hover:rotate-[-6deg]
//         hover:scale-105
//       "
//     >
//       {/* Foto */}
//       <div className="space-y-3">
//         {photos.map((photo, index) => (
//           <div
//             key={index}
//             data-aos="zoom-in"
//             data-aos-delay={index * 250}
//             className="
//               overflow-hidden

//               bg-white

//               aspect-[3/4]
//             "
//           >
//             <img
//               src={photo}
//               alt={`Photo ${index + 1}`}
//               className="
//                 h-full
//                 w-full
//                 object-cover

//                 transition-transform
//                 duration-500

//                 hover:scale-110
//               "
//             />
//           </div>
//         ))}
//       </div>

//       {/* Lubang film atas */}
//       <div
//         className="
//           absolute

//           -top-2
//           left-1/2
//           -translate-x-1/2

//           w-6
//           h-2

//           rounded-full

//           bg-[#F6F3EF]
//         "
//       />

//       {/* Lubang film bawah */}
//       <div
//         className="
//           absolute

//           -bottom-2
//           left-1/2
//           -translate-x-1/2

//           w-6
//           h-2

//           rounded-full

//           bg-[#F6F3EF]
//         "
//       />
//     </div>
//     </div>
//   );
// }

import {
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";

import BigCowok from "../../assets/Img/BesarCowo.png";
import BigCouple from "../../assets/Img/BesarPasangan.png";
import BigCewek from "../../assets/Img/BesarCewe.png";
import SmallCowok from "../../assets/Img/smalcowok.png";
import SmallCouple from "../../assets/Img/anakkecil.png";
import SmallCewek from "../../assets/Img/smallcewek.png";

const photos = [
  {
    large: BigCowok,
    small: SmallCowok,
    side: "right",
  },
  {
    large: BigCouple,
    small: SmallCouple,
    side: "right",
  },
  {
    large: BigCewek,
    small: SmallCewek,
    side: "right",
  },
];

export default function PhotoStrip() {
  return (
    <div
      className="
      mt-10
        relative

        w-[150px]
        sm:w-[190px]
        md:w-[220px]
        lg:w-[250px]

        rotate-[-6deg]
      "
    >
      {/* FRAME */}
      <div
        className="
          bg-[#8A1C14]

          p-3
          rounded-sm

          shadow-[12px_12px_25px_rgba(0,0,0,.18)]
        "
      >
        <div className="space-y-3">
          {photos.map((item, index) => (
            <PhotoItem
              key={index}
              {...item}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* lubang */}

      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full bg-[#F6F3EF]" />

      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full bg-[#F6F3EF]" />
    </div>
  );
}

function PhotoItem({
  large,
  small,
  side,
  index,
}) {
  return (
    <div className="relative">

      {/* FOTO BESAR */}

      <div
        data-aos="zoom-in"
        data-aos-delay={index * 250}
        className="
          aspect-[3/4]
          overflow-hidden
          bg-white
        "
      >
        <img
          src={large}
          alt=""
          className="
            w-full
            h-full
            object-cover
          "
        />
      </div>

      {/* FOTO KECIL */}

      {side === "right" ? (
        <div
          data-aos="fade-right"
          className="
            absolute

            top-4

            -left-16
            sm:-left-20
            md:-left-24
            lg:-left-28

            flex
            items-center
            gap-2
          "
        >
          <img
            src={small}
            alt=""
            className="
              w-10
              h-12

              sm:w-12
              sm:h-16

              md:w-16
              md:h-20

              rounded-md

              border-2
              border-white

              object-cover

              rotate-[-10deg]

              shadow-lg
            "
          />

          <FaArrowLeft
            className="
              text-[#8A1C14]
              animate-pulse
            "
          />
        </div>
      ) : (
        <div
          data-aos="fade-left"
          className="
            absolute

            top-5

            -right-16
            sm:-right-20
            md:-right-24
            lg:-right-28

            flex
            items-center
            gap-2
          "
        >
          <FaArrowRight
            className="
              text-[#8A1C14]
              animate-pulse
            "
          />

          <img
            src={small}
            alt=""
            className="
              w-10
              h-12

              sm:w-12
              sm:h-16

              md:w-16
              md:h-20

              rounded-md

              border-2
              border-white

              object-cover

              rotate-[10deg]

              shadow-lg
            "
          />
        </div>
      )}
    </div>
  );
}