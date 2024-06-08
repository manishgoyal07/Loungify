import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './style.css';
import Navbar from '../Navbar/navbar';

function App () {
  useEffect(() => {
    document.getElementById('next').onclick = function () {
      let lists = document.querySelectorAll('.item');
      document.getElementById('slide').appendChild(lists[0]);
    };

    document.getElementById('prev').onclick = function () {
      let lists = document.querySelectorAll('.item');
      document.getElementById('slide').prepend(lists[lists.length - 1]);
    };
  }, []);

 return (
  <div class="landing-container">
    {/* <div class="logo-section">
                <img src="/loungifylogo.png" alt="" class="w-[120px] mx-[100px] my-[50px] "/>
            </div> */}
            <Navbar/>
    <div id="slide">
    <div class="item" style={{ backgroundImage: "url('../images/Landingpage/gaming1.jpg')"}}>
            <div class="content">
                <div class="name">GAMES</div>
                <div class="des">"Dive into fun with our collection of games – where excitement awaits at every click."</div>
                <Link to="/landing/games"><button className="landing-btn">Dive In</button></Link>
            </div>
        </div>
        <div className="item" style={{ backgroundImage: "url('../images/Landingpage/news.jpg')"}}>
            <div class="content">
                <div class="name">NEWS</div>
                <div class="des">"Stay informed and engaged with our up-to-the-minute news coverage, delivering relevant and insightful stories that shape the world around us."</div>
                <Link to="/landing/news"><button className="landing-btn">Dive In</button></Link>
            </div>
        </div>
        <div class="item" style={{ backgroundImage: "url('./images/Landingpage/music.jpg')"}}>
            <div class="content">
                <div class="name">MUSIC</div>
                <div class="des">"Embark on a sensory journey with our curated music collection, where captivating melodies and rhythms converge for a memorable auditory experience."</div>
                <Link to="/landing/music"><button className="landing-btn">Dive In</button></Link>
            </div>
        </div>
        <div class="item" style={{ backgroundImage: "url('./images/Landingpage/meditation.jpg')" }}>
            <div class="content">
                <div class="name">MEDITATION</div>
                <div class="des">"Find tranquility and inner peace with our meditation, offering a serene escape for moments of mindfulness and relaxation."</div>
                <Link to="/landing/meditation"><button className="landing-btn">Dive In</button></Link>
            </div>
        </div>
    </div>
    <div class="buttons nav-btn mx-8">
        <button id="prev"><i class="fa-solid fa-angle-left "></i></button>
        <button id="next"><i class="fa-solid fa-angle-right "></i></button>
    </div>
  
</div>
  );
}

export default App;
