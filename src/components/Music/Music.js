import { useEffect, useState } from "react";
import Card from "./components/Card.js";
// import CreatePlaylist from "./components/CreatePlaylist";
import { initializePlaylist } from "./initialize.js";
import { Route, Routes } from "react-router-dom";
import LikedMusic from "./components/LikedMusic.js";
import Navbar from "./components/Navbar.js";
import "./styles.css";
import Image from "./components/images/music.jpg"
// import Footer from "../Game/Components/Footer/Footer.js";
import Footer from "./Footer.js";

function App() {
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [tracks, setTracks] = useState([]);
  const [token, setToken] = useState(null);
  const [searchClicked, setSearchClicked] = useState(false);

  const fetchMusicData = async () => {
    setIsLoading(true);
    setSearchClicked(true);
    try {
      const response = await fetch
        (
          `https://api.spotify.com/v1/search?q=${keyword}&type=track`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

      if (!response.ok) {
        throw new Error("Failed to fetch music data");
      }

      const jsonData = await response.json();
      setTracks(jsonData.tracks.items);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }

  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchMusicData();
    }
  };

  useEffect(() => {
    initializePlaylist();

    // current client credentials will be deleted in few days
    const fetchToken = async () => {
      try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: "grant_type=client_credentials&client_id=d4078ee71f2f403592275fea81bfddfb&client_secret=d62372fdee914cc4b5c464a5ec7ba7ef",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch token");
        }

        const jsonData = await response.json();
        setToken(jsonData.access_token);
      } catch (error) {
        setMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchToken();
  }, []);

  return (
    <>
      <Navbar
        keyword={keyword}
        setKeyword={setKeyword}
        handleKeyPress={handleKeyPress}
        fetchMusicData={fetchMusicData}
      />

      <Routes>
        <Route path="/likedmusic" element={<LikedMusic />} />
        <Route path="/" element={<div></div>} />
      </Routes>
      <div className={` ${isLoading ? "" : "d-none"}`}>

        <div className="flex flex-wrap">
          {tracks.map((element) => {
            return <Card key={element.id} element={element} />;
          })}
        </div>
        <div className={`${searchClicked || isLoading ? "d-none" : ""}`}>
          <img className="music-home-img" src={Image}/>
        </div>
      </div>

    </>
  );
}

export default App;
