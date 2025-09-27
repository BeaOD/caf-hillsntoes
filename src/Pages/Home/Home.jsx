import React from "react";
import Card from "../../Components/Card";
import FeaturedClothing from "../../Components/FeaturedClothing";
import FeaturedShoes from "../../Components/FeaturedShoes";

const Home = () => {
  return (
    <>
      {/* <div>
        <h1>Welcome to CAF Hills N Toes</h1>
        <p>Enjoy a real shopping experience!</p>
      </div> */}

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner"  style={{height: "80vh",position:"relative"}}>
          <div className="carousel-item active">
            <img
              src="/assets/cassidy.jpg"
              className="d-block w-100"
              alt="heels" 
              style={{height:"100%", objectFit:"cover",marginTop:"-100px"}}
            />
          </div> 
          <div className="carousel-item">
            <img
              src="/assets/cassidy-mills-0XbYF0o3uSY-unsplash.jpg "
              className="d-block w-100"
              style={{height:"100%",objectFit:"cover",marginTop:"-100px"}}
              alt="shoes"
              
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/pesce-huang-pEzLon__DfM-unsplash.jpg"
              className="d-block w-100 "
              style={{height:"100%",objectFit:"cover",marginTop:"-150px"}}
              alt="high heels"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* The heading at this part can be changed based on what seller wants  */}
        <div>
          {<FeaturedClothing/>}
        </div>
   

{/* featured shoes */}
<div>
    { <FeaturedShoes /> }
</div>
    </>
  );
};

export default Home;
