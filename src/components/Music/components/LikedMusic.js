import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function LikedMusic({ music }) {
  const [likedMusic, setlikedMusic] = useState([]);
  const navigate = useNavigate();

  const deleteAllLikedMusic = () => {
    localStorage.setItem("likedMusic", "[]");
    navigate("/landing/music");
  };

  useEffect(() => {
    const localLikedMusic = JSON.parse(localStorage.getItem("likedMusic"));
    console.log(localLikedMusic);
    setlikedMusic(localLikedMusic);
  }, []);

  return (
    <div>
      <Navbar/>
      {likedMusic.length === 0 ? (
        <div className="">
          <div className="row">
            <div className="col ">
            <h2 class="text-4xl text-center font-extrabold dark:text-white">You don't have any liked Music yet</h2>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 class="mb-4 text-2xl font-extrabold leading-none text-center tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white"><span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Your Liked Music</span></h1>
          <div className="flex flex-col justify-center mt-8">
            {likedMusic.length === 0 ? (
              <div className="text-center">
                <i className="bi bi-emoji-frown fs-1"></i>{" "}
              </div>
            ) : (
              <button
                onClick={deleteAllLikedMusic}
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Delete Liked Music
              </button>
            )}
          </div>
        </div>
      )}

      <div className="">
        <div className="flex flex-wrap">
          {likedMusic.map((element) => {
            return <Card key={element.id} element={element} />;
          })}
        </div>

      </div>
    </div>
  );
}

export default LikedMusic;