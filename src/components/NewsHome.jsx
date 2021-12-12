import React from "react";
import { NavLink } from "react-router-dom";
import img from '../assets/img2.png'
import '../index.css'
import SecondHome from "./SecondHome";
const NewsHome = () => {
  return (
    <><section >
      <div className="container-fluid  news-home ">
        <div className="home-text text-center">
          <h1>THE NEWS WAVE</h1>
          <h5 className="text-capitalize">your one stop news destination</h5>
          <NavLink to="/SecondHome">
            <button type="button" className='home-button m-1' onClick={SecondHome}>start regarding</button>
          </NavLink>
        </div>
      </div>
      <div className='paper container'>

         <div className='paper-div'>
         <img src={img} alt='paper' className='paper-img'/>
         </div>
          </div>
      </section>
    </>
  );
};

export default NewsHome;
