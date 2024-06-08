import "./Homepage.css";
import Navbar from "../../../Navbar/navbar";
import Carousel from "../Carousel/carousel";
import React from 'react';
import Card from '../Cards/card';
import Footer from "../Footer/Footer";

const descScramble = "Unscramble , ignite your brain and conquer the world chaos!";
const descSnake = "Embark on a Serpantine journey, chasing apples and glory!";
const descRPS = "Enter the elemental arena: Enjoy a witty battle showdown!";
const descTTT = "Enter the strategic battle of X's and O's, unleashing tactical brilliance!";
const descHangman = "Guess right, escape consequences in thrilling wordplay adventure!"
const descCandy = "Play Sugar-coated realm, mastering match-3 Triumphs!"

const link1 = "/landing/games/candycrush";
const link2 = "/landing/games/ttt";
const link3 = "/landing/games/snake";
const link4 = "/landing/games/scramble";
const link5 = "/landing/games/rps";
const link6 = "/landing/games/hangman";

export default function Homepage() {
  return (
    <div className="main-body">
      <Navbar></Navbar>
      <Carousel></Carousel>
      <div className="card-section flex">
        <div className="card-inner">
          <Card className="card" url={"/Candy-Crush.jpg"} name={"Candy Crush"} desc={descCandy} link={link1}></Card>
        </div>
        <div className="card-inner">
          <Card className="card" url={"/TTT.jpg"} name={"Tic-Tac-Toe"} desc={descTTT} link={link2}></Card>
        </div>
      </div>
      <div className="card-section flex">
        <div className="card-inner">
          <Card className="card" url={"/Snake.jpeg"} name={"Little Snake"} desc={descSnake} link={link3}></Card>
        </div>
        <div className="card-inner">
          <Card className="card" url={"/Scramble.jpeg"} name={"Word Scramble"} desc={descScramble} link={link4}></Card>
        </div>
      </div>
      <div className="card-section flex">
        <div className="card-inner">
          <Card className="card" url={"/RPS.jpg"} name={"Rock-Paper-Scissors"} desc={descRPS} link={link5}></Card>
        </div>
        <div className="card-inner">
          <Card className="card" url={"/Hangman.jpg"} name={"Hangman"} desc={descHangman} link={link6}></Card>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

