import { Link } from "react-router-dom";
import "./card.css";
import React from 'react'

export default function card(props) {
  return (
    <div>
      
    <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-black ">
        <img class="game-home-page-img rounded-t-lg md:rounded-none md:rounded-s-lg" src={props.url} alt=""/>
        <div class="game-card flex flex-col justify-between leading-normal w-[700px]">
            <h5 class="game-card-header mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
            <p class=" game-card-desc mb-3 font-normal text-gray-700 dark:text-gray-400">{props.desc}</p>
            
            <Link to={props.link}> <button class="play-game-btn mt-5">Play Now</button></Link>
        </div>
    </div>

    </div>
  )
}

