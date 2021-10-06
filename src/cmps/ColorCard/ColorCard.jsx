import './ColorCard.scss';
import useSound from 'use-sound';

export const ColorCard = ({ color, onClick, flash }) => {
  const click = (play) => {
    onClick();
    play();
  };
  const Card = () => {
    const [play] = useSound(color.sound);
    return (
      <button
        className={`colorCard ${color.color} ${flash ? 'flash' : ''}`}
        onClick={() => click(play)}
      />
    );
  };

  return Card();
};
