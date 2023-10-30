import { useState, useEffect } from 'react';
import PictureModal from './Modal';

const clientId = '0d3e14b308c74ba49e86af52e139567c';
const clientSecret = 'fd73a2842cc641859aad1c3c160c2040';


const SpotifyPlayer = () => {
  const [playSong, setPlaySong] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

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
    const selectedItem = galleryItems.find((item) => item.alt === alt);
    setSelectedItem(selectedItem);
    clickedEvent(alt);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false)
  }

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


  const galleryItems = [
    {
      id: 'fig1',
      src: 'https://www.thehealthy.com/wp-content/uploads/2018/01/GettyImages-1027702326-e1584110138119.jpg',
      alt: 'Good morning PJ Morton',
    },
    {
      id: 'fig2',
      src: 'https://ratedrnb.com/cdn/2019/05/india-arie-steady-love-video.jpg',
      alt: 'Steady Love India Arie',
    },
    {
      id: 'fig3',
      src: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/13/07/perseidmeteor1308a.jpg?width=968',
      alt: "Straight up and Down Bruno Mars",
    },
    {
      id: 'fig4',
      src: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-209019-rexusa_781721f.jpg?crop=900:600&width=440',
      alt: "Why i love Major",
    },
    {
      id: 'fig5',
      src: 'https://www.pixelstalk.net/wp-content/uploads/2016/08/Sunset-Beaches-Backgrounds.jpg',
      alt: 'So Into You Tamia',
    },
    {
      id: 'fig6',
      src: 'https://th.bing.com/th/id/OIP.a12QM6vHX4O6dEkdzIQ_ywHaFj?w=264&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      alt: 'Run Through Fire Pink Sweats',
    },
  ];


  return (
    <div className="container flex flex-col items-center justify-center p-20 pt-0">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
        {galleryItems.map((item) => (
          <figure
            key={item.id}
            onClick={(e) => getSong(item.alt, e)}
            className="relative group cursor-pointer bg-gradient-to-r from-gold to-bleach_almond shadow-xl hover:origin-bottom hover:-rotate-2"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="gallery__img border border-gray-300 p-2 w-full h-44 sm:h-56 object-cover"
            />
            <div className="hidden group-hover:block absolute top-0 left-0 right-0 bottom-0 border-4 border-yellow-500 opacity-0 transition duration-300"></div>
          </figure>
        ))}
      </div>
      <div className="buttoncontain">
        <button onClick={stopSnippet}>Stop Song</button>
      </div>
      <PictureModal
        isOpen={openModal}
        closeModal={closeModal}
        imageUrl={selectedItem ? selectedItem.src : ''}
        imageAlt={selectedItem ? selectedItem.alt : ''}
      />
    </div>

  );
};

export default SpotifyPlayer;
