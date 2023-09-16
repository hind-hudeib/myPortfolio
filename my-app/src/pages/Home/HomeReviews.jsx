import React from "react";

const HomeReviews = () => {
  return (
    <div className="container flex flex-col mx-auto">
      <div className="flex flex-row justify-center items-center text-center mx-auto">
        <h3 className="text-black uppercase">CLIENTS and review</h3>
      </div>
      <div >
        <div class="card ">
          <div class="profileImage">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
              alt=""
            />
          </div>
          <div class="textContainer">
            <p class="name">Pepper Potts</p>
            <p class="profile">Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeReviews;
