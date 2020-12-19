import React, { useState } from "react";
import "./styles.css";

import song11 from "./images/song11.jpg";
import song12 from "./images/song12.jpg";
import song13 from "./images/song13.jpg";
import song21 from "./images/song21.jpg";
import song22 from "./images/song22.jpg";
import song23 from "./images/song23.jpg";
import song31 from "./images/song31.jpg";
import song32 from "./images/song32.jpg";
import song33 from "./images/song33.jpg";
import github from "./images/github.ico";
import twitter from "./images/twitter.ico";
import linkedin from "./images/linkedin.ico";

const genreList = {
  "Love & Romance": [
    {
      name: "Tera Ban Jaunga",
      year: "2019",
      img: song11,
      link: "https://www.youtube.com/watch?v=avVg3pLj_Po"
    },

    {
      name: "Enna Sona",
      year: "2017",
      img: song12,
      link: "https://www.youtube.com/watch?v=ofTxceS4wLI"
    },

    {
      name: "Bahut Pyar Karte Hain",
      year: "1991",
      img: song13,
      link:
        "https://www.youtube.com/watch?v=PHoxlGaSMCo&list=PLW1igHyD5HZ92d78440xJBLwcc60z9KGa&index=15&t=0s"
    }
  ],

  Bedtime: [
    {
      name: "Agar Tum Saath Ho",
      year: "2015",
      img: song21,
      link: "https://www.youtube.com/watch?v=sK7riqg2mr4"
    },

    {
      name: "Main Rahoon Ya Na Rahoon",
      year: "2017",
      img: song22,
      link: "https://www.youtube.com/watch?v=Dp6lbdoprZ0"
    },

    {
      name: "Mora Piya",
      year: "1991",
      img: song23,
      link: "https://www.youtube.com/watch?v=SPo7YEa78TE"
    }
  ],

  Myfav: [
    {
      name: "Shiv Kailasho Ke Vasi",
      year: "2019",
      img: song31,
      link: "https://www.youtube.com/watch?v=PlIoHp6v3LI"
    },

    {
      name: "Keh Len De",
      year: "2020",
      img: song32,
      link: "https://www.youtube.com/watch?v=J1aFF2JBUec"
    },

    {
      name: "Libaas",
      year: "2020",
      img: song33,
      link: "https://www.youtube.com/watch?v=V5En3Ks3OjE"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Love & Romance");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <nav className="navigation">
        <h1 className="nav-head">Neomusic</h1>
        <h2 className="hero-text">
          Welcome aboard!
          <br />
          Explore & Play music for
        </h2>
      </nav>

      <div className="genre-banner">
        {Object.keys(genreList).map((genre) => (
          <button
            className="genreSection"
            onClick={() => genreClickHandler(genre)}
          >
            <span> {genre} </span>
          </button>
        ))}
      </div>

      <div className="songList">
        <ul>
          {genreList[selectedGenre].map((song) => (
            <li key={song.name}>
              <a href={song.link} target="blank">
                <div className="songData">
                  <img src={song.img} alt="" />
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold"
                    }}
                  >
                    {" "}
                    {song.name}{" "}
                  </div>
                  <div style={{ marginTop: "0.5rem" }}> {song.year} </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <hr />
      <footer>
        <img src={linkedin} alt="" />
        <img src={github} alt="" />
        <img src={twitter} alt="" />
        <p> Built with codesandbox.io </p>
      </footer>
    </div>
  );
}
