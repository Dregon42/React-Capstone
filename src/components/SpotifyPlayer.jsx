import { useState, useEffect } from 'react';

const clientId = '0d3e14b308c74ba49e86af52e139567c';
const clientSecret = 'fd73a2842cc641859aad1c3c160c2040';

const galleryItems = [
    {
      id: 'fig1',
      src: 'C:\Users\lbran\Documents\self-paced-course\React\Capstone\public\stephen-frank-1nls6y6XZJ4-unsplash.jpg',
      alt: 'Goodmorning PJ Morton',
    },
    {
      id: 'fig2',
      src: 'static/BAd_Boys.jpg',
      alt: 'Steady Love India Arie',
    },
    {
      id: 'fig3',
      src: 'static/Bill Withers.jpg',
      alt: "Grandma's Hands Bill Withers",
    },
    {
      id: 'fig4',
      src: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-209019-rexusa_781721f.jpg?crop=900:600&width=440',
      alt: "I'm Your Baby Tonight Whitney Houston",
    },
    {
      id: 'fig5',
      src: '#',
      alt: 'So Into You Tamia',
    },
    {
      id: 'fig6',
      src: 'static/butterflies.jpg',
      alt: 'Butterflies Michael Jackson',
    },
  ];

const SpotifyPlayer = () => {
  const [playSong, setPlaySong] = useState();

  const _getToken = async () => {
    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
      },
      body: 'grant_type=client_credentials',
    });

    const data = await result.json();
    return data.access_token;
  };

  const clickedEvent = async (trackName) => {
    const token = await _getToken();

    const headers = new Headers([
      ['Content-Type', 'application/json'],
      ['Accept', 'application/json'],
      ['Authorization', `Bearer ${token}`],
    ]);

    const request = new Request(
      `https://api.spotify.com/v1/search?q=${trackName}&type=track&limit=5`,
      {
        method: 'GET',
        headers: headers,
      }
    );

    const result = await fetch(request);
    const response = await result.json();
    console.log(response)

    const song = response.tracks.items[0].preview_url;

    if (playSong) {
      stopSnippet();
    }
    songSnippet(song);
  };

  const getSong = (alt, event) => {
    event.stopPropagation();
    clickedEvent(alt);
  };

  const songSnippet = (url) => {
    const song = new Audio(url);
    setPlaySong(song);
    song.play();
  };

  const stopSnippet = () => {
    if (playSong) {
      playSong.pause();
      setPlaySong();
    }
  };

  useEffect(() => {
    return () => {
      stopSnippet();
    };
  }, []);

  

  return (
    <div className="container flex flex-col items-center justify-center p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {galleryItems.map((item) => (
          <figure
            key={item.id}
            // className={`gallery__item gallery__item--${item.id.substring(3)}`}
            // id={item.id}
            onClick={(e) => getSong(item.alt, e)}
          >
            <img src={item.src} alt={item.alt} className="gallery__img" />
          </figure>
        ))}
      </div>
      <div className="buttoncontain">
        <button onClick={stopSnippet}>Stop Song</button>
      </div>
    </div>
  );
};

export default SpotifyPlayer;
