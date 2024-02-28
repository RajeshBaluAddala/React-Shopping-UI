import React, {useState} from 'react'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import Header from '../components/Header'

import {Men, Women} from '../Data'
import WomenCollection from '../components/WomenCollection'

const MainPage = () => {

  const [menFashion, setMenFashion] = useState(Men)
  const [womenFashion, setWomenFashion] = useState(Women)

  console.log(Women)

  return (
    <div>
        <Header/>
        <Banner/>
        <Collections menFashion={menFashion}/>
        <WomenCollection womenFashion={womenFashion}/>
        <Footer/>
    </div>
  )
}

export default MainPage