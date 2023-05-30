import * as React from "react"
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopHeader from "../components/TopHeader";
import SearchHeader from "../components/SearchHeader";
import HeroSlider from "../components/HeroSlider";
import Categoris from "../components/Categoris";
import NewArrival from "../components/NewArrival";
import RegularProduct from "../components/RegularProduct";
import Banner from "../components/Banner";
import SpecialOffer from "../components/SpecialOffer";
import Footer from "../components/Footer";

const IndexPage = () => {
  
  return (
    <>

      <TopHeader></TopHeader>
      <SearchHeader></SearchHeader>
      <HeroSlider></HeroSlider>
      <Categoris></Categoris>
      <NewArrival></NewArrival>
      <RegularProduct></RegularProduct>
      <Banner></Banner>
      <SpecialOffer></SpecialOffer>
      <Footer></Footer>
     
    </>
  )

}

export default IndexPage

export const Head = () => <title>Gatsby</title>
