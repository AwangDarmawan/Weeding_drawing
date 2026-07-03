import React from 'react'
import Hero from '../Components/Hero/Hero'
import Firman from '../Components/Kalimat/Firman'
import MusicPlayer from '../Components/Musik/MusicPlayer'
import SaveDate from '../Components/Save Date/SaveDate'
import AkadSection from '../Components/Akad/AkadSection'
import WeddingGift from '../Components/WeddingGift/WeddingGift'
import LoveStory from '../Components/Love Story/LoveStory'
import BigDay from '../Components/BigDay/BigDay'
import BrideGroom from '../Components/Pasangan/BridgeGroom'
import RsvpForm from '../Components/RSVP/RsvpForm'
import RsvpCard from '../Components/RSVP/RsvpCard'
import RsvpSection from '../Components/RSVP/RsvpSection'
import Footer from '../Components/Footer'

function HomePage() {
  return (
    <>
  
      <Hero/>
      <Firman/>
      
      <MusicPlayer/>
      <BrideGroom/>
      <SaveDate/>
      <BigDay/>
     <AkadSection/>
     <WeddingGift/>
     <LoveStory/>
     <RsvpSection/>
     <Footer/>
     
    </>
  )
}

export default HomePage
