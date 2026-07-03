
import { TypeAnimation } from "react-type-animation";

export default function Firman() {
  return (
    <section className="py-5 px-5   ">
      <div
        className="
          mx-auto
          max-w-xs
          xs:max-w-sm
          sm:max-w-xl
          md:max-w-2xl
          lg:max-w-3xl
          text-center
        "
      >
        <TypeAnimation
          sequence={[
              "Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.",
          ]}
          wrapper="p"
          speed={15}
          cursor={true}
          repeat={40}
          className="
          font-black
            whitespace-pre-line
            font-feltpen
            text-[#1F1F1F]
          
          
             mx-auto
        mt-10
        max-w-3xl

        px-2
        sm:px-6

        text-center


       
        sm:text-base
        md:text-lg

        leading-8
        md:leading-9

        tracking-wide
            
           text-[15px]
xs:text-[16px]
sm:text-[18px]
md:text-[20px]
lg:text-[22px]
xl:text-[24px]
          "
        />

        <p
        data-aos="fade-down-right"
 data-aos-delay="600"

          className="
            mt-8
            font-feltpen
            text-[#1F1F1F]

            text-lg
            sm:text-xl
            md:text-2xl
            font-black
            italic
          "
        >
          QS Ar-Rum: 21
        </p>
      </div>
    </section>
  );
}