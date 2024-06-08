import React, { useEffect, useState } from "react";

function Card({ element }) {
  const [likedMusic, setlikedMusic] = useState([]);

  const handleLike = () => {
    let likedMusic = localStorage.getItem("likedMusic");
    likedMusic = JSON.parse(likedMusic);
    let updatedLikedMusic = [];
    if (likedMusic.some((item) => item.id === element.id)) {
      updatedLikedMusic = likedMusic.filter((item) => item.id !== element.id);
      setlikedMusic(updatedLikedMusic);
      localStorage.setItem("likedMusic", JSON.stringify(updatedLikedMusic));
    } else {
      updatedLikedMusic = likedMusic;
      updatedLikedMusic.push(element);
      setlikedMusic(updatedLikedMusic);
      localStorage.setItem("likedMusic", JSON.stringify(updatedLikedMusic));
    }
  };

  useEffect(() => {
    const localLikedMusic = JSON.parse(localStorage.getItem("likedMusic"));
    setlikedMusic(localLikedMusic);
  }, []);

  return (
    // <div key={element.id} className="col-lg-3 col-md-6 py-2">
    //   <div className="card bg-black text-white">
    //     <div className="ratio ratio-1x1 bg-secondary bg-opacity-25">
    //       <img
    //         src={element.album.images[0].url}
    //         className="card-img-top"
    //         alt="..."
    //       />
    //     </div>

    //     <div className="card-body">
    //       <h5 className="card-title d-flex justify-content-between">
    //         <strong>{element.name}</strong>
    //         <div className="add-options d-flex align-items-start">
    // {likedMusic.some((item) => item.id === element.id) ? (
    //   <button className="btn btn-outline-secondary">
    //     <i
    //       onClick={handleLike}
    //       className="bi bi-heart-fill text-danger"
    //     ></i>
    //   </button>
    // ) : (
    //   <button className="btn btn-outline-secondary">
    //     <i onClick={handleLike} className="bi bi-heart"></i>
    //   </button>
    // )}
    //         </div>
    //       </h5>
    //       <p className="card-text">Artist: {element.album.artists[0].name}</p>
    //       <p className="card-text">
    //         Release date: {element.album.release_date}
    //       </p><br></br>
    //       <audio src={element.preview_url} controls className="w-100"></audio>
    //     </div>
    //   </div>
    // </div>



    <div class="w-1/5 p-4 bg-white m-8 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={element.id}>
      <a href="#">
        <img class="rounded-t-lg" src={element.album.images[0].url} alt="" />
      </a>
      <div> {likedMusic.some((item) => item.id === element.id) ? (
        <button type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500" onClick={handleLike}>
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
            <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
          </svg>
        </button>

      ) : (
        <button type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500" onClick={handleLike}>
          <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
            <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
          </svg>
        </button>
      )}</div>
      <div class="p-5">
        <a href="">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{element.name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Artist: {element.album.artists[0].name}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Release date: {element.album.release_date}
        </a>
      </div>
      <audio src={element.preview_url} controls className="w-100"></audio>
    </div>

  );
}

export default Card;