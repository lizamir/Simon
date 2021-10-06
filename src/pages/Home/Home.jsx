import './Home.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import { ColorCard } from '../../cmps/ColorCard';
import timeout from '../../utils/utils';
import yellowSound from '../../assets/audio/yellow.mp3';
import greenSound from '../../assets/audio/green.mp3';
import redSound from '../../assets/audio/red.mp3';
import blueSound from '../../assets/audio/blue.mp3';

export const Home = () => {
  const [isOn, setIsOn] = useState(false);

  const colorList = [
    { color: 'green', sound: greenSound },
    { color: 'red', sound: redSound },
    { color: 'blue', sound: blueSound },
    { color: 'yellow', sound: yellowSound },
  ];
  const [flashColor, setFlashColor] = useState();

  const initPlay = {
    isDisplay: false,
    colors: [],
    score: 0,
    userPlay: false,
    userColors: [],
  };
  const [play, setPlay] = useState(initPlay);

  useEffect(() => {
    isOn ? setPlay({ ...initPlay, isDisplay: true }) : setPlay(initPlay);
  }, [isOn]);

  useEffect(() => {
    if (isOn && play.isDisplay) {
      let newColorItem = colorList[Math.floor(Math.random() * 4)];

      const copyColors = [...play.colors];

      copyColors.push(newColorItem.color);

      setPlay({ ...play, colors: copyColors });
    }
  }, [isOn, play.isDisplay]);

  useEffect(() => {
    if (isOn && play.isDisplay && play.colors.length) {
      displayColors();
    }
  }, [isOn, play.isDisplay, play.colors.length]);

  const displayColors = async () => {
    await timeout(500);

    for (let i = 0; i < play.colors.length; i++) {
      setFlashColor(play.colors[i]);
      await timeout(500);
    }
    setFlashColor();
    await timeout(500);

    const copyColors = [...play.colors];

    setPlay({
      ...play,
      isDisplay: false,
      userPlay: true,
      userColors: copyColors.reverse(),
    });
  };

  const cardClickHandle = async ({ color, sound }) => {
    if (!play.isDisplay && play.userPlay) {
      const copyUserColors = [...play.userColors];
      const lastColor = copyUserColors.pop();
      setFlashColor(color);
      if (color === lastColor) {
        if (copyUserColors.length) {
          setPlay({ ...play, userColors: copyUserColors });
        } else {
          await timeout(500);
          setPlay({
            ...play,
            isDisplay: true,
            userPlay: false,
            score: play.colors.length,
            userColors: [],
          });
        }
      } else {
        await timeout(500);
        setPlay({ ...initPlay, score: play.colors.length });
        await timeout(500);
      }
      await timeout(500);
      setFlashColor('');
    }
  };

  return (
    <div className="home-container">
      <div className="card-wrapper">
        {colorList &&
          colorList.map((color, idx) => (
            <ColorCard
              onClick={() => {
                cardClickHandle(color);
              }}
              key={idx}
              flash={flashColor === color.color}
              color={color}
            ></ColorCard>
          ))}
      </div>

      {isOn && !play.isDisplay && !play.userPlay && play.score && (
        <div className="lost">
          <div>Final Score: {play.score}</div>
          <button onClick={() => setIsOn(false)}>Close</button>
        </div>
      )}

      {!isOn && !play.score && (
        <button onClick={() => setIsOn(true)} className="start-button">
          Start
        </button>
      )}
      {isOn && (play.isDisplay || play.userPlay) && play.userPlay && (
        <div className="score">{play.score}</div>
      )}
    </div>
  );
};
