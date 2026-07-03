
import Pria from "../../assets/Img/Pria.png"
import Love from "../../assets/Img/Love.png"
import Wanita from "../../assets/Img/Wanita.png"
import Timer from "./Timer"




function Hero() {
  return (
    <>
       <section
      className="
     
      
      flex
      items-center
      justify-center

      px-5
      py-2

      sm:px-8
      md:px-10
      lg:px-14
      "
    >
      <div
        className="
        w-full

        max-w-[360px]
        sm:max-w-[400px]
        md:max-w-[460px]
        lg:max-w-[520px]

        flex
        flex-col
        items-center
        text-center
        "
      >
       
    <div className=" space-y-2 flex flex-col items-center ">


  

  <div
  className="
    flex
    flex-col
    items-center

    text-[#8A1C14]

    font-feltpen
    font-black

    uppercase

    leading-[0.9]

    tracking-[0.18em]

    select-none
    pt-10
    
  "
>
  <span
   data-aos="zoom-in-right"
    data-aos-delay="0"
    className="
    mb-5
      text-[2.75rem]
      xs:text-[3rem]
      sm:text-[3.75rem]
      md:text-[4.5rem]
      lg:text-[5.5rem]
      xl:text-[60px]
    
      [text-shadow:0.5px_0_0_#8A1C14,-0.5px_0_0_#8A1C14,0_0.5px_0_#8A1C14,0_-0.5px_0_#8A1C14]
    "
  >
    SAVE
  </span>

  <span
   data-aos="zoom-in-right"
    data-aos-delay="600"
    className="
       mb-5
      text-[2.75rem]
      xs:text-[3rem]
      sm:text-[3.75rem]
      md:text-[4.5rem]
      lg:text-[5.5rem]
     xl:text-[60px]
      [text-shadow:0.5px_0_0_#8A1C14,-0.5px_0_0_#8A1C14,0_0.5px_0_#8A1C14,0_-0.5px_0_#8A1C14]
    "
  >
    THE
  </span>

  <span
   data-aos="zoom-in-right"
    data-aos-delay="1200"
    className="
      text-[2.75rem]
      xs:text-[3rem]
      sm:text-[3.75rem]
      md:text-[4.5rem]
      lg:text-[5.5rem]
      xl:text-[60px]
      [text-shadow:0.5px_0_0_#8A1C14,-0.5px_0_0_#8A1C14,0_0.5px_0_#8A1C14,0_-0.5px_0_#8A1C14]
    "
  >
    DATE!
  </span>
</div>

  

</div>

        {/* <ImgIllustration /> */}

        <div
  className="
    relative

    w-full
 -mt-10
    sm:-mt-10
    md:-mt-12
    lg:-mt-16
    xl:-mt-40
    h-[200px]
    sm:min-h-[280px]
    xs:min-h-[280px]
    md:h-[360px]
    lg:h-[420px]
    xl:min-h-[120px]

   
  "
>
      {/* Wanita */}
     <img
  src={Wanita}
  alt="Wanita"
  data-aos="fade-right"
    data-aos-delay="1300"
  className="
    absolute

    xl:left-[-168px]
    xl:top-[116px]
     top-[108px]
     left-[23px]
      md:left-[-19px]
       md:top-[100px]
       lg:top-[90px]
      lg:left-[-45px]
      xs:top-[108px]
     xs:left-[-10px]
    bottom-0
     xe:top-[108px]
     xe:left-[8px]
    w-[150px]
    sm:w-[190px]
    md:w-[250px]
    lg:w-[320px]
    xl:w-[420px]

    object-contain
    
  "
/>
        <img
  src={Love}
  alt="Love"
  className="
    absolute

    left-1/2
    -translate-x-1/2

    top-[125px]
    sm:top-5
  
    lg:top-[150px]
    xl:top-[192px]
    md:top-[140px]

    w-10
    sm:w-14
    md:w-14
    lg:w-16
    xl:w-20
    xs:w-10
    xe:w-12
    object-contain

   

    animate-pulse
  "
/>
    
      {/* PRIA */}
     <img
     
  src={Pria}
  alt="Pria"
  className="
    absolute
      xl:top-[80px]
    xl:right-[-148px]
     md:top-[80px]
    md:right-[-15px]
     lg:top-[70px]
    lg:right-[-40px]
     top-[96px]
     xs:right-[-5px]
      xs:top-[96px]
     right-[29px]
       xe:right-[15px]
      xe:top-[96px]
       

    bottom-0

    w-[150px]
    sm:w-[190px]
    md:w-[250px]
    lg:w-[320px]
    xl:w-[420px]

    object-contain
    z-20
  "
/>
       {/* <IoHeart className="text-[#8A1C14] text-2xl" /> */}
  
{/* tengah */}
    
      
</div>
        <div className="mt-3 md:mt-1 ">
          <div className=" flex items-center justify-center gap-2 ">
            
      <h2
    data-aos="fade-right"
    data-aos-duration="1800"
    className="
      text-[#8A1C14]
      text-[20px]
      sm:text-2xl
      md:text-3xl
      font-feltpen
      font-semibold
    "
  >
    Dinda
  </h2>

  <span
    data-aos="zoom-in"
    data-aos-delay="2500"
  
    className="
      text-[#8A1C14]
      text-[20px]
      sm:text-2xl
      md:text-3xl
      font-feltpen
    "
  >
    &
  </span>

  <h2
    data-aos="fade-left"
    data-aos-delay="2000"

    className="
      text-[#8A1C14]
      text-[20px]
      sm:text-2xl
      md:text-3xl
      font-feltpen
      font-semibold
    "
  >
    Aditya
  </h2>
  </div>
    <span
    data-aos="fade-left"
    data-aos-delay="3000"
    className="
    py-3
     text-[#8A1C14]
      text-xl
      sm:text-sm
      md:text-sm
      lg:text-md
      xl:text-xl 
      font-feltpen
      font-semibold
    "
  >
    17.8.2026
  </span>

            <Timer/>

          
          
        </div>

       
      </div>
    </section>
    </>
  )
}

export default Hero
