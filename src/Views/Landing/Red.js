import React, { useState, useEffect } from 'react';
import Button from '../../Components/Button';
import Menu from '../../Components/Menu';
import { Link } from 'react-router-dom';
const Red = (props) => {
  const [play, setPlay] = useState(false);
  const [song, setSong] = useState({
    name: window.location.origin + '/sounds/sound.mp3',
    audioContext: null,
    audioElement: null,
  });
  // Acts like a componentDidMount. Sets up the audio api.
  useEffect(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    const audioElement = document.querySelector('audio');
    const track = audioContext.createMediaElementSource(audioElement);
    track.connect(audioContext.destination);
    setSong({
      ...song,
      audioContext: audioContext,
      audioElement: audioElement,
    });
  }, []);
  const additionalMenu = (text, btnSize) => {
    return (
      <Link to='/pricing'>
        <Button text={text} btnClass={`gradient-blue red ${btnSize}`}></Button>
      </Link>
    );
  };
  // function to play & stop the music
  const playMusic = () => {
    song.audioContext.resume();
    if (!play) {
      song.audioElement.play();
    } else {
      song.audioElement.pause();
    }
    setPlay(!play);
  };
  return (
    <div className='red-background'>
      <Menu AdittionalMenu={() => additionalMenu('TRY IT NOW', 'btn-small')} />
      <div className='padding-container'>
        <div className='red-container row'>
          <div className='red-container__text col-2'>
            <h1 className='white big-title'>SUPERIOR SOUND</h1>
            <p className='subtitle'>
              Experience live versions of your favourite songs.
            </p>
            {additionalMenu('SEE DEMO', 'btn-medium')}
          </div>
          <div className='red-container__images center col-2'>
            <img
              src={`${window.location.origin}/images/medium_left.png`}
              className='img-music'
              alt='no speaker'
              style={{ position: 'relative', bottom: '12rem' }}
              onClick={playMusic}
            />
            <img
              src={`${window.location.origin}/images/medium_right.png`}
              className='img-music two'
              alt='no speaker'
              style={{ position: 'relative', top: '4rem' }}
              onClick={playMusic}
            />
          </div>
          <div className='red-container__images'></div>
        </div>
      </div>
      <audio src={song.name}></audio>
    </div>
  );
};

export default Red;
