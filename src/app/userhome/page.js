

import React from 'react'
import Herosection from '../components/Herosection'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function userhomepage() {


  return (
    <>

<Header/>
<Herosection url={"/unity.png"} title = { "SkillSail"} content = {"Embark on a Learning Odyssey : Navigate Your Personal Journey to Success with SkillSail's Compassionate Guidance and Expert Courses"}/>
<Footer/>
    </>

  )
}

