import React from "react";
import '../index.css'
const Card = ({ items }) => {
  const { urlToImage, title, content, publishedAt } = items;
  return (
    <>
      {/* <div className='container'>
          <div className='row'>
              <div className='col-md-6'>
              
              </div>
          </div>
      </div> */}
      <div className="box">
        <img src={urlToImage} alt="card" className="card-imm" />
        <div className="card-body">
          <h1>{title}</h1>
          <h5 className="card-title">{publishedAt}</h5>
          <p className="card-text">{content}</p>
        </div>
      </div>
    
    </>
  );
};

export default Card;
