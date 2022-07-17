import React from 'react';

export default function Flexzapp() {
  const handleAvailable = () => {
    alert('This will be available soon!');
  };
  return (
    <div className="app">
      <div className="flexz-app">
        <div className="flexz">
          <img
            src="https://media.istockphoto.com/photos/vintage-8mm-film-reels-of-home-movies-history-and-memories-picture-id947659542?k=20&m=947659542&s=612x612&w=0&h=Ln-TAgqf2IZmD20jRKiisx5mj0v-BZfGSBXjAMvroCg="
            alt=""
          />
          <div className="flexz-words">
            “The whole of life is just like watching a film. Only it's as though
            you always get in ten minutes after the big picture has started, and
            no-one will tell you the plot, so you have to work it out all
            yourself from the clues.” - unknown
          </div>
        </div>
        <a
          href="https://flexz-movies.stackblitz.io"
          className="linking"
          target="blank"
        >
          Flexz-movies
        </a>
      </div>
      <div className="flexz-app">
        <div className="flexz">
          <img
            src="https://media.istockphoto.com/photos/large-group-of-people-at-a-concert-party-picture-id1330424071?k=20&m=1330424071&s=612x612&w=0&h=uB48Mt6vU-zS43knZrXJqgrRJrjPPs6-t0GJ2Zxrv88="
            alt=""
          />
          <div className="flexz-words">
            “Music, once admitted to the soul, becomes a sort of spirit and
            never dies.” – Edward Bulwer-Lytton
          </div>
        </div>
        <a href="" onClick={handleAvailable} className="linking">
          Flexz-music
        </a>
      </div>
    </div>
  );
}
